"use client";

import { motion } from "framer-motion";
import Frame from "../components/Frame";

const Projects = () => {
  const CustomDiv = ({ children, className }) => {
    return (
      <motion.div
        className={`w-[50vh] h-auto max-h-[50vh] md:max-h-[60vh] md:w-[30vh] rounded-lg border-2 border-white hover:border-teal-400 hover:scale-105 transition-all duration-500 m-4 ${className}`}
        initial={{
          width: "0px",
          opacity: 0,
        }}
        animate={{
          width: "90%",
          opacity: 1,
        }}
        transition={{
          delay: 0.3,
        }}
      >
        <motion.div
          className="text-6xl h-full w-full  justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          {children}
        </motion.div>
      </motion.div>
    );
  };

  return (
    <Frame>
      <div className="h-auto w-[60%] md:w-auto flex justify-center gap-4 items-center md:flex-col ">
        <CustomDiv className="p-5">
          <h1 className="text-3xl mb-1 font-bold flex justify-center ">
            DigiGuard
          </h1>
          <div className="text-xl p-4 md:p-1 md:text-lg mt-10 md:mt-1">
            <h1 className="text-gray-200">
              <span className="font-extrabold text-teal-400">Tech:</span>{" "}
              Python(Flask), PostgreSQL, BootStrap
            </h1>
            <h1 className="text-gray-200">
              <span className="font-extrabold text-teal-400">Status:</span>{" "}
              Completed
            </h1>
          </div>
          <div className="text-2xl md:text-lg p-4 md:p-1 text-justify text-gray-200">
            DigiGuard is a Flask-based gate pass portal featuring a scanner and
            pass generation functionality.
          </div>
        </CustomDiv>
        <CustomDiv className="p-5">
          <h1 className="text-3xl font-bold flex justify-center">RoboGuide</h1>
          <div className="text-xl p-4 md:p-1 md:text-lg mt-10 md:mt-1">
            <h1 className="text-gray-200">
              <span className="font-extrabold text-teal-400">Tech:</span>{" "}
              OrangePi 5, Python
            </h1>
            <h1 className="text-gray-200">
              <span className="font-extrabold text-teal-400">Status:</span>{" "}
              OnGoing
            </h1>
          </div>
          <div className="text-2xl md:text-lg p-4 md:p-1 text-justify text-gray-200">
            Navigational robot assists visitors in new areas for seamless and
            confident wayfinding experience.
          </div>
        </CustomDiv>
      </div>
    </Frame>
  );
};
export default Projects;
