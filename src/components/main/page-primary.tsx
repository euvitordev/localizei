"use client";
import React, { useState } from "react";
import { Copy, Search } from "lucide-react";
import api from "../../api/cep";
import CopyToClipboard from "react-copy-to-clipboard";
import { Button } from "../ui/button";
import Image from "next/image";
import ImageAdventureMap from "../../../public/images/adventure_map.svg";

export default function PagePrimary() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({
    cep: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
    ddd: "",
  });

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
  ];
  const enderecoCompleto = `${cep.cep}, ${cep.logradouro}, ${cep.complemento}, ${cep.bairro}, ${cep.localidade} - ${cep.uf} - ${cep.ddd}`;

  const handleSearch = async () => {
    if (!input.trim()) {
      alert("Preencha algum CEP!");
      return;
    }

    const cepSemEspaco = input.replace(/-/g, "");

    try {
      const response = await api.get(`${cepSemEspaco}/json`);
      setCep(response.data);
      setInput("");
    } catch (error) {
      alert("Erro ao buscar");
      setInput("");
    }
  };

  return (
    <main className="flex h-full w-full max-lg:p-0">
      <div className="flex h-full w-full flex-col gap-8 rounded-l-xl bg-zinc-800 p-6 max-lg:rounded-b-none max-lg:rounded-t-2xl">
        <h1 className="text-7xl font-bold">Buscar CEP</h1>
        <p className="max-w-2xl text-xl font-medium">
          Bem vindo ao <strong className="text-yellow-300">Fui de CEP</strong>,
          o caminho para encontrar seu destino. Localize, siga, chegue!!
        </p>

        <div className="mt-6 flex h-full flex-col justify-between gap-8 max-lg:w-full xl:max-w-2xl">
          {!cep.cep && (
            <Image
              width={600}
              src={ImageAdventureMap}
              alt="Imagem ilustrativa de um carro indo ate"
            />
          )}
          <div className="flex max-h-full w-full">
            {cep.cep && (
              <div className="flex h-full w-full flex-col rounded-xl border-2 border-zinc-500/30 p-8 shadow-2xl shadow-zinc-500/30 duration-700 hover:border-yellow-300 hover:shadow-yellow-300/10">
                <div className="mb-8 flex items-center justify-between">
                  <h2 className="text-2xl font-bold">
                    CEP: <span className="text-zinc-300/50">{cep.cep}</span>
                  </h2>

                  <CopyToClipboard
                    text={enderecoCompleto}
                    onCopy={() => {
                      alert("Endereço copiado para a área de transferência!");
                      setCep({
                        cep: "",
                        logradouro: "",
                        complemento: "",
                        bairro: "",
                        localidade: "",
                        uf: "",
                        ddd: "",
                      });
                    }}
                  >
                    <Button
                      className="border-2 border-zinc-700/50 hover:bg-zinc-700"
                      size={"icon"}
                      variant={"ghost"}
                    >
                      <Copy size={16} className="text-yellow-300" />
                    </Button>
                  </CopyToClipboard>
                </div>

                <div className="flex flex-col gap-8 text-justify">
                  {dadosCep.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 border-zinc-500/30 text-xl font-bold"
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
            <div className="flex w-full items-center justify-between gap-4 rounded-l-xl border-2 border-yellow-300 shadow-2xl shadow-zinc-500/10 duration-700 hover:border-yellow-300 hover:shadow-yellow-300/10">
              <input
                className="w-full rounded-l-lg bg-transparent p-4 outline-none "
                type="text"
                name=""
                placeholder="Digite seu CEP..."
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.keyCode === 13) {
                    handleSearch();
                  }
                }}
                autoFocus
              />
            </div>
            <button
              className="flex h-full w-24 items-center justify-center gap-4 rounded-r-xl border-2 border-yellow-300 bg-yellow-300 shadow-2xl shadow-zinc-500/10 duration-700 hover:bg-transparent hover:shadow-yellow-300/10"
              onClick={handleSearch}
            >
              <Search
                size={25}
                className="text-zinc-500 hover:animate-pulse hover:text-zinc-100"
              />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
