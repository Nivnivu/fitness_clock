'use client'
import Clock from "./components/Clock"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <Clock />
    </main>
  )
}

