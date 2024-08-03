"use client"
import { ArrowUp, Search } from "lucide-react"
import { ChangeEvent, KeyboardEvent, useState } from "react"
import { Button } from "../ui/button"
import { Skeleton } from "../ui/skeleton"
import { SearchCurrentLocation } from "./SearchCurrentLocation"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip"

interface SearchInputProps {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void
  handleSearch: () => void
  handleGetLocation: () => void
}

export default function SearchInput({
  value,
  onChange,
  onKeyDown,
  handleSearch,
  handleGetLocation,
}: SearchInputProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading ? (
        <div className="flex items-center gap-4 justify-between">
          <div className="rounded-full p-4 flex items-center w-full gap-6 bg-foreground/5 transition-all delay-75 duration-300 hover:bg-foreground/10">
            <Search size={40} />
            <input
              type="text"
              value={value}
              onChange={onChange}
              onKeyDown={onKeyDown}
              autoFocus
              className="bg-transparent border-0 outline-none w-full"
              placeholder="Digite seu CEP..."
            />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    onClick={handleSearch}
                    variant={"default"}
                    size={"icon"}
                    className="rounded-full w-14 h-12 hover:bg-foreground/50"
                  >
                    <ArrowUp />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="">
                  <p>Buscar</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <SearchCurrentLocation handleGetLocation={handleGetLocation} />
        </div>
      ) : (
        <Skeleton className="rounded-full p-8" />
      )}
    </>
  )
}
