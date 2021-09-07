import { useEffect, FC } from 'react'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import PhotoItem from '../components/PhotoItem'
import Loader from '../components/Loader'
import { useTypedSelector } from '../app/hooks/useTypedSelector'
import { AppDispatch } from '../store'
import { IPhoto } from '../app/interfaces/photo'
import { fetchAlbumPhotos } from '../store/album/actions'


const PhotoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`

const Button = styled.button`
  width: 120px;
  height: 40px;
  display: flex;
  margin: 0 auto;
  gap: 10px;
  align-items: center;
`

const NoData = styled.h4`
  color: red;
  text-align: center;
  margin-top: 80px;
`


const Photos:FC = () => {
  const params = useParams<{ id: string }>()
  const history = useHistory()
  const dispatch = useDispatch<AppDispatch>()
  const { photos, loading } = useTypedSelector(state => state.albumReducer)


  useEffect(():void => {
    dispatch(fetchAlbumPhotos(params.id))
  }, [dispatch, params])


  return (
    <div className="container my-4">
      {loading ? <Loader /> : (
        <>
          <Button 
            className="btn btn-dark"
            onClick={() => history.push('/')}
          >
            <i className="fas fa-chevron-circle-left" aria-hidden={true}></i>
            Go Back
          </Button>

          <br />

          {photos?.length ? (
            <PhotoList>
              {photos.map((photo:IPhoto) => {
                return <PhotoItem 
                  key={photo.id}
                  photo={photo}
                />
              })}
            </PhotoList>
          ) : <NoData>No photos</NoData>}
        </>
      )}
    </div>
  )
}


export default Photos