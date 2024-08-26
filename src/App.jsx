import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import './App.css'
import HiddenTreasures from './pages/HiddenTreasures.jsx'
import Footer from './components/Footer.jsx'
import HolderRewards from './pages/HolderRewards.jsx'
import Contact from './pages/Contact.jsx'
import Welcome from './pages/Welcome.jsx'
import Products from './pages/Products.jsx'
function App() {
  

  return (
    <div className='outermostdiv'>
      <Navbar/>
    <Welcome/>
    </div>

  )
}

export default App
