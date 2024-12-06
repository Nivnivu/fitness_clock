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
    <div className="w-full max-w-7xl flex flex-col items-center py-8 px-4 lg:py-12 lg:px-8">
      {/* Logo Section */}
      <div className="mb-8 w-64 lg:w-72">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-W-hPRb194aEtcDVdqyo30RxrqHG8TtEN.svg"
          alt="Fitness Factory Logo"
          width={300}
          height={300}
          className="w-full h-auto mx-auto"
        />
      </div>
      {/* Clock Section */}
      <div className="w-full max-w-full aspect-[24/9] bg-black border-4 border-white flex items-center justify-center rounded-3xl shadow-2xl lg:aspect-[32/9]">
        <div className="text-white font-mono text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] xl:text-[12rem] leading-none max-w-full px-4 overflow-hidden text-center">
          {formattedTime}
        </div>
      </div>
    </div>
  )
}
