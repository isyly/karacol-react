import React from "react";
import "../App.css";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button className="scroll-to-top" onClick={scrollToTop} aria-label="Retour en haut">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
    </button>
  );
};

export default ScrollToTop;
