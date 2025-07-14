import Image from "next/image";
import Box from "../Box";

export default function FilePlayer(props) {
    const { fileType, filePath } = props;
 return(
 
    <Box style={{width: "70%", padding: 0, maxWidth: "49vw", height: '100%', overflow: 'auto',  position: 'relative'}}>
        {fileType === 'image' && (
            <Image src={filePath} alt="Image File" width={1000} height={1000} 
            style={{
            width: '100%',
            height: 'auto',}}
            />
        )}

        {fileType === 'video' && (
             <video
      controls
      width="100%"
      height="100%"
      style={{ borderRadius: '8px', backgroundColor: '#000' }}
    >
      <source src={filePath} type="video/mp4" />
      Your browser does not support the video tag.
    </video>)}

   
    </Box>
                
)
}
