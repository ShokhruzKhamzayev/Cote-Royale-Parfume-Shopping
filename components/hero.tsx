'use client'
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import LetterReveal from "./letterReveal";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start 0.1", "end 0.2"]
  })
  const blur = useTransform(scrollYProgress, [0, 1], ['blur(40px)', 'blur(0px)'])
  useMotionValueEvent(scrollYProgress, 'change', () => console.log(blur))
  return (
    <div className="relative h-[250vh]" ref={ref} style={{filter: blur.getPrevious()}}>
      <div className="sticky top-0 left-0 flex justify-center items-center min-h-screen flex-col gap-[40px]">
        <span className="block text-center uppercase text-neutral-200">Defining luxury</span>
        <div className={`max-w-[1000px] text-center uppercase`}>
            <LetterReveal text="Côte Royale is designed for the man who commands attention without seeking it"/>
        </div>
      </div>
    </div>
  )
}
