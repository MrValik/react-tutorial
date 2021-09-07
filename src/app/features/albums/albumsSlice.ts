import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAlbum, IAlbumState } from '../../../interfaces'


const initialState:IAlbumState = {
  albums: [],
  limit: 20,
  total: 100,
  loading: false
}


const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    startFetchingAlbums(state):IAlbumState {
      return {
        ...state,
        loading: true
      }
    },
    fetchAlbumsSuccedded(state, { payload }: PayloadAction<IAlbum[]>):IAlbumState {
      return {
        ...state,
        albums: payload,
        loading: false
      }
    },
    fetchAlbumsFailed(state):IAlbumState {
      return {
        ...state,
        loading: false
      }
    },
    loadMoreAlbums(state):IAlbumState {
      return {
        ...state,
        limit: state.limit + 20
      }
    }
  }
})


// Export Actions
export const { startFetchingAlbums, fetchAlbumsSuccedded, fetchAlbumsFailed, loadMoreAlbums } = albumsSlice.actions

// Export Reducer
export default albumsSlice.reducer