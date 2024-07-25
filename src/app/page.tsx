"use client";

import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";

interface Post {
  id: string;
  title: string;
  author: string;
  excerpt: string;
  media: string | undefined;
  score: number;
  upvote_ratio: number;
  edited: boolean;
  nsfw: boolean;
  locked: boolean;
  comments: number;
  created_at: number;
}

interface Data {
  title: string;
  posts: Post[];
}

export default function Home() {
  const [data, setData] = useState<Data | undefined>();
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    invoke<Data>("home")
      .then((result) => setData(result))
      .catch((err) => {
        console.error(err);
        setError(err);
      });
  }, []);

  return data ? (
    <main className="">
      {data.posts.map((post, index) => (
        <div
          className="p-5 m-2 rounded-lg border border-orange-500"
          key={index}
        >
          <p>{post.title}</p>
        </div>
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
