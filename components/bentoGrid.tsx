import Image from 'next/image'
import React from 'react'
import Button from './shared/button'
import MotionWrapper from './shared/motionWrapper'

export default function BentoGrid() {
  return (
    <div className='custom-container grid grid-cols-1 lg:grid-cols-3 gap-[30px] lg:grid-rows-[auto,auto] h-fit mt-[60px]'>
        <MotionWrapper
            as={"div"}
            initial={{y: "20%", opacity: 0}}
            viewport={{once: true}}
            transition={{ease: 'easeInOut', duration: 0.5}}
            whileInView={{y: 0, opacity: 1}}
         className='lg:col-span-2 lg:row-span-2 w-full'>
            <Image src={'https://images.prismic.io/cote-royale-course/aBQNx_IqRLdaBzha_grid-picture.jpg?auto=format%2Ccompress&fit=max&w=828'} alt='featuring content' width={500} height={300} className='w-[100%] lg:h-[700px] object-cover rounded-[15px]' loading='lazy'/>
        </MotionWrapper>
        <MotionWrapper
            as={"div"}
            initial={{y: "20%", opacity: 0}}
            viewport={{once: true}}
            transition={{ease: 'easeInOut', duration: 0.5, delay: 0.5}}
            whileInView={{y: 0, opacity: 1}} className='bg-white/10 p-10 self-start rounded-[20px]'>
            <h1 className='text-3xl font-semibold'>
               Powerful Simplicity. 
            </h1>
            <p className='mt-[15px] text-slate-300 '>
                An expression of quiet luxury, Côte Royale is designed for the man who commands attention without seeking it. A reflection of nature’s raw beauty, redefined for today.
            </p>
        </MotionWrapper>
        <MotionWrapper
            as={"div"}
            initial={{y: "20%", opacity: 0}}
            viewport={{once: true}}
            transition={{ease: 'easeInOut', duration: 0.4, delay: 0.8}}
            whileInView={{y: 0, opacity: 1}} className='bg-white/10 p-10 self-end rounded-[20px]'>
            <Image src={'https://images.prismic.io/cote-royale-course/aBQNyfIqRLdaBzhc_ignis-bottle.png?auto=format%2Ccompress&fit=max&w=1920'} alt='the picture of parfume' width={100} height={80} className='w-[80%] mx-auto rotate-[-15deg] mt-[-100px]' loading='lazy'/>
            <div className='flex justify-between items-center my-[20px]'>
                <div>
                    <h1 className='text-3xl font-semibold'>Ignis</h1>
                    <p className='text-slate-300'>Eau de Parfum</p>
                </div>                
                <span>$110</span>
            </div>
            <Button variants='outline'>Shop now</Button>
        </MotionWrapper>
    </div>
  )
}
