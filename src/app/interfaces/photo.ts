import { ID } from ".";


export interface IPhoto {
  id: ID
  title: string
  albumId: ID
  url: string
}

export interface IPhotoState {
  photos: IPhoto[]
  loading: boolean
}