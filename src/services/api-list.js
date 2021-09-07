import axios from 'axios'

const baseURL = 'https://jsonplaceholder.typicode.com'

const api = axios.create({
  baseURL
})


export const getAlbums = limit => api.get(`/albums?_limit=${limit}`)
export const getPhotos = albumId => api.get(`/photos?albumId=${albumId}`)