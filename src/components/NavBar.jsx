import React from 'react'
import { Link } from 'react-router-dom'
import ImageOne from '../images/diner-room.jpg'

const NavBar = () => {
  return (
    <div className='absolute'>
      <img
        className='object-cover bg-fixed w-full h-96'
        src={ImageOne}
        alt='hero'
      />
      <div className='absolute inset-0 bg-gray-900 bg-opacity-50'></div>
      <div className='w-full h-full flex absolute top-0 left-0 text-gray-50 justify-end p-4'>
        <nav>
          <Link data-cy='concept' className='p-4 hover:underline'>
            KONCEPT
          </Link>
          <Link data-cy='services' className='p-4 hover:underline'>
            TJÄNSTER
          </Link>
          <Link data-cy='about' className='p-4 hover:underline'>
            OM OSS
          </Link>
          <Link data-cy='recommendation' className='p-4 hover:underline'>
            REKOMMENDATIONER
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default NavBar
