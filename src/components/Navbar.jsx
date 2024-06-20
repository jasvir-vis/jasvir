import React from 'react'
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
const Navbar = () => {
  return (
    <div>
     <nav className="mb-20 flex items-center justify-between py-3">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-2xl"> 
         <b>JASVIR SINGH</b>
        </h1>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
       <a href="https://github.com/dashboard"> <FaGithub/></a>
       <a href="https://www.linkedin.com/in/%E1%B4%8A%E1%B4%80%EA%9C%B1%E1%B4%A0%C9%AA%CA%80-%EA%9C%B1%C9%AA%C9%B4%C9%A2%CA%9C-050b23277/"><FaLinkedin/></a>
       <a href="https://www.instagram.com/jasvirsingh1710?igsh=MW53aGw5eG5oN3IwNQ==">  <FaInstagram/></a>
      
      </div>
     </nav>
    </div>
  )
}

export default Navbar
