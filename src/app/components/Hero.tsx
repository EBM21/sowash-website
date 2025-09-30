"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { footer } from "framer-motion/client";

export default function Hero() {
  return (
    <main className="w-full bg-white">
      {/* ✅ Stats Section with Glass Cards + Scroll Animation */}
      <section className="py-16 bg-gray-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {[
            { value: 100, suffix: "%", label: "Satisfied Clientele" },
            { value: 35000, suffix: "+", label: "Solar Panels Cleaned" },
            { value: 30, suffix: "%", label: "Energy Generation Enhanced" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-lg bg-white/30 p-8 text-center border border-white/40"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-5xl font-extrabold text-lime-400">
                <CountUp
                  end={item.value}
                  duration={3}
                  suffix={item.suffix}
                  separator={item.value === 35000 ? "," : ""}
                />
              </h2>
              <p className="text-black font-light mt-3 text-lg">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Main Heading with Typing Effect + Scroll Animation */}
      <motion.section
        className="py-12 text-center px-6 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-light mb-4 text-black">
          <Typewriter
            words={[
              "At SoWash, we offer one-time and scheduled solar panel cleaning services for both residential and commercial customers.",
            ]}
            typeSpeed={40}
            deleteSpeed={0}
            delaySpeed={1500}
            cursor
            cursorStyle="|"
          />
        </h2>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 bg-lime-400 hover:bg-lime-500 text-black font-serif px-6 py-3 rounded transition-all duration-300"
        >
          Get a Quote Now!
        </motion.button>
      </motion.section>

  {/* ✅ Why Choose SoWash? with Hover + Scroll Animation */}
<section className="py-12 bg-white px-6">
  <div className="max-w-6xl mx-auto">
    <motion.h3
      className="text-sky-500 font-light text-4xl mb-8 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
       <div className="text-center py-8">
        <h2 className="text-4xl font-light text-sky-400">
          why Choose SoWash?
        </h2>
        <div className="mt-2 mx-auto h-1 w-20 bg-green-500 rounded"></div>
         </div>
    </motion.h3>

    {/* ✅ Animation Container */}
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.25, // ✅ ek ek karke cards ayenge
          },
        },
      }}
    >
      {[
        {
          img: "/team.png",
          title: "Experienced Team",
          text: "We have a fleet of Highly Trained and Experienced individuals who ensure that the best value is delivered.",
          size: 85,
        },
        {
          img: "/products.png",
          title: "Top-End Products",
          text: "After countless hours of testing and QA, we ensure that the best quality cleaning products are used.",
          size: 60,
        },
        {
          img: "/cleaning.png",
          title: "Solar Friendly Cleaning",
          text: "Our products are 100% Solar Panel & Environment Friendly through rigorous testing and QA processes.",
          size: 60,
        },
        {
          img: "/energy.png",
          title: "Energy Generation",
          text: "After our detailed research, we are the only company that proves an increase in your power generation of up to 30%.",
          size: 70,
        },
      ].map((card, index) => (
        <motion.div
          key={index}
          className="bg-gray-100 p-6 text-center transition-all duration-300 cursor-pointer"
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{
            scale: 1.15,
            rotateY: 10,
            boxShadow: "0px 20px 40px rgba(0,0,0,0.0)",
          }}
          whileTap={{ rotateY: -10 }}
        >
          <Image
            src={card.img}
            alt={card.title}
            width={card.size}
            height={card.size}
            className="mx-auto mb-4"
          />
          <h4 className="font-serif text-lg text-black">{card.title}</h4>
          <p className="text-gray-600 text-sm mt-2">{card.text}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>


   <motion.h3
            className="text-sky-500 font-light text-4xl pt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
         <div className="text-center py-8">
        <h2 className="text-4xl font-light text-sky-400">
          About the Company
        </h2>
        <div className="mt-2 mx-auto h-1 w-20 bg-green-500 rounded"></div>
         </div>
          </motion.h3>
     <motion.section
        className="py-6 text-center px-6 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-l md:text-l font-light mb-4 text-black">
          <Typewriter
            words={[
              "SoWash is a one stop solution for all of your solar cleaning needs. Whether it is Residential Solar Panel Cleaning Services, Commercial Solar Panel Cleaning Services or a Solar Utility Field Cleaning, we cater to all. We provide cutting-edge cleaning equipment to give you the best possible outcome, at the best possible price",
            ]}
            typeSpeed={40}
            deleteSpeed={0}
            delaySpeed={1500}
            cursor
            cursorStyle="|"
          />
        </h2>
      </motion.section>
    </main>
  );
}
