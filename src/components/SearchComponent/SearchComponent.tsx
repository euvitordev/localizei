"use client"
import { ChangeEvent, KeyboardEvent, useState } from "react"
import { toast } from "sonner"
import api from "../../api/cep"
import { Footer } from "../Footer/FooterComponent"
import CepInfo from "./CepInfo"
import SearchInput from "./SearchInput"

interface CepData {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  ddd: string
}

interface HistoryItem {
  cep: string
  address: string
}

interface SearchComponentProps {
  setHistory: React.Dispatch<React.SetStateAction<HistoryItem[]>>
}

export default function SearchComponent({ setHistory }: SearchComponentProps) {
  const [input, setInput] = useState<string>("")
  const [cep, setCep] = useState<CepData>({
    cep: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
    ddd: "",
  })
  const [popupVisible, setPopupVisible] = useState<boolean>(false)
  const [address, setAddress] = useState<string>("")

  const handleSearch = async () => {
    if (!input.trim()) {
      toast.warning("Por favor, preencha o campo de CEP.")
      return
    }

    const cepSemEspaco = input.replace(/-/g, "")

    try {
      const response = await api.get<CepData>(`${cepSemEspaco}/json`)
      setCep(response.data)
      const newAddress = `${response.data.logradouro}, ${response.data.complemento}, ${response.data.bairro}, ${response.data.localidade} - ${response.data.uf} - ${response.data.ddd}`
      setAddress(newAddress)
      setHistory((prevHistory) => [
        { cep: response.data.cep, address: newAddress },
        ...prevHistory,
      ])
      toast.success("CEP encontrado com sucesso!")
      setInput("")
    } catch (error) {
      toast.error(
        "Não foi possível buscar o CEP. Por favor, insira um CEP válido."
      )
      setInput("")
    }
  }

  const handleGetLocation = async () => {
    if (navigator.geolocation) {
      setPopupVisible(true)
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords
          try {
            const response = await fetch(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.NEXT_PUBLIC_KEY_GOOGLE_MAPS}`
            )
            const data = await response.json()
            if (data.results.length > 0) {
              const address = data.results[0].formatted_address
              const addressComponents = data.results[0].address_components
              const newCep: CepData = {
                cep:
                  addressComponents.find((c: any) =>
                    c.types.includes("postal_code")
                  )?.long_name || "",
                logradouro:
                  addressComponents.find((c: any) => c.types.includes("route"))
                    ?.long_name || "",
                complemento: "",
                bairro:
                  addressComponents.find((c: any) =>
                    c.types.includes("sublocality")
                  )?.long_name || "",
                localidade:
                  addressComponents.find((c: any) =>
                    c.types.includes("locality")
                  )?.long_name || "",
                uf:
                  addressComponents.find((c: any) =>
                    c.types.includes("administrative_area_level_1")
                  )?.short_name || "",
                ddd: "",
              }
              setCep(newCep)
              setAddress(address)
              setHistory((prevHistory) => [
                { cep: newCep.cep, address },
                ...prevHistory,
              ])
              const promise = () =>
                new Promise((resolve) =>
                  setTimeout(() => resolve({ name: "Sonner" }), 2000)
                )

              toast.promise(promise, {
                loading: "Buscando localização...",
                success: () => {
                  return `Endereço encontrado: ${address}`
                },
                error: "Error",
              })
              // toast.success(`Endereço encontrado: ${address}`)
            } else {
              toast.error(
                "Não foi possível encontrar o endereço para a localização atual."
              )
            }
          } catch (error) {
            toast.error("Erro ao buscar o endereço.")
          }
          // finally {
          //   setTimeout(() => {
          //     setPopupVisible(false)
          //   }, 1000)
          // }
        },
        (error) => {
          toast.error("Não foi possível obter a localização.")
          setPopupVisible(false)
        }
      )
    } else {
      toast.error("Geolocalização não é suportada pelo seu navegador.")
    }
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <>
      <div className="flex flex-col w-full mx-auto max-w-7xl h-full justify-between p-4 gap-4">
        <div className="flex h-full gap-4 max-md:flex-col">
          {cep.cep && <CepInfo cep={cep} />}

          <iframe
            className="w-full rounded-3xl hover:rounded-2xl transition-all delay-75 duration-300"
            width="100%"
            height="100%"
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_KEY_GOOGLE_MAPS}=${cep.logradouro},${cep.bairro},${cep.localidade},${cep.uf}`}
            allowFullScreen
            loading="lazy"
          />
        </div>
        <SearchInput
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          handleSearch={handleSearch}
          handleGetLocation={handleGetLocation}
        />

        <Footer />
      </div>
      {/* <Popup visible={popupVisible} /> */}
    </>
  )
}
