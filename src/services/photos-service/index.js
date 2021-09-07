import * as API from '../api-list'
import { startFetchingAlbumPhotos, fetchAlbumPhotosSuccedded, fetchAlbumPhotosFailed } from '../../store/album/actions'


export const getPhotos = albumId => {
  return async dispatch => {
    dispatch(startFetchingAlbumPhotos())

    try {
      const { data } = await API.getPhotos(albumId)
      dispatch(fetchAlbumPhotosSuccedded(data))
    } 
    catch(err) {
      dispatch(fetchAlbumPhotosFailed())
      throw err
    }
  }
}