"use client"

import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

export default function Form() {

  const [number, setNumber] = useState<number>(0);

  async function handleSubmit(e: any) {
    e.preventDefault()
    try {
      const res = await fetch('/busca', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(number),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const json = await res.json();
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form action=""
      onSubmit={(e) => handleSubmit(e)}
      className="
        flex-col-center gap-8
        text-center
     ">
      <label htmlFor="numberInput">
        Buscar quantidade de números primos menores que:
      </label>
      <Input
        value={number}
        onChange={setNumber}
      />
      <Button />
    </form>
  )
}