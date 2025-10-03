"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white px-6 md:px-16 py-16 flex justify-center items-center">
      <div className="flex flex-col gap-16 w-full max-w-7xl">
        {/* ✅ Row 1 */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Card 1 */}
          <div className="bg-blue-500 text-white p-8 md:p-12 flex flex-col justify-center h-auto md:h-[500px] w-full md:w-[350px] md:-mt-6 shadow-md">
            <span className="uppercase text-sm tracking-wider mb-2">About</span>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-snug">
              MIND <br />
              <span className="text-black">SoWash</span> <br />
              SHARE
            </h1>
            <p className="mt-6 text-base md:text-lg font-light">
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

          {/* Card 2 */}
          <div className="bg-purple-500 text-black p-8 md:p-12 flex flex-col justify-center h-auto md:h-[500px] w-full md:w-[350px] md:mt-24 shadow-md">
            <span className="uppercase text-sm tracking-wider mb-2">Innovation</span>
            <h2 className="text-2xl md:text-3xl font-extrabold leading-snug">
              Clean Water <br /> Through Solar Energy
            </h2>
            <p className="mt-6 text-base md:text-lg font-light">
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

        {/* ✅ Row 2 */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Card 3 */}
          <div className="bg-green-500 text-white p-8 md:p-12 flex flex-col justify-center h-auto md:h-[500px] w-full md:w-[350px] md:-mt-40 shadow-md">
            <span className="uppercase text-sm tracking-wider mb-2">Sustainability</span>
            <h2 className="text-2xl md:text-3xl font-extrabold leading-snug">
              Eco-Friendly <br /> Technology
            </h2>
            <p className="mt-6 text-base md:text-lg font-light">
              Our solutions are designed with the environment in mind. SoWash ensures
              minimal carbon footprint while delivering maximum impact for
              communities.
            </p>
            <Link
              href="https://sowash.pk"
              target="_blank"
              className="mt-6 inline-block underline underline-offset-4 text-white hover:text-gray-200"
            >
              Discover →
            </Link>
          </div>

          {/* Card 4 */}
          <div className="bg-yellow-400 text-black p-8 md:p-12 flex flex-col justify-center h-auto md:h-[500px] w-full md:w-[350px] md:-mt-12 shadow-md">
            <span className="uppercase text-sm tracking-wider mb-2">Community</span>
            <h2 className="text-2xl md:text-3xl font-extrabold leading-snug">
              Empowering <br /> People
            </h2>
            <p className="mt-6 text-base md:text-lg font-light">
              By providing access to clean water, SoWash empowers communities,
              improves health, and fosters sustainable growth in underserved areas.
            </p>
            <Link
              href="https://sowash.pk"
              target="_blank"
              className="mt-6 inline-block underline underline-offset-4 text-black hover:text-gray-700"
            >
              Join Us →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
