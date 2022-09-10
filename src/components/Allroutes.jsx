import React from 'react'
import { Route, Routes } from 'react-router'
import Form from './Form'
import Home from './Home'

function Allroutes() {
  return (
    <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/form' element= {<Form/>}/>
    </Routes>
  )
}

export default Allroutes