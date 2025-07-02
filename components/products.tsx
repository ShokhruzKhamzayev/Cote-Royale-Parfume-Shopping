import PopUpText from "./shared/popUpText";

export default function Products() {
  return (
    <div className="custom-container">
        <div className="text-center mt-[130px]">
            <p>Our Fragrances</p>
            <h1 className={`text-8xl lg:leading-[110%] flex gap-[30px] flex-wrap justify-center items-center lg:max-w-[70%] mx-auto my-[30px]`}>
                <PopUpText text="An Essence for Every Man"/>
            </h1>
            <p className="text-balance text-slate-300 block">An expression of quiet luxury, Côte Royale is designed for the man who commands attention without seeking it</p>
        </div>
    </div>
  )
}
