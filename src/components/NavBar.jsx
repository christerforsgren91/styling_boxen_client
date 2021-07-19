import React from 'react'
import { Link } from 'react-router-dom'
import ImageOne from '../images/hero-SB.jpg'

const NavBar = () => {
  return (
    <div className='w-full relative'>
      <div className='w-full h-full flex absolute top-0 left-0 justify-center p-4'>
        <nav>
          <Link data-cy='concept' className='p-4'>
            KONCEPT
          </Link>
          <Link data-cy='services' className='p-4'>
            TJÄNSTER
          </Link>
          <Link data-cy='about' className='p-4'>
            OM OSS
          </Link>
          <Link data-cy='recommendation' className='p-4'>
            REKOMMENDATIONER
          </Link>
        </nav>
      </div>
      <img className='pl-48 pr-48 pb-48' src={ImageOne} alt='hero' />
    </div>
  )
}

export default NavBar
