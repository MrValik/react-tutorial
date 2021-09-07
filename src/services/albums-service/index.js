import * as API from '../api-list'
import { startFetchingAlbums, fetchAlbumsSuccedded, fetchAlbumsFailed } from '../../store/albums/actions'


export const getAlbums = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchingAlbums())

    try {
      const { limit } = getState().albumsReducer
      const { data } = await API.getAlbums(limit)
      dispatch(fetchAlbumsSuccedded(data))
    } 
    catch (err) {
      dispatch(fetchAlbumsFailed())
      throw err
    }
  }
}