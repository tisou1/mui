import { useState } from 'react'
import './App.css'
import {Pagitation} from 'mui'
import 'mui/dist/es/index.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
       <Pagitation 
        totalCount={200}
        onChange={(...arg) => console.log(arg)}
      />
    </section>
  )
}

export default App
