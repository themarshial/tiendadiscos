import React, { useState } from 'react'
import { db } from '../../config/firebase'; 
import { addDoc, collection } from 'firebase/firestore';
const Formu = () => {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(value);
    setInputs( values => ({...values, [name]: value }))
  }

  const handleSubmit = async (event)=>{
    event.preventDefault();
    // console.log('prueba');
    // console.log(inputs);
    try{
      const coment = collection(db, 'contacts');
      const res = await addDoc(coment, inputs);
      alert('se ha registrado el contacto')
      return res;
    }catch(e){
      console.error('hubo un error',e);
    }


  }

  return (
    <form onSubmit={handleSubmit} className='w-full items-center flex flex-col '>
      <div className='rounded-lg px-7 bg-green-400'>

        <div className='flex justify-center py-3 mt-8 '>
          <label className='w-20 p-1 mr-4  bg-gray-800 text-white text-center' for='clave-nombre' >Nombre</label>
          <input onChange={handleChange} className='py-1 pl-2' id='clave-nombre' name='nameForm' type='text' />
        </div>
        <div className='flex justify-center py-3'>
          <label className='px-2 p-1 mr-4 bg-gray-800 text-white' for='clave-correo' >Correo</label>
          <input onChange={handleChange} className='py-1 pl-2' id='clave-correo' name='emailForm' type='email' />
        </div>
        <div className='flex justify-center py-3'>
          <label className='px-2 p-1 mr-4 bg-gray-800 text-white' for='clave-com' >Comentario</label>
          <input onChange={handleChange} className='py-1 pl-2' id='clave-com' name='comentarioForm' type='text' />
        </div>
        <div className='flex justify-center'>
          <button type='submit' className=' rounded w-24 bg-blue-500 text-white px-2 py-1 my-3 mb-8'>Submit</button>
        </div>
      </div>
    </form>
  )
}

export default Formu