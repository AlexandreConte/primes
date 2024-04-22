import { useState } from "react";

export default function useInput() {
  const minValue = 0
  const [number, setNumber] = useState<number>(minValue)

  return {
    number,
    setNumber
  }
}