use std::time::Instant;

use serde::{Deserialize, Serialize};
use tauri::State;

use crate::{app::App, AppError};

#[derive(Serialize, Deserialize, Copy, Clone)]
#[serde(untagged)]
enum Edited {
    Float(f32),
    Boolean(bool),
}

#[derive(Deserialize)]
struct ResMediaEmbed {
    provider_name: String,
    provider_url: String,
    title: Option<String>,
    embed_type: Option<String>,
    height: Option<i32>,
    width: Option<i32>,
    author_name: Option<String>,
    author_url: Option<String>,
    thumbnail_url: String,
    thumbnail_height: i32,
    thumbnail_width: i32,
}

#[derive(Deserialize)]
struct ResMedia {
    oembed: Option<ResMediaEmbed>,
}

#[derive(Deserialize)]
struct ResItemData {
    id: String,
    title: String,
    author: String,
    selftext: String,
    media: Option<ResMedia>,
    score: i32,
    upvote_ratio: f32,
    edited: Option<Edited>,
    created_utc: f32,
    over_18: bool,
    locked: bool,
    num_comments: i32,
    subreddit: String,
}

#[derive(Deserialize)]
struct ResItem {
    data: ResItemData,
}

#[derive(Deserialize)]
struct ResData {
    children: Vec<ResItem>,
}

#[derive(Deserialize)]
struct Res {
    data: ResData,
}

#[derive(Serialize)]
struct MediaEmbed {
    provider_name: String,
    provider_url: String,
    title: Option<String>,
    embed_type: Option<String>,
    height: Option<i32>,
    width: Option<i32>,
    author_name: Option<String>,
    author_url: Option<String>,
    thumbnail_url: String,
    thumbnail_height: i32,
    thumbnail_width: i32,
}

#[derive(Serialize)]
struct Media {
    embed: Option<MediaEmbed>,
}

#[derive(Serialize)]
struct Post {
    id: String,
    title: String,
    author: String,
    excerpt: String,
    media: Option<Media>,
    score: i32,
    upvote_ratio: f32,
    edited: Option<Edited>,
    nsfw: bool,
    locked: bool,
    comments: i32,
    created_at: f32,
    subreddit: String,
}

#[derive(Serialize)]
pub struct Data {
    title: String,
    posts: Vec<Post>,
}

#[tauri::command]
pub async fn home(limit: i32, app: State<'_, App>) -> Result<Data, AppError> {
    let req_start = Instant::now();

    let res = app
        .client
        .get("https://www.reddit.com/.json")
        // .query(&[("limit", limit.to_string())])
        .header(
            "User-Agent",
            "Mozilla/5.0 (Windows NT 10.0; rv:128.0) Gecko/20100101 Firefox/128.0",
        )
        .send()
        .await?;

    println!("Request took {:?}", req_start.elapsed());

    let json_start = Instant::now();

    let res = res.json::<Res>().await?;

    println!("Parsing JSON took {:?}", json_start.elapsed());

    Ok(Data {
        title: res.data.children[0].data.title.clone(),
        posts: res
            .data
            .children
            .iter()
            .map(|child| Post {
                id: child.data.id.clone(),
                title: child.data.title.clone(),
                author: child.data.author.clone(),
                excerpt: child.data.selftext.clone(),
                media: child.data.media.as_ref().map(|media| Media {
                    embed: media.oembed.as_ref().map(|oembed| MediaEmbed {
                        provider_name: oembed.provider_name.clone(),
                        provider_url: oembed.provider_url.clone(),
                        title: oembed.title.clone(),
                        embed_type: oembed.embed_type.clone(),
                        height: oembed.height,
                        width: oembed.width,
                        author_name: oembed.author_name.clone(),
                        author_url: oembed.author_url.clone(),
                        thumbnail_url: oembed.thumbnail_url.clone(),
                        thumbnail_height: oembed.thumbnail_height,
                        thumbnail_width: oembed.thumbnail_width,
                    }),
                }),
                score: child.data.score,
                upvote_ratio: child.data.upvote_ratio,
                edited: child.data.edited,
                nsfw: child.data.over_18,
                locked: child.data.locked,
                comments: child.data.num_comments,
                created_at: child.data.created_utc,
                subreddit: child.data.subreddit.clone(),
            })
            .collect(),
    })
}
