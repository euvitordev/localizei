import { Copy } from "lucide-react"
import { Button } from "../ui/button"
import CopyToClipboard from "react-copy-to-clipboard"
import { toast } from "sonner"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface CepData {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  ddd: string
}

interface CepInfoProps {
  cep: CepData
}

export default function CepInfo({ cep }: CepInfoProps) {
  const dadosCep = [
    { name: "Endereço", state: cep.logradouro },
    { name: "Complemento", state: cep.complemento },
    { name: "Bairro", state: cep.bairro },
    { name: "Cidade", state: cep.localidade },
    { name: "Estado", state: cep.uf },
  ]

  const enderecoCompleto = `${cep.cep}, ${cep.logradouro}, ${cep.complemento}, ${cep.bairro}, ${cep.localidade} - ${cep.uf} - ${cep.ddd}`

  return (
    <div className="group w-full bg-foreground/5 rounded-3xl p-8 flex flex-col gap-6 hover:rounded-2xl transition-all delay-75 duration-300 hover:bg-foreground/10">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          CEP: <span className="text-foreground/60">{cep.cep}</span>
        </h2>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <CopyToClipboard
                text={enderecoCompleto}
                onCopy={() => {
                  toast.success(
                    "Endereço copiado para a área de transferência!"
                  )
                }}
              >
                <Button
                  variant={"secondary"}
                  size={"lg"}
                  className="group-hover:bg-foreground/10 rounded-full hover:bg-foreground/40 gap-4 "
                >
                  <Copy />
                  <span className="hidden group-hover:flex">Copiar</span>
                </Button>
              </CopyToClipboard>
            </TooltipTrigger>
            <TooltipContent>
              <p>Copiar endereço</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="flex flex-col gap-8 text-justify">
        {dadosCep.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-2 border-zinc-500/30 text-xl font-bold max-lg:flex-col"
          >
            <h3 className="">{item.name}:</h3>
            <span className="text-zinc-400">{item.state}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
