import React from 'react'
import Link from 'next/link'
import Nav from './Nav'
import MobileNav from './Mob'
function Header() {
  return (
    <header className='py-8 xl:py-12 text-[#0D1B3C] -mx-5 xl:-mx-0 '>
        <div className="container mx-auto flex justify-between items-center">
            <Link href='/'>
            <h1 className='text-4xl font-semibold'>
                Dr. Shawon<span className='text-[#0070F2]'></span>
            </h1>
            </Link>
            <div className="hidden md:flex items-center gap-8">
            <Nav />
            </div>
            
            <div className="md:hidden">
                <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header