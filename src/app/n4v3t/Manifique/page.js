"use client";
import FileBrowser from "@/components/fileBrowser/FileBrowser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [access, setAccess] = useState(false);

  const fileList = [
    {
      name: "Message vocal L4DYSPHOR14.mp3",
      type: "audio",
      path: "/fileContent/msgl4dy.mp3",
    },
    {
      name: "Compte rendu de mission.jpg",
      type: "image",
      path: "/fileContent/CR_MISSION_M.png",
    },
    {
      name: "Journal de bord.jpg",
      type: "image",
      path: "/fileContent/jdbneve.png",
    },
  ];

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

  return <>{access && <FileBrowser fileList={fileList} title="Manifique" />}</>;
}
