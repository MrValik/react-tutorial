import { FETCH_ALBUMS_FAILED, FETCH_ALBUMS_SUCCEDDED, LOAD_MORE_ALBUMS, START_FETCHING_ALBUMS } from "../types"


export const startFetchingAlbums = () => ({ type: START_FETCHING_ALBUMS })

export const fetchAlbumsSuccedded = albums => ({ type: FETCH_ALBUMS_SUCCEDDED, payload: albums })

export const fetchAlbumsFailed = () => ({ type: FETCH_ALBUMS_FAILED })

export const loadMoreAlbums = () => ({ type: LOAD_MORE_ALBUMS })
