'use client';
import { useEffect, useState } from 'react';
import Box from './Box';

export default function MobileBlocker({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileWidthThreshold = 768;
    const userAgent = typeof window !== 'undefined' ? navigator.userAgent || '' : '';

    const isMobileUA = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(userAgent);
    const isSmallScreen = window.innerWidth < mobileWidthThreshold;
    console.log("User Agent:", userAgent, window.innerWidth, isMobileUA, isSmallScreen);
    if (isMobileUA || isSmallScreen) {
      setIsMobile(true);
    }
  }, []);

  if (isMobile) {
    return (
      <div className="fullcover" style={{
        padding: '2rem',
        fontFamily: 'monospace',
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#000',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
        <Box className="centered" style={{ padding: '2rem', height: '50vh', width: '50vw', flexDirection: 'column' }}>
        <h1 className='glowingText bigText'> La B.U.T.C.H. regrette de vous informer que suite à une brèche de sécurité importante, ses services ne sont disponibles qu'à partir d'un ordinateur ou d'une tablette. Merci de votre coopération.  </h1>
        <p className='glowingText' style={{fontSize:"2rem"}}>- Les agents de l'unité des communications</p>
        </Box>
      </div>
    );
  }

  return <>{children}</>;
}
