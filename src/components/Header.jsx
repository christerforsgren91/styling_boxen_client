import React from 'react'
import ImageOne from '../images/diner-room.jpg'
import NavBar from './NavBar'

const Header = () => {
  return (
    <div className='w-full relative'>
      <div className='w-full h-full bg-gray-900 top-0 left-0 absolute opacity-80'></div>
      <div className='w-full h-full flex flex-col absolute top-0 left-0 justify-center items-center z-30'>
        <div
          data-cy='title'
          className='text-3xl md:text-5xl lg:text-8xl font-bold text-yellow-600'
        >
          STYLINGBOXEN
        </div>
        <div
          data-cy='welcome-text'
          className='md:text-1xl lg:text-2xl text-yellow-600'
        >
          VI GÖR DITT HEM REDO FÖR FÖRSÄLJNING
        </div>
      </div>
      <img
        src={ImageOne}
        alt='hero'
        className='object-cover bg-fixed w-full h-96'
      />
      <div className='w-full h-full flex flex-col absolute top-0 left-0 z-30 text-gray-50'>
        <NavBar />
      </div>
    </div>
  )
}

export default Header
