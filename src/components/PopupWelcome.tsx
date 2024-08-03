"use client"
import React, { useEffect, useState } from "react"
import { Card, CardFooter, CardHeader, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { X } from "lucide-react"

export function PopupWelcome() {
  const [isPopupVisible, setPopupVisible] = useState(false)

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenPopup")
    if (!hasSeenPopup) {
      setPopupVisible(true)
      localStorage.setItem("hasSeenPopup", "true")
    }
  }, [])

  const handleClosePopup = () => {
    setPopupVisible(false)
  }

  return (
    <>
      {isPopupVisible && (
        <div
          className="fixed inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={handleClosePopup}
        >
          <div className="flex flex-col gap-4 rounded-3xl shadow-2xl shadow-foreground/5 bg-background w-full max-w-xl p-6 mx-8">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-2xl">
                Apresentamos a versão 1.0.0
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
            <div className="">
              <strong>Atualização de</strong>{" "}
              <span className="">agosto de 2024</span>
              <p className="text-base text-foreground/60">
                Contamos agora com diversas funcionalidades!
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-2 my-4">
                <li className="text-sm text-foreground/80">
                  Suporte a localização com maior precisão.
                </li>
                <li className="text-sm text-foreground/80">
                  Nova funcionalidade para obter a localização em tempo real.
                </li>
                <li className="text-sm text-foreground/80">
                  Até 5MB de armazenamento para salvar o histórico de busca.
                </li>
                <li className="text-sm text-foreground/80">
                  Interface de usuário mais intuitiva e fácil de usar.
                </li>
                <li className="text-sm text-foreground/80">
                  Melhorias de desempenho e correções de bugs.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
