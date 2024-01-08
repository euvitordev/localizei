"use client"
import React, { useState } from "react"
import { Copy, Search } from "lucide-react"
import api from "../../api/cep"
import CopyToClipboard from "react-copy-to-clipboard"
import { Button } from "../ui/button"
import Image from "next/image"
import ImageAdventureMap from "../../../public/images/adventure_map.svg"

export default function PagePrimary() {
  const [input, setInput] = useState("")
  const [cep, setCep] = useState({
    cep: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
    ddd: "",
  })

  const dadosCep = [
    {
      name: "Logradouro",
      state: `${cep.logradouro}`,
    },
    {
      name: "Complemento",
      state: `${cep.complemento}`,
    },
    {
      name: "Bairro",
      state: `${cep.bairro}`,
    },
    {
      name: "Localidade",
      state: `${cep.localidade}`,
    },
    {
      name: "UF",
      state: `${cep.uf}`,
    },
    {
      name: "DDD",
      state: `${cep.ddd}`,
    },
  ]
  const enderecoCompleto = `${cep.cep}, ${cep.logradouro}, ${cep.complemento}, ${cep.bairro}, ${cep.localidade} - ${cep.uf} - ${cep.ddd}`

  const handleSearch = async () => {
    if (!input.trim()) {
      alert("Preencha algum CEP!")
      return
    }

    const cepSemEspaco = input.replace(/-/g, "")

    try {
      const response = await api.get(`${cepSemEspaco}/json`)
      setCep(response.data)
      setInput("")
    } catch (error) {
      alert("Erro ao buscar")
      setInput("")
    }
  }

  return (
    <main className="flex w-full h-full max-lg:p-0">
      <div className="bg-zinc-800 w-full h-full p-8 gap-8 flex flex-col rounded-l-xl max-lg:rounded-t-2xl max-lg:rounded-b-none">
        <h1 className="font-bold text-7xl">Buscar CEP</h1>
        <p className="font-medium text-xl max-w-2xl">
          Bem vindo ao <strong className="text-yellow-300">Fui de CEP</strong>,
          o caminho para encontrar seu destino. Localize, siga, chegue!!
        </p>

        <div className="xl:max-w-2xl max-lg:w-full flex flex-col justify-between h-full gap-8">
          {!cep.cep && (
            <Image
              src={ImageAdventureMap}
              alt="Imagem ilustrativa de um carro indo ate"
            />
          )}
          <div className="flex ">
            {cep.cep && (
              <div className="flex flex-col border-2 border-zinc-500/30 rounded-xl p-8 hover:border-yellow-300 duration-700 shadow-2xl shadow-zinc-500/30 hover:shadow-yellow-300/10 w-full h-full">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-bold text-2xl">
                    CEP: <span className="text-zinc-300/50">{cep.cep}</span>
                  </h2>

                  <CopyToClipboard
                    text={enderecoCompleto}
                    onCopy={() => {
                      alert("Endereço copiado para a área de transferência!")
                      setCep({
                        cep: "",
                        logradouro: "",
                        complemento: "",
                        bairro: "",
                        localidade: "",
                        uf: "",
                        ddd: "",
                      })
                    }}
                  >
                    <Button
                      className="bg-transparent border-2 border-zinc-700/50"
                      size={"icon"}
                    >
                      <Copy size={16} className="text-yellow-300" />
                    </Button>
                  </CopyToClipboard>
                </div>

                <div className="flex flex-col gap-12 text-justify">
                  {dadosCep.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-2 border-zinc-500/30 font-bold items-start text-xl"
                    >
                      <h3 className="">{item.name}:</h3>
                      <span className="text-zinc-400">{item.state}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="flex">
            <div className="flex items-center justify-between gap-4 border-2 border-yellow-300 rounded-l-xl hover:border-yellow-300 duration-700 shadow-2xl shadow-zinc-500/10 hover:shadow-yellow-300/10 w-full">
              <input
                className="bg-transparent w-full outline-none p-4 rounded-l-lg "
                type="text"
                name=""
                placeholder="Digite seu CEP..."
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.keyCode === 13) {
                    handleSearch()
                  }
                }}
                autoFocus
              />
            </div>
            <button
              className="flex items-center justify-center gap-4 border-2 border-yellow-300 rounded-r-xl bg-yellow-300 hover:bg-transparent duration-700 shadow-2xl shadow-zinc-500/10 hover:shadow-yellow-300/10 w-24 h-full"
              onClick={handleSearch}
            >
              <Search
                size={25}
                className="text-zinc-500 hover:text-zinc-100 hover:animate-pulse"
              />
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
