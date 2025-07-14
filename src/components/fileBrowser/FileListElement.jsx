import clsx from "clsx"
import Box from "../Box"
import styles from './fileBrowser.module.css'

export default function FileListElement(props){
    const {fileName} = props
    return (
    <Box className={clsx(styles.fileListElement, 'centered')} style={{width: '100%'}}>
        <h2 className={clsx( fileName=="Alo_calbard.jpg"? "active": "","glowingText big-text centered-text")}> {fileName} </h2>
    </Box>

    )

}
