"use client";
import FileBrowser from "@/components/fileBrowser/FileBrowser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [access, setAccess] = useState(false);

  const fileList = [
    {
      name: "L4DYSPH0R14.exe",
      type: "video",
      path: "https://www.youtube.com/embed/d2ZQVVYtCjQ?si=dnruWNZfAkWpT_4m",
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

  return (
    <>{access && <FileBrowser fileList={fileList} title="Magma" isAsh />}</>
  );
}
