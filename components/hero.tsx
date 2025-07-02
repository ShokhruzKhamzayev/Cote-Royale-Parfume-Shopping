import BlurryEntry from "./blurryEntry";
import LetterReveal from "./letterReveal";

export default function Hero() {
  return (
    <BlurryEntry>
        <span className="block text-center uppercase text-neutral-200">Defining luxury</span>
        <div className={`max-w-[1000px] text-center uppercase`}>
            <LetterReveal text="Côte Royale is designed for the man who commands attention without seeking it"/>
        </div>
    </BlurryEntry>
  )
}
