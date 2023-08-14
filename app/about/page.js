"use client";

import { motion } from "framer-motion";
import Frame from "../components/Frame";
import Image from "next/image";
import Boy from "../assets/Boy.svg";

const About = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Frame>
          <motion.div
            className="flex md:flex-col h-auto items-center justify-center"
            initial={{
              width: "0px",
              opacity: 0,
            }}
            animate={{
              width: "92%",
              opacity: 1,
            }}
            transition={{
              // delay: 0.5,
              duration: 0.3,
            }}
          >
            <motion.div className="h-3/4 md:h-auto w-[40%] md:w-[92%] md:mb-10 rounded-lg border-2 border-white hover:border-teal-400 hover:scale-105 transition-all duration-500">
              <motion.div
                className="h-full w-full flex md:flex-col justify-between"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="p-10 flex justify-center items-center md:p-5 md:text-lg text-justify text-3xl">
                  I'm a front-end developer located in India. I love to create
                  simple yet beautiful websites with great user experience. I'm
                  interested in the whole frontend stack Like trying new things
                  and building great projects. I'm an independent freelancer and
                  blogger. I love to write blogs and read books. I believe
                  everything is an Art when you put your consciousness in it.
                  You can connect with me via social links.
                </div>
              </motion.div>
            </motion.div>
            <Image src={Boy} className="md:hidden" alt="Boy" />
          </motion.div>
        </Frame>
      </motion.div>
    </>
  );
};

export default About;
