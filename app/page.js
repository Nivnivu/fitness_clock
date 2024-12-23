import dynamic from 'next/dynamic';

// Dynamically import the Clock component with SSR disabled
const Clock = dynamic(() => import('./components/Clock'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen max-h-screen dark:bg-black bg-black flex items-center justify-center">
      <Clock />
    </main>
  );
}
