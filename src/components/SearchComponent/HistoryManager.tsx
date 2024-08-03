"use client"
import { useState, useEffect, ReactNode } from "react"
import { toast } from "sonner"

interface HistoryItem {
  cep: string
  address: string
}

interface HistoryManagerProps {
  children: (
    history: HistoryItem[],
    setHistory: React.Dispatch<React.SetStateAction<HistoryItem[]>>,
    handleDeleteHistoryItem: (index: number) => void
  ) => ReactNode
}

export default function HistoryManager({ children }: HistoryManagerProps) {
  const [history, setHistory] = useState<HistoryItem[]>(() => {
    const storedHistory = localStorage.getItem("cepHistory")
    return storedHistory ? JSON.parse(storedHistory) : []
  })

  useEffect(() => {
    localStorage.setItem("cepHistory", JSON.stringify(history))
  }, [history])

  const handleDeleteHistoryItem = (index: number) => {
    const newHistory = history.filter((_, i) => i !== index)
    setHistory(newHistory)
    toast.success("Item do histórico excluído com sucesso!")
  }

  return <>{children(history, setHistory, handleDeleteHistoryItem)}</>
}
