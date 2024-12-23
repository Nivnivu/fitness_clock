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
    <div className="flex flex-col items-center justify-center gap-8 my-16">
      {/* Logo */}
      <div className="relative w-[200px] lg:w-[500px] h-[100px] lg:h-[300px] overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-W-hPRb194aEtcDVdqyo30RxrqHG8TtEN.svg"
          alt="Fitness Factory Logo"
          fill
          className="object-contain"
        />
      </div>
      {/* Clock */}
      {/* Clock */}
      <div className="flex items-center justify-center bg-black border-4 border-white rounded-3xl shadow-xl px-6 py-4">
        <span className="text-white font-mono text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] [color-scheme:light]">
          {formattedTime}
        </span>
      </div>
    </div>
  )
}
