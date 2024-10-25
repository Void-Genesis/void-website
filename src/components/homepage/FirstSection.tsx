"use client";

import { useEffect, useState } from "react";

export default function FirstSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    // <div
    //   className={`transition-opacity duration-1000 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}
    // >
    <div className="p-4 lg:p-0 relative transition-opacity min-h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden">
      {isClient && (
        <video
          autoPlay
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full -z-10 transform -translate-x-1/2 -translate-y-1/2 object-cover"
          src="/video-void-genesis.mp4"
        />
      )}
    </div>
    // </div>
  );
}
