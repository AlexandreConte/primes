interface AreaProps {
  children: any
  className?: string
}

export default function Area({ children, className }: AreaProps) {
  return (
    <div
      className={`max-w-5xl ${className ?? ""}`}
    >
      {children}
    </div>
  )
}