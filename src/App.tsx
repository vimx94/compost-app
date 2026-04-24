// import React from 'react'
import './styles/index.css'
import Navbar from './components/organisms/Navbar'
import { HomePage } from './pages/HomePage'

function App() {
  // const [count, setCount] = React.useState(0)

  return (
    <>
    <Navbar/>
    <main>
      <HomePage />
    </main>
    </>
  )
}

export default App
