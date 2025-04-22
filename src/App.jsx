import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import CarDetails from './pages/CarDetails'
import About from './pages/about';
import Popular from './pages/popular'
import Profile from './pages/profile'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cardetail' element={<CarDetails/>}/>
        
        <Route path='/about' element={<About/>}/>
        <Route path='/popular' element={<Popular/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
  )
}

export default App