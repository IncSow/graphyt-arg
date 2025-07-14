import Image from "next/image";
import Folder from "@/components/Folder";
import Box from "@/components/Box";
import FileList from "@/components/fileBrowser/FileList";
import FileBrowser from "@/components/fileBrowser/FileBrowser";

export default function Home() {
  return (
<>
<Box>
  <h1>Ash</h1>
</Box>

<FileBrowser />
  
</>

  );
}
