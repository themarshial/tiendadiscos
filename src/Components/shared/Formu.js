import React from 'react'

const Formu = () => {
  return (
    <form className='flex flex-col bg-blue-300'>
      <div className='flex justify-center py-3 mt-8'>
        <label className='p-1 mr-4  bg-gray-800 text-white' for='clave-email' >Nombre</label>
        <input className='py-1 pl-2' id='clave-email' type='text' />
      </div>
      <div className='flex justify-center py-3'>
        <label className='p-1 mr-4 bg-gray-800 text-white' for='clave-pass' >Password</label>
        <input className='py-1 pl-2' id='clave-pass' type='text' />
      </div>
      <div className='flex justify-center'>
        <button className=' rounded w-24 bg-blue-500 text-white px-2 py-1 my-3'>Submit</button>
      </div>
    </form>
  )
}

export default Formu