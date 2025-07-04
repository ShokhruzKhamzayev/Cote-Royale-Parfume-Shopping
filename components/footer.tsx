import Image from "next/image"
import Link from "next/link"

const links = [
  {
    title: "Shop",
    actualLinks: [
      {
        link: '/products/Terra',
        display: 'Terra'
      },
      {
        link: '/products/Igni',
        display: 'Igni'
      },
      {
        link: '/products/Aqua',
        display: 'Aqua'
      },
    ]
  },
  {
    title: "About",
    actualLinks: [
      {
        link: '/products/Terra',
        display: 'Science'
      },
      {
        link: '/products/Igni',
        display: 'Our Story'
      },
      {
        link: '/products/Aqua',
        display: 'Côte Royale'
      },
    ]
  },
  {
    title: "Social",
    actualLinks: [
      {
        link: '/products/Terra',
        display: 'Instagram'
      },
      {
        link: '/products/Igni',
        display: 'X (Twitter)'
      },
      {
        link: '/products/Aqua',
        display: 'Facebook'
      },
    ]
  },
]

export default function Footer() {
  return (
    <footer className="custom-container">
      <div className="top-footer flex justify-between flex-wrap gap-[25px] py-[50px]">
        {
          links.map(content => (
            <div key={content.title} className="space-y-[30px]">
              <h2 className="font-semibold text-2xl md:text-3xl ">{content.title}</h2>
              <div className="flex flex-col gap-[15px]">
                {
                  content.actualLinks.map(link => (
                    <Link href={link.link} key={link.display} className="text-gray-300 hover:text-white transition-all duration-300" 
                    >{link.display}</Link>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
      <div className="bottom-footer border-t border-slate-300 py-[30px] flex justify-between items-center flex-col lg:flex-row gap-[20px]">
        <span className="text-gray-300">© {new Date().getFullYear()} Côte Royale Inc. All rights reserved</span>
        <Link href={'/'} className="hidden lg:block">
          <Image src={'/logo.svg'} alt="Logo of Parfume brand" width={300} height={200} className="w-[150px]"/>
        </Link>
        <div className="flex items-center gap-[20px]">
          <Link href={'/'} className="text-gray-300 hover:text-white transition-all duration-300">Terms & conditions</Link>
          <Link href={'/'} className="text-gray-300 hover:text-white transition-all duration-300">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}
