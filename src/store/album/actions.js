import { FETCH_ALBUM_PHOTOS_FAILED, FETCH_ALBUM_PHOTOS_SUCCEDDED, START_FETCHING_ALBUM_PHOTOS } from "../types";


export const startFetchingAlbumPhotos = () => ({ type: START_FETCHING_ALBUM_PHOTOS })

export const fetchAlbumPhotosSuccedded = photos => ({ type: FETCH_ALBUM_PHOTOS_SUCCEDDED, payload: photos })

export const fetchAlbumPhotosFailed = () => ({ type: FETCH_ALBUM_PHOTOS_FAILED })