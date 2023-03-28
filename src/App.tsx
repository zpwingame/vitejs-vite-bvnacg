import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import _ from 'lodash'

function App() {
  const [count, setCount] = useState(0)
  const [keyword, setKeyword] = useState('')
  const test = _.debounce(() => {
    console.log(111)
  }, 1000)
  useEffect(() => {
    test()
  }, [keyword])
  return (
    <div className="App">
      <div>shlj</div>
    <input type="text" onChange={(e) => {
      // setKeyword(e.target.value)
      test()
    }} /> 
    </div>
  )
}

export default App
