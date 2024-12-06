'use client'

import Clock from './components/Clock'

export default function Home() {
  return (
    <main className="min-h-[90%] bg-gradient-to-b from-gray-800 to-black flex items-center justify-center">
      <Clock />
    </main>
  )
}
