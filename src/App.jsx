import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Router from './router/router'
import Footer from './components/Footer'
import Header from './components/Header'
import Login from './components/modal/Login'
import SignUp from './components/modal/SignUp'

function App() {

  return (
    <BrowserRouter>
    <input type="checkbox" id="login"/>
    <input type="checkbox" id="signUp"/>
      <Header/>
      <Router/>
      <Footer/>
      <Login/>
      <SignUp/>
    </BrowserRouter>
  )
}

export default App
