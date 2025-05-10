import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import CarDetails from './pages/CarDetails'
import About from './pages/about';
import Popular from './pages/popular'
import Cart from './pages/Cart'
import Book from './pages/Book'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cardetails' element={<CarDetails/>}/>
        
        <Route path='/about' element={<About/>}/>
        <Route path='/popular' element={<Popular/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/book' element={<Book/>}/>

      </Routes>
    </div>
  )
}

export default App