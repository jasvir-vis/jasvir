import React from "react";
import profilePic from "../assets/vishall.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: delay },
  },
});

const Hero = (props) => {
  return (
    <section className="border-b border-neutral-900 pb-20 lg:mb-28">
      <div className="flex flex-wrap items-center">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left px-4 lg:px-0">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-6 text-5xl font-extrabold tracking-tight lg:mt-16 lg:text-6xl"
            >
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Jasvir Singh
              </span>
            </motion.h1>

            <motion.h2
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="text-2xl lg:text-3xl font-semibold text-neutral-700 dark:text-neutral-300"
            >
              Web Developer 💻
            </motion.h2>

            <motion.p
              variants={container(1.2)}
              initial="hidden"
              animate="visible"
              className="mt-6 max-w-xl text-lg font-light leading-relaxed tracking-wide text-neutral-600 dark:text-neutral-400"
            >
              Passionate about building responsive, user-friendly web
              applications. Skilled in front-end development and eager to
              explore new technologies. I thrive on problem-solving and aim to
              create meaningful digital experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={container(1.8)}
              initial="hidden"
              animate="visible"
              className="mt-8 flex gap-4"
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={props.cv} className="px-6 py-3 rounded-lg bg-neutral-200 text-black font-semibold hover:bg-neutral-300 transition"
              >
                Download Resume
              </a>
            </motion.div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center mt-12 lg:mt-0">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="relative"
          >
            <motion.img
              src={profilePic}
              alt="jasvir"
              className="w-72 h-72 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-white p-4"
              whileHover={{ scale: 1.05 }}
            />
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 blur-3xl opacity-40 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
