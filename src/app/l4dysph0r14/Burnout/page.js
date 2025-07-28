"use client";
import Image from "next/image";
import Folder from "@/components/Folder";
import Box from "@/components/Box";
import FileBrowser from "@/components/fileBrowser/FileBrowser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Burnout.module.css"

export default function Home() {
  const router = useRouter();
  const [access, setAccess] = useState(false);
  useEffect(() => {
    const storage = localStorage.getItem("L4dySph0r14");
    if (
      storage !==
      "5279301020333169ca2767f2dadf225bda0a81d0594af4bcfb40b0af86d4ddaf"
    ) {
      router.replace("/login");
    } else {
      setAccess(true);
    }
  }, []);

  return <>{access && <>
    <div className={styles.fullPage}/>
    <div className={styles.fullPageGlitch} />
    <div className="glowingText centered" style={{marginLeft: "20vw", width: "30%", fontSize: "3vw"}}>
      <h2 style={{fontSize: "6vw", fontWeight: "bold"}}>ERROR 404</h2>
      <p>Page not found</p>
      <p> Redirecting now. </p>
    </div> 
    <div className="glowingText" style={{display: "flex", flexDirection: "column", position: "absolute", bottom: 0, right: "25vw"}}>
      <a className="glowingTextHoverable bigText" style={{fontSize: "8vw"}} href="https://youtu.be/_m5uazzvu0g?"> BURNOUT </a>
      <p style={{fontSize: "2vw", alignSelf: "end"}} >sur toutes les plateformes</p>   
       
    </div> 
    </> }</>;
}
