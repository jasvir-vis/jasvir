import React, {useCallback} from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/Abouts'
import Tech from './components/Tech'
import Projects from './components/Projects'
import Contactus from './components/Contactus'
import Footerr from './components/Footerr'
import { FaDownload } from 'react-icons/fa'



const resumeUrl = "http://localhost:5173/vishalll.pdf";

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
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8">
      <Navbar/>
      <div className='flex justify-center mb-5 lg:justify-start lg:mb-0 '>
      <button onClick={downloadFile} className='bg-gray-200 hover:bg-orange-900 text-black hover:text-white font-bold py-2 px-4 rounded inline-flex items-center'><FaDownload/> <b className='px-2'>Resume</b></button>
      </div>
      
      <Hero/>
      <About/>
      <Tech/>
      <Projects/>
      <Contactus/>

      <Footerr/>
      
      </div>  
    </div>
    
  )
}

export default App
