"use client";
import Box from "../Box";
import GlowingText from "../texts/GlowingText";
import ReturnElement from "./ReturnElement";
import styles from "./fileBrowser.module.css";
import FilePlayer from "./FilePlayer";
import FileListElement from "./FileListElement";
import React, { useEffect, useState } from "react";

export default function FileBrowser(props) {
  const { title, isAsh, fileList } = props;
  const preloadImage = (url) => {
    const img = new Image();
    console.log(`Preloading image: ${url}`);
    img.onload = () => console.log(`Preloaded: ${url}`);
    img.onerror = () => console.warn(`Failed to preload: ${url}`);
    img.src = url;
  };

  useEffect(() => {
    if (fileList && fileList.length > 0) {
      fileList.forEach((file) => {
        if (file.type === "image") {
          preloadImage(file.path);
        }
      });
    }
  }, [fileList]);

  const [selectedFile, setSelectedFile] = useState();
  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        width: "100vw",
        height: "95vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className={styles.header}>
        <ReturnElement link={isAsh ? "/l4dysph0r14" : "/n4v3t"} />
        <GlowingText>
          <h2>{title}</h2>
        </GlowingText>
      </div>

      <Box
        style={{
          padding: 0,
          display: "flex",
          height: "70vh",
          width: "70vw",
          overflow: "auto",
        }}
      >
        <div
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
          }}
        >
          {fileList.map((element) => (
            <FileListElement
              key={element.name}
              fileName={element.name}
              className={selectedFile?.name === element.name ? "active" : ""}
              onClick={() => handleFileSelect(element)}
            />
          ))}
        </div>
        <FilePlayer
          fileType={selectedFile?.type}
          filePath={selectedFile?.path}
        />
      </Box>
    </div>
  );
}
