import React from 'react'
import MotionWrapper from './motionWrapper'

export default function PopUpText({text}: {
    text: string
}) {
  return (
    <>
        {
            text.split(" ").map((l, i) => (
                <span key={i} className="overflow-hidden block">
                    <MotionWrapper
                    as={'span'} 
                    initial={{y: "100%"}}
                    whileInView={{y: 0}}
                    viewport={{once: true}}
                    transition={{ease: 'backInOut', duration: 0.7 * (i + 1)}} className="block">{l}</MotionWrapper>
                </span>
            ))
        }
    </>
  )
}
