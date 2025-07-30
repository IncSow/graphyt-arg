"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Burnout.module.css";
import clsx from "clsx";

export default function Home() {
  const router = useRouter();
  const [access, setAccess] = useState(false);
  const [active, setActive] = useState(false);

  function isNowBefore(dateString) {
    const now = new Date();
    const target = new Date(dateString);

    return now < target;
  }

  useEffect(() => {
    setTimeout(() => {
      setActive(!active);
    }, 700);
  }, [active]);

  useEffect(() => {
    if (isNowBefore("2025-08-22T00:00:00")) {
      alert("On ne triche pas ! Petit filou.");
      router.replace("/login");
      return;
    }
    setAccess(true);
  }, []);

  return (
    <>
      {access && (
        <>
          <div className={styles.fullPage} />
          <div className={styles.fullPageGlitch} />
          <div
            className="glowingText centered"
            style={{
              marginLeft: "20vw",
              width: "30%",
              fontSize: "3vw",
              flexDirection: "column",
            }}
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
              className={clsx(
                " glowingText glowingTextHoverable bigText",
                active ? "active" : "",
              )}
              style={{ fontSize: "8vw" }}
              href="https://youtu.be/_m5UazzvU0g?si=ShHwIcU-q7M7emYb"
            >
              BURN OUT
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
