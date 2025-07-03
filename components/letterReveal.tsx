'use client'
import { MotionValue } from "framer-motion"
import MotionWrapper from "./shared/motionWrapper"

export default function LetterReveal({text, color}: {
    text: string,
    color: MotionValue<string>
}) {
    const textSplitted = text.split("")
  return (
   <p>
    {
        textSplitted.map((l, i) => (
            <MotionWrapper
                as={'span'}
                initial={{color: "rgb(25, 25, 25)"}}
                whileInView={{color: "rgb(256, 256, 256)"}}
                transition={{ease: 'easeIn', delay: 0.05 * i}}
                viewport={{amount: "all"}}
            key={i} className="text-6xl leading-[140%]">{l}</MotionWrapper>
        ))
    }
   </p>
  )
}
