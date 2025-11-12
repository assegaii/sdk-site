import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { CartProvider } from '@contexts/CartContext'

import {
  Header,
  Footer,
  MainContent,
  Documents
} from '@components';



import './App.css'


function App() {

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/documents" element={<Documents />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
