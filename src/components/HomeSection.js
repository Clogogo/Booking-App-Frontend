import React from "react";
import "../App.css";
import "./HomeSection.css";

function HomeSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>The Estonia Adventure</h1>
    </div>
  );
}

export default HomeSection;
