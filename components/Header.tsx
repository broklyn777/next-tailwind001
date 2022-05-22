// import React from 'react'

// const Header = () => {
//   return <div>Header</div>
// }

// export default Header

import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center  space-x-2 md:space-x-10">
        <img
          src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg"
          width={50}
          height={50}
          className="cursor-pointer object-contain"
        />

        <ul className=" space-x-4 md:flex">
          <li className="headerLink">
            <Link href="/">/hem</Link>
          </li>
          <li className="headerLink">
            <Link href="/blogg">/blogg</Link>
          </li>
          <li className="headerLink">
            <Link href="/om-oss">/om oss</Link>
          </li>
          <li className="headerLink">
            <Link href="/kontakt">/kontakt</Link>
          </li>
          <li className="headerLink">
            <Link href="/test">/test</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light text-[#ecb365]">
        <SearchIcon className="sm hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Favoriter</p>
        <BellIcon className="h-6 w-6" />
        {/* <Link href="/account"> */}

        {/* </Link> */}
      </div>
    </header>
  )
}

export default Header
