import * as API from '../api-list'
import { startFetchingAlbumPhotos, fetchAlbumPhotosSuccedded, fetchAlbumPhotosFailed } from '../../store/album/actions'
import { IPhoto } from '../../app/interfaces/photo'
import { ID } from '../../app/interfaces'
import { AppDispatch } from '../../store'


export const getPhotos = (albumId:ID) => {
  return async (dispatch: AppDispatch) => {
    dispatch(startFetchingAlbumPhotos())

    try {
      const { data } = await API.getPhotos<IPhoto[]>(albumId)
      dispatch(fetchAlbumPhotosSuccedded(data))
    } 
    catch(err) {
      dispatch(fetchAlbumPhotosFailed())
      throw err
    }
  }
}