import Image from "next/image"
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
                <a href="#" className="flex items-center space-x-2">
                  <Image src="/logo-navbar.svg" width={50} height={50} alt="grassroot united fc logo"></Image>
                </a>

                {/* Burger Icon */}
                <div className="block">
                    <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Dropdown Menu */}
            <div className={`${isOpen ? 'block' : 'hidden'}`}>
                <ul className="text-gray-800">
                    <li className="py-2 text-center"><a href="#" className="block px-4 py-2">Under Construction</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}