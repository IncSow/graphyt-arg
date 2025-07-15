import clsx from "clsx"
import Box from "../Box"
import styles from './fileBrowser.module.css'

export default function FileListElement(props){
    const {fileName, onClick, className} = props
    return (
    <Box onClick={onClick} className={clsx(styles.fileListElement, 'centered')} style={{width: '100%', cursor: 'pointer'}}>
        <h2 className={clsx(className,"glowingText bigText centeredText")}> {fileName} </h2>
    </Box>

    )

}
