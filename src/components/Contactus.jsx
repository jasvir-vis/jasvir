import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contactus = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 container flex-col items-center">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-blue-900 text-4xl font-bold"
      >
        CONTACTS
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.8 }}
        className="px-0 lg:px-12 flex-col align-middle"
      >
        <ul className="space-y-6 text-lg flex flex-col justify-center items-center align-middle">
          <li className="flex items-center">
            <FaMapMarkerAlt className="text-red-600 text-2xl mr-3" />
            <span>
              <strong>Address:</strong> Attalgarh, City - Mukerian, Distt - Hoshiarpur, Punjab (144211)
            </span>
          </li>

          <li className="flex items-center">
            <FaPhoneAlt className="text-green-600 text-2xl mr-3" />
            <span>
              <strong>Mobile:</strong> +91 8360419086
            </span>
          </li>

          <li className="flex items-center">
            <FaEnvelope className="text-blue-600 text-2xl mr-3" />
            <span>
              <strong>Email:</strong>{" "}
              <a href="mailto:jasvishal123@gmail.com" className="text-blue-700 hover:underline">
                jasvishal123@gmail.com
              </a>
            </span>
          </li>

          <li className="flex items-center">
            <FaInstagram className="text-pink-600 text-2xl mr-3" />
            <span>
              <strong>Instagram:</strong>{" "}
              <a
                href="https://instagram.com/jasvirsingh1710"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:underline"
              >
                @jasvirsingh1710
              </a>
            </span>
          </li>

          <li className="flex items-center">
            <FaLinkedin className="text-blue-700 text-2xl mr-3" />
            <span>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/%E1%B4%8A%E1%B4%80%EA%9C%B1%E1%B4%A0%C9%AA%CA%80-%EA%9C%B1%C9%AA%C9%B4%C9%A2%CA%9C-050b23277/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                Jasvir Singh
              </a>
            </span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Contactus;
