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
      <div className="w-[300px] lg:w-[400px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-W-hPRb194aEtcDVdqyo30RxrqHG8TtEN.svg"
          alt="Fitness Factory Logo"
          width={400}
          height={400}
          className="w-full h-auto"
        />
      </div>
      {/* Clock */}
      <div className="flex items-center justify-center bg-gray-900 border-4 border-gray-100 rounded-3xl shadow-xl px-6 py-4">
        <span className="text-white font-mono text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] ">
          {formattedTime}
        </span>
      </div>
    </div>
  )
}
