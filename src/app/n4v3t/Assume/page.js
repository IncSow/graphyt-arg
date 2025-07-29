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
      name: "Journal Intime Neve.jpg",
      type: "image",
      path: "/fileContent/jine.png",
    },
  ];

  useEffect(() => {
    const agentAccess = localStorage.getItem("N4V3T");
    const folderAccess = localStorage.getItem("Assume");
    if (
      agentAccess !==
      "4323f71098015c2dbaded5a561477e030188f0999377bfe05ac362d59e4b03a0"
    ) {
      router.replace("/login");
    }
    if (
      folderAccess !==
      "0dfb07bfba72b73f416bf7ebdec946562ecd7246f3585fdd9c010423748affa0"
    ) {
      router.replace("/n4v3t");
    } else {
      setAccess(true);
    }
  }, []);

  return <>{access && <FileBrowser fileList={fileList} title="Assume" />}</>;
}
