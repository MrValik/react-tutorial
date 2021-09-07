import * as API from '../api-list'
import { startFetchingAlbums, fetchAlbumsSuccedded, fetchAlbumsFailed } from '../../store/albums/actions'
import { IAlbum } from '../../app/interfaces/album'
import { AppDispatch, RootState } from '../../store'


export const getAlbums = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(startFetchingAlbums())

    try {
      const { limit } = getState().albumsReducer
      const { data } = await API.getAlbums<IAlbum[]>(limit)
      dispatch(fetchAlbumsSuccedded(data))
    } 
    catch (err) {
      dispatch(fetchAlbumsFailed())
    }
  }
}