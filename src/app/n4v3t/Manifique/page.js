"use client";
import FileBrowser from "@/components/fileBrowser/FileBrowser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const access = true;
  const fileList = [
    {
      name: "Message vocal L4DYSPHOR14.mp3",
      type: "audio",
      path: "/fileContent/msgl4dy.mp3",
    },
    {
      name: "Compte rendu de mission.jpg",
      type: "image",
      path: "/fileContent/CR_MISSION_M.png",
    },
    {
      name: "Journal de bord.jpg",
      type: "image",
      path: "/fileContent/jdbneve.png",
    },
  ];

  return <>{access && <FileBrowser fileList={fileList} title="Manifique" />}</>;
}
