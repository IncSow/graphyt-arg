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
      name: "Mugshot crew.jpg",
      type: "image",
      path: "/fileContent/crew.png",
    },
    {
      name: "Arma Design.jpg",
      type: "image",
      path: "/fileContent/armurerie.png",
    },
    {
      name: "Harder daddy.mp4",
      type: "video",
      path: "https://www.youtube.com/embed/MeLUJTx_-bk?si=90jwRG77PD4gONFi",
    },
    {
      name: "Tab guitare Sacre.jpg",
      type: "image",
      path: "/fileContent/tab_sacre.png",
    },
  ];

  return (
    <>{access && <FileBrowser fileList={fileList} title="Sacre" isAsh />}</>
  );
}
