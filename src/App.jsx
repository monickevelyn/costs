import './App.css'
import './components/stylecomponents/Main.css'

import NavBar from './components/NavBar'
import Footer from './components/Footer'

import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <>
    <body className='body'>
      <NavBar />
      <main className='main'>
        <Outlet />
      </main>
      <Footer />      
    </body>
    </>
  )
}