import React from 'react'
import Link from 'next/link'

function navbar() {
  return (
    <div>
        <header className={`fixed top-0 left-0 w-full z-50 px-4 transition-all duration-300 ease-in-out bg-[#000]`}>
            <nav className="flex items-center justify-between max-w-8xl mx-auto py-5">
              <h1>joshi.dev</h1>
              <div className="hidden md:flex space-x-10 mr-20">
                <Link href="#home">Home</Link>
                <Link href="#about">About</Link>
                <Link href="#projects">Projects</Link>
                <Link href="#contact">Contact</Link>
              </div>
            </nav>
        </header>
    </div>
  )
}

export default navbar
