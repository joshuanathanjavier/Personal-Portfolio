import React from 'react'
import Image from 'next/image'
import Csharp from "@/app/assets/csharp.svg"
import GDscript from "@/app/assets/gdscript.svg"
import Css from "@/app/assets/css.svg"
import Html from "@/app/assets/html.png"
import Javascript from "@/app/assets/javascript.png"
import Nextjs from "@/app/assets/nextjs.svg"
import Reactjs from "@/app/assets/react.svg"
import Typescript from "@/app/assets/typescript.svg"
import Tailwind from "@/app/assets/tailwind.svg"

function logo() {

  return (
      <div className='mt-4 flex flex-col items-center flex-row space-x-1 space-x-1 md:space-x-13 p-4 rounded-lg overflow-hidden'>
        <Image className='w-8 md:w-30' src={Csharp.src} alt='C-Sharp' width={100} height={100}/>
        <Image className='w-20 md:w-70' src={GDscript.src} alt='GDScript' width={100} height={100}/>
        <Image className='w-10 md:w-37' src={Html.src} alt='HTML' width={100} height={100}/>
        <Image className='w-8 md:w-26' src={Css.src} alt='CSS' width={100} height={100}/>
        <Image className='w-7 md:w-25' src={Javascript.src} alt='JavaScript' width={100} height={100}/>
        <Image className='w-7 md:w-30' src={Reactjs.src} alt='React.js' width={100} height={100}/>
        <Image className="bg-[#ededed] p-2 rounded-lg w-10 md:w-30" src={Nextjs.src} alt='Next.js' width={100} height={100}/>
        <Image className='w-8 md:w-25'src={Typescript.src} alt='TypeScript' width={100} height={100}/>
        <Image className='w-10 md:w-30' src={Tailwind.src} alt='Tailwind CSS' width={100} height={100}/>
    </div>
  )
}

export default logo
