"use client"
import useHistory, { SearchType } from "@/data/hooks/useHistory"
import { useState } from "react"
import Button from "./Button"
import useInput from "@/data/hooks/useInput"

export default function History() {
  const { history, setHistory } = useHistory()
  const { number } = useInput()
  const [isVisible, setIsVisible] = useState(false)

  function renderPrimeNumbers(prime: number | undefined, i: number, arr: number[]) {
    return (
      <>
        {prime ? (
          <li key={`${prime}-${i}`}>
            {prime}{arr[i] !== arr[arr.length - 1] ? (<span className="mr-2">,</span>) : ""}
          </li>
        ) : null}
      </>
    )
  }

  function renderSearch(search: SearchType, index: number) {
    return (
      <div key={`k${search.k},${index}`}>
        <h2>Números primos menores que {search.k}:</h2>
        <span>Processo demorou: {search.timer.toFixed(5)} milisegundos.</span>
        <ol className="flex-center">
          {search.primeNumbersLessThanK?.map((it, i, arr) => renderPrimeNumbers(it, i, arr))}
        </ol>
      </div>
    )
  }

  return (
    <div className="my-7">
      <Button
        buttonName={isVisible ? "Ocultar" : "Visualizar"}
        handleClick={() => setIsVisible(!isVisible)}
      />
      <div className={`
        ${isVisible ? "w-[280px] fixed top-[calc(50vh)] left-[calc(50vw-140px)] z-50 bg-gray-600 p-5 rounded-md text-white" : "hidden"}
      `}>
        <button
          onClick={() => setIsVisible(false)}
          className="float-end
          hover:bg-zinc-200 transition-colors bg-white text-black
          w-6 h-6 rounded-full"
        >
          X
        </button>
        {history.map((it, i) => renderSearch(it, i))}
      </div>
    </div>
  )
}