import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MainContent from './components/MainContent/MainContent'

import './App.css'


function App() {

  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
