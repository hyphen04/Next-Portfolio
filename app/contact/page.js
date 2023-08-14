"use client";

import { motion } from "framer-motion";
import Frame from "../components/Frame";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const handleChangeName = () => {
    let name = document.getElementById("name").value;
    setName(name);
  };

  const handleChangeEmail = () => {
    let email = document.getElementById("email").value;
    setEmail(email);
  };

  const handleChangeMsg = () => {
    let msg = document.getElementById("msg").value;
    setMsg(msg);
  };

  return (
    <Frame>
      <motion.div
        className="flex h-[100vh] md:flex-col w-full items-center  justify-center"
        initial={{
          height: "0px",
          opacity: 0,
        }}
        animate={{
          height: "auto",
          opacity: 1,
        }}
        transition={{
          delay: 0.3,
        }}
      >
        <motion.div className="h-[100%] w-[70%] md:w-[80%] md:mb-10 rounded-lg border-2 border-white hover:border-teal-400 hover:scale-105 transition-all duration-500">
          <motion.div
            className="h-full w-full flex md:flex-col justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className=" flex h-full w-full justify-evenly items-center md:p-5 md:text-lg text-justify text-3xl">
              <form className="w-auto h-full pl-6 md:pl-0 flex flex-col justify-center ">
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="bg-gray-900 border-2 my-2 border-white rounded-lg text-lg p-2 w-[25vh] hover:scale-110 transition-all duration-300 "
                  placeholder="Full Name"
                  onChange={handleChangeName}
                  required
                />
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="bg-gray-900 border-2 my-2 border-white rounded-lg text-lg p-2 w-[25vh] hover:scale-110 transition-all duration-300 "
                  placeholder="Email"
                  onChange={handleChangeEmail}
                  required
                />
                <textarea
                  id="msg"
                  type="text"
                  name="subject"
                  className="bg-gray-900 border-2 my-2 border-white rounded-lg text-lg w-[25vh] p-2 hover:scale-110 transition-all duration-300"
                  placeholder="Message"
                  onChange={handleChangeMsg}
                  required
                />
                <input
                  type="submit"
                  name="subject"
                  className="bg-gray-900 border-2 my-2 hover:scale-110 font-extrabold border-white rounded-lg text-lg p-2 w-[25vh] hover:bg-teal-400 hover:text-black hover:border-black transition-all duration-300"
                />
              </form>

              <div className="h-full  w-full m-6 md:m-0 flex justify-end items-center sm:hidden">
                <div className="bg-gray-800 h-[90%] w-full rounded-xl">
                  <div className="h-[4vh] ">
                    <ul className="h-full w-auto flex items-center px-5 space-x-2">
                      <li className="h-[12px] w-[12px] bg-red-500 rounded-full"></li>
                      <li className="h-[12px] w-[12px] bg-green-600 rounded-full"></li>
                      <li className="h-[12px] w-[12px] bg-yellow-300 rounded-full"></li>
                    </ul>
                  </div>
                  <div className="w-full border border-gray-100 "></div>
                  <div className="p-2 space-y-2 text-white">
                    <div className="text-gray-400 p-5 md:text-sm text-lg">
                      /* Send Message */
                      <div class="snippet">
                        <p>
                          <span class="pink">const </span>
                          <span class="green">button </span>
                          <span class="white">= </span>
                          <span class="blue">
                            document<span class="white">.</span>querySelector
                          </span>
                          <span class="pink">(</span>
                          <span class="saffron">"#sendBtn"</span>
                          <span class="pink">)</span>
                          <span class="white">;</span>
                        </p>
                        <p>&nbsp;</p>
                        <p>
                          <span class="pink">const </span>
                          <span class="green">message </span>
                          <span class="white">= </span>
                          <span class="blue">&#123;</span>
                        </p>
                        <p>
                          &nbsp;
                          <span class="green">name </span>
                          <span class="white">: </span>
                          <span class="saffron">{'"' + name + '"'}</span>
                          <span class="white">,</span>
                        </p>
                        <p>
                          &nbsp;
                          <span class="green">email </span>
                          <span class="white">: </span>
                          <span class="saffron">{'"' + email + '"'}</span>
                          <span class="white">,</span>
                        </p>
                        <p>
                          &nbsp;
                          <span class="green">message </span>
                          <span class="white">: </span>
                          <span class="saffron">{'"' + msg + '"'}</span>
                          <span class="white">,</span>
                        </p>
                        <p>
                          &nbsp;
                          <span class="green">date </span>
                          <span class="white">: </span>
                          <span class="saffron">"Sun 13 Aug"</span>
                        </p>
                        <p>
                          <span class="blue">&#125;</span>
                        </p>
                        <p>&nbsp;</p>
                        <p>
                          <span class="green">button</span>
                          <span class="white">.</span>
                          <span class="blue">addEventListener</span>
                          <span class="pink">(</span>
                          <span class="saffron">"click"</span>
                          <span class="white">, </span>
                          <span class="blue">() </span>
                          <span class="white">=&gt; </span>
                          <span class="green">&#123; </span>
                        </p>
                        <p>
                          &nbsp;<span class="blue">form</span>
                          <span class="white">.</span>
                          <span class="yellow">send</span>
                          <span class="pink">(</span>
                          <span class="green">message</span>
                          <span class="pink">)</span>
                          <span class="white">;</span>
                        </p>
                        <p>
                          <span class="green">&#125;</span>
                          <span class="pink">)</span>
                          <span class="white">;</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </Frame>
  );
};

export default Contact;
