"use client"

interface InputProps {
  value: number
  onChange: (value: number) => void
}

export default function Input({ value, onChange }: InputProps) {
  return (
    <input
      min={0}
      type="number"
      value={value}
      onChange={(e) => onChange(+e.target.value)}
      id="numberInput"
      className="
        flex-col-center text-right
        mx-auto
        p-1.5
        w-40
        outline-none
        text-black
        bg-zinc-400
        focus:bg-zinc-300
        rounded-sm
      "
    />
  )
}