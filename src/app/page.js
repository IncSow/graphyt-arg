import Image from "next/image";
import GlitchedImage from "@/components/glitchedImage/GlitchedImage";

export default function Home() {
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
          style={{ flex: 1 }}
          src="/icons/pause.webp"
          alt="Bouton Pause"
          width={200}
          height={200}
        />
        <GlitchedImage
          style={{ flex: 1 }}
          src="/icons/rec.webp"
          alt="Bouton Record"
          width={200}
          height={200}
          glitchType={2}
        />
        <GlitchedImage
          style={{ flex: 1 }}
          src="/icons/play.webp"
          alt="bouton Play"
          width={200}
          height={200}
          glitchType={3}
        />
        <GlitchedImage
          style={{ flex: 1 }}
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
        style={{ position: "absolute", bottom: "25vh", right: "0" }}
        imageStyle={{ width: "100%" }}
        src="/glitches/glitch2.webp"
        alt="Image de glitch"
        width={200}
        height={200}
        glitchType={2}
      />
      <GlitchedImage
        style={{ position: "absolute", bottom: "0vh", left: "0vw" }}
        imageStyle={{ width: "100%" }}
        src="/gt_warped.webp"
        alt="Logo graphy-t wraped"
        width={200}
        height={200}
        glitchType={6}
      />
      <a
        style={{ position: "absolute", bottom: "5vh", right: "5vw" }}
        href="/sasha/"
        className="bigText glowingText"
      >
        contact
      </a>
    </>
  );
}
