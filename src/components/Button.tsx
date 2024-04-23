interface ButtonProps {
  buttonName: string
  handleClick?: () => void
}

export default function Button({ buttonName, handleClick }: ButtonProps) {
  return (
    <button
      className={`
        flex-center text-center
        mx-auto
        primary-color
        rounded-sm
        min-w-40
        p-1.5
        hover:saturate-200
        mt-6
      `}
      onClick={handleClick}
      onKeyDown={e => e.key === "Enter" && handleClick}
      >
      {buttonName}
    </button>
  )
}