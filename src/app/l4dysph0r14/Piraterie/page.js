"use client";
import FileBrowser from "@/components/fileBrowser/FileBrowser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const access = true;

  const fileList = [
    {
      name: "Journal de bord.jpg",
      type: "image",
      path: "/fileContent/JDB.png",
    },
    { name: "Carte.jpg", type: "image", path: "/fileContent/mapp.png" },
    {
      name: "Video concert.mp4",
      type: "video",
      path: "https://www.youtube-nocookie.com/embed/urSvBUeoUvA?si=y6HhNUM1GsYnXB83",
    },
    {
      name: "Bateau Pirate.jpg",
      type: "image",
      path: "/fileContent/pirateship.png",
    },
    {
      name: "Recap tournée.mp4",
      type: "video",
      path: "https://www.youtube-nocookie.com/embed/41MfhjnmAgg?si=H9gOlQJEXUQHmz9q",
    },
  ];

  return (
    <>{access && <FileBrowser fileList={fileList} title="Piraterie" isAsh />}</>
  );
}
