import { useEffect, useState, useCallback, FC } from 'react'
import styled from 'styled-components'
import AlbumItem from '../components/AlbumItem'
import { IAlbum } from '../interfaces'
import { getAlbums } from '../services/albums-service'


const HomePage = styled.div`
  width: 100%;
  margin: 30px auto;
`

const H2 = styled.h2`
  font-size: 45px;
  font-weight: 600;
  font-family: Georgia;
  text-align: center;
`

const AlbumList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
`

const NoData = styled.h4`
  color: red;
  text-align: center;
  margin-top: 80px;
`

const LoadMore = styled.span`
  width: 25px;
  height: 25px;
`

const LoadMoreButton = styled.button`
  width: 104px;
  height: 42px;
`

interface IAlbumState {
  albums: IAlbum[]
  count: number
  total: number
  loading: boolean
}

const initialState:IAlbumState = {
  albums: [],
  count: 20,
  total: 100,
  loading: false
}


const Home:FC = () => {
  const [data, setData] = useState<IAlbumState>(initialState)

  const fetchingAlbums = useCallback(async ():Promise<void> => {
    setData(data => ({
      ...data,
      loading: true
    }))

    const result = await getAlbums(data.count)

    setData(data => ({
      ...data,
      albums: result,
      loading: false
    }))
  }, [data.count])


  useEffect(():void => {
    fetchingAlbums()
  }, [fetchingAlbums])


  const handleLoadMore = ():void => {
    setData({
      ...data,
      count: data.count + 20
    })
  }
  

  return (
    <HomePage>
      <H2>Albums</H2>
      
      <hr />

      {data.albums?.length ? (
        <>
          <AlbumList>
            {data.albums.map((album, idx) => {
              return <AlbumItem 
                key={album?.id} 
                album={album} 
                idx={idx + 1}
              />
            })}
          </AlbumList>

          {data.total !== data.count ? (
            <LoadMoreButton 
              className="btn btn-primary shadow mt-4 mx-auto d-block"
              onClick={handleLoadMore}
              disabled={data.loading}
            >
              { data.loading 
                  ? <LoadMore className="spinner spinner-border text-info"></LoadMore> 
                  : 'Load More'
              }
            </LoadMoreButton>
          ) : null}
        </>
      ) : <NoData>No albums</NoData>}

      
    </HomePage>
  )
}


export default Home