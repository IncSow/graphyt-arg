"use client";
import FolderBrowser from "@/components/folderBrowser/FolderBrowser";

export default function Home() {
  const folderList = [
    {
      name: "Piraterie",
      isProtected: true,
      hashedPassword:
        "109b6507b787aaa359c46dfc98ac1274c0196383f07406d50afa277f6d26b1e6",
    },
    { name: "Magma", isProtected: false },
    {
      name: "Sacre",
      isProtected: true,
      hashedPassword:
        "2efecaa24ff13ad7b6c6251b4503563333b23053243bfe71e3aeb94a1e78bab7",
    },
    {
      name: "Assume",
      isProtected: true,
      hashedPassword:
        "0dfb07bfba72b73f416bf7ebdec946562ecd7246f3585fdd9c010423748affa0",
    },
    {
      name: "Burnout",
      isProtected: true,
      hashedPassword:
        "2183e6a862db4935b2a2742d7a2f7d978194436a40b3c3635a845a84ee78a710",
      releaseDate: "2025-08-28T00:00:00",
    },
  ];

  return (
    <FolderBrowser
      folderList={folderList}
      title="Ash"
      hashedPassword="5279301020333169ca2767f2dadf225bda0a81d0594af4bcfb40b0af86d4ddaf"
      accessPath="L4dySph0r14"
    />
  );
}
