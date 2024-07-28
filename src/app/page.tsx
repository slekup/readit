"use client";

import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import Image from "next/image";

interface Media {
  embed: {
    provider_name: string;
    provider_url: string;
    title: string;
    height: number;
    width: number;
    author_name: string;
    author_url: string;
    thumbnail_url: string;
    thumbnail_height: number;
    thumbnail_width: number;
  };
}

interface Post {
  id: string;
  title: string;
  author: string;
  excerpt: string;
  media: Media | undefined;
  score: number;
  upvote_ratio: number;
  edited: boolean;
  nsfw: boolean;
  locked: boolean;
  comments: number;
  created_at: number;
  subreddit: string;
}

interface Data {
  title: string;
  posts: Post[];
}

export default function Home() {
  const [data, setData] = useState<Data | undefined>();
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    invoke<Data>("home", { limit: 100 })
      .then((result) => setData(result))
      .catch((err) => {
        console.error(err);
        setError(err);
      });
  }, []);

  return data ? (
    <main className="max-w-4xl mx-auto my-10">
      {data.posts.map((post, index) => (
        <a
          className="p-5 my-5 rounded-lg border border-orange-500 block hover:shadow-[0_0_15px_rgba(255,179,0,1)] transition"
          key={index}
          href={`/r/${post.subreddit}/${post.id}`}
        >
          <div className="flex">
            <a
              href={`/r/${post.subreddit}`}
              className="text-sm text-green-500 font-semibold"
            >
              r/{post.subreddit}
            </a>
            <p className="mx-1.5 text-gray-600">•</p>
            <a href={`/user/${post.author}`} className="text-sm text-gray-400">
              u/{post.author}
            </a>
          </div>
          <p className="font-bold text-xl mt-1 hover:underline">{post.title}</p>
          <p className="text-gray-300 mt-2">{post.excerpt}</p>
          {post.media && (
            <div className="">
              {post.media.embed && (
                <div>
                  <Image
                    src={post.media.embed.thumbnail_url}
                    height={post.media.embed.thumbnail_height}
                    width={post.media.embed.thumbnail_width}
                    alt="Post thumbnail"
                  />
                </div>
              )}
            </div>
          )}
        </a>
      ))}
    </main>
  ) : !error ? (
    <main>
      <p>Fetching data</p>
    </main>
  ) : (
    <main>
      <p>Failed to fetch data</p>
      <p>{error}</p>
    </main>
  );
}
