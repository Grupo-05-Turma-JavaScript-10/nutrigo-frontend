import axios from "axios";
import type Category from "../models/Category";
import type Product from "../models/Product";

const api = axios.create({
  baseURL: 'http://localhost:4000'
})

export const fetch = async(url: string, setDados: Function, header: Object = {}) => {
  const response = await api.get(url, header)
  setDados(response.data)
}

export const create = async(url: string, dados: Object, setDados: Function, header: Object = {}) => {
  const response = await api.post(url, dados, header)
  setDados(response.data)
}

export const update = async(url: string, dados: Object, setDados: Function, header: Object = {}) => {
  const response = await api.put(url, dados, header)
  setDados(response.data)
}

export const remove = async(url: string, header: Object = {}) => {
  await api.delete(url, header)
}

export const listCategories = async(setDados: Function, header: Object = {}) => {
  await fetch('/categorias', setDados, header)
}

export const getCategoryById = async(id: number, setDados: Function, header: Object = {}) => {
  await fetch(`/categorias/${id}`, setDados, header)
}

export const searchCategoriesByDescription = async(descricao: string, setDados: Function, header: Object = {}) => {
  await fetch(`/categorias/descricao/${descricao}`, setDados, header)
}

export const createCategory = async(categoria: Category, setDados: Function, header: Object = {}) => {
  await create('/categorias', categoria, setDados, header)
}

export const updateCategory = async(categoria: Category, setDados: Function, header: Object = {}) => {
  await update('/categorias', categoria, setDados, header)
}

export const deleteCategory = async(id: number, header: Object = {}) => {
  await remove(`/categorias/${id}`, header)
}



export const listProducts = async(setDados: Function, header: Object = {}) => {
  await fetch('/produtos', setDados, header)
}

export const getProductById = async(id: number, setDados: Function, header: Object = {}) => {
  await fetch(`/produtos/${id}`, setDados, header)
}

export const listHealthyProducts = async(setDados: Function, header: Object = {}) => {
  await fetch('/produtos/saudaveis', setDados, header)
}

export const searchProductsByName = async(nome: string, setDados: Function, header: Object = {}) => {
  await fetch(`/produtos/nome/${nome}`, setDados, header)
}

export const createProduct = async(produto: Product, setDados: Function, header: Object = {}) => {
  await create('/produtos', produto, setDados, header)
}

export const updateProduct = async(produto: Product, setDados: Function, header: Object = {}) => {
  await update('/produtos', produto, setDados, header)
}

export const deleteProduct = async(id: number, header: Object = {}) => {
  await remove(`/produtos/${id}`, header)
}

export default api;
