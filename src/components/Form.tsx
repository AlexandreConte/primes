"use client"
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import SearchType from "@/types/SearchType";

interface FormProps {
  history: SearchType[]
  setHistory: (history: SearchType[]) => void
}

export default function Form({ history, setHistory }: FormProps) {
  const minValue = 0
  const [number, setNumber] = useState(minValue)

  async function handleSearch(k: number) {
    let url = `/api/${k}`
    await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(json => setHistory([json, ...history]))
      .catch(error => console.error(error))
  }

  return (
    <div
      className="
        flex-col-center
        text-center
     ">
      <label htmlFor="numberInput" className="mb-4">
        Buscar quantidade de números primos menores que:
      </label>
      <Input
        value={number ?? minValue}
        onKeyDown={() => handleSearch(number)}
        min={minValue}
        onChange={(e) => setNumber(+e.currentTarget.value)}
      />
      <Button
        buttonName="Buscar Primos"
        handleClick={() => handleSearch(number)}
      />
    </div>
  )
}