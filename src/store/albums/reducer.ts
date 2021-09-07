import { IAction } from "../../app/interfaces"
import { IAlbumState } from "../../app/interfaces/album"
import { TYPES } from "../types"
const {
   FETCH_ALBUMS_FAILED, FETCH_ALBUMS_SUCCEDDED,
   LOAD_MORE_ALBUMS, START_FETCHING_ALBUMS 
} = TYPES


const initialState:IAlbumState = {
  albums: [],
  limit: 20,
  total: 100,
  loading: false
}


const AlbumsReducer = (state = initialState, { type, payload }: IAction<TYPES> ) => {
  switch(type) {
    case START_FETCHING_ALBUMS:
      return {
        ...state,
        loading: true
      }

    case FETCH_ALBUMS_SUCCEDDED:
      return {
        ...state,
        albums: payload,
        loading: false
      }

    case FETCH_ALBUMS_FAILED:
      return {
        ...state,
        albums: [],
        loading: false
      }

    case LOAD_MORE_ALBUMS:
      return {
        ...state,
        limit: state.limit + 20
      }

    default: 
      return state
  }
}


export default AlbumsReducer