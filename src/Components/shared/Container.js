import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';



const Container = () => {
  return (
    <div className=' flex flex-col h-screen justify-between items-stretch  bg-red-500'>
      <Header/>
      
      <Outlet />
      <Footer />

    </div>
  )
}

export default Container