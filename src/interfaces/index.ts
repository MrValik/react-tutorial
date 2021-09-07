export type ID = string | number

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

