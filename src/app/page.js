import Image from "next/image";
import Folder from "@/components/Folder";
import Box from "@/components/Box";
import FileList from "@/components/fileBrowser/FileList";
import FileBrowser from "@/components/fileBrowser/FileBrowser";

export default function Home() {
  return (
<>
<Box style={{position: 'relative', width: '10vw', height: '10vh'}}>
  <Folder/>
</Box> 

<FileBrowser />
  
</>

  );
}
