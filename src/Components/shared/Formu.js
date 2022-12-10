import React from 'react'

const Formu = () => {
  return (
    <form className='w-full items-center flex flex-col '>
      <div className='rounded-lg px-7 bg-green-400'>

        <div className='flex justify-center py-3 mt-8 '>
          <label className='w-20 p-1 mr-4  bg-gray-800 text-white text-center' for='clave-email' >Email</label>
          <input className='py-1 pl-2' id='clave-email' type='text' />
        </div>
        <div className='flex justify-center py-3'>
          <label className='px-2 p-1 mr-4 bg-gray-800 text-white' for='clave-pass' >Password</label>
          <input className='py-1 pl-2' id='clave-pass' type='text' />
        </div>
        <div className='flex justify-center'>
          <button className=' rounded w-24 bg-blue-500 text-white px-2 py-1 my-3 mb-8'>Submit</button>
        </div>
      </div>
    </form>
  )
}

export default Formu