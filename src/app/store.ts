import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import albumsReducer from './features/albums/albumsSlice'
import photosReducer from './features/photos/photosSlice'
import { rootSaga } from './sagas'


const sagaMiddleware = createSagaMiddleware()


export const store = configureStore({
  reducer: {
    albumsReducer,
    photosReducer
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware({ 
      thunk: false,
      serializableCheck: false,
      immutableCheck: false
    }).concat(sagaMiddleware)
})


sagaMiddleware.run(rootSaga)


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch