import React from 'react'
import { motion } from 'framer-motion'

const Contactus = () => {
  return (
    <div className='border-b border-neutral-800 pb-24 container mx-auto px-4'>
      <motion.h1  
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-blue-900 text-4xl"
      >
        CONTACTS
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className='px-0 lg:px-12'
      >
        <div className="mb-4 flex flex-col gap-4 justify-center items-center text-center">
          <h3 className="text-dark text-xl">Address:</h3>
          <h4 className="text-muted text-lg">Attalgarh, PO - Mukerian, Distt - Hoshiarpur</h4>
          <h4 className="text-muted text-lg">Punjab (144211)</h4>

          <br />

          <h3 className="text-dark text-xl">Mobile:</h3>
          <h4 className="text-muted text-lg">+91 83604-19086</h4>

          <br />

          <h3 className="text-dark text-xl">Email:</h3>
          <h4 className="text-muted text-lg">jasvishal@gmail.com</h4>
        </div>
      </motion.div>
    </div>
  )
}

export default Contactus
