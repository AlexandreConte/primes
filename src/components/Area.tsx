interface AreaProps {
  children: any
  className?: string
}

export default function Area({ children, className }: AreaProps) {
  return (
    <div
      className={`max-w-5xl h-[100%] mx-auto p-12 ${className ?? ""}`}
    >
      {children}
    </div>
  )
}