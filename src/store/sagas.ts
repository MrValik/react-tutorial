import { takeEvery, call, put } from 'redux-saga/effects'
import * as API from './api-list'
import { IAlbum } from '../app/interfaces/album'
import { IAction } from '../app/interfaces'
import { IPhoto } from '../app/interfaces/photo'
import { fetchAlbumPhotosFailed, fetchAlbumPhotosSuccedded, startFetchingAlbumPhotos } from './album/actions'
import { fetchAlbumsFailed, fetchAlbumsSuccedded, startFetchingAlbums } from './albums/actions'
import { TYPES } from './types'
const { FETCH_ALBUMS, FETCH_ALBUM_PHOTOS } = TYPES



function* sagaWatcherFetchAlbums({ payload: { limit }}: IAction<TYPES>) {
  yield put(startFetchingAlbums())

  try {
    const result:IAlbum[] = yield call(fetchAlbums, limit)
    yield put(fetchAlbumsSuccedded(result))
  } catch (e) {
    yield put(fetchAlbumsFailed())
  }
}

function* sagaWatcherFetchAlbumPhotos({ payload: { albumId }}: IAction<TYPES>) {
  yield put(startFetchingAlbumPhotos())

  try {
    const result:IPhoto[] = yield call(fetchAlbumPhotos, albumId)
    yield put(fetchAlbumPhotosSuccedded(result))
  } catch (e) {
    yield put(fetchAlbumPhotosFailed())
  }
}


const fetchAlbums = async (limit: number) => {
  const { data } = await API.getAlbums<IAlbum[]>(limit)
  return data
}

const fetchAlbumPhotos = async (albumId: number) => {
  const { data } = await API.getPhotos<IPhoto[]>(albumId)
  return data
}


export function* appSaga() {
  yield takeEvery(FETCH_ALBUMS, sagaWatcherFetchAlbums)
  yield takeEvery(FETCH_ALBUM_PHOTOS, sagaWatcherFetchAlbumPhotos)
}