'use client'
import { useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { BiMenu, BiUser } from 'react-icons/bi';
import { BsCart } from "react-icons/bs";
import { PiMagnifyingGlass } from "react-icons/pi";
import logo from '../public/logo.svg';
import MotionWrapper from "./shared/motionWrapper";


export default function Header() {
    const {scrollY} = useScroll()
    const [state, setState] = useState(false)
    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log(latest)
    })
return (
    <MotionWrapper as={'header'}
    className={`flex justify-between items-center py-[10px] px-[30px] bg-black text-white  top-0 w-full left-0 z-[999]  ${state ? "fixed w-[70%] rounded-full" : "absolute"}`}>
        <div className="w-1/3">
            <button>
                <BiMenu size={25}/>            
            </button>
        </div>
        <Image src={logo} alt="The logo" width={200}/>
        <div className="flex items-center gap-[20px] w-1/3 justify-end">
            <PiMagnifyingGlass size={25}/>
            <BiUser size={25}/>
            <BsCart size={25}/>
        </div>
    </MotionWrapper>
  )
}
