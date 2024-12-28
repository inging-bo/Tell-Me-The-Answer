import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Router from './router/router'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Router/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
