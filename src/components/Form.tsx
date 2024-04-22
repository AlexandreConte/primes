"use client"
import Input from "./Input";
import Button from "./Button";
import useHistory from "@/data/hooks/useHistory";
import { useState } from "react";
import useInput from "@/data/hooks/useInput";

export default function Form() {
  const minValue = 0
  const { number, setNumber } = useInput()
  const { handleSearch } = useHistory()

  return (
    <>
      <div
        className="
        flex-col-center gap-8
        text-center
     ">
        <label htmlFor="numberInput">
          Buscar quantidade de números primos menores que:
        </label>
        <Input
          id="input"
          value={number ?? minValue}
          onKeyDown={() => handleSearch(number)}
          min={minValue}
          onChange={(e) => setNumber(+e.currentTarget.value)}
        />
        <Button
          id="search"
          buttonName="Buscar Primos"
          handleClick={() => handleSearch(number!)}
        />
      </div>
    </>
  )
}