import React, { useState } from 'react'
import styled from 'styled-components'


const Button = styled.button`
  border-radius: 50%;
  position: fixed;
  bottom: 50px;
  right: 30px;
`

const Icon = styled.i`
  font-size: 27px;
`


export default function ScrollButton() {
  const [visible, setVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })

    window.removeEventListener('scroll', toggleVisible)
  }

  const toggleVisible = () => {
    window.pageYOffset > window.innerHeight ? setVisible(true) : setVisible(false)
  }

  if (typeof window !== "undefined") {
    window.addEventListener('scroll', toggleVisible)
  }  
  

  return (
    <Button 
      id="scrollButton"
      className={`btn btn-dark shadow ${visible ? 'visible' : 'invisible'}`}
      onClick={scrollToTop}
      disabled={!visible}
    >
      <Icon className="fas fa-angle-up" aria-hidden={true}></Icon>
    </Button>
  )
}