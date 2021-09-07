import { applyMiddleware, combineReducers, createStore } from "redux"
import { ThunkDispatch } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import AlbumsReducer from './albums/reducer'
import AlbumReducer from './album/reducer'
import { TYPES } from "./types"
import { IAction } from "../app/interfaces"
import { appSaga } from "./sagas"


const reducer = combineReducers({
  albumReducer: AlbumReducer,
  albumsReducer: AlbumsReducer
})

const composeEnhancers = composeWithDevTools({})
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducer, composeEnhancers(
  applyMiddleware(sagaMiddleware)
))

sagaMiddleware.run(appSaga)

export type AppDispatch = ThunkDispatch<RootState, void, IAction<TYPES>>
export type RootState = ReturnType<typeof store.getState>