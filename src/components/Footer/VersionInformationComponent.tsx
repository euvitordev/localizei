import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { GitBranch } from "lucide-react"
import { melhorias, caracteristicas } from "../../data/UpdateInformation"
export function VersionInformation() {
  return (
    <>
      <Dialog>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <DialogTrigger className="flex items-center gap-1 text-foreground/40 hover:text-foreground transition-all delay-100 duration-100">
                <GitBranch size={12} />
                <span className="text-xs">v1.0.0</span>
              </DialogTrigger>
            </TooltipTrigger>
            <TooltipContent>
              <p>Conferir detalhes da versão</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <DialogContent className="w-full max-w-7xl h-[80vh] flex flex-col">
          <DialogHeader>
            <DialogTitle className="font-bold text-4xl">v1.0.0</DialogTitle>
            <DialogDescription>
              <strong>Atualização de</strong>{" "}
              <span className="">27 de julho de 2024</span>
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col overflow-auto pr-8 gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-xl underline underline-offset-4">
                Melhorias
              </h2>
              {melhorias.map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <h4 className="font-medium text-lg opacity-60">
                    {item.titulo}
                  </h4>
                  {item.descricoes.map((item, index) => (
                    <p key={index} className="text-sm">
                      - {item}
                    </p>
                  ))}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-xl underline underline-offset-4">
                Caracteristicas
              </h2>
              {caracteristicas.map((item) => (
                <p key={item} className="text-sm">
                  - {item}
                </p>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
