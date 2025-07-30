"use client";
import FileBrowser from "@/components/fileBrowser/FileBrowser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const access = true;

  const fileList = [
    {
      name: "Flash info.mp3",
      type: "audio",
      path: "/fileContent/flashinfo.mp3",
    },
    {
      name: "Communiqué final Butch.jpg",
      type: "image",
      path: "/fileContent/communique_final_butch.png",
    },
    {
      name: "OBLIVION - Dernier contact L4dysph0r14.mp4",
      type: "video",
      path: "https://www.youtube-nocookie.com/embed/en__8YiBA1w?si=gFPJ7hzLigNuryIr",
    },
  ];
  return (
    <>{access && <FileBrowser fileList={fileList} title="Assume" isAsh />}</>
  );
}
