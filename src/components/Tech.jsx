import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb, SiExpress, SiTailwindcss, SiWordpress } from 'react-icons/si'
import { DiNodejs, DiJavascript, DiPhp, DiMysql, DiHtml5, DiCss3 } from 'react-icons/di'
import { BsBootstrap } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})

const Tech = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-blue-950 text-4xl font-bold"
      >
        TECHNOLOGIES & SKILLS
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-8"
      >
        {/* Frontend */}
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-6 w-32">
          <DiHtml5 className="text-7xl text-red-600" />
          <p className="mt-2 text-lg font-medium">HTML5</p>
        </motion.div>

        <motion.div variants={iconVariants(3)} initial="initial" animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-6 w-32">
          <DiCss3 className="text-7xl text-blue-500" />
          <p className="mt-2 text-lg font-medium">CSS3</p>
        </motion.div>

        <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-6 w-32">
          <DiJavascript className="text-7xl text-yellow-500" />
          <p className="mt-2 text-lg font-medium">JavaScript</p>
        </motion.div>

        <motion.div variants={iconVariants(4)} initial="initial" animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-6 w-32">
          <BsBootstrap className="text-7xl text-purple-600" />
          <p className="mt-2 text-lg font-medium">Bootstrap</p>
        </motion.div>

        <motion.div variants={iconVariants(4.5)} initial="initial" animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-6 w-32">
          <SiTailwindcss className="text-7xl text-cyan-500" />
          <p className="mt-2 text-lg font-medium">Tailwind</p>
        </motion.div>

        <motion.div variants={iconVariants(5)} initial="initial" animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-6 w-32">
          <RiReactjsLine className="text-7xl text-blue-600" />
          <p className="mt-2 text-lg font-medium">React.js</p>
        </motion.div>

        {/* Backend */}
        <motion.div variants={iconVariants(5.5)} initial="initial" animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-6 w-32">
          <DiNodejs className="text-7xl text-green-600" />
          <p className="mt-2 text-lg font-medium">Node.js</p>
        </motion.div>

        <motion.div variants={iconVariants(6)} initial="initial" animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-6 w-32">
          <SiExpress className="text-7xl text-gray-600" />
          <p className="mt-2 text-lg font-medium">Express.js</p>
        </motion.div>

        <motion.div variants={iconVariants(6.5)} initial="initial" animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-6 w-32">
          <DiPhp className="text-7xl text-indigo-600" />
          <p className="mt-2 text-lg font-medium">PHP</p>
        </motion.div>

        {/* Databases */}
        <motion.div variants={iconVariants(7)} initial="initial" animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-6 w-32">
          <DiMysql className="text-7xl text-blue-700" />
          <p className="mt-2 text-lg font-medium">MySQL</p>
        </motion.div>

        <motion.div variants={iconVariants(7.5)} initial="initial" animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-6 w-32">
          <SiMongodb className="text-7xl text-green-700" />
          <p className="mt-2 text-lg font-medium">MongoDB</p>
        </motion.div>

        {/* Others */}
        <motion.div variants={iconVariants(8)} initial="initial" animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-6 w-32">
          <SiWordpress className="text-7xl text-blue-800" />
          <p className="mt-2 text-lg font-medium">WordPress</p>
        </motion.div>

        <motion.div variants={iconVariants(8.5)} initial="initial" animate="animate"
          className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-6 w-32">
          <FaGithub className="text-7xl text-black" />
          <p className="mt-2 text-lg font-medium">GitHub</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Tech
