import Box from "../Box"
import FileListElement from "./FileListElement"


export default function FileList(props) {
    console.log(props)
    const {fileList} = props
    console.log(fileList)

    return (
      <div style={{width:'30%', display: 'flex', flexDirection: 'column', overflowY: 'auto'}}>
     {fileList.map((element) => (
        <FileListElement key={element.name} fileName={element.name} />
    ))}
</div>
)}
