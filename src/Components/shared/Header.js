import React from 'react'

const Header = () => {
  return (
    <nav >
      <ul className='flex justify-around w-full py-2 text-gray-100 bg-gray-900'>
        <li><a className='text-xl font-bold' href='/'> Tienda de memes Marshial</a></li>
        <li><a className='text-xl font-bold' href='contacto'>Contacto</a></li>
        <li><a className='text-xl font-bold' href='direccion'>Direccion</a></li>
        
      </ul>
    </nav>
  )
}

export default Header