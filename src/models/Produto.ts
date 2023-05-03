import { Categoria } from "./Categoria";
import User from "./User";

export interface Produto {
    id: number;
    nome: string;
    preco: number | string;
    img: string;
    descricao: string;
    data: string;
    categoria?: Categoria | null
    usuario?: User | null
}