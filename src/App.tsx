import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Depoimento from './components/Depoimento'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Depoimento></Depoimento>
    </>
  )
}

export default App
