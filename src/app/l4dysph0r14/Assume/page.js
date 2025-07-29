"use client";
import FileBrowser from "@/components/fileBrowser/FileBrowser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [access, setAccess] = useState(false);

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

  useEffect(() => {
    const agentAccess = localStorage.getItem("L4dySph0r14");
    const folderAccess = localStorage.getItem("Assume");

    if (
      agentAccess !==
      "5279301020333169ca2767f2dadf225bda0a81d0594af4bcfb40b0af86d4ddaf"
    ) {
      router.replace("/login");
      return;
    }

    if (
      folderAccess !==
      "0dfb07bfba72b73f416bf7ebdec946562ecd7246f3585fdd9c010423748affa0"
    ) {
      router.replace("/l4dysph0r14");
    } else {
      setAccess(true);
    }
  }, []);

  return (
    <>{access && <FileBrowser fileList={fileList} title="Assume" isAsh />}</>
  );
}
