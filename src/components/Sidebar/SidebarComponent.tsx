"use client"
import { PanelLeftClose, PanelLeftOpen } from "lucide-react"
import { useState } from "react"
import { HistoryComponent } from "../SearchComponent/HistoryComponent"
import { StorageInformation } from "../StorageInformationComponent"
import { Button } from "../ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface HistoryItem {
  cep: string
  address: string
}

interface SidebarProps {
  history: HistoryItem[]
  onDelete: (index: number) => void
}

export default function Sidebar({ history, onDelete }: SidebarProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="absolute top-4 left-4 z-10 max-md:hidden">
            <Button variant={"ghost"} size={"icon"} onClick={toggleSidebar}>
              {isSidebarOpen ? <PanelLeftClose /> : <PanelLeftOpen />}
            </Button>
          </TooltipTrigger>
          <TooltipContent className="mx-2">
            {isSidebarOpen ? (
              <p>Fechar barra lateral</p>
            ) : (
              <p>Abrir barra lateral</p>
            )}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div
        className={`w-80 fixed h-full bg-zinc-50 dark:bg-background max-md:hidden flex flex-col justify-between p-4 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="py-8"></div>
        <div className="flex-grow overflow-y-auto">
          <HistoryComponent history={history} onDelete={onDelete} />
        </div>
        <div className="mt-8">
          <StorageInformation />
        </div>
      </div>
      <div
        className={`transition-all duration-300 ease-in-out max-md:hidden ${
          isSidebarOpen ? "ml-72" : "ml-0"
        }`}
      />
    </>
  )
}
