import { FC } from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import Routes from './Routes'
import ScrollButton from './components/ScrollButton'


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