import { FC } from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import ScrollButton from './components/ScrollButton'
import Routes from './Routes'


const App:FC = () => {
  return (
    <Router>
      <div className="container">
        <ScrollButton />
        <Routes />
      </div>
    </Router>
  )
}


export default App