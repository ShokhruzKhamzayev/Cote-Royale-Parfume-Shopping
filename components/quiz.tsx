import Button from "./shared/button";
import MotionWrapper from "./shared/motionWrapper";
import PopUpText from "./shared/popUpText";

export default function Quiz() {
  return (
    <div className="bg-[url('/backgroundQuiz.avif')] h-[70vh] w-full bg-cover flex justify-center items-center">
        <div className="max-w-[700px] text-center">
            <MotionWrapper 
              as={'h3'}
              initial={{y: "40%", opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{ease: 'easeInOut', duration: 0.4}}
              viewport={{once: true}}
            className="uppercase text-[23px] text-gray-300 font-semibold ">Fragrance Quiz</MotionWrapper>
            <h1 className="text-[57px] font-semibold mt-[15px] mb-[25px] flex gap-[30px] flex-wrap justify-center">
                <PopUpText text="The Cote Royale Fragrance Finder"/>
            </h1>
            <MotionWrapper
              as={'p'}
              initial={{y: "40%", opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              viewport={{once: true}}
              transition={{ease: 'easeInOut', duration: 0.5, delay: 0.6}}
             className="text-gray-300">Find your perfect scent with our personalized quiz.</MotionWrapper>
            <MotionWrapper 
                as={'div'}
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{ease: 'easeInOut', duration: 0.5, delay: 1}}
                className="w-fit mx-auto mt-[20px]">
                <Button variants="default">Take the Quiz</Button>
            </MotionWrapper>
        </div>
    </div>
  )
}
