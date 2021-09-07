import { BrowserRouter as Router } from "react-router-dom"
import ScrollButton from './components/ScrollButton'
import Routes from './Routes'


export default function App() {
  return (
    <Router>
      <div className="container">
        <ScrollButton />
        <Routes />
      </div>
    </Router>
  )
}
