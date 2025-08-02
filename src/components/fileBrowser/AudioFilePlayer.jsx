import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import styles from "./fileBrowser.module.css";
import "react-h5-audio-player/lib/styles.css";
export default function AudioFilePlayer(props) {
    const {filePath, style} = props
  return (
   
        <AudioPlayer
          src={filePath}
          className={styles.audioPlayer}
          preload="auto"
          style={{
            backgroundColor: "black",
            width: "70%",
            ...style
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
  );
}
