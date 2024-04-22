import { useEffect, useState } from "react";

export type SearchType = {
  k: number
  primeNumbersLessThanK: number[]
}

export default function useHistory() {
  const [history, setHistory] = useState<SearchType[]>([])

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

  useEffect(() => {
    console.log(history)
  }, [history])

  return {
    history,
    setHistory,
    handleSearch
  }
}