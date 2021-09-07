import { Dispatch } from 'react'
import { fetchAlbumsFailed, fetchAlbumsSuccedded, startFetchingAlbums } from '../../app/features/albums/albumsSlice'
import { RootState } from '../../app/store'
import { IAction, IAlbum } from '../../interfaces'
import * as API from '../api-list'


export const getAlbums = () => {
  return async (dispatch:Dispatch<IAction>, getState: () => RootState) => {
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