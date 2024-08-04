"use client"
import { useEffect, useRef, useState } from "react"
import { Progress } from "./ui/progress"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
import { X } from "lucide-react"
import { Button } from "./ui/button"
import { Skeleton } from "./ui/skeleton"
import { toast } from "sonner"

export function StorageInformation() {
  const [usage, setUsage] = useState<number>(0)
  const [maxStorage, setMaxStorage] = useState<number>(5 * 1024 * 1024) // 5MB
  const [popupVisible, setPopupVisible] = useState<boolean>(false)
  const popupRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  const calculateLocalStorageUsage = (): number => {
    let total = 0
    for (const key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        total += (localStorage.getItem(key)?.length || 0) * 2
      }
    }
    return total
  }

  useEffect(() => {
    setUsage(calculateLocalStorageUsage())
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setPopupVisible(false)
      }
    }

    if (popupVisible) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [popupVisible])

  const progressValue = Math.min((usage / maxStorage) * 100, 100)

  const togglePopup = () => setPopupVisible((prev) => !prev)
  const handleClosePopup = () => {
    setPopupVisible(false)
  }

  const handleClearStorage = () => {
    toast.success("Armazenamento excluído com sucesso!")
    localStorage.clear()
    setUsage(0)
    setPopupVisible(false)
  }

  return (
    <>
      {isLoading ? (
        <>
          <div
            onClick={togglePopup}
            className="bg-foreground/5 border p-2 flex-col flex gap-4 rounded-xl cursor-pointer"
          >
            <h3 className="text-lg font-medium">Armazenamento</h3>
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <p className="text-sm text-foreground/60">Status de uso</p>
                <div className="flex items-center gap-1">
                  <span className="text-sm text-foreground/80">{`${(
                    usage /
                    1024 /
                    1024
                  ).toFixed(2)} MB`}</span>
                  <span className="text-sm text-foreground/60">{`/ ${
                    maxStorage / 1024 / 1024
                  } MB`}</span>
                </div>
              </div>
              <Progress value={progressValue} />
            </div>
          </div>

          {popupVisible && (
            <div className="fixed inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center w-screen h-screen">
              <div ref={popupRef}>
                <Card className="rounded-3xl shadow-2xl shadow-foreground/5">
                  <CardHeader>
                    <div className="flex items-center justify-between gap-12">
                      <h2 className="text-xl font-medium">
                        Detalhes do armazenamento
                      </h2>
                      <Button
                        onClick={handleClosePopup}
                        variant={"secondary"}
                        size={"icon"}
                        className="rounded-full h-8 w-8"
                      >
                        <X size={16} />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-2">
                      <p>
                        <strong>Uso atual:</strong>{" "}
                        {(usage / 1024 / 1024).toFixed(2)} MB (
                        {progressValue.toFixed(2)}%)
                      </p>

                      <p>
                        <strong>Armazenamento máximo:</strong>{" "}
                        {(maxStorage / 1024 / 1024).toFixed(2)} MB
                      </p>
                      <Progress value={progressValue} />
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-end gap-1">
                    <Button
                      variant={"ghost"}
                      onClick={handleClosePopup}
                      className="hover:bg-foreground/5 rounded-3xl"
                    >
                      Cancelar
                    </Button>
                    <Button
                      onClick={handleClearStorage}
                      variant="ghost"
                      className="bg-red-500/20 text-red-500 hover:bg-red-500/5 hover:text-red-600 rounded-3xl"
                    >
                      Limpar armazenamento
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          )}
        </>
      ) : (
        <Skeleton className="rounded-full p-8" />
      )}
    </>
  )
}
