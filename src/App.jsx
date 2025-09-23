import { Routes , Route } from 'react-router-dom'

import Navbar from './pages/Navbar'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Product from './pages/Product.jsx'

function App() {
  return (
    <div className='bg-initial'>
      <Navbar />
      <Home />
      <About />
      <Product />
    </div>
  )
}

export default App
