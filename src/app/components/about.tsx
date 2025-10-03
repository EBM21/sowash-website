"use client";
import React from 'react'
import Image from "next/image";
import CountUp from "react-countup";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import AboutPage from '../About/About';

const AboutMain = () => {
  return (
    <div>

            {/* ✅ About Company */}
              <motion.div
                className="text-center py-6 sm:py-10 bg-white"
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


              {/* ✅ Main Heading */}
              <motion.section
                className="py-10 sm:py-12 text-center px-4 sm:px-6 bg-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
              <h2
              className="text-lg sm:text-lg md:text-xl font-light mb-4 text-black leading-relaxed sm:w-[80%] md:w-[70%] mx-auto text-center"
            >
             <Typewriter
             words={["SoWash, a specialized solar panel cleaning company, is bringing an innovative change in addressing challenges relating to Solar Panel depletion and optimizing Power Generation by ensuring the effective cleaning and maintenance of solar panels in Pakistan.",]}
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
                  className="mt-4 w-full sm:w-auto bg-sky-500 hover:bg-sky-600 text-white p-4 cursor-pointer uppercase transition-all duration-300"
                >
                  Get a quote!
                </motion.button>
              </motion.section>
        
   
              <AboutPage/>




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
        
          
    </div>
  )
}

export default AboutMain 