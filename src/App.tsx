import { CartProvider } from '@contexts/CartContext'

import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'
import MainContent from '@components/MainContent/MainContent'



import './App.css'


function App() {

  return (
    <CartProvider>
      <div className="App">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App
