import Image from "next/image"
import Box from "../Box"
import GlowingText from "../texts/GlowingText"
import FileList from "./FileList"
import ReturnElement from "./ReturnElement"
import styles from './fileBrowser.module.css'
import FilePlayer from "./FilePlayer"


export default function FileBrowser(props) {
    const fileList = [{name:"Dessin_secret.jpg"},{name:"Alo_calbard.jpg"},{name:"screamie.mp3"},{name:"teaser_ouf.mp4"},{name:"Fursona_Sasha.jpg"},{name:"chatong.png"}  ]
    console.log(fileList)

    return (
        // Remove margin from Box component
        <div style={{margin: 0, padding: 0, width: '100vw', height: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <div className={styles.header}>
              <ReturnElement link="/" />
           <GlowingText><h2>Manifique</h2></GlowingText>

            </div>


            <Box style={{ padding: 0, display: 'flex', height: '50vh', width: '70vw', overflow: 'auto' }}>
                <FileList fileList={fileList} />
                <FilePlayer fileType="image" filePath='/cr_temp.webp'/>
               
            </Box>
    </div>
    )
}
