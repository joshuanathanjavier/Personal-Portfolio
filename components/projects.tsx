import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Sanctuary from "@/app/assets/sanctuary.png"
import Tricycall from "@/app/assets/tricycall.png"
import { ExternalLink } from 'lucide-react'

function projects() {
  return (
    <div>
        <h2 className="text-4xl">Projects</h2>
        <div className='flex flex-col md:flex-row items-center'>
            <div className="flex flex-col items-center m-4 p-4"> 
            <Link className="hover:text-[#6dbfb8] hover:scale-110 transition-transform duration-300 ease-out" href="https://sanctuary-pi.vercel.app/" target="_blank" rel="noopener noreferrer"><h3 className="text-2xl flex flex-row items-center gap-1">Sanctuary<ExternalLink size="20"/></h3></Link>
            <div className="mt-4 flex flex-col items-center md:flex-row md:space-x-4">
            <Image className="w-150 h-auto mb-4 md:mb-0" src={Sanctuary.src} alt="Sanctuary Website" width={500} height={500}/>
            </div>
        </div>
        <div className="flex flex-col items-center m-4 p-4"> 
          <Link className='hover:text-[#00a85d] hover:scale-110 transition-transform duration-300 ease-out' href="https://store.tricycall.com/" target="_blank" rel="noopener noreferrer"><h3 className="text-2xl flex flex-row items-center gap-1">Tricycall<ExternalLink size="20"/></h3></Link>
          <div className="mt-4 flex flex-col items-center md:flex-row md:space-x-4">
            <Image className="w-150 h-auto mb-4 md:mb-0" src={Tricycall.src} alt="Tricycall Website" width={500} height={500}/>
          </div>
        </div>
        </div>
    </div>
  )
}

export default projects
