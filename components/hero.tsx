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
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  useMotionValueEvent(scrollYProgress, 'change', (l) => console.log(blur.get()))
  return (
    <motion.div className="relative h-[250vh]" ref={ref} style={{filter: blur}}>
      <div className="sticky top-0 left-0 flex justify-center items-center min-h-screen flex-col gap-[40px]">
        <motion.div style={{opacity}} className="glow-background fixed top-0 inset-0 z-0 h-full w-full opacity-100"></motion.div>
        <span className="block text-center uppercase text-neutral-200 text-[14px] md:text-[16px]">Defining luxury</span>
        <div className={`max-w-[90%] mx-auto md:max-w-[600px] lg:max-w-[1000px] text-center uppercase`}>
          <LetterReveal className="text-3xl md:text-6xl" text="Côte Royale is designed for the man who commands attention without seeking it"/>
        </div>
      </div>
    </motion.div>
  )
}
