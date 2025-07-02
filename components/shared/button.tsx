import React from 'react'

export default function Button({variants, children}: {
    variants: "outline" | "default",
    children: React.ReactNode
}) {
  return (
    <button className={`border py-[15px] px-[45px] flex items-center justify-center gap-[10px] ${variants === "outline" ? "text-white border-white" : "bg-white text-black"}`}>{children}</button>
  )
}
