import { PayloadAction } from '@reduxjs/toolkit'
import { takeEvery, put, call } from 'redux-saga/effects'
import * as API from './api-list'
import { IAlbum, ID, IPhoto } from '../interfaces/index'
import { fetchAlbumsFailed, fetchAlbumsSuccedded, startFetchingAlbums } from './features/albums/albumsSlice'
import { TYPES } from './types'
import { fetchPhotosFailed, fetchPhotosSuccedded, startFetchingPhotos } from './features/photos/photosSlice'
const { REQUEST_ALBUMS, REQUEST_PHOTOS } = TYPES


const fetchAlbums = async (limit: number) => {
  const { data } = await API.getAlbums<IAlbum[]>(limit)
  return data
}


const fetchAlbumPhotos = async (albumId: ID) => {
  const { data } = await API.getPhotos<IPhoto[]>(albumId)
  return data
}


function* sagaWorkerFetchAlbums({ payload }: PayloadAction<number>) {
  yield put(startFetchingAlbums())

  try {
    const result:IAlbum[] = yield call(fetchAlbums, payload )
    yield put(fetchAlbumsSuccedded(result))
  }
  catch(e) {
    yield put(fetchAlbumsFailed())
  }
}


function* sagaWorkerFetchAlbumPhotos({ payload }: PayloadAction<ID>) {
  yield put(startFetchingPhotos())

  try {
    const result:IPhoto[] = yield call(fetchAlbumPhotos, payload)
    yield put(fetchPhotosSuccedded(result))
  }
  catch(e) {
    yield put(fetchPhotosFailed())
  }
}



export function* rootSaga() {
  yield takeEvery(REQUEST_ALBUMS, sagaWorkerFetchAlbums)
  yield takeEvery(REQUEST_PHOTOS, sagaWorkerFetchAlbumPhotos)
}