import Image from "next/image";
import styles from "./fileBrowser.module.css";
import clsx from "clsx";
import GlitchedImage from "../glitchedImage/GlitchedImage";

export default function ReturnElement(props) {
  const { children, style, link } = props;

  return (
    <a className={clsx(styles.returnLink, "glowingText")} href={link}>
      <GlitchedImage
        style={{width: "40%"}}
          src="/icons/return.webp"
          alt="Retour en arrière"
          width={200}
          height={200}
          glitchType={2}
        />
      Retour
    </a>
  );
}
