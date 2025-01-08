import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Router from './router/router'
import {Header} from './components/Header'
import { HomeBtn } from './components/HomeBtn'
function App() {

  return (
    <BrowserRouter>
      <section>
        <Header/>
        <section className={`routerSection`}>
          <Router/>
        </section>
        <HomeBtn/>
      </section>
    </BrowserRouter>
  )
}

export default App
