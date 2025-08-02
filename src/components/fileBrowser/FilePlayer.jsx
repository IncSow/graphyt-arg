import Image from "next/image";
import Box from "../Box";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import styles from "./fileBrowser.module.css";
import "react-h5-audio-player/lib/styles.css";
import { useEffect, useRef } from "react";
import AudioFilePlayer from "./AudioFilePlayer";
export default function FilePlayer(props) {
  const { fileType, filePath } = props;
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  });

  return (
    <Box
      ref={scrollRef}
      style={{
        width: "70%",
        padding: 0,
        maxWidth: "49vw",
        height: "100%",
        overflow: "auto",
        position: "relative",
      }}
    >
      {fileType === "image" && (
        <Image
          src={filePath}
          alt="Image File"
          width={1000}
          height={1000}
          style={{
            width: "100%",
            minHeight: "100%",
            objectFit: "contain",
            height: "auto",
          }}
        />
      )}

      {fileType === "video" && (
        <iframe
          width="100%"
          height="100%"
          src={filePath}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      )}

      {fileType === "audio" && (
       <AudioFilePlayer style={{            marginTop: "30vh",
            marginLeft: "15%",
}} filePath={filePath} />
      )}
    </Box>
  );
}
