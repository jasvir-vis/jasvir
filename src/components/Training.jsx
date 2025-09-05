import React from "react";
import { motion } from "framer-motion";

// import your certificate images
import phpCert from "../assets/php-cert.jpg";
import digitalCert from "../assets/digital-cert.jpg";
import fullstackCert from "../assets/fullstack-cert.jpg";

const trainings = [
  {
    title: "PHP (45 Days)",
    institute: "Microchip Technology Lab, Mukerian, Punjab",
    certificate: phpCert,
  },
  {
    title: "Digital Marketing (6 weeks)",
    institute: "Techcadd Institute, Jalandhar, Punjab",
    certificate: digitalCert,
  },
  {
    title: "Full Stack Web Development (45 Days)",
    institute: "Ziion Technology, Mohali, Punjab",
    certificate: fullstackCert,
  },
];

const Training = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      {/* Section Title */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold text-blue-950"
      >
        TRAININGS & CERTIFICATIONS
      </motion.h1>

      {/* Trainings Grid */}
      <div className="flex flex-wrap items-center justify-center gap-8 px-6">
        {trainings.map((training, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="w-full sm:w-72 bg-white rounded-2xl shadow-lg p-5 hover:shadow-2xl transition"
          >
            <img
              src={training.certificate}
              alt={`${training.title} certificate`}
              className="rounded-lg mb-4 h-40 w-full object-cover"
            />
            <h2 className="text-xl font-semibold text-blue-900">
              {training.title}
            </h2>
            <p className="mt-2 text-gray-700 text-sm">{training.institute}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Training;
