'use client'
import { motion } from "framer-motion"

export default function EntryPage() {
  return (
    <div className="relative w-full h-screen flex items-center overflow-hidden">
        <div className="max-w-[400px] ml-[150px]">
            <h1 className={`text-8xl leading-[120%]`}>Effortless Elegance</h1>
            <p className="font-light tracking-wide my-[20px]">An expression of quiet luxury, Côte Royale is designed for the man who commands attention without seeking it. A reflection of nature’s raw beauty.</p>
            <button className="border border-white py-[20px] px-[35px]">Shop Now</button>
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
