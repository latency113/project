import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Signup from './pages/Signup'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App