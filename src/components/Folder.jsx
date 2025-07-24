import Image from "next/image";

import styles from "./Folder.module.css";
export default function Folder(props) {
  const { style, children, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={styles.folderWrapper}
      style={{
        display: "flex",
        width: "40%",
        cursor: "pointer",
        alignItems: "center",
        ...style,
      }}
    >
      <Image
        className={styles.folder}
        width={100}
        height={100}
        alt="A folder"
        style={{ width: "5vw", height: "auto", objectFit: "contain" }}
        src={"/icons/folder.webp"}
      />
      {children}
    </div>
  );
}
