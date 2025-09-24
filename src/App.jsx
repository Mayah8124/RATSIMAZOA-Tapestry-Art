import { Routes , Route } from 'react-router-dom'

import Navbar from './pages/Navbar'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Product from './pages/Product.jsx'
import Review from './pages/Review.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <div className='bg-initial'>
      <Navbar />
      <Home />
      <About />
      <Product />
      <Review />
      <Contact />
    </div>
  )
}

export default App
