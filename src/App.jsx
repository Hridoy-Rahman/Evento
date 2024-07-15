import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './Pages/Home Page/Banner'
import Home from './Pages/Home Page/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
     <Home/>
     </div>
    </>
  )
}

export default App
