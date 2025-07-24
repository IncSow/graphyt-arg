"use client";
import Folder from "@/components/Folder";
import Box from "@/components/Box";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import { hashText } from "@/lib/HashText";

export default function FolderBrowser(props) {
  const { folderList, title, hashedPassword, accessPath } = props;
  const router = useRouter();
  const [access, setAccess] = useState(false);
  const [password, setPassword] = useState("");
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [error, setError] = useState(null);

  // Set SelectedFolder to null when pressing the escape key

  const resetSelectedFolder = () => {
    setSelectedFolder(null);
    setPassword("");
    setError(null);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        resetSelectedFolder();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const storage = localStorage.getItem(accessPath);
    if (storage !== hashedPassword) {
      router.replace("/login");
    } else {
      setAccess(true);
    }
  }, []);

  const handleFolderClick = (folder) => {
    const localStorageKey = localStorage.getItem(folder.name);
    if (!folder.isProtected || localStorageKey == folder?.hashedPassword) {
      router.push(`/${accessPath.toLowerCase()}/${folder.name}`);
      return;
    }
    setSelectedFolder(folder);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ((await hashText(password)) === selectedFolder.hashedPassword) {
      localStorage.setItem(selectedFolder.name, selectedFolder.hashedPassword);
      handleFolderClick(selectedFolder);
      resetSelectedFolder();
    } else {
      setPassword("");
      setError("Incorrect password. Please try again.");
    }
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
            <h1 className="folderCard">{title}</h1>
            <Box
              className="centered glowingText bigText"
              style={{
                width: "50vw",
                marginLeft: "25vw",
                padding: "4rem 2rem",
                position: "relative",
              }}
            >
              <Box
                id="passwordModal"
                style={{
                  display: selectedFolder ? "flex" : "none",
                  position: "absolute",
                  top: "35vh",
                  zIndex: 1000,
                  cursor: "pointer",
                  top: "10%",
                  backgroundColor: "black",
                }}
              >
                <div
                  className="glowingTextHoverable"
                  onClick={() => {
                    resetSelectedFolder();
                  }}
                  style={{ position: "absolute", top: "1vh", left: "1vw" }}
                >
                  X
                </div>
                {error && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "20vh",
                      gap: "1rem",
                      padding: "3vh",
                      cursor: "default",
                    }}
                  >
                    <p className="glowingText active">{error}</p>
                  </div>
                )}

                {!error && (
                  <form
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                      gap: "1rem",
                      padding: "3vh",
                    }}
                    onSubmit={handleSubmit}
                  >
                    <label className="glowingText">
                      Enter Password for {selectedFolder?.name}:
                    </label>
                    <input
                      className="glowingInput glowingText passwordInput"
                      type="text"
                      autoComplete="off"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                    <button
                      className="glowingTextHoverable glowingInput"
                      style={{ borderStyle: "dotted" }}
                      type="submit"
                    >
                      ACCESS
                    </button>
                  </form>
                )}
              </Box>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "flex-end",
                  gap: "2rem",
                }}
              >
                {folderList.map((folder) => (
                  <Folder
                    key={folder.name}
                    onClick={() => handleFolderClick(folder)}
                    style={
                      folder.name === "Burnout"
                        ? { width: "calc(80% + 2rem)" }
                        : {}
                    }
                  >
                    <p className="glowingTextHoverable">{folder.name} </p>
                  </Folder>
                ))}
              </div>
            </Box>
          </div>
        </>
      )}
    </>
  );
}
