import { TYPES } from "../types"
import { IAlbum } from '../../app/interfaces/album'
import { IAction } from "../../app/interfaces"
const { 
  FETCH_ALBUMS_FAILED, FETCH_ALBUMS_SUCCEDDED, 
  LOAD_MORE_ALBUMS, START_FETCHING_ALBUMS 
} = TYPES


export const startFetchingAlbums = ():IAction<typeof START_FETCHING_ALBUMS> => ({ type: START_FETCHING_ALBUMS })

export const fetchAlbumsSuccedded = (albums: IAlbum[]):IAction<typeof FETCH_ALBUMS_SUCCEDDED>  => ({ type: FETCH_ALBUMS_SUCCEDDED, payload: albums })

export const fetchAlbumsFailed = ():IAction<typeof FETCH_ALBUMS_FAILED> => ({ type: FETCH_ALBUMS_FAILED })

export const loadMoreAlbums = ():IAction<typeof LOAD_MORE_ALBUMS> => ({ type: LOAD_MORE_ALBUMS })
