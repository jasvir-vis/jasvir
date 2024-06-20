import React from 'react'
import aboutImg from '../assets/About.jpg'

import { motion } from 'framer-motion'

const About = () => {
  return (
      <div className='border-b border-neutral-900 pb-4'>
        <motion.h1  whileInView={{opacity: 1, y: 0}}
        initial= {{opacity:0, y:-100}}
        transition={{duration: 0.5}}
         className="my-10 text-center text-blue-900 text-5xl">
            ABOUT ME
        </motion.h1>

        <div className="flex flex-wrap">
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial= {{opacity:0, x:-100}}
        transition={{duration: 0.5}}
        className="w-full flex justify-center lg:w-1/2 lg:p-8">
            <img src={aboutImg} className='rounded-2xl lg:h-[490px]' alt="about" />
            </motion.div>

           <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial= {{opacity:0, x:100}}
            transition={{duration: 0.8}}
             className="w-full lg:w-1/2">
           <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
            <span className='text-xl md:text-3xl'>Hello! </span> I'm Jasvir singh, a passionate and dedicated web developer eager to embark on an exciting journey in the world of coding and design. As a recent graduate with a degree in Bsc computer science, I have honed my skills in HTML, CSS, JavaScript, boostrap(framework),php with oops concept and mysqli .I'm ready to bring my creativity and technical expertise to the forefront. During my academic journey, I've not only gained a solid foundation in web development but also had the opportunity to work on diverse projects, showcasing my adaptability and problem-solving skills.
                <br /> <br />
                <span className='w-full text-2xl text-gray-700 py-6'>Education</span> <br />
                I completed my Bachelor of Science (B.Sc.) in Computer Science from DAV University, Jalandhar. Currently, I am pursuing a Master of Computer Applications (MCA) at Dav University Jalandhar . This dual educational journey has equipped me with a solid foundation in computer science and programming, preparing me to contribute effectively to the field of technology. <br /> <br />
                <span className='w-full text-2xl text-gray-700 py-6'>Languages</span><br />
                English, Hindi, Punjabi
                

</p>
                
                </div>
                </motion.div>

           
        </div>
      
    </div>
  )
}

export default About
