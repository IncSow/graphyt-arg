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
      path: "https://www.youtube.com/embed/urSvBUeoUvA?si=y6HhNUM1GsYnXB83",
    },
    {
      name: "Bateau Pirate.jpg",
      type: "image",
      path: "/fileContent/pirateship.png",
    },
    {
      name: "Recap tournée.mp4",
      type: "video",
      path: "https://www.youtube.com/embed/41MfhjnmAgg?si=H9gOlQJEXUQHmz9q",
    },
  ];

  return (
    <>{access && <FileBrowser fileList={fileList} title="Piraterie" isAsh />}</>
  );
}
