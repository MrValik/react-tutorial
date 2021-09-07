import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPhoto, IPhotoState } from '../../../interfaces'


const initialState:IPhotoState = {
  photos: [],
  loading: false
}


const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    startFetchingPhotos(state):IPhotoState {
      return {
        ...state,
        loading: true
      }
    },
    fetchPhotosSuccedded(state, { payload }: PayloadAction<IPhoto[]>):IPhotoState {
      return {
        ...state,
        photos: payload,
        loading: false
      }
    },
    fetchPhotosFailed(state):IPhotoState {
      return {
        ...state,
        loading: false
      }
    }
  }
})


// Export Actions
export const { startFetchingPhotos, fetchPhotosSuccedded, fetchPhotosFailed } = photosSlice.actions

// Export Reducer
export default photosSlice.reducer