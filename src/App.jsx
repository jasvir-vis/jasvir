import React, { useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/Abouts'
import Tech from './components/Tech'
import Projects from './components/Projects'
import Contactus from './components/Contactus'
import Footerr from './components/Footerr'
import { FaDownload } from 'react-icons/fa'
import Training from './components/Training'



const resumeUrl = "http://localhost:5173/Jasvir_Singh_FullStack.pdf";

const App = () => {

  const downloadFile = useCallback(() => {
    const fileName = resumeUrl.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = resumeUrl;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    document.body.removeChild(aTag);

  })

  return (
    <div className='overflow-x-hidden text-neutral-800 antialiased selection:bg-cyan-300 selection:text-cyan-800'>
      <div className="fixed top-0 -z-10 h-full w-full">
        {/* Solid white background */}
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-white"></div>

        {/* Subtle blurred white circles (lighter spotlight effect) */}
        <div className="absolute top-10 left-10 w-[40%] h-[40%] bg-white/60 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-[50%] h-[50%] bg-white/40 rounded-full blur-3xl"></div>
      </div>


      <Navbar />
      <div className="container mx-auto px-8">
      
        <Hero cv={downloadFile}/>
        <About />
        <Training />
        <Tech />
        <Projects />
        <Contactus />
      </div>
      <Footerr />

    </div>


  )
}

export default App
