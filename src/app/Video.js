"use client";

import React, { useState, useEffect } from "react";
import styles from "./ResponsiveYouTubeEmbed.module.css";

const ResponsiveYouTubeEmbed = ({ videoId, thumbnail }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    if (window) {
      window.addEventListener("load", () => {
        setIsVideoLoaded(true);
      });
    }
  }, []);

  return (
    <div className={styles.responsiveEmbed}>
      <iframe
        className={`${styles.embedIframe} ${
          isVideoLoaded ? styles.visible : ""
        }`}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => setIsVideoLoaded(true)}
      />
      {!isVideoLoaded && (
        <img
          className={`${styles.thumbnail} ${
            isVideoLoaded ? styles.hidden : ""
          }`}
          src={thumbnail}
          alt="Video thumbnail"
        />
      )}
    </div>
  );
};

export default ResponsiveYouTubeEmbed;
