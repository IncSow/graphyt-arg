"use client";
import FileBrowser from "@/components/fileBrowser/FileBrowser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [access, setAccess] = useState(false);
  useEffect(() => {
    const agentAccess = localStorage.getItem("L4dySph0r14");
    const folderAccess = localStorage.getItem("Sacre");
    if (
      agentAccess !==
      "5279301020333169ca2767f2dadf225bda0a81d0594af4bcfb40b0af86d4ddaf"
    ) {
      router.replace("/login");
      return;
    }

    if (
      folderAccess !==
      "2efecaa24ff13ad7b6c6251b4503563333b23053243bfe71e3aeb94a1e78bab7"
    ) {
      router.replace("/l4dysph0r14");
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
