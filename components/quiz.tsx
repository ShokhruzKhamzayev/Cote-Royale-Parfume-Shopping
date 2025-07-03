import Button from "./shared/button";
import MotionWrapper from "./shared/motionWrapper";
import PopUpText from "./shared/popUpText";

export default function Quiz() {
  return (
    <div className="bg-[url('/backgroundQuiz.avif')] h-[70vh] w-full bg-cover flex justify-center items-center">
        <div className="max-w-[700px] text-center">
            <h3 className="uppercase text-[23px] text-gray-300 font-semibold ">Fragrance Quiz</h3>
            <h1 className="text-[57px] leading-[80%] font-semibold mt-[15px] mb-[25px] flex gap-[30px] flex-wrap justify-center">
                <PopUpText text="The Cote Royale Fragrance Finder"/>
            </h1>
            <p className="text-gray-300">Find your perfect scent with our personalized quiz.</p>
            <MotionWrapper 
                as={'div'}
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                className="w-fit mx-auto mt-[20px]">
                <Button variants="default">Take the Quiz</Button>
            </MotionWrapper>
        </div>
    </div>
  )
}
