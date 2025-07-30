"use client";
import FileBrowser from "@/components/fileBrowser/FileBrowser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const access = true;
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
      path: "https://www.youtube-nocookie.com/embed/MeLUJTx_-bk?si=90jwRG77PD4gONFi",
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
