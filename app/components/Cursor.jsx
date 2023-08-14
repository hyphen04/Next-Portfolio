"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Cursor({ className, VarCursor }) {
  const [mousePostition, setMousePosition] = useState({ x: "-10", y: "-10" });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const variants = {
    default: {
      x: mousePostition.x - 5,
      y: mousePostition.y - 5,
      mixBlendMode: "difference",
    },
    text: {
      x: mousePostition.x - 75,
      y: mousePostition.y - 75,
      height: 150,
      width: 150,
      backgroundColor: "#111827",
      border: "2px solid #ffffff",
      mixBlendMode: "difference",
    },
  };

  return (
    <motion.div
      className={` ${className} cursor md:cursorM`}
      variants={variants}
      animate={VarCursor == undefined ? "default" : VarCursor}
    />
  );
}
