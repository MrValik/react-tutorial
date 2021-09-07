import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk, { ThunkDispatch } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import AlbumsReducer from './albums/reducer'
import AlbumReducer from './album/reducer'
import { TYPES } from "./types"
import { IAction } from "../app/interfaces"


const reducer = combineReducers({
  albumReducer: AlbumReducer,
  albumsReducer: AlbumsReducer
})

const composeEnhancers = composeWithDevTools({})

export const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
))


export type AppDispatch = ThunkDispatch<RootState, void, IAction<TYPES>>
export type RootState = ReturnType<typeof store.getState>