'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formattedTime = new Intl.DateTimeFormat('en-IL', {
    timeZone: 'Asia/Jerusalem',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(time)

  return (
    <div className="w-full max-w-5xl flex flex-col items-center">
      <div className="mb-8 w-full max-w-xs">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-W-hPRb194aEtcDVdqyo30RxrqHG8TtEN.svg"
          alt="Fitness Factory Logo"
          width={400}
          height={200}
          className="w-full h-auto"
        />
      </div>
      <div className="w-full max-w-full aspect-[16/9] bg-black border-2 border-white flex items-center justify-center rounded-3xl shadow-2xl">
        <div className="text-white font-mono text-6xl sm:text-8xl md:text-[10rem] lg:text-[13.5rem] leading-none max-w-full px-4 overflow-hidden text-center">
          {formattedTime}
        </div>
      </div>
    </div>
  )
}
