import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import teamLogo from '/teamlogo.svg'
import Navbar from './components/navbar'
import Bar from './components/bar'
import Background from './components/background'
import UnderBar from './components/underbar'
import LastSpace from './components/footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <Background></Background>
      <Bar></Bar>
      <UnderBar></UnderBar>
      <LastSpace></LastSpace>
    </div>
  )
}

export default App
