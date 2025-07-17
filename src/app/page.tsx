import { EternalSeptemberCalendar } from "@/components/eternal-september-calendar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-background">
      <header className="pt-8 sm:pt-20 text-center">
        <h1 className="font-mono text-4xl sm:text-5xl font-bold mb-8">The Eternal September Calendar</h1>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-8 pb-12 sm:px-20 gap-8">
        <EternalSeptemberCalendar />
        <p className="font-mono max-w-xl text-center mt-8">
          Usenet, a major discussion system of the early Internet and precursor to Internet forums, was a place of civility and professionalism — except in September, when first-year university students gained access to the Internet and Usenet through their university campuses and wreaked havoc for a few weeks before learning online etiquette. In 1993, Internet service providers made access to Usenet much easier. What followed was a continuous deluge of new users the likes of which Usenet had never seen before. Thus began Eternal September, <i>the September that never ended</i>. As usual, more info at <a href="https://en.wikipedia.org/wiki/Eternal_September" className="text-blue-600 underline">Wikipedia</a>.
        </p>
      </main>
      <footer className="py-6 text-center mt-auto">
        <p className="font-mono">
          by <a href="https://yigitkilicoglu.com" className="text-blue-600 underline">Yiğit Kılıçoğlu</a>
        </p>
      </footer>
    </div>
  );
}
