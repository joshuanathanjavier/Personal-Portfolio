"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Linkedin, Github, Gitlab, Menu, X } from 'lucide-react'

function navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <header className={`fixed top-0 left-0 rigt-0 w-full z-50 px-4 transition-all duration-300 ease-in-out bg-[#000] select-none`}>
            <nav className="flex items-center justify-between max-w-8xl mx-auto py-5">
              <h1><b>joshi.dev</b></h1>
              <div className="hidden md:flex space-x-10">
                <Link className="hover:scale-110 transition-transform duration-300 ease-out" href="#home"><b>Home</b></Link>
                <Link className="hover:scale-105 transition-transform duration-300 ease-out" href="#about"><b>About</b></Link>
                <Link className="hover:scale-105 transition-transform duration-300 ease-out" href="#projects"><b>Projects</b></Link>
                <Link className="hover:scale-105 transition-transform duration-300 ease-out" href="#contact"><b>Contact</b></Link>
                <p>|</p>
                <div className="hover:scale-120 hover:rotate-10 transition-transform duration-300">
                  <Link href="https://www.linkedin.com/in/joshuanathanjavier/" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={24} />
                  </Link>
                </div>
                <div className="hover:scale-110 hover:-rotate-10 transition-transform duration-300">
                  <Link href="https://www.github.com/joshuanathanjavier" target="_blank" rel="noopener noreferrer">
                    <Github size={24} />
                  </Link>
                </div>
                <div className="hover:scale-110 hover:rotate-15 transition-transform duration-300">
                  <Link href="https://gitlab.com/joshuanathanjavier" target="_blank" rel="noopener noreferrer">
                    <Gitlab size={24} />
                  </Link>
                </div>
              </div>
              <div className='md:hidden flex items-center space-x-4'>
              <div className="md:hidden flex space-x-4 right-0">
                <Link href="https://www.linkedin.com/in/joshuanathanjavier/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={24} />
                </Link>
                <Link href="https://www.github.com/joshuanathanjavier" target="_blank" rel="noopener noreferrer">
                  <Github size={24} />
                </Link>
                <Link href="https://gitlab.com/joshuanathanjavier" target="_blank" rel="noopener noreferrer">
                  <Gitlab size={24} />
                </Link>
              </div>
              <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              </div>
            </nav>
            {isOpen && (
              <div className="absolute top-16 left-0 right-0 bg-[#000] p-4 md:hidden">
                <div className="flex flex-col items-center space-y-4">
                  <Link href="#home" onClick={() => setIsOpen(false)}><b>Home</b></Link>
                  <Link href="#about" onClick={() => setIsOpen(false)}><b>About</b></Link>
                  <Link href="#projects" onClick={() => setIsOpen(false)}><b>Projects</b></Link>
                  <Link href="#contact" onClick={() => setIsOpen(false)}><b>Contact</b></Link>
                </div>
              </div>
            )}
        </header>
    </div>
  )
}

export default navbar
