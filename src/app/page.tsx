import { EternalSeptemberCalendar } from "@/components/eternal-september-calendar";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="font-mono text-4xl sm:text-5xl font-bold mb-8 text-center">The Eternal September Calendar</h1>
      <EternalSeptemberCalendar ></EternalSeptemberCalendar>
      <p className="font-mono">Usenet, a major discussion system of the early Internet and precursor to Internet forums, was a place of civility and professionalism — except in September, when first-year university students gained access to the Internet and Usenet through their university campuses and wreaked havoc for a few weeks before learning online etiquette. In 1993, Internet service providers made access to Usenet much easier. What followed was a continuous deluge of new users the likes of which Usenet had never seen before. Thus began Eternal September, <i>the September that never ended</i>. As usual, more info at <a href="https://en.wikipedia.org/wiki/Eternal_September" className="text-blue-600 underline">Wikipedia</a>.</p>

      {/* <p className="font-mono">As usual, more info at <a href="https://en.wikipedia.org/wiki/Eternal_September" className="text-blue-600 underline">Wikipedia</a>.</p> */}
      <p className="font-mono mt-8">by <a href="https://yigitkilicoglu.com" className="text-blue-600 underline">Yiğit Kılıçoğlu</a></p>
    </div>
  );
}
