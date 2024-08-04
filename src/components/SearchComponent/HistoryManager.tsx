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
  const [history, setHistory] = useState<HistoryItem[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    if (typeof window !== "undefined") {
      const storedHistory = localStorage.getItem("cepHistory")
      if (storedHistory) {
        setHistory(JSON.parse(storedHistory))
      }
    }
  }, [])

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("cepHistory", JSON.stringify(history))
    }
  }, [history, isClient])

  const handleDeleteHistoryItem = (index: number) => {
    const newHistory = history.filter((_, i) => i !== index)
    setHistory(newHistory)
    toast.success("Item do histórico excluído com sucesso!")
  }

  return isClient ? (
    <>{children(history, setHistory, handleDeleteHistoryItem)}</>
  ) : null
}
