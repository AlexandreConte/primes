"use client"
interface InputProps {
  value?: number
  min?: number
  id?: string
  onChange: (value: any) => void
  onKeyDown?: () => void
}

export default function Input({ value, min, id, onChange, onKeyDown }: InputProps) {
  return (
    <input
      min={min ?? undefined}
      onKeyDown={(e) => e.key === "Enter" && onKeyDown!()}
      type="number"
      value={value}
      step={1}
      onChange={(e) => onChange(e)}
      id={id}
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