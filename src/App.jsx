import { useState } from 'react'
import './App.css'
import TokohIslam from './TokohIslam'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TokohIslam />
    </>
  )
}

export default App
