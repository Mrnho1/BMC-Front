import { Categoria } from "./Categoria";

export interface Produto {
    id: number;
    nome: string;
    preco: number | string;
    img: string;
    descricao: string;
    data: string;
    categoria?: Categoria | null
}