"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import AudioFilePlayer from "./fileBrowser/AudioFilePlayer";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [altText, setAltText] = useState("");
  const [resolver, setResolver] = useState(null);
  const [userInput, setUserInput] = useState(new Array(8).fill(0))
  const [codeCorrect, setCodeCorrect] = useState(false)
  const konami = [38,38,40,40,37,39,37,39]

  const showImageModal = (url, alt = "Modal Image") => {
    return new Promise((resolve) => {
      setImageUrl(url);
      setAltText(alt);
      setResolver(() => resolve);
    });
  };
  const closeModal = () => {
    setImageUrl(null);
    setUserInput(new Array(8).fill(0))
    setCodeCorrect(false)
    if (resolver) {
      resolver();
      setResolver(null);
    }
  };

  const isKonami = (arr) => {
    return arr.every( (v,i) =>{ return v == konami[i]}  )
  }

  useEffect( () => {
    if(isKonami(userInput)){
      setCodeCorrect(true)
    }
  },[userInput])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && imageUrl) {
        closeModal();
        return
      }
     setUserInput(prev => {
      const updated = [...prev.slice(1), e.keyCode];
      return updated;
    });


    };

    if (imageUrl) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [imageUrl]);

  return (
    <ModalContext.Provider value={{ showImageModal, closeModal }}>
      {children}
      {imageUrl &&
        ReactDOM.createPortal(
          <div className="modal-overlay">
            <img
              src="/close-button.webp"
              alt="Close"
              className="modal-close"
              onClick={closeModal}
            />

            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              {!codeCorrect &&(<img
                src={imageUrl}
                alt={altText}
                style={{
                  maxWidth: "85vw",
                  maxHeight: "80vh",
                  width: "100%",
                  objectFit: "contain",
                }}
              />)}
              {codeCorrect && (<AudioFilePlayer filePath={"/fileContent/meow_meow_v2.mp3"} />)}
            </div>
          </div>,
          document.body,
        )}
    </ModalContext.Provider>
  );
};

export const useImageModal = () => {
  const context = useContext(ModalContext);
  //   if (!context) {
  //     throw new Error('useImageModal must be used within a ModalProvider');
  //   }
  return context;
};
