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

        <motion.div
         whileInView={{opacity: 1, x: 0}}
         initial= {{opacity:0, x:100}}
         transition={{duration: 1}}
         className='px-0 lg:px-12'>
            <div className="mb-4 d-flex flex-column gap-3 justify-content-center align-item-center">
                <h3 className="text-dark text-center my-2">Address :</h3>
                <h4 className="text-center text-muted mb-2">Attalgarh, PO - Mukerian, Distt - Hoshiarpur</h4>
                <h4 className="text-muted text-center">Punjab (144211)</h4>
              <br/>
              <br/>
              <h3 className="text-center">Mobile:</h3>
              <h4 className="text-muted text-center" >+91 83604-19086</h4>

              <h3 className="text-center">Email:</h3>
              <h4 className="text-muted text-center">jasvishal@gmail.com</h4>
            </div>
        </motion.div>
    </div>
  )
}

export default Contactus
