"use client";
import Box from "@/components/Box";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Box
        className="glowingTextHoverable bigText boxHoverable"
        style={{
          position: "absolute",
          top: "1vh",
          left: "1vh",
          cursor: "pointer",
          backgroundColor: "black",
        }}
        onClick={() => router.replace("/")}
      >
        Retour au site
      </Box>
      <Box
        style={{
          width: "70vw",
          marginLeft: "15vw",
          marginTop: "15vh",
          gap: "1em",
          display: "centered",
          flexDirection: "column",
        }}
      >
        <p className="glowingText bigText">
          Cette page ne contient pas d'easter egg, c'est juste les mentions
          légales obligatoires. Pas besoin de chercher ici, promis.
        </p>
        <h1> Mentions légales</h1>
        <h2>1. Éditeur du site</h2>
        <p>
          Le présent site, accessible à l’adresse www.graphy.team, est édité par
          : Graphy-T<br></br>
          SIRET : 924 179 740 00015
          <br></br>Contact : graphytea.contact@gmail.com
        </p>
        <h2>2. Responsable de la publication</h2>
        <h3> Graphy-T </h3>
        <p>Contact : graphytea.contact@gmail.com</p>
        <h2>3. Hébergement</h2>
        <p>
          Le site est hébergé par la société Vercel Inc. 340 S Lemon Ave #4133,
          Walnut, CA 91789, United States - Site web : https://vercel.com
        </p>
        <h2>4. Propriété intellectuelle</h2>
        <p>
          Sauf mention contraire, l’ensemble du contenu publié sur le site
          www.graphy.team est mis à disposition librement et peut être utilisé,
          modifié et partagé par quiconque, sauf à des fins commerciales. La
          seule condition est d’attribuer clairement la paternité à "Graphy-T"
          (par exemple, par une mention visible du nom ou un lien vers le site).
          Exception : Les vidéos intégrées depuis YouTube restent soumises aux
          droits de leurs auteurs respectifs. Leur réutilisation est encadrée
          par les conditions de la plateforme YouTube et nécessite, le cas
          échéant, une autorisation spécifique.
        </p>
        <h2>5. Données personnelles</h2>
        <p> Le site graphy.team ne collecte aucune donnée personnelle.</p>
        <h2>6. Cookies Le site</h2>
        <p>graphy.team n’utilise pas de cookies ou autres traceurs.</p>
        <h2>7. Accès au site</h2>
        <p>
          Le site est accessible gratuitement en tout lieu, 7j/7, 24h/24, sauf
          en cas de force majeure, panne technique ou maintenance.
        </p>
        <h2> 📌 Dernière mise à jour : juillet 2025</h2>
      </Box>
    </>
  );
}
