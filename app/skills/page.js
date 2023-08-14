"use client";

import { motion } from "framer-motion";
import Frame from "../components/Frame";

const Skills = () => {
  const CustomDiv = ({ children, className }) => {
    return (
      <motion.div
        className={`w-[50vh] md:w-[30vh] h-auto rounded-lg border-2 border-white hover:border-teal-400 hover:scale-105 transition-all duration-500 m-4 ${className}`}
        initial={{
          width: "0px",
          opacity: 0,
        }}
        animate={{
          width: "30vh",
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
      <div className="h-auto flex justify-center gap-4 items-center md:flex-col ">
        <CustomDiv className="p-5">
          <h1 className="text-4xl font-bold flex justify-center ">Tools.</h1>

          <div className="text-2xl p-4 md:text-lg">
            <ul className="list-disc">
              <li>Visual Studio Code</li>
              <li>Android Studio</li>
              <li>Versel</li>
              <li>OnRender</li>
              <li>VMware Fusion</li>
            </ul>
          </div>
          <div></div>
        </CustomDiv>
        <CustomDiv className="p-5">
          <h1 className="text-4xl font-bold flex justify-center ">Techs.</h1>
          <div className="text-2xl p-4 md:text-lg">
            <ul className="list-disc">
              <li>Python</li>
              <li>JavaScript</li>
              <li>NextJs</li>
              <li>Django</li>
              <li>HTML5/CSS3</li>
            </ul>
          </div>
        </CustomDiv>
      </div>
    </Frame>
  );
};
export default Skills;
