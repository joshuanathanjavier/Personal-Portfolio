import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Sanctuary from "@/app/assets/sanctuary.png"
import Sanctuary2 from "@/app/assets/sanctuary2.png"
import Sanctuary3 from "@/app/assets/sanctuary3.png"

function projects() {
  return (
    <div>
        <h2 className="text-4xl">Projects</h2>
            <div className="flex flex-col items-center m-4 p-4"> 
            <Link className="hover:text-[#6dbfb8] hover:scale-110 transition-transform duration-300 ease-out" href="https://www.sanctuarysounds.me/" target="_blank" rel="noopener noreferrer"><h3 className="text-2xl">Sanctuary</h3></Link>
            <div className="mt-4 flex flex-col items-center md:flex-row md:space-x-4">
            <Image className="w-150 h-auto mb-4 md:mb-0" src={Sanctuary.src} alt="Sanctuary Website" width={500} height={500}/>
            <Image className="w-150 h-auto mb-4 md:mb-0" src={Sanctuary2.src} alt="Sanctuary Website" width={500} height={500}/>
            <Image className="w-150 h-auto" src={Sanctuary3.src} alt="Sanctuary Website" width={500} height={500}/>
            </div>
        </div>
    </div>
  )
}

export default projects
