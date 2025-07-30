"use client";
import Folder from "@/components/Folder";
import Box from "@/components/Box";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import { hashText } from "@/lib/HashText";

export default function FolderBrowser(props) {
  const { folderList, title, accessPath } = props;
  const router = useRouter();
  const [access, setAccess] = useState(true);
  const [password, setPassword] = useState("");
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [error, setError] = useState(null);

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

  function isNowBefore(dateString) {
    const now = new Date();
    const target = new Date(dateString);

    return now < target;
  }

  const handleFolderClick = (folder) => {
    const localStorageKey = localStorage.getItem(folder.name);
    if (!folder.isProtected || localStorageKey) {
      router.push(`/${accessPath.toLowerCase()}/${folder.name}`);
      return;
    }
    setSelectedFolder(folder);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const folderName = selectedFolder.name;
    try {
      const response = await fetch("/api/folder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ folderName, password, accessPath }),
      });
      const data = await response.json();
      if (data.success) {
        localStorage.setItem(folderName, data.token);
        document.cookie = `${folderName}=${data.token}`;
        handleFolderClick(selectedFolder);
        resetSelectedFolder();
      } else {
        setPassword("");
        setError("Incorrect access code, agent.");
      }
      console.log(data);
    } catch (error) {
      console.error("Error occurred:", error);
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
                    <p className="glowingTextHoverable">
                      {folder.name == "Burnout" ? "B̸̢̬̗̯̬͈̥̰̦ͤͭ͛̅̀́̑ͣ͘͜͟͟Ų̴͎̲̝͉ͤ͂ͭ̃ͯ̓R̝̰̤͙ͩͧ̂̂͟N̷̴̨̛̬̳̬͖̙̹̰͈̫̺̯̖͂̊͐̈͒̊ͫ͆̉̏̉́̏̒ͣ̋͜͜͞Ò̴̵̧͕̠͈̼̠̦͍͍͉̳̙͙͉̽̈̊ͫ̎̊ͯ̇̇͛̈́͂̉͐͆͒̚̚̚͜͠UT̤̯͋ͤ͞͠" : folder.name}{" "}
                    </p>
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
