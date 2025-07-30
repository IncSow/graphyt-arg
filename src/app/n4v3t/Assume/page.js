"use client";
import FileBrowser from "@/components/fileBrowser/FileBrowser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
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
      name: "Journal Intime Neve.jpg",
      type: "image",
      path: "/fileContent/jine.png",
    },
  ];

  return <>{access && <FileBrowser fileList={fileList} title="Assume" />}</>;
}
