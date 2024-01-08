"use client"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  ChevronRight,
  GithubIcon,
} from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

export function HeaderSheet({ children }: { children: React.ReactNode }) {
  const [currentPath, setCurrentPath] = useState("")

  useEffect(() => {
    setCurrentPath(window.location.pathname)
  }, [])

  const isProjectsPage = (path: string) => {
    return path.includes("/projetos")
  }

  const contactMe = [
    {
      text: "E-mail (Geral)",
      link: "mailto:dev.vitorlucas@gmail.com",
      icon: <Mail />,
    },
    {
      text: "Parcerias",
      link: "mailto:dev.vitorlucas@gmail.com",
      icon: <Mail />,
    },
    {
      text: "GitHub",
      link: "https://github.com/euvitordev",
      icon: <Github />,
    },
    {
      text: "Instagram",
      link: "https://www.instagram.com/vitordeev",
      icon: <Instagram />,
    },
    {
      text: "Linkedin",
      link: "https://www.linkedin.com/in/euvtitordev/",
      icon: <Linkedin />,
    },
  ]

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="">
          {children}
        </Button>
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="flex w-72 flex-col items-start justify-between"
      >
        <div className="mt-10 flex w-full  flex-col gap-4">
          <h2 className="text-2xl font-bold">Meios de contato</h2>
          {contactMe.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              className="group flex items-center justify-between text-2xl font-bold underline-offset-8 opacity-50 transition-all delay-75 duration-300 ease-in-out hover:underline hover:opacity-100"
            >
              <div className="flex items-center gap-2">
                {item.icon}
                {item.text}
              </div>
              <ChevronRight className=" invisible group-hover:visible" />
            </a>
          ))}
        </div>
        <SheetFooter className="w-full">
          <div className="flex w-full  flex-col gap-4">
            <a
              target="_blank"
              href="https://github.com/euvitordev/mimo-cep"
              className=""
            >
              <Button className="flex w-full items-center justify-between gap-4 rounded-xl border-2 border-yellow-300 bg-yellow-300 p-6 font-bold text-black shadow-2xl shadow-zinc-500/10 duration-700 hover:bg-transparent hover:text-white hover:shadow-yellow-300/10">
                Contribuir
                <GithubIcon />
              </Button>
            </a>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
