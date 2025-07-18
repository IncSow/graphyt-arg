import Image from "next/image";
import styles from "./fileBrowser.module.css";
import clsx from "clsx";

export default function ReturnElement(props) {
  const { children, style, link } = props;

  return (
    <a className={clsx(styles.returnLink, "glowingText")} href={link}>
      <Image
        src={"/icons/return.webp"}
        alt="Folder Icon"
        width={100}
        height={100}
      />
      Retour
    </a>
  );
}
