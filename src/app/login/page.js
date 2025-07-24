"use client";
import Image from "next/image";
import Folder from "@/components/Folder";
import Box from "@/components/Box";
import FileBrowser from "@/components/fileBrowser/FileBrowser";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [error, setError] = useState("");

  const credentialMap = {
    "5279301020333169ca2767f2dadf225bda0a81d0594af4bcfb40b0af86d4ddaf":
      "/l4dysph0r14",
    "4323f71098015c2dbaded5a561477e030188f0999377bfe05ac362d59e4b03a0":
      "/n4v3t",
  };

  async function hashCredentials(username, password) {
    const text = `${username}:${password}`;
    const buffer = new TextEncoder().encode(text);
    const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
    return Array.from(new Uint8Array(hashBuffer))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const key = await hashCredentials(username, password);
    const target = credentialMap[key];
    if (target) {
      localStorage.setItem(username, key);
      router.push(target);
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <>
      <div style={{ paddingTop: "5vh" }} className="testLogoWrapper">
        <Image
          className="testLogo"
          src="/logo_butch_color.webp"
          alt="Logo"
          width={100}
          height={100}
        />
      </div>

      <Box
        className="centered glowingText bigText"
        style={{
          padding: "2rem",
          flexDirection: "column",
          marginTop: "7vh",
          marginLeft: "30vw",
          width: "40vw",
          height: "40vh",
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="centered"
          style={{ width: "100%", height: "100%", flexDirection: "column" }}
        >
          <h2 className="glowingText bigText"> LOGIN </h2>
          <div
            style={{
              flex: 1,
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <label className="glowingText bigText">USERNAME</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="glowingInput"
              type="text"
            />
          </div>
          <div
            style={{
              flex: 1,
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <label className="glowingText bigText">PASSWORD</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="glowingInput"
              type="password"
            />
          </div>
          {error && <p className="glowingText active">{error}</p>}
          <button
            type="submit"
            className="glowingText bigText"
            style={{
              width: "100%",
              height: "10vh",
              backgroundColor: "var(--terminal-green)",
              color: "#000",
              border: "none",
              cursor: "pointer",
            }}
          >
            LOGIN
          </button>
        </form>
      </Box>
    </>
  );
}
