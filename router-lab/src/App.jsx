import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Nav from './Components/Navbar'
import About from './Pages/About'
import Contact from './Pages/Contact'

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App