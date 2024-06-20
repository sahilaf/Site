import React from 'react'
import Link from 'next/link'
import Nav from './Nav'
import MobileNav from './Mob'
function Header() {
  return (
    <header className='py-4 md:py-8 xl:py-12 text-white md:text-[#0D1B3C] -mx-5 xl:-mx-0 md:relative fixed top-0 left-0 right-0 z-50 md:bg-[#E7EDF5] bg-[#0D1B3C]'>
        <div className="container mx-auto flex justify-between items-center">
            <Link href='/'>
            <h1 className='text-4xl font-semibold '>
                Dr. Shawon<span className='text-[#0070F2]'></span>
            </h1>
            </Link>
            <div className="hidden md:flex items-center gap-8">
            <Nav />
            </div>
            
            <div className="md:hidden z-50">
                <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header