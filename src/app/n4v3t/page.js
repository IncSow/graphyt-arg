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

  const handleFolderClick = (path) => {
    router.push(`/n4v3t/${path}`);
  };

  return (
    <>
      {access && (
        <>
          <Box
            className="glowingTextHoverable bigText boxHoverable"
            style={{
              position: "absolute",
              top: "1vh",
              left: "1vh",
              cursor: "pointer",
              backgroundColor: "black",
            }}
            onClick={() => router.push("/login")}
          >
            Log out
          </Box>
          <div
            className="glowingText bigText"
            style={{ padding: "2rem", marginTop: "20vh" }}
          >
            <h1 className="folderCard">Nev.e</h1>
            <Box
              className="centered glowingText bigText"
              style={{
                width: "50vw",
                marginLeft: "25vw",
                padding: "4rem 2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "flex-end",
                  gap: "2rem",
                }}
              >
                <Folder onClick={() => handleFolderClick("Manifique")}>
                  <p className="glowingTextHoverable">Manifique</p>
                </Folder>
                <Folder onClick={() => handleFolderClick("Piraterie")}>
                  <p className="glowingTextHoverable">Piraterie</p>
                </Folder>
                <Folder onClick={() => handleFolderClick("Sacre")}>
                  <p className="glowingTextHoverable">Sacre</p>
                </Folder>
                <Folder onClick={() => handleFolderClick("Assume")}>
                  <p className="glowingTextHoverable">Assume</p>
                </Folder>
                {/* <Folder
                  onClick={() => handleFolderClick("Burnout")}
                  style={{ width: "calc(80% + 2rem)" }}
                >
                  <p className="glowingTextHoverable">Burnout</p>
                </Folder> */}
              </div>
            </Box>
          </div>
        </>
      )}
    </>
  );
}
