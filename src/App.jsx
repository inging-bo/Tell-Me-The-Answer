import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Router from './router/router'
import Footer from './components/Footer'
import Header from './components/Header'
import Login from './components/modal/Login'
import SignUp from './components/modal/SignUp'
import AuthState from './components/AuthState'

function App() {

  return (
    <BrowserRouter>
    <input type="checkbox" id="login"/>
    <input type="checkbox" id="signUp"/>
      <AuthState/>
      <Header/>
      <Router/>
      <Footer/>
      <Login/>
      <SignUp/>
    </BrowserRouter>
  )
}

export default App
