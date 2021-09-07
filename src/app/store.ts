import { configureStore } from '@reduxjs/toolkit'
import albumsReducer from './features/albums/albumsSlice'
import photosReducer from './features/photos/photosSlice'


export const store = configureStore({
  reducer: {
    albumsReducer,
    photosReducer
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware({ 
      serializableCheck: false,
      immutableCheck: false
    })
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch