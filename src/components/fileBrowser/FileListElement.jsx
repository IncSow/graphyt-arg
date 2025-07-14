import clsx from "clsx"
import Box from "../Box"
import styles from './fileBrowser.module.css'

export default function FileListElement(props){
    const {fileName} = props
    return (
    <Box className={clsx(styles.fileListElement, 'centered')}>
        <h2 className="glowingText big-text centered-text"> {fileName} </h2>
    </Box>

    )

}
