"use client";
import Box from "../Box"
import GlowingText from "../texts/GlowingText"
import ReturnElement from "./ReturnElement"
import styles from './fileBrowser.module.css'
import FilePlayer from "./FilePlayer"
import FileListElement from "./FileListElement"
import React, { useState } from "react";


export default function FileBrowser(props) {
    const fileList = [{name:"Dessin_secret.jpg", type:"image", path: "/cr_temp.webp"},{name:"Alo_calbard.jpg", type:"image", path: "/grofils.jpg"},{name:"screamie.mp3"},{name:"teaser_ouf.mp4", type:"video", path: "https://www.youtube-nocookie.com/embed/FPsFRFn3dOE?si=4CicxM_str3Blwkh"},{name:"Fursona_Sasha.jpg"},{name:"chatong.png"}  ]
    const [selectedFile, setSelectedFile] = useState(); // Default to first file
    const handleFileSelect = (file) => {
        console.log("Selected file:", file);
        setSelectedFile(file);
    };

    return (
        <div style={{margin: 0, padding: 0, width: '100vw', height: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <div className={styles.header}>
              <ReturnElement link="/" />
           <GlowingText><h2>Manifique</h2></GlowingText>

            </div>


            <Box style={{ padding: 0, display: 'flex', height: '50vh', width: '70vw', overflow: 'auto' }}>
                   <div style={{width:'30%', display: 'flex', flexDirection: 'column', overflowY: 'auto'}}>
                        {fileList.map((element) => (
                            <FileListElement key={element.name} fileName={element.name}
                             className={selectedFile?.name === element.name? "active" : ""}
                             onClick={() => handleFileSelect(element)} />
                        ))}
                    </div>
                <FilePlayer fileType={selectedFile?.type} filePath={selectedFile?.path}/>
               
            </Box>
    </div>
    )
}
