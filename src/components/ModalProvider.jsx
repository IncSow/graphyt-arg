"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [altText, setAltText] = useState("");
  const [resolver, setResolver] = useState(null);

  const showImageModal = (url, alt = "Modal Image") => {
    return new Promise((resolve) => {
      setImageUrl(url);
      setAltText(alt);
      setResolver(() => resolve);
    });
  };
  const closeModal = () => {
    setImageUrl(null);
    if (resolver) {
      resolver();
      setResolver(null);
    }
  };

  // ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && imageUrl) {
        closeModal();
      }
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
              <img
                src={imageUrl}
                alt={altText}
                style={{
                  maxWidth: "85vw",
                  maxHeight: "80vh",
                  width: "100%",
                  objectFit: "contain",
                }}
              />
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
