'use client'
import { useMotionValueEvent, useScroll, useTransform, motion } from "framer-motion";
import LetterReveal from "./letterReveal";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start 500px", "end 500px"],  
  })
  const blur = useTransform(scrollYProgress, [0, 0.1], ['blur(40px)', 'blur(0px)'])
  const color = useTransform(scrollYProgress, [0, 1], ['rgb(25, 25, 25)', 'rgb(256, 256, 256)'])
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  useMotionValueEvent(scrollYProgress, 'change', (l) => console.log(blur.get()))
  return (
    <motion.div className="relative h-[250vh]" ref={ref} style={{filter: blur}}>
      <div className="sticky top-0 left-0 flex justify-center items-center min-h-screen flex-col gap-[40px]">
        <motion.div style={{opacity}} className="glow-background fixed top-0 inset-0 z-0 h-full w-full opacity-100"></motion.div>
        <span className="block text-center uppercase text-neutral-200">Defining luxury</span>
        <div className={`max-w-[1000px] text-center uppercase`}>
          <LetterReveal color={color} text="Côte Royale is designed for the man who commands attention without seeking it"/>
        </div>
      </div>
    </motion.div>
  )
}
