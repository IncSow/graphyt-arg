"use client";

import FileBrowser from "@/components/fileBrowser/FileBrowser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [access, setAccess] = useState(false);
  useEffect(() => {
    const agentAccess = localStorage.getItem("N4V3T");
    const folderAccess = localStorage.getItem("Sacre");
    if (
      agentAccess !==
      "4323f71098015c2dbaded5a561477e030188f0999377bfe05ac362d59e4b03a0"
    ) {
      router.replace("/login");
      return;
    }

    if (
      folderAccess !==
      "2efecaa24ff13ad7b6c6251b4503563333b23053243bfe71e3aeb94a1e78bab7"
    ) {
      router.replace("/n4v3t");
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
  ];

  return <>{access && <FileBrowser fileList={fileList} title="Sacre" />}</>;
}
