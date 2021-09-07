import { IAlbum } from '../../interfaces'
import * as API from '../api-list'


export const getAlbums = async (count:number) => {
  try {
    const { data } = await API.getAlbums<IAlbum[]>(count)
    return data
  }catch (err) {
    throw err
  }
}