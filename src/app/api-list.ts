import axios, { AxiosResponse } from 'axios'
import { ID } from '../interfaces'

const baseURL:string = 'https://jsonplaceholder.typicode.com'

const api = axios.create({
  baseURL
})


export const getAlbums = <T>(limit:number):Promise<AxiosResponse<T>> => api.get(`/albums?_limit=${limit}`)
export const getPhotos = <T>(albumId:ID):Promise<AxiosResponse<T>> => api.get(`/photos?albumId=${albumId}`)
