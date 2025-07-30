"use client";
import FileBrowser from "@/components/fileBrowser/FileBrowser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const access = true;

  const fileList = [
    {
      name: "L4DYSPH0R14.exe",
      type: "video",
      path: "https://www.youtube-nocookie.com/embed/d2ZQVVYtCjQ?si=dnruWNZfAkWpT_4m",
    },
    {
      name: "Journal intime.jpg",
      type: "image",
      path: "/fileContent/jia.png",
    },
    {
      name: "Visuel Maxi Pouik.jpg",
      type: "image",
      path: "/fileContent/maxipouik.jpg",
    },
  ];

  return (
    <>{access && <FileBrowser fileList={fileList} title="Magma" isAsh />}</>
  );
}
