import React from 'react'
import { Link } from 'react-router-dom'
import ImageOne from '../images/hero-SB.jpg'

const NavBar = () => {
  return (
    <div className='w-full relative'>
      <div className='w-full h-full flex absolute top-0 left-0 justify-center p-4'>
        <nav>
          <Link data-cy='concept' className='p-4'>KONCEPT</Link>
          <Link data-cy='services' className='p-4'>TJÄNSTER</Link>
          <Link data-cy='about'className='p-4'>OM OSS</Link>
          <Link data-cy='recommendation' className='p-4'>REKOMMENDATIONER</Link>
        </nav>
      </div>
        <img className='pl-48 pr-48 pb-48' src={ImageOne} alt='hero' />
    </div>
  )
}

export default NavBar
{
  /* <nav role='navigation'>
        <div className='cursor-pointer md:hidden flex absolute justify-items-end'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </div>
        <div className='md:block hidden font-mono flex justify-center items-center'>
          <Link data-cy='concept-nav' className='p-4' to='/concept'> 
            KONCEPT
          </Link>
          <Link data-cy='services-nav' className='p-4' to='/services'>
            TJÄNSTER
          </Link>
          <Link data-cy='about-nav' className='p-4' to='/about'>
            OM OSS
          </Link>
          <Link
            data-cy='recommendation-nav'
            className='p-4'
            to='/recommendation'
          >
            REKOMMENDATIONER
          </Link>
        </div>
      </nav> */
}
