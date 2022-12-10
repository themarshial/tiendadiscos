import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';



const Container = () => {
  return (
    <>
      <Header/>
      
      <Outlet />
      <Footer />

    </>
  )
}

export default Container