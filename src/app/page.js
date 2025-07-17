import Image from "next/image";
import Folder from "@/components/Folder";
import Box from "@/components/Box";
import FileBrowser from "@/components/fileBrowser/FileBrowser";
import GlitchedImage from "@/components/glitchedImage/GlitchedImage";

export default function Home() {
  return (
<>

<div style={{marginTop: "5vh"}} className="testLogoWrapper">
    <Image className="testLogo" src="/logo_butch_color.webp" alt="Logo" width={100} height={100} />
</div>
<div className="centered" style={{marginLeft: "25vw", width: '50vw', height: '30vh', display: 'flex'}}>
  <div style={{flex: 1, display: 'flex', position: 'relative', justifyContent: 'center', alignItems: 'center'}}>
  {/* <Image src="/icons/pause.webp" alt="Logo" width={200} height={200} /> */}
  <GlitchedImage src="/icons/pause.webp" alt="Logo" width={200} height={200} />
  </div>
   <div style={{flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
  <Image src="/icons/rec.webp" alt="Logo" width={200} height={200} />
  </div>
   <div style={{flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
  <Image src="/icons/play.webp" alt="Logo" width={200} height={200} />
  </div>
   <div style={{flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
  <Image src="/icons/stop.webp" alt="Logo" width={200} height={200} />
  </div>
</div> 

<a style={{position: 'absolute', bottom: '5vh', right: '5vw'}}  href="/sasha/" className="bigText glowingText">contact</a>
  
</>

  );
}
