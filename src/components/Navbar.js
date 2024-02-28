import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4">
                {/* Logo */}
                <a href="/" className="flex items-center space-x-2">
                  <Image src="/logo-navbar.svg" width={50} height={50} alt="grassroot united fc logo" priority="true"></Image>
                </a>

                {/* Burger Icon */}
                <div className="block">
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
                        {
                          isOpen ?
                          <svg className="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 18 6m0 12L6 6"/>
                          </svg>
                          :
                          <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                          </svg>
                        }
                    </button>
                </div>
            </div>

            {/* Dropdown Menu */}
            <div className={`${isOpen ? 'block' : 'hidden'}`}>
                <ul className="text-gray-800">
                    <li className="py-2 text-center"><Link href="/" className="block px-4 py-2">Home</Link></li>
                    <li className="py-2 text-center"><Link href="/login" className="block px-4 py-2">Sign in</Link></li>
                    <li className="py-2 text-center"><Link href="/register" className="block px-4 py-2">Register</Link></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}