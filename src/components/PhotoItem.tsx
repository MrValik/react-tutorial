import { FC } from 'react'
import styled from 'styled-components'
import { IPhoto } from '../interfaces'


const PhotoItemCard = styled.div`
  width: 300px;
  height: 300px;
  overflow: hidden;
`


const Photo = styled.img`
  width: 100%;
  height: 100%;
`


interface IProps {
  photo: IPhoto
}


const PhotoItem:FC<IProps> = ({ photo: { url, title } }) => {
  return (
    <PhotoItemCard className="shadow rounded">
      <Photo src={url} alt={title}/>
    </PhotoItemCard>
  )
}


export default PhotoItem