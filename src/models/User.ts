import { Produto } from "./Produto"

interface User {
    id:number
    nome: string
    usuario: string
    senha: string
    foto: string
    produto?: Produto[]
}

export default User