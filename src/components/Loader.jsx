import React, { Component } from 'react'
import styled from 'styled-components'


const LoaderContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Spinner = styled.div`
  width: 70px;
  height: 70px;
`


class Loader extends Component {
  render() {
    return (
      <LoaderContainer>
        <Spinner className="spinner spinner-border text-info"></Spinner>
      </LoaderContainer>
    )
  }
}


export default Loader