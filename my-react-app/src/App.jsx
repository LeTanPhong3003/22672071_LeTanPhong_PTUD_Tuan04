import { useState } from 'react'
import './App.css'
import MenuComponent from './menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MenuComponent/>
    </>
  )
}

export default App
