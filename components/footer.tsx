import React from 'react'
import { Linkedin, Github, Gitlab, Twitter, Instagram } from 'lucide-react'
import Link from 'next/link'
import { buttonVariants } from './ui/button'

function footer() {
  return (
    <div className='select-none'>
        <footer className="bg-[#000] text-white py-4 text-center">
          <p>Made by <b>Joshi</b> with ❤ and Coffee.</p>
          <div className="flex justify-center space-x-4 mt-2 hover">
            <div className="hover:scale-110 transition-transform duration-300">
            <Link className={buttonVariants({variant: 'outline'})} href="https://www.linkedin.com/in/joshuanathanjavier/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </Link>
            </div>
            <div className="hover:scale-110 transition-transform duration-300">
            <Link className={buttonVariants({variant: 'outline'})} href="https://www.github.com/joshuanathanjavier" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </Link>
            </div>
            <div className="hover:scale-110 transition-transform duration-300">
            <Link className={buttonVariants({variant: 'outline'})} href="https://gitlab.com/joshuanathanjavier" target="_blank" rel="noopener noreferrer">
              <Gitlab size={24} />
            </Link>
            </div>
            <div className="hover:scale-110 transition-transform duration-300">
            <Link className={buttonVariants({variant: 'outline'})} href="https://instagram.com/hanssetsun" target="_blank" rel="noopener noreferrer">
              <Instagram size={24} />
            </Link>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default footer
