import { useState, FC } from 'react'
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


const ScrollButton:FC = () => {
  const [visible, setVisible] = useState<boolean>(false)

  const scrollToTop = ():void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })

    window.removeEventListener('scroll', toggleVisible)
  }

  const toggleVisible = ():void => {
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


export default ScrollButton