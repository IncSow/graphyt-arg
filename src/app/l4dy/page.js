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

  const handleFolderClick = (path) => {
    router.push(`/l4dy/${path}`);
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
            <h1 className="folderCard">Ash</h1>
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
                <Folder onClick={() => handleFolderClick("Piraterie")}>
                  <p className="glowingTextHoverable">Piraterie</p>
                </Folder>
                <Folder onClick={() => handleFolderClick("Magma")}>
                  <p className="glowingTextHoverable">Magma</p>
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
