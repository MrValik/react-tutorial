import React from 'react'
import styled from 'styled-components'


const PhotoItemCard = styled.div`
  width: 300px;
  height: 300px;
  overflow: hidden;
`


const Photo = styled.img`
  width: 100%;
  height: 100%;
`


export default function PhotoItem({ photo: { url, title } }) {
  return (
    <PhotoItemCard className="shadow rounded">
      <Photo src={url} alt={title}/>
    </PhotoItemCard>
  )
}