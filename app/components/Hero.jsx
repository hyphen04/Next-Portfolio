import Image from "next/image";
import { motion } from "framer-motion";
import prof from "../assets/prof.png";
import Frame from "./Frame";

const Hero = () => {
  // const [VarCursor, setVarCursor] = useState("default");

  // const textEnter = () => {
  //   setVarCursor("text");
  // };
  // const textLeave = () => {
  //   setVarCursor("default");
  // };

  return (
    <Frame>
      <motion.div
        className=" w-[70%] md:w-[70%] rounded-lg border-2 border-white hover:border-teal-400 hover:scale-105 transition-all duration-500"
        initial={{
          width: "0px",
          opacity: 0,
        }}
        animate={{
          width: "70%",
          opacity: 1,
        }}
      >
        <motion.div
          className="text-6xl h-full w-full flex md:flex-col justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="w-1/2 md:w-full  h-full p-10 md:p-5 flex flex-col justify-center">
            <span className="text-5xl md:text-xl ">Hey,</span>
            <div className="my-10 md:my-2 md:text-3xl">
              I'm{" "}
              <span className="font-extrabold text-teal-400">Kunj Patel.</span>
            </div>
            <p className="text-gray-400 text-4xl md:text-xl bottom-0">
              I design and develop simple yet beautiful websites
            </p>
          </div>
          <Image src={prof} alt="profile" />
        </motion.div>
      </motion.div>
    </Frame>
  );
};

export default Hero;
