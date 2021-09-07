import { useCallback, useEffect, useState, FC } from 'react'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import PhotoItem from '../components/PhotoItem'
import { IPhoto } from '../interfaces'
import { getPhotos } from '../services/photos-service'


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
  const params = useParams<{ id?: string }>()
  const history = useHistory()
  const [photos, setPhotos] = useState<IPhoto[]>([])


  const fetchingAlbumPhotos = useCallback(async ():Promise<void> => {
    const result = await getPhotos(params?.id || '')
    setPhotos(result)
  }, [params])


  useEffect(():void => {
    fetchingAlbumPhotos()
  }, [fetchingAlbumPhotos])


  return (
    <div className="container my-4">
      <Button 
        className="btn btn-dark"
        onClick={():void => history.push('/')}
      >
        <i className="fas fa-chevron-circle-left" aria-hidden={true}></i>
        Go Back
      </Button>

      <br />

      {photos?.length ? (
        <PhotoList>
          {photos.map(photo => {
            return <PhotoItem 
              key={photo.id}
              photo={photo}
            />
          })}
        </PhotoList>
      ) : <NoData>No photos</NoData>}
    </div>
  )
}


export default Photos