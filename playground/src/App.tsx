import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import {Test, Pagitation} from 'mui'
// import 'mui/src/index.css'
import {Pagitation} from './es'


function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
       <Pagitation 
        totalCount={100}
      />
    </section>
  )
}

export default App
