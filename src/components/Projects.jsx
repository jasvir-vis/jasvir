import React from 'react'
import {PROJECTS} from '../constants'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 
        whileInView={{opacity: 1, y: 0}}
        initial= {{opacity:0, y:-100}}
        transition={{duration: 0.5}}
        className="my-20 text-center text-blue-900 text-4xl">PROJECTS</motion.h1>
        <div>
          {PROJECTS.map((project, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
             <motion.div 
             whileInView={{opacity: 1, x: 0}}
             initial= {{opacity:0, x:-100}}
             transition={{duration: 1}}
               className="w-full lg:w-1/4">
              <img src={project.image} width={150} height={150} className='my-4 rounded shadow-md shadow-black' alt={project.title} />
              </motion.div>
             <motion.div  
            whileInView={{opacity: 1, x: 0}}
            initial= {{opacity:0, x:-100}}
            transition={{duration: 0.5}}
              className="w-full max-w-xl lg:w-3/4">
             <h6 className="mb-2 font-semibold">{project.title}</h6>
             <p className="mb-4 text-neutral-700">
              {project.description} <br />
              <a href={project.link} className="text-blue-600 underline my-4">Source code</a></p>
              
              {project.technologies.map((tech,index) =>(
                <span key={index} className='mr-2 rounded bg-neutral-200 px-2 py-1 text-sm font-medium text-black'>{tech}</span>
              ))}
              </motion.div>

            </div>
          ))}
        </div>
    </div>
    
  )
}

export default Projects
