"use client"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "../ui/button"
import { useEffect, useRef, useState } from "react"
import { Share, Trash } from "lucide-react"
import { Skeleton } from "../ui/skeleton"

interface HistoryItem {
  cep: string
  address: string
}

interface HistoryComponentProps {
  history: HistoryItem[]
  onDelete: (index: number) => void
}

export function HistoryComponent({ history, onDelete }: HistoryComponentProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 })
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  const toggleDropdown = (
    event: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    const rect = event.currentTarget.getBoundingClientRect()
    setDropdownPosition({ top: rect.bottom, left: rect.left })
    setIsDropdownOpen(!isDropdownOpen)
    setSelectedIndex(index)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false)
      setSelectedIndex(null)
    }
  }

  const handleDelete = () => {
    if (selectedIndex !== null) {
      onDelete(selectedIndex)
      setIsDropdownOpen(false)
      setSelectedIndex(null)
    }
  }

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isDropdownOpen])

  return (
    <>
      {isLoading ? (
        <nav className="w-full flex flex-col pr-2">
          {history.length === 0 ? (
            <Button
              variant={"ghost"}
              size={"lg"}
              className="flex items-center justify-start p-2"
            >
              Histórico vazio ...
            </Button>
          ) : (
            <div className="flex flex-col gap-2">
              <h3 className="text-sm text-foreground/80">
                Histórico de pesquisas
              </h3>
              <div className="flex flex-col pl-0 gap-2 overflow-auto h-[100%] pr-2">
                {history.map((item, index) => (
                  <Button
                    variant={"ghost"}
                    size={"lg"}
                    className="flex items-center justify-start p-2 rounded-lg"
                    key={index}
                  >
                    <p className="text-xs truncate">{item.address}</p>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="ml-4 text-xs opacity-60 hover:opacity-100 transition-all delay-100 duration-100">
                          <Button
                            variant={"ghost"}
                            className="hover:bg-transparent"
                            size={"icon"}
                            onClick={(e) => toggleDropdown(e, index)}
                          >
                            •••
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Ver mais</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Button>
                ))}
              </div>
            </div>
          )}
          {isDropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute p-2 w-44 bg-zinc-900 border rounded-xl shadow-2xl shadow-foreground/5"
              style={{ top: dropdownPosition.top, left: dropdownPosition.left }}
            >
              <div className="flex flex-col">
                <Button
                  variant={"ghost"}
                  className="flex items-center justify-start gap-2"
                >
                  <Share size={18} />
                  Compartilhar
                </Button>
                <Button
                  variant={"ghost"}
                  className="flex items-center justify-start gap-2 text-red-500 hover:bg-red-500/5 hover:text-red-500"
                  onClick={handleDelete}
                >
                  <Trash size={18} /> Excluir
                </Button>
              </div>
            </div>
          )}
        </nav>
      ) : (
        <Skeleton className="rounded-full p-8" />
      )}
    </>
  )
}
