'use client'
import { motion } from "framer-motion"
import PopUpText from "./shared/popUpText"
import Button from "./shared/button"

const content = {
    title: "Effortless Elegance",
    desc: "An expression of quiet luxury, Côte Royale is designed for the man who commands attention without seeking it. A reflection of nature’s raw beauty."
}

export default function EntryPage() {
  return (
    <div className="relative w-full h-screen flex items-center overflow-hidden">
        <div className="max-w-[90%] mx-auto md:max-w-[400px] md:ml-[150px] text-center md:text-left">
            <h1 className={`text-7xl md:text-8xl leading-[120%]`}>
                <PopUpText text={content.title}/>
            </h1>
            <motion.p 
                initial={{y: "60%", opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{ease: 'linear', delay: 1, duration: 0.7}}
            className="font-light tracking-wide my-[20px] text-[14px] md:text-[17px]">{content.desc}</motion.p>
            <motion.div
                initial={{y: "60%", opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{ease: 'linear', delay: 1.5, duration: 0.7}} className="w-fit mx-auto md:mx-0">
                    <Button variants="outline">Shop now</Button>
             </motion.div>
        </div>
        <motion.img
            initial={{scale: 1.2, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            transition={{ease: "easeIn", duration: 1.5}}
        src={'/entry-bg.jpg'} alt="background for entry page" width={700} height={500} className="absolute w-full h-full pointer-events-none z-[-2] object-cover object-top"/>
        <div className="bg-gradient-to-t absolute inset-0 z-[-1]" style={{background: 'linear-gradient(to top, black, transparent)'}}></div>
    </div>
  )
}
