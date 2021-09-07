import { ID } from ".";


export interface IAlbum {
  id: ID
  title: string
}

export interface IAlbumState {
  albums: IAlbum[]
  limit: number
  total: number
  loading: boolean
}