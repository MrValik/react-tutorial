import { ID, IPhoto } from '../../interfaces'
import * as API from '../api-list'


export const getPhotos = async (albumId: ID) => {
  try {
    const { data } = await API.getPhotos<IPhoto[]>(albumId)
    return data
  } catch(err) {
    throw err
  }
}