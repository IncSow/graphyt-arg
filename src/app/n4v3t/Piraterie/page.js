"use client";
import FileBrowser from "@/components/fileBrowser/FileBrowser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [access, setAccess] = useState(false);

  useEffect(() => {
    const agentAccess = localStorage.getItem("N4V3T");
    const folderAccess = localStorage.getItem("Piraterie");
    if (
      agentAccess !==
      "4323f71098015c2dbaded5a561477e030188f0999377bfe05ac362d59e4b03a0"
    ) {
      router.replace("/login");
      return;
    }

    if (
      folderAccess !==
      "109b6507b787aaa359c46dfc98ac1274c0196383f07406d50afa277f6d26b1e6"
    ) {
      router.replace("/n4v3t");
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

  return <>{access && <FileBrowser fileList={fileList} title="Piraterie" />}</>;
}
