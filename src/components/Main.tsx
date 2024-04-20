interface MainProps {
  children: any
}

export default function Main({ children }: MainProps) {
  return (
    <main className="
        min-h-[280px]
        h-[calc(100vh-48px)]
        text-zinc-50
        flex-col-center
        px-6
      ">
      {children}
    </main>
  )
}