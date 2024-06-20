import React from 'react'

import { motion } from 'framer-motion'

const Contactus = () => {
  return (
    <div className='border-b border-neutral-800 pb-24 container'>
        <motion.h1  
         whileInView={{opacity: 1, y: 0}}
         initial= {{opacity:0, y:-100}}
         transition={{duration: 0.5}}
         className="my-20 text-center text-blue-900 text-4xl">CONTACTS</motion.h1>

        <motion.form 
         whileInView={{opacity: 1, x: 0}}
         initial= {{opacity:0, x:100}}
         transition={{duration: 1}}
          action="#" method="POST" className='px-0 lg:px-12'>
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm" required />
            </div>
            
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm" required />
            </div>
            
            <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm" required></textarea>
            </div>
            
            <div className="flex justify-end">
                <button type="submit" className="inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Send
                </button>
            </div>
        </motion.form>
    </div>
  )
}

export default Contactus
