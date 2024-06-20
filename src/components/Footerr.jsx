import React from 'react'
import {CONTACT} from '../constants'

import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const Footerr = () => {
  return (
    <div className='w-full'>
       <footer className="bg-gray-900 text-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
     
                <div>
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="https://github.com/dashboard" className="text-gray-200 text-3xl hover:text-gray-400 transition duration-300">
                            <FaGithub/>
                        </a>
                        <a href="https://www.linkedin.com/in/%E1%B4%8A%E1%B4%80%EA%9C%B1%E1%B4%A0%C9%AA%CA%80-%EA%9C%B1%C9%AA%C9%B4%C9%A2%CA%9C-050b23277/" className="text-gray-200 text-3xl hover:text-gray-400 transition duration-300">
                        <FaLinkedin/>
                            
                            
                        </a>
                        <a href="https://www.instagram.com/jasvirsingh1710?igsh=MW53aGw5eG5oN3IwNQ==" className="text-gray-200 text-3xl hover:text-gray-400 transition duration-300">
                            <FaInstagram/>
                            
                        </a>
                    </div>
                    <div className='pt-3'>
                        <span>{CONTACT.address}</span>
                        <span>{CONTACT.phoneNo}</span>
                        <span>{CONTACT.email}</span>

                    </div>
                </div>
   
                <div className="md:col-span-2">
                    <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
                    <form action="#" method="POST" className="flex flex-col sm:flex-row">
                        <input type="email" name="email" id="email" placeholder="Your email address" className="w-full sm:max-w-xs px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800 text-gray-200" />
                        <button type="submit" className="w-full sm:w-auto px-4 py-2 bg-blue-500 rounded-r-md mt-2 sm:mt-0 sm:ml-2 flex-shrink-0 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            
       
            <div className="border-t border-gray-800 mt-8 pt-8 flex justify-between items-center">
                <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
                <p className="text-sm"><a href="#" className="text-blue-500 hover:text-blue-600 transition duration-300">Privacy Policy</a></p>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footerr
 