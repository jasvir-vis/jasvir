import React from 'react'
import profilePic from "../assets/vishall.png"
import { motion } from 'framer-motion'

const container = (delay) => ({
    hidden: { y: -100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    }
});

const Hero = () => {
   

    return (
            <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2">
                        <div className="flex flex-col  items-center lg:items-start">

                            <motion.h1
                                variants={container(0)}
                                initial="hidden"
                                animate="visible"
                                className="pb-10 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl">
                                JASVIR SINGH
                            </motion.h1>
                            <motion.span variants={container(0.6)}
                                initial="hidden"
                                animate="visible" className="bg-gradient-to-r from-yellow-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"> Web Developer</motion.span>

                            <motion.p variants={container(1.3)}
                                initial="hidden"
                                animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tight">
                                As a web developer with a passion for coding and a strong foundation in front-end development technologies. Skilled in problem-solving and eager to learn new tools and techniques.
                                I am currently looking for an opportunity to further develop skills in a professional setting while contributing to meaningful projects. <br /><br />

                            </motion.p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 lg:p-0">
                        <div className="flex justify-center">
                            <motion.img
                                initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 1.5 }} src={profilePic} alt="jasvir" /></div></div>
                </div>

            </div>
        )
    }

    export default Hero
