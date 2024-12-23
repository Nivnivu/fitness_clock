'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Clock() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const now = new Date();
    setTime(now);
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!time) return null;

  const formattedTime = new Intl.DateTimeFormat('en-IL', {
    timeZone: 'Asia/Jerusalem',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(time);

  return (
    <div className="flex flex-col items-center justify-center gap-8 my-16">
      {/* Logo */}
      <div className="relative w-[200px] lg:w-[500px] h-[100px] lg:h-[300px] overflow-hidden text-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-W-hPRb194aEtcDVdqyo30RxrqHG8TtEN.svg"
          alt="Fitness Factory Logo"
          fill
          className="object-contain"
        />
      </div>
      {/* Clock */}
      <div className="flex items-center justify-center dark:bg-black bg-black px-6 py-4">
        <span
          className="text-white font-mono text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] text-center"
          style={{
            border: 'none',
            outline: 'none',
            boxShadow: 'none',
          }}
        >
          {formattedTime}
        </span>
      </div>
    </div>
  );
}
