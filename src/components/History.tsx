"use client"
import { useEffect, useState } from "react"
import Button from "./Button"
import SearchType from "@/types/SearchType"

interface HistoryProps {
  history: SearchType[]
}

export default function History({ history }: HistoryProps) {
  // isVisible is to setVisibility of searches result
  const [isVisible, setIsVisible] = useState(false)
  // hasButton is to show the button only when has at least one result
  const [hasButton, setHasButton] = useState(false)

  useEffect(() => {
    // setHasButton to true if has any search history
    setHasButton(history.length > 0)
  }, [history])

  // Render 'k' always with the same style
  function renderKColored(k: number) {
    return (
      <span className="text-blue-200 font-bold mx-[3px]">{k}</span>
    )
  }

  // Render the prime Numbers below 'k' of each search
  function renderPrimeNumbers(prime: number | undefined, i: number, arr: number[]) {
    return (
      <div key={`${prime}-${i}`}>
        {prime && (
          <li className="flex">
            {prime}{arr[i] !== arr[arr.length - 1] && (<span className="mr-[1px]">,</span>)}
          </li>
        )}
        {arr.length === 0 && (
          <span className="flex">
            Nenhum número primo positivo encontrado!
          </span>
        )}
      </div>
    )
  }

  // Render each search
  function renderSearch(search: SearchType, index: number) {
    return (
      <div key={`k-${search.k}-${index}-${history.length - index}`} className="py-4">
        <div className="bg-[#222222] px-8 py-4 rounded-md">
          Busca {history.length - index}
          <hr className="mb-2" />
          <h2 className="flex-center">
            <span className="w-full flex-center gap-[2px]">
              <span className="text-green-400 font-black">
                {search.primeNumbersLessThanK.length}
              </span>
              <span>Números Primos Menores que{renderKColored(search.k)}encontrados</span>
            </span>
          </h2>
          {/* <ol className="flex flex-wrap">
            {
              search.primeNumbersLessThanK.length > 0 ? (
                <div className="flex pl-6"><span className="mr-2">Números primos:</span>{search.primeNumbersLessThanK.map(renderPrimeNumbers)}</div>
              )
                : (<span className="text-zinc-300">Não há nenhum número primo positivo abaixo de {renderKColored(search.k)} </span>)
            }
          </ol> */}
          <hr className="mt-8" />
          <div className="bg-black p-4">
            <span className="text-zinc-400 ml-3">(Processo executado em <span className="text-green-600">{search.timer.toFixed(4)}</span> milisegundos)</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="my-7 flex-col-center text-center">
      {hasButton && (
        <>
          <Button
            buttonName={isVisible ? "Ocultar" : "Visualizar"}
            handleClick={() => setIsVisible(!isVisible)}
          />
          <div className={`
            ${isVisible ? "w-full bg-gray-600 py-4 px-8 rounded-md text-white mt-8" : "hidden"}
          `}>
            <div className="text-white p-2">
              <button
                onClick={() => setIsVisible(false)}
                className="
                flex-col-center float-right
                transition-colors text-white hover:text-red-500
                w-6 h-6 rounded-full font-extrabold text-lg
            ">
                X
              </button>
              <h2 className="text-lg">Buscas</h2>
            </div>
            <div>{history.map(renderSearch)}</div>
          </div>
        </>
      )}
    </div>
  )
}