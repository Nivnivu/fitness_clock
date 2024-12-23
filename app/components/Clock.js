'use client';

import { useState, useEffect } from 'react';

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
    <div className="clock-container">
      {/* Logo */}
      <div className="logo-container">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-W-hPRb194aEtcDVdqyo30RxrqHG8TtEN.svg"
          alt="Fitness Factory Logo"
          className="logo"
        />
      </div>
      {/* Clock */}
      <div className="clock">
        <span className="clock-time">{formattedTime}</span>
      </div>
    </div>
  );
}
