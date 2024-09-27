"use client";
import React, { useEffect, useState } from "react";
// import { ContentSearch } from "../components/ContentSearch";
import { motion } from "framer-motion";
import { Spotlight } from "../ui/spotlight";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const floatingVariant = {
    initial: { y: 0, opacity: 0 },
    animate: {
      y: [0, -10, 0],
      opacity: 1,
      transition: {
        y: {
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
        },
        opacity: {
          duration: 0.8,
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <div className="flex    flex-col gap-4  max-w-10xl h-[50vh] md:h-[75vh] size-screen mx-auto justify-center  ">
      <div className="relative z-10 hidden lg:block  ">

        <motion.img
          src="/imgs/chemistry.png"
          alt="Custom Image"
          className="hidden lg:block absolute -top-10 -left-24 -rotate-12 drop-shadow-[0_16px_24px_rgba(49,120,198,0.35)]"
          style={{
            x: mousePosition.x * 0.04,
            y: mousePosition.y * 0.04,
          }}
          variants={floatingVariant}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          width="80px"
          // height="150px"

          // style={{ width: "56px", height: "auto" }}
        />

        <motion.svg
          className="hidden lg:block size-12 absolute top-80 -left-32 drop-shadow-[0_16px_24px_rgba(0,0,255,0.35)] "
          style={{
            x: mousePosition.x * 0.02, // Parallax effect based on mouse position
            y: mousePosition.y * 0.02,
          }}
          variants={floatingVariant}
          initial="initial"
          animate="animate"
          width="800px"
          height="800px"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.01,5.03,23.244,2.254a1.742,1.742,0,0,0-1.989.338L2.38,19.8A1.166,1.166,0,0,0,2.3,21.447c.025.027.05.053.077.077l1.541,1.4a1.165,1.165,0,0,0,1.489.066L28.142,5.75A1.158,1.158,0,0,1,30,6.672V6.605A1.748,1.748,0,0,0,29.01,5.03Z"
            fill="#0065a9"
          />
          <path
            d="M29.01,26.97l-5.766,2.777a1.745,1.745,0,0,1-1.989-.338L2.38,12.2A1.166,1.166,0,0,1,2.3,10.553c.025-.027.05-.053.077-.077l1.541-1.4A1.165,1.165,0,0,1,5.41,9.01L28.142,26.25A1.158,1.158,0,0,0,30,25.328V25.4A1.749,1.749,0,0,1,29.01,26.97Z"
            fill="#007acc"
          />
          <path
            d="M23.244,29.747a1.745,1.745,0,0,1-1.989-.338A1.025,1.025,0,0,0,23,28.684V3.316a1.024,1.024,0,0,0-1.749-.724,1.744,1.744,0,0,1,1.989-.339l5.765,2.772A1.748,1.748,0,0,1,30,6.6V25.4a1.748,1.748,0,0,1-.991,1.576Z"
            fill="#1f9cf0"
          />
        </motion.svg>

        <motion.img
          src="/imgs/atom.png"
          alt="Custom Image"
          style={{
            x: mousePosition.x * 0.02, // Parallax effect based on mouse position
            y: mousePosition.y * 0.02,
          }}
          variants={floatingVariant}
          className="hidden lg:block absolute bottom-20 right-0 rotate-12 drop-shadow-[0_16px_24px_rgba (80,201,162,0.35))]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          width="100px"

          // style={{ width: "56px", height: "auto" }}
        />

        <motion.img
          src="/imgs/harvard.png"
          alt="Custom Image"
          className="hidden lg:block absolute top-96 -right-32 rotate-12 drop-shadow-[0_16px_24px_rgba(247,147,20,0.35)]"
          style={{
            x: mousePosition.x * 0.04,
            y: mousePosition.y * 0.04,
          }}
          variants={floatingVariant}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          width="80px"
          // height="150px"

          // style={{ width: "56px", height: "auto" }}
        />

      </div>
      <div className="absolute  inset-0 overflow-hidden pointer-events-none bg-gray-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute w-60 h-60 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full mix-blend-multiply filter  opacity-70 animate-floatA"></div>
            <div className="absolute top-[10rem] right-0 w-96 h-96 bg-gradient-to-br from-pink-700 to-red-700 rounded-full mix-blend-multiply filter  opacity-70 animate-floatB animation-delay-2000"></div>
          </div>
          <div className="absolute inset-0 bg-grid-indigo-100/[0.03] bg-[size:20px_20px]"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80"></div>
      </div>
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          type: "spring",
          damping: 10,
          delay: 0.3,
        }}
        initial={{ y: -20, opacity: 0 }}
        className="max-w-7xl  z-10  mx-auto px-4 flex flex-col gap-4 items-center justify-center "
      >
        <div className="flex flex-col items-center justify-center">
          <span className="tracking-tighter text-2xl md:text-3xl text-center font-medium text-primary/80 ">
            Welcome to
          </span>
          <h1 className="tracking-tighter text-black max-sm:text-4xl  text-6xl md:text-7xl xl:text-8xl text-center font-bold my-2">
            <span className="font-bold  bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent">
              Guidance
            </span>
            Connect.
          </h1>
        </div>
        <p className="text-primary/80 max-w-lg text-center tracking-tight md:text-lg font-light">
          Platform that helps students and guidance seekers connect with domain
          experts and seniors.
        </p>
        {/* <ContentSearch tracks={tracks} /> */}
      </motion.div>
      {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 -z-10"
        fill="blue"
      /> */}
    </div>
  );
}
