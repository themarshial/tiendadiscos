import React from 'react'
import Carrusel from '../shared/Carrusel'
import Jumbotron from '../shared/Jumbotron'

const Home = () => {
  return (
    <div className='text-center  bg-red-600'>
      <Carrusel/>
      <Jumbotron/>
    </div>
  )
}

export default Home