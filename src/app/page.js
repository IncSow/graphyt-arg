"use client";
import Image from "next/image";
import GlitchedImage from "@/components/glitchedImage/GlitchedImage";
import { useImageModal } from "@/components/ModalProvider";
import { useEffect } from "react";

export default function Home() {
  const { showImageModal } = useImageModal();

  function runDelayedSequence() {
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    const popUps = getRandomPopUps();
    (async () => {
      const randomDelay = Math.floor(Math.random() * 5000) + 5000; // 5–10s
      await delay(randomDelay);
      await showImageModal(popUps[0], "Glitch Image 1");
      await delay(randomDelay);
      await showImageModal(popUps[1], "Glitch Image 2");
    })();
  }

  useEffect(() => {
    checkAndUpdateStorage();
    runDelayedSequence();
  }, []);

  const handleClick = (link) => () => {
    window.location.href = link;
  };

  const appVersion = "2.0";

  const checkAndUpdateStorage = () => {
    const storedVersion = localStorage.getItem("appVersion");

    if (storedVersion !== appVersion) {
      localStorage.clear();
      localStorage.setItem("storageVersion", appVersion);
    }
  };

  const getRandomPopUps = () => {
    const popUps = [
      "/popups/bangarang.webp",
      "/popups/teapot.gif",
      "/popups/guitare.webp",
      "/popups/gravotiste.webp",
      "/popups/ratio.webp",
      "/popups/mysterieux_mystere.webp",
    ];
    const first = popUps.splice(
      Math.floor(Math.random() * popUps.length),
      1,
    )[0];
    const second = popUps[Math.floor(Math.random() * popUps.length)];

    return [first, second];
  };

  const handleImageClick = async () => {
    await showImageModal(getRandomPopUps()[0], "Glitch Image");
  };

  return (
    <>
      <div
        onClick={handleImageClick}
        style={{ paddingTop: "5vh" }}
        className="testLogoWrapper"
      >
        <Image
          className="testLogo"
          src="/logo_butch_color.webp"
          alt="Logo"
          width={100}
          height={100}
        />
      </div>
      <div
        className="centered"
        style={{
          marginLeft: "25vw",
          marginTop: "8vh",
          width: "50vw",
          height: "30vh",
          display: "flex",
        }}
      >
        <GlitchedImage
          onClick={handleClick("https://www.youtube.com/@GraphyT_")}
          style={{ flex: 1, cursor: "pointer" }}
          src="/icons/pause.webp"
          alt="Bouton Pause"
          width={200}
          height={200}
        />
        <GlitchedImage
          onClick={handleClick("https://www.instagram.com/graphy_t._/?hl=fr")}
          style={{ flex: 1, cursor: "pointer" }}
          src="/icons/rec.webp"
          alt="Bouton Record"
          width={200}
          height={200}
          glitchType={2}
        />
        <GlitchedImage
          onClick={handleClick("https://graphy-t.bandcamp.com/album/trash-tag")}
          style={{ flex: 1, cursor: "pointer" }}
          src="/icons/play.webp"
          alt="bouton Play"
          width={200}
          height={200}
          glitchType={3}
        />
        <GlitchedImage
          onClick={handleClick("https://www.tiktok.com/@graphy_t")}
          style={{ flex: 1, cursor: "pointer" }}
          src="/icons/stop.webp"
          alt="bouton Stop"
          width={200}
          height={200}
          glitchType={5}
        />
      </div>
      <GlitchedImage
        style={{ position: "absolute", top: "0vh" }}
        imageStyle={{ width: "100%" }}
        src="/glitches/glitch3.webp"
        alt="Glitch"
        width={200}
        height={200}
        glitchType={3}
      />
      <GlitchedImage
        onClick={handleClick("https://discord.gg/MJkSa8wW8Z")}
        style={{ position: "absolute", bottom: "25vh", right: "0" }}
        imageStyle={{ width: "100%", cursor: "pointer" }}
        src="/glitches/glitch2.webp"
        alt="Image de glitch"
        width={200}
        height={200}
        glitchType={2}
      />
      <GlitchedImage
        onClick={handleClick("https://bfan.link/burn-out-1")}
        style={{ position: "absolute", bottom: "0vh", left: "0vw" }}
        imageStyle={{ width: "100%", cursor: "pointer" }}
        src="/gt_warped.webp"
        alt="Logo graphy-t wraped"
        width={200}
        height={200}
        glitchType={6}
      />
      <a
        style={{ position: "absolute", bottom: "5vh", right: "5vw" }}
        href="/login"
        className="bigText glowingTextHoverable"
      >
        contact
      </a>

      <a
        style={{ position: "absolute", bottom: "5vh", left: "2vw" }}
        href="/legal"
        className="glowingTextHoverable"
      >
        Mention légales
      </a>
    </>
  );
}
