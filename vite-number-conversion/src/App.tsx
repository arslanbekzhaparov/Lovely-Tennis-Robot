import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import teamLogo from '/teamlogo.svg'
import Navbar from './components/navbar'
import Bar from './components/bar'
import Background from './components/background'
import UnderBar from './components/underbar'
import LastSpace from './components/footer'
import WebSocketComponent from './components/websocket'
import Loading from './components/loading'

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate page loading for 2 seconds
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? <Loading /> : 
      <div><Navbar></Navbar>
      <Background></Background>
      <Bar></Bar>
      <UnderBar></UnderBar>
      <LastSpace></LastSpace></div>}
    </div>
  )
}

export default App
