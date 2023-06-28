import React from 'react'
import{Routes, Route} from 'react-router-dom'

import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import Questions from './Pages/Questions/Questions'
import DisplayQuestion from './Pages/Questions/DisplayQuestion'
import AskQuestion from './Pages/AskQuestion/AskQuestion'

const AllRoutes = () => {
  return (
    <Routes>
        <Route exact path ='/' element={<Home/>} />
        <Route exact path ='/Auth' element={<Auth/>}  />
        <Route exact path ='/Questions' element={<Questions/>}  />
        <Route exact path ='/AskQuestion' element={<AskQuestion/>}  />
        <Route exact path ='/Questions/:id' element={<DisplayQuestion/>}  />
        
        
    </Routes>
  )
}

export default AllRoutes