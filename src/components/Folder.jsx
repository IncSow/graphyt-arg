import Image from "next/image";

import styles from './Folder.module.css'
export default function Folder() {
  return (
   <Image
        className={styles.folder}
        fill
        alt="A folder"
        style={{ objectFit: 'contain' }}
        src={'/icons/folder.webp'}
      />

  );
}
