import { Dispatch } from 'react'
import { fetchPhotosFailed, fetchPhotosSuccedded, startFetchingPhotos } from '../../app/features/photos/photosSlice'
import { IAction, ID, IPhoto } from '../../interfaces'
import * as API from '../api-list'


export const getPhotos = (albumId: ID) => {
  return async (dispatch: Dispatch<IAction>) => {
    dispatch(startFetchingPhotos())

    try {
      const { data } = await API.getPhotos<IPhoto[]>(albumId)
      dispatch(fetchPhotosSuccedded(data))
    } 
    catch(err) {
      dispatch(fetchPhotosFailed())
    }
  }
}