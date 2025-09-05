import React from 'react'
import aboutImg from '../assets/About.jpg'

import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-blue-900 text-5xl">
        ABOUT ME
      </motion.h1>

      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full flex justify-center lg:w-1/2 lg:p-8">
          <img src={aboutImg} className='rounded-2xl lg:h-[490px]' alt="about" />
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <div className="my-2 max-w-xl py-6 space-y-6 text-gray-800">
              {/* Intro */}
              <div>
                <h2 className="text-3xl font-semibold text-blue-900">Hello! 👋</h2>
                <p className="mt-2 text-lg leading-relaxed">
                  I'm <b>Jasvir Singh</b>, a passionate and dedicated
                  <span className="text-purple-600 font-semibold"> Web Developer</span>.
                  Skilled in frontend and backend technologies, I enjoy solving problems and creating
                  responsive, user-friendly web applications. I am eager to contribute to meaningful
                  projects while enhancing my expertise in modern development tools.
                </p>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-400 inline-block">
                  🎓 Education
                </h3>
                <ul className="list-disc list-inside mt-3 space-y-2">
                  <li>
                    <b>MCA</b> – DAV University, Jalandhar (2024–2026), <i>CGPA: 8.77</i>
                  </li>
                  <li>
                    <b>B.Sc. Computer Science</b> – DAV University, Jalandhar (2020–2023), <i>68.8%</i>
                  </li>
                </ul>
              </div>

              {/* Languages */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-700 border-b-2 border-pink-400 inline-block">
                  🌍 Languages
                </h3>
                <p className="mt-2">English (Intermediate), Hindi (Excellent), Punjabi (Excellent)</p>
              </div>
            </div>
          </div>

        </motion.div>


      </div>

    </div>
  )
}

export default About
