import axios from "axios"

const cep = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_CEP_URL,
})

export default cep
