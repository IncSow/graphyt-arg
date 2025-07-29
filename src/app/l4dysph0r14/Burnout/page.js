"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Burnout.module.css";

export default function Home() {
  const router = useRouter();
  const [access, setAccess] = useState(false);

  function isNowBefore(dateString) {
    const now = new Date();
    const target = new Date(dateString);

    return now < target;
  }

  useEffect(() => {
    if (isNowBefore("2025-08-28T00:00:00")) {
      alert("On ne triche pas ! Petit filou.");
      router.replace("/login");
      return;
    }
    const agentAccess = localStorage.getItem("L4dySph0r14");
    const folderAccess = localStorage.getItem("Burnout");
    if (
      agentAccess !==
      "5279301020333169ca2767f2dadf225bda0a81d0594af4bcfb40b0af86d4ddaf"
    ) {
      router.replace("/login");
      return;
    }

    if (
      folderAccess !==
      "2183e6a862db4935b2a2742d7a2f7d978194436a40b3c3635a845a84ee78a710"
    ) {
      router.replace("/l4dysph0r14");
    } else {
      setAccess(true);
    }
  }, []);

  return (
    <>
      {access && (
        <>
          <div className={styles.fullPage} />
          <div className={styles.fullPageGlitch} />
          <div
            className="glowingText centered"
            style={{ marginLeft: "20vw", width: "30%", fontSize: "3vw" }}
          >
            <h2 style={{ fontSize: "6vw", fontWeight: "bold" }}>ERROR 404</h2>
            <p>Page not found</p>
            <p> Redirecting now. </p>
          </div>
          <div
            className="glowingText"
            style={{
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              bottom: 0,
              right: "25vw",
            }}
          >
            <a
              className="glowingTextHoverable bigText"
              style={{ fontSize: "8vw" }}
              href="https://youtu.be/_m5UazzvU0g?si=ShHwIcU-q7M7emYb"
            >
              {" "}
              BURN OUT{" "}
            </a>
            <p style={{ fontSize: "2vw", alignSelf: "end" }}>
              sur toutes les plateformes
            </p>
          </div>
        </>
      )}
    </>
  );
}
