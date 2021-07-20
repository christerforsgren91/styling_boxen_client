import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav
      data-cy='nav-bar'
      className='flex justify-between items-center h-16 relative'
      role='navigation'
    >
      <Link data-cy='home-nav' to='/' className='pl-4 hover:underline'>
        HEM
      </Link>
      <div className='px-4 cursor-pointer md:hidden'>
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
      <div className='pr-8 md:block hidden font-mono'>
        <Link
          data-cy='concept-nav'
          className='p-4 hover:underline'
          to='/concept'
        >
          KONCEPT
        </Link>
        <Link
          data-cy='services-nav'
          className='p-4 hover:underline'
          to='/services'
        >
          TJÄNSTER
        </Link>
        <Link data-cy='about-nav' className='p-4 hover:underline' to='/about'>
          OM OSS
        </Link>
        <Link
          data-cy='recommendation-nav'
          className='p-4 hover:underline'
          to='/recommendation'
        >
          REKOMMENDATIONER
        </Link>
        <Link
          data-cy='contact-nav'
          className='p-4 hover:underline'
          to='/contact'
        >
          KONTAKT
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
