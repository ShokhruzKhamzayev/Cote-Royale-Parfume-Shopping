export default function BlurryEntry({children}: {
    children: React.ReactNode
}) {
  
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-[40px]">
        {children}
    </div>
  )
}
