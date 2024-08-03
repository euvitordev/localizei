import { Github, Linkedin, Mail } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip"
import { VersionInformation } from "./VersionInformationComponent"

const contactInformation = [
  {
    link: "https://github.com/euvitordev/localizei",
    content: "github",
    icon: <Github size={12} />,
  },
  {
    link: "mailto:dev.vitorlucas@gmail.com",
    content: "contato",
    icon: <Mail size={12} />,
  },
  {
    link: "https://www.linkedin.com/in/euvtitordev/",
    content: "linkedin",
    icon: <Linkedin size={12} />,
  },
]
export function Footer() {
  return (
    <div className="flex items-center justify-between px-8">
      <div className="flex items-center gap-4">
        {contactInformation.map((item, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger>
                <a
                  href={item.link}
                  target="_blank"
                  className="flex items-center gap-1 text-foreground/40 hover:text-foreground transition-all delay-100 duration-100"
                >
                  {item.icon}
                  <span className="text-xs">{item.content}</span>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.content}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
      <div className="">
        <VersionInformation />
      </div>
    </div>
  )
}
