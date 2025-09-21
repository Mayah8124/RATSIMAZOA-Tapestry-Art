import { Routes , Route } from 'react-router-dom'

import Navbar from './pages/Navbar'
import Home from './pages/Home.jsx'

function App() {
  return (
    <div className='bg-initial'>
      <Navbar />
      <Home />
    </div>
  )
}

export default App
