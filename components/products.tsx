import { GiAquarium, GiWoodBeam } from "react-icons/gi";
import PopUpText from "./shared/popUpText";
import { BiCrown, BiDiamond, BiPlus } from "react-icons/bi";
import { BsFire, BsLightning } from "react-icons/bs";
import Image from "next/image";
import Button from "./shared/button";
import MotionWrapper from "./shared/motionWrapper";

const products = [
  {
    image: "https://images.prismic.io/cote-royale-course/aBQNzPIqRLdaBzhf_terra-ad.png?auto=format%2Ccompress&fit=max&w=3840&q=90",
    title: "Terra",
    subtitle: "Eau de Parfum",
    desc: "Rooted in strength, Terra is a tribute to nature’s quiet power. Deep woods and herbal notes evoke the scent of earth after rain—calm, grounded, and refined. For the man who commands attention without effort, Terra embodies the beauty of balance.",
    features: [
      {
        icon: (<GiWoodBeam/>),
        text: "Woody & Herbal"
      },
      {
        icon: (<BiDiamond/>),
        text: "Grounded & Sophisticated"
      }
    ]
  },
  {
    image: "https://images.prismic.io/cote-royale-course/aBQNw_IqRLdaBzhW_aqua-ad.png?auto=format%2Ccompress&fit=max&w=3840&q=90",
    title: "Aqua",
    subtitle: "Eau de Parfum",
    desc: "Cool and invigorating, Aqua channels the untamed spirit of the ocean. Crisp aquatic notes flow over mineral woods, capturing the mystery of open water. As refreshing as a sea breeze yet as commanding as the tide, Aqua is for the man who moves with quiet strength.",
    features: [
      {
        icon: (<GiAquarium/>),
        text: "Fresh & Aquatic"
      },
      {
        icon: (<BsLightning/>),
        text: "Refreshing & Invigorating"
      }
    ]
  },
  {
    image: "https://images.prismic.io/cote-royale-course/aBQNyPIqRLdaBzhb_ignis-ad.png?auto=format%2Ccompress&fit=max&w=3840&q=90",
    title: "Ignis",
    subtitle: "Eau de Parfum",
    desc: "Forged in fire, Ignis is a bold statement of power and poise. Smoldering spices and rich woods create an intense, magnetic presence. For the man whose quiet confidence speaks volumes, this fragrance captures fire’s raw allure—uncompromising and unforgettable.",
    features: [
      {
        icon: (<BsFire/>),
        text: "Spicy & Smoky"
      },
      {
        icon: (<BiCrown/>),
        text: "Bold & Seductive"
      }
    ]
  },
]

export default function Products() {
  return (
    <div className="lg:max-w-[1100px] max-w-[90%] mx-auto">
        <div className="text-center mt-[130px]">
          <p>Our Fragrances</p>
          <h1 className={`text-8xl lg:leading-[110%] flex gap-[30px] flex-wrap justify-center items-center lg:max-w-[70%] mx-auto my-[30px]`}>
              <PopUpText text="An Essence for Every Man"/>
          </h1>
          <p className="text-balance text-slate-300 block max-w-[700px] mx-auto">An expression of quiet luxury, Côte Royale is designed for the man who commands attention without seeking it</p>
        </div>
        <div className="my-[50px] space-y-[70px]">
          {
            products.map(product => (
            <div className="relative w-full h-fit overflow-hidden border border-gray-800" key={product.title}>
              <Image src={product.image} alt={product.title} width={500} height={400} className="absolute w-full h-fit object-cover object-top z-[-1]"/>
              <div className="max-w-[50%] pl-[70px] py-[70px]">
                <h1 className="text-7xl ">{product.title}</h1>
                <span className="text-gray-300 font-semibold">{product.subtitle}</span>
                <p className="my-[60px] font-medium text-gray-300">{product.desc}</p>
                <div>
                  <p className="uppercase font-semibold text-[19px]">Features</p>
                  {
                    product.features.map(feature => (
                      <div className="flex items-center gap-[6px] my-[5px]" key={feature.text}>
                        {feature.icon}
                        <p>{feature.text}</p>
                      </div>
                    ))
                  }
                </div>
                <div className="flex items-center gap-[20px] mt-[50px]">
                  <Button variants="outline">Discover</Button>
                  <Button variants="default">
                    <BiPlus/>
                    Add to bag
                  </Button>
                </div>
              </div>
            </div>
            ))
          }
        </div>
    </div>
  )
}
