"use client";
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
      name: "Journal de bord.jpg",
      type: "image",
      path: "/fileContent/JDB.png",
    },
    { name: "Carte.jpg", type: "image", path: "/fileContent/mapp.png" },
    {
      name: "Video concert.mp4",
      type: "video",
      path: "https://www.youtube-nocookie.com/embed/FPsFRFn3dOE?si=4CicxM_str3Blwkh",
    },
    {
      name: "Bateau Pirate.jpg",
      type: "image",
      path: "/fileContent/pirateship.png",
    },
  ];

  return (
    <>{access && <FileBrowser fileList={fileList} title="Piraterie" />}</>
  );
}
