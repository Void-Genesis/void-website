"use client";
import React, { useState } from "react";

export default function VoidCard() {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        className={`relative left-0 top-0 z-30 transition-opacity duration-700 ${hover ? "opacity-0" : "opacity-100"}`}
        src="/image-void-card-logo.png"
        alt="Void Genesis"
      />
      <img
        className={`absolute left-0 top-0 z-30 transition-opacity duration-700 ${hover ? "opacity-100" : "opacity-0"}`}
        src="/image-void-card-middle.png"
        alt="Void Genesis"
      />
      <img
        className="absolute -right-2 top-0 z-20"
        src="/image-void-card-middle.png"
        alt="Void Genesis"
      />
      <img
        className="absolute -right-0 top-0 z-20"
        src="/image-void-card-middle-min.png"
        alt="Void Genesis"
      />
      <img
        className="absolute -right-4 top-0 z-10"
        src="/image-void-card-back.png"
        alt="Void Genesis"
      />
    </div>
  );
}
