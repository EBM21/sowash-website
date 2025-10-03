"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white px-6 md:px-16 py-24 flex justify-center items-center">
      {/* ✅ Flexbox wrapper (center + gap) */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        
        {/* Card 1 (Left - thoda upar) */}
        <div className="bg-blue-500 text-white p-12 flex flex-col justify-center h-[500px] w-[350px] -mt-6">
          <span className="uppercase text-sm tracking-wider mb-2">About</span>
          <h1 className="text-4xl font-extrabold leading-snug">
            MIND <br />
            <span className="text-black">SoWash</span> <br />
            SHARE
          </h1>
          <p className="mt-6 text-lg font-light max-w-md">
            SoWash is a revolutionary solar water purification system designed to
            provide clean and safe drinking water using renewable energy. Our
            mission is to make clean water accessible for everyone, sustainably.
          </p>
          <Link
            href="https://sowash.pk"
            target="_blank"
            className="mt-6 inline-block underline underline-offset-4 text-white hover:text-gray-200"
          >
            Learn More →
          </Link>
        </div>

        {/* Card 2 (Right - thoda neeche) */}
        <div className="bg-purple-500 text-black p-12 flex flex-col justify-center h-[500px] w-[350px] mt-24">
          <span className="uppercase text-sm tracking-wider mb-2">Innovation</span>
          <h2 className="text-3xl font-extrabold leading-snug">
            Clean Water <br /> Through Solar Energy
          </h2>
          <p className="mt-6 text-lg font-light max-w-md">
            At SoWash, we use advanced solar technology to purify water without
            relying on harmful chemicals or electricity. This makes it perfect for
            rural and urban communities alike.
          </p>
          <Link
            href="https://sowash.pk"
            target="_blank"
            className="mt-6 inline-block underline underline-offset-4 text-black hover:text-gray-700"
          >
            Explore →
          </Link>
        </div>

        

      </div>

      
    </div>
  );
}
