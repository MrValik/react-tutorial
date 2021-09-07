import { FETCH_ALBUMS_FAILED, FETCH_ALBUMS_SUCCEDDED, LOAD_MORE_ALBUMS, START_FETCHING_ALBUMS } from "../types"


const initialState = {
  albums: [],
  limit: 20,
  total: 100,
  loading: false
}


const AlbumsReducer = (state = initialState, { type, payload }) => {
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