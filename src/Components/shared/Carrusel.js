import React, { useState, useEffect } from 'react'
import { collection, onSnapshot, query, QuerySnapshot } from 'firebase/firestore';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { db } from './../../config/firebase';

import img1 from '../assets/fondo.jpg';
import img2 from '../assets/bloque.png';
import img3 from '../assets/fondo.jpg';
import img4 from '../assets/fondo2.png';

const Carrusel = () => {
  const [newSite, setNewSite] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'ItemsCarrusel'));
    onSnapshot(q, (querySnapshot) => {
      setNewSite(
        querySnapshot.docs.map((item) =>
        ({
          id: item.id,
          data: item.data(),
        }))
      );
    });  
  }, []);
  console.log('/************/');
  console.log(newSite);






  const images = [img1, img2, img3, img4];
  const [activeSlide, setActiveSlide] = useState(1);

  const prevSliderHandler = (index) => {
    if (index === newSite.length - 1) {
      setActiveSlide(0);
    } else if (index < newSite.length - 1) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(newSite.length - 1);
    }
  };

  const nextSliderHandler = (index) => {
     if (index === 0) {
      setActiveSlide(newSite.length - 1);
    } else if (index >= 1) {
      setActiveSlide(activeSlide - 1);
    } else {
      setActiveSlide(newSite.length - 1);
    }
  };


  return (
    <div className='m-6 mb-40'>
      {newSite.map((item, index) => {
        return (
          <div
            key={index}
            className={
              activeSlide === index
                ? 'flex justify-between items-center'
                : 'hidden'
            }
          >
            <button
              className='rounded-full text-6xl border-2 border-black'
              onClick={() => prevSliderHandler(index)}
            >
              <FiChevronLeft />
            </button>
            <div className=' w-full h-[400px]'> 
              <img
                src={item.data.img}
                alt='landscape'
                className=' object-cover w-full h-[400px] px-6'
              />
              <h2 className='text-white uppercase text-4xl'>{item.data.title}</h2>
              <h3>{item.data.description}</h3>
            </div>
            <button
              className='rounded-full text-6xl border-2 border-black'
              onClick={() => nextSliderHandler(index)}
            >
              <FiChevronRight />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Carrusel