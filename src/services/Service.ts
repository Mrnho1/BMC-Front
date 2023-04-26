import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://bemmecare.onrender.com/'
})

export const cadastroUsuario = async(url: any, dados: any, setDados: any) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const login = async(url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data.token)
}

export const getAll = async(url: string, setDados: Function, headers: any) => {
    const resposta = await api.get(url, headers)
    setDados(resposta.data)
}

export const getById = async(url: string, setDados: Function, headers: any) => {
    const resposta = await api.get(url, headers)
    setDados(resposta.data)
}

export const post = async(url: string, dados:any ,setDados: Function, headers: any) => {
    const resposta = await api.post(url, dados, headers)
    setDados(resposta.data)
}

export const put = async(url: string, dados:any ,setDados: Function, headers: any) => {
    const resposta = await api.put(url, dados, headers)
    setDados(resposta.data)
}

export const deleteId = async(url: string, headers: any) => {
    await api.delete(url, headers)
}