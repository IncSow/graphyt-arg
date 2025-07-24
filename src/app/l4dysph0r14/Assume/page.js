"use client";
import Image from "next/image";
import Folder from "@/components/Folder";
import Box from "@/components/Box";
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
      name: "Page log sasha.jpg",
      type: "image",
      path: "/fileContent/maxipouik.jpg",
    },
  ];

  useEffect(() => {
    const storage = localStorage.getItem("L4dySph0r14");
    if (
      storage !==
      "5279301020333169ca2767f2dadf225bda0a81d0594af4bcfb40b0af86d4ddaf"
    ) {
      router.replace("/login");
    } else {
      setAccess(true);
    }
  }, []);

  return (
    <>{access && <FileBrowser fileList={fileList} title="Assume" isAsh />}</>
  );
}
