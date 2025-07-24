import Image from "next/image";
import Box from "../Box";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import styles from "./fileBrowser.module.css";
import "react-h5-audio-player/lib/styles.css";
import { useEffect, useRef } from "react";
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
        <AudioPlayer
          src={filePath}
          className={styles.audioPlayer}
          preload="auto"
          style={{
            backgroundColor: "black",
            marginTop: "30vh",
            width: "70%",
            marginLeft: "15%",
          }}
          showJumpControls={false}
          showSkipControls={false}
          showDownloadProgress={false}
          customAdditionalControls={[]}
          layout="stacked"
          customVolumeControls={[]}
          customProgressBarSection={[
            RHAP_UI.CURRENT_TIME,
            <div>/</div>,
            RHAP_UI.DURATION,
            RHAP_UI.PROGRESS_BAR,
            RHAP_UI.VOLUME,
          ]}
        />
      )}
    </Box>
  );
}
