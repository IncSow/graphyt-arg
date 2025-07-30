"use client";
import FolderBrowser from "@/components/folderBrowser/FolderBrowser";

export default function Home() {
  const folderList = [
    { name: "Manifique", isProtected: false },
    {
      name: "Piraterie",
      isProtected: true,
    },
    {
      name: "Sacre",
      isProtected: true,
    },
    {
      name: "Assume",
      isProtected: true,
    },
    {
      name: "Burnout",
      isProtected: true,
      releaseDate: "2025-08-22T00:00:00",
    },
  ];

  return (
    <FolderBrowser
      folderList={folderList}
      title="Nev.e"
      hashedPassword="4323f71098015c2dbaded5a561477e030188f0999377bfe05ac362d59e4b03a0"
      accessPath="N4V3T"
    />
  );
}
