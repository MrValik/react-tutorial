import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'


const AlbumItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  flex-wrap: nowrap;
  gap: 20px;
`

const Album = styled.div`
  width: 100%;  
  display: flex;
  flex-wrap: nowrap;
  gap: 2px;
`

const AlbumTitle = styled.h5`
  white-space: break-all;
`


export default function AlbumItem({ album: { id, title }, idx }) {
  const history = useHistory()

  return (
    <AlbumItemContainer className="border shadow rounded">
      <Album>
        <p>{idx}.</p>
        <AlbumTitle>{title}</AlbumTitle>
      </Album>

      <button
        className="btn btn-info"
        style={{ height: '40px'}}
        onClick={() => history.push(`/${id}/photos`)}
      >
        Photos
      </button>
    </AlbumItemContainer>
  )
}
