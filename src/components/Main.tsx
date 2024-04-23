"use client"
import { useState } from "react"
import Form from "./Form"
import History from "./History"
import SearchType from "@/types/SearchType"

export default function Main() {
  // History of searches
  const [history, setHistory] = useState<SearchType[]>([])

  return (
    <main className="
        h-[100%]
        text-zinc-50
        flex-col-center
        px-6
      ">
      <Form
        history={history}
        setHistory={setHistory}
      />
      <History
        history={history}
      />
    </main>
  )
}