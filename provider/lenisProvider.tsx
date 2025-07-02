'use client'
import { Lenis } from "lenis/react"

export default function LenisProvider({children}: {
    children: React.ReactNode
}) {
  return (
    <Lenis root options={{lerp: 0.05}}>
        {children}
    </Lenis>
  )
}
