'use client'

import { useEffect, useState } from 'react';

export default function FirstSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="p-4 lg:p-0 relative transition-opacity min-h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden">
      {isClient && (
        <video
          loop
          autoPlay
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full -z-10 transform -translate-x-1/2 -translate-y-1/2 object-cover"
          src="/video-void-genesis.mp4"
        ></video>
      )}

      {/* <h1 className="font-heebo text-4xl lg:text-[78px] z-20 fade-in-out">Void Genesis</h1> */}
      {/* <p className="font-sora text-lg lg:text-[28px] leading-[120%] pt-2 lg:pt-8 text-void-white fade-in-out">Tecendo um futuro onde a tecnologia serve à humanidade.</p> */}
    </div>
  );
}
