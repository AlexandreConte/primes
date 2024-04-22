interface ButtonProps {
  buttonName: string
  handleClick?: () => void
  id?: string
}

export default function Button({ buttonName, handleClick, id }: ButtonProps) {
  return (
    <button
      id={id ?? ""}
      onClick={handleClick ?? undefined}
      onKeyDown={e => e.key === "Enter" && handleClick}
      className="
        flex-col-center text-center
        mx-auto
        primary-color
        rounded-sm
        w-40
        p-1.5
        hover:saturate-200
      ">
      {buttonName}
    </button>
  )
}