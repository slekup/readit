"use client";

import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";

export default function Greet() {
  const [data, setData] = useState("");

  useEffect(() => {
    invoke<string>("home")
      .then((result) => setData(result))
      .catch(console.error);
  }, []);

  return <div>{data}</div>;
}
