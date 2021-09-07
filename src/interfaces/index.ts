export type ID = string | number | undefined

export interface IAlbum {
  id: ID
  title: string
}

export interface IPhoto {
  albumId: ID
  id: ID
  title: string
  url: string
}

export interface IAlbumState {
  albums: IAlbum[]
  limit: number
  total: number
  loading: boolean
}

export interface IPhotoState {
  photos: IPhoto[]
  loading: boolean
}

export interface IAction {
  type: any
  payload: any | undefined
}