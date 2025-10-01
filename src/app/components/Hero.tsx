"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <main className="w-full bg-white">
      {/* ✅ Stats Section */}
      <section className="py-12 sm:py-16 bg-gray-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6">
          {[
            { value: 100, suffix: "%", label: "Satisfied Clientele" },
            { value: 35000, suffix: "+", label: "Solar Panels Cleaned" },
            { value: 30, suffix: "%", label: "Energy Generation Enhanced" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-lg bg-white/30 p-6 sm:p-8 text-center border border-white/40 rounded-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-lime-400">
                <CountUp
                  end={item.value}
                  duration={3}
                  suffix={item.suffix}
                  separator={item.value === 35000 ? "," : ""}
                />
              </h2>
              <p className="text-black font-light mt-2 sm:mt-3 text-base sm:text-lg">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Main Heading */}
      <motion.section
        className="py-10 sm:py-12 text-center px-4 sm:px-6 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-lg sm:text-xl md:text-2xl font-light mb-4 text-black leading-relaxed">
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
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 w-full sm:w-auto bg-lime-400 hover:bg-lime-500 text-black font-serif px-6 py-3 rounded-lg transition-all duration-300"
        >
          Get a Quote Now!
        </motion.button>
      </motion.section>

      {/* ✅ Why Choose SoWash? */}
      <section className="py-10 sm:py-12 bg-white px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center py-6 sm:py-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-sky-500">
              Why Choose SoWash?
            </h2>
            <div className="mt-2 mx-auto h-1 w-16 sm:w-20 bg-green-500 rounded"></div>
          </motion.div>

          {/* ✅ Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {[
              {
                img: "/team.png",
                title: "Experienced Team",
                text: "We have a fleet of Highly Trained and Experienced individuals who ensure that the best value is delivered.",
                size: 60,
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
                size: 60,
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-4 sm:p-6 rounded-lg text-center transition-all duration-300 cursor-pointer"
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{
                  scale: 1.08,
                  rotateY: 10,
                  boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
                }}
                whileTap={{ rotateY: -10 }}
              >
                <Image
                  src={card.img}
                  alt={card.title}
                  width={card.size}
                  height={card.size}
                  className="mx-auto mb-3 sm:mb-4"
                />
                <h4 className="font-serif text-base sm:text-lg text-black">
                  {card.title}
                </h4>
                <p className="text-gray-600 text-sm sm:text-base mt-2">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ✅ About Company */}
      <motion.div
        className="text-center py-6 sm:py-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-sky-500">
          About the Company
        </h2>
        <div className="mt-2 mx-auto h-1 w-16 sm:w-20 bg-green-500 rounded"></div>
      </motion.div>

      <motion.section
        className="py-6 sm:py-8 text-center px-4 sm:px-6 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-base sm:text-lg md:text-xl font-light mb-4 text-black leading-relaxed">
          <Typewriter
            words={[
              "SoWash is a one stop solution for all of your solar cleaning needs. Whether it is Residential Solar Panel Cleaning Services, Commercial Solar Panel Cleaning Services or a Solar Utility Field Cleaning, we cater to all. We provide cutting-edge cleaning equipment to give you the best possible outcome, at the best possible price",
            ]}
            typeSpeed={60}
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
