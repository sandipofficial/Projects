import "./App.css"
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from "./pages/Dashboard"
import { useState } from "react"
import PrivateRoute from "./components/PrivateRoute"

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false)
  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col ">
      <Navbar isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login setIsLoggedin={setIsLoggedin}/>} />
        <Route path='/signup' element={<Signup setIsLoggedin={setIsLoggedin}/>} />
        <Route path='/dashboard' element={
        <PrivateRoute isLoggedin={isLoggedin}><Dashboard/></PrivateRoute>
        } />
      </Routes>
    </div>
  )
}

export default App;
