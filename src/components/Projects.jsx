import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      {/* Section Title */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-blue-900 text-4xl font-bold"
      >
        PROJECTS
      </motion.h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition bg-white border border-gray-200"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-4">{project.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-blue-100 text-blue-800 px-2 py-1 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
