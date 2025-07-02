'use client'
import MotionWrapper from "./shared/motionWrapper"

export default function LetterReveal({text}: {
    text: string
}) {
    const textSplitted = text.split("")
  return (
   <p>
    {
        textSplitted.map((l, i) => (
            <MotionWrapper
                as={'span'}
                transition={{ease: 'easeIn', delay: 0.05 * i}}
                viewport={{once: true, amount: "all"}}
            key={i} className="text-6xl leading-[140%]">{l}</MotionWrapper>
        ))
    }
   </p>
  )
}
