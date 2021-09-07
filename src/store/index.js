import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from 'redux-thunk'
import AlbumsReducer from './albums/reducer'
import AlbumReducer from './album/reducer'


const reducer = combineReducers({
  albumReducer: AlbumReducer,
  albumsReducer: AlbumsReducer
})


export const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)