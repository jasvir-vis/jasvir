import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { DiNodejs } from 'react-icons/di'
import { SiExpress } from 'react-icons/si'
import { DiJavascript } from 'react-icons/di'
import { BsBootstrap } from 'react-icons/bs' 
import { DiPhp } from 'react-icons/di'
import { DiMysql } from 'react-icons/di'
import { DiHtml5 } from 'react-icons/di'
import { DiCss3 } from 'react-icons/di'
import { SiJquery } from 'react-icons/si'
import { animate, motion } from 'framer-motion'

const iconVariants = (duration) =>({
    intial: {y: -10},
    animate : {
        y: [10,-10],
        transition: {
            duration : duration,
            ease : "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Tech = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 
          whileInView={{opacity: 1, y: 0}}
          initial= {{opacity:0, y:-100}}
          transition={{duration: 0.5}}
           className="my-20 text-center text-blue-950 text-4xl">PROGRAMING LANGUAGES</motion.h1>
        <motion.div 
         whileInView = {{opacity: 1, x: 0}}
         intial = {{opacity:0, x: -100}}
         transition = {{duration: 0.5}}
          className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            variants={iconVariants(2.5)}
            intial = "initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-blue-700"></RiReactjsLine>
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            intial = "initial"
            animate="animate"

            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-700"></SiMongodb>
            </motion.div>
            <motion.div
            variants={iconVariants(3.5)}
            intial = "initial"
            animate="animate"

            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiNodejs className="text-7xl text-orange-700"></DiNodejs>
            </motion.div>
            <motion.div
            variants={iconVariants(4)}
            intial = "initial"
            animate="animate"

            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiExpress className="text-7xl text-orange-700"></SiExpress>
            </motion.div>
            <motion.div
            variants={iconVariants(4.5)}
            intial = "initial"
            animate="animate"

            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiJavascript className="text-7xl text-yellow-700"></DiJavascript>
            </motion.div>
            <motion.div
            variants={iconVariants(5.5)}
            intial = "initial"
            animate="animate"

            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiPhp className="text-7xl text-sky-700"></DiPhp>
            </motion.div>
            <motion.div
            variants={iconVariants(6.5)}
            intial = "initial"
            animate="animate"

            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiMysql className="text-7xl text-sky-700"></DiMysql>
            </motion.div>
            <motion.div
            variants={iconVariants(5)}
            intial = "initial"
            animate="animate"

            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiHtml5 className="text-7xl text-red-700"></DiHtml5>
            </motion.div>
            <motion.div
            variants={iconVariants(4)}
            intial = "initial"
            animate="animate"

            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiCss3 className="text-7xl text-blue-500"></DiCss3>
            </motion.div>
            <motion.div
            variants={iconVariants(3.4)}
            intial = "initial"
            animate="animate"

            className="rounded-2xl border-4 border-neutral-800 p-4">
                <BsBootstrap className="text-7xl text-blue-600"></BsBootstrap>
            </motion.div>
            <motion.div
            variants={iconVariants(2.8)}
            intial = "initial"
            animate="animate"

            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiJquery className="text-7xl text-cyan-700"></SiJquery>
            </motion.div>

        </motion.div>
      
    </div>
  )
}

export default Tech
