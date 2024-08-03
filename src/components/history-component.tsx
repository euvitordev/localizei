import { Filter, Trash } from "lucide-react"
import { Button } from "./ui/button"

const history = [
  {
    CEP: "27351-720",
    data: "18-05-2024",
    Endereco:
      "27351-720, Estrada Governador Chagas Freitas, até 2598/2599, Colônia Santo Antônio, Barra Mansa - RJ - 24",
  },
  {
    CEP: "27351-720",
    data: "18-05-2024",
    Endereco:
      "27351-720, Estrada Governador Chagas Freitas, até 2598/2599, Colônia Santo Antônio, Barra Mansa - RJ - 24",
  },
  {
    CEP: "27351-720",
    data: "18-05-2024",
    Endereco:
      "27351-720, Estrada Governador Chagas Freitas, até 2598/2599, Colônia Santo Antônio, Barra Mansa - RJ - 24",
  },
  {
    CEP: "27351-720",
    data: "18-05-2024",
    Endereco:
      "27351-720, Estrada Governador Chagas Freitas, até 2598/2599, Colônia Santo Antônio, Barra Mansa - RJ - 24",
  },
  {
    CEP: "27351-720",
    data: "18-05-2024",
    Endereco:
      "27351-720, Estrada Governador Chagas Freitas, até 2598/2599, Colônia Santo Antônio, Barra Mansa - RJ - 24",
  },
  {
    CEP: "27351-720",
    data: "18-05-2024",
    Endereco:
      "27351-720, Estrada Governador Chagas Freitas, até 2598/2599, Colônia Santo Antônio, Barra Mansa - RJ - 24",
  },
  {
    CEP: "27351-720",
    data: "18-05-2024",
    Endereco:
      "27351-720, Estrada Governador Chagas Freitas, até 2598/2599, Colônia Santo Antônio, Barra Mansa - RJ - 24",
  },
  {
    CEP: "27351-720",
    data: "18-05-2024",
    Endereco:
      "27351-720, Estrada Governador Chagas Freitas, até 2598/2599, Colônia Santo Antônio, Barra Mansa - RJ - 24",
  },
  {
    CEP: "27351-720",
    data: "18-05-2024",
    Endereco:
      "27351-720, Estrada Governador Chagas Freitas, até 2598/2599, Colônia Santo Antônio, Barra Mansa - RJ - 24",
  },
  {
    CEP: "27351-720",
    data: "18-05-2024",
    Endereco:
      "27351-720, Estrada Governador Chagas Freitas, até 2598/2599, Colônia Santo Antônio, Barra Mansa - RJ - 24",
  },
  {
    CEP: "27351-720",
    data: "18-05-2024",
    Endereco:
      "27351-720, Estrada Governador Chagas Freitas, até 2598/2599, Colônia Santo Antônio, Barra Mansa - RJ - 24",
  },
  {
    CEP: "27351-720",
    data: "18-05-2024",
    Endereco:
      "27351-720, Estrada Governador Chagas Freitas, até 2598/2599, Colônia Santo Antônio, Barra Mansa - RJ - 24",
  },
  {
    CEP: "27351-720",
    data: "18-05-2024",
    Endereco:
      "27351-720, Estrada Governador Chagas Freitas, até 2598/2599, Colônia Santo Antônio, Barra Mansa - RJ - 24",
  },
  {
    CEP: "27351-720",
    data: "18-05-2024",
    Endereco:
      "27351-720, Estrada Governador Chagas Freitas, até 2598/2599, Colônia Santo Antônio, Barra Mansa - RJ - 24",
  },
]

export function HistoryComponent() {
  return (
    <>
      <div className="flex flex-col px-2 overflow-y-auto max-md:hidden">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-medium text-2xl">Histórico de pesquisa</h2>
          <Button variant={"outline"} size={"icon"}>
            <Filter size={18} />
          </Button>
        </div>
        <div className="flex flex-col gap-2 pr-2 overflow-y-auto">
          {history.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg dark:bg-black/80 transition-all delay-75 duration-75 cursor-pointer"
            >
              <div className="flex p-2 flex-col rounded-t-md">
                <div className="flex items-center justify-between">
                  <strong className="pl-2">{item.CEP}</strong>
                  <Button variant={"secondary"} size={"icon"}>
                    <Trash size={18} />
                  </Button>
                </div>
              </div>

              <div className="flex px-4 py-2">
                <p className="text-sm dark:text-zinc-300">{item.Endereco}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
