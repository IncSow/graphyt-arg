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
    const storage = localStorage.getItem("N4V3T");
    if (
      storage !==
      "4323f71098015c2dbaded5a561477e030188f0999377bfe05ac362d59e4b03a0"
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
      path: "/fileContent/maxipouik.jpg",
    },
  ];

  return <>{access && <FileBrowser fileList={fileList} title="Sacre" />}</>;
}
