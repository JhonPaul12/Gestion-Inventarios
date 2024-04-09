
import { Button } from '@nextui-org/react'
import './App.css'
import {Outlet} from "react-router-dom"


function App() {
  
  return (
    <>
      <div className='relative'>
        <Outlet/>
      </div>

          
    </>
  )
}

export default App
