import React from 'react'
import Headers from '../common/Layout/Header/Header'
import Home from '../pages/Home/Home'
import { Route, Routes } from 'react-router-dom';
const Routs = () => {
  return (
    <div>
      <Headers/>
      <Routes>
        <Route path='/' element={<Home />} />
        </Routes>
    </div>
  )
}

export default Routs
