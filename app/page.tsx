"use client";

import Image from "next/image";
import Link from "next/link";
import Profile from "@/app/assets/minime.png";
import Sanctuary from "@/app/assets/sanctuary.png";
import Sanctuary2 from "@/app/assets/sanctuary2.png";
import Sanctuary3 from "@/app/assets/sanctuary3.png";
import { ChevronUp } from "lucide-react";

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col font-medium text-center text-white select-none">
      <main>
        <Link href="#home" className="hover:scale-110 transition-transform duration-300 ease-out">
          <div className="fixed bottom-4 right-4 z-50 border-2 border-[#ededed] rounded-full p-2 bg-[#000] hover:bg-[#ededed] hover:text-[#000] transition-colors duration-300 ease-out">
              <ChevronUp size={24} />
          </div>
        </Link>
        <div id="home" className="flex flex-col items-center justify-center min-h-screen text-center">
          <section>
            <h1>JOSHUA NATHAN JAVIER</h1>
             <p>
              <span className="text-6xl md:text-8xl">JOSHI.DEV</span>
              <br />
              <span className="text-2xl md:text-4xl">Front-End Developer</span>
              <br />
            </p>
          </section>
        </div>
        <div id="about" className="flex flex-col items-center justify-center min-h-screen text-center ">
          <section> 
            <h2 className="text-4xl">About Me</h2>
            <div className="static flex flex-col items-center md:items-right right-0 mx-auto md:absolute md:mr-150 mt-10">
              <div className="static">
                <Image src={Profile.src} alt="Profile Picture" width={250} height={250} priority />
              </div>
            </div>
            <div className="flex flex-col items-left m-10 p-4 md:ml-100">
              <p className="text-justify= w-full md:w-1/4 text-justify">
                I like creating things that I am passionate about. I am a front-end developer with a passion for creating beautiful and functional web applications. <br /><br /> I have experience in HTML, CSS, JavaScript, and React. I am always eager to learn new technologies and improve my skills. I want to build my own game myself.
              </p>
            </div>
          </section>
        </div>
        <div id="projects" className="flex flex-col items-center justify-center min-h-screen text-center">
          <section>
            <h2 className="text-4xl">Projects</h2>
              <div className="flex flex-col items-center m-4 p-4">
                
                <Link className="hover:text-[#6dbfb8] hover:scale-110 transition-transform duration-300 ease-out" href="https://www.sanctuarysounds.me/" target="_blank" rel="noopener noreferrer"><h3 className="text-2xl">Sanctuary</h3></Link>
                <div className="mt-4 flex flex-col items-center md:flex-row md:space-x-4">
                <Image className="w-100 h-auto mb-4 md:mb-0" src={Sanctuary.src} alt="Sanctuary Website" width={500} height={500}/>
                <Image className="w-100 h-auto mb-4 md:mb-0" src={Sanctuary2.src} alt="Sanctuary Website" width={500} height={500}/>
                <Image className="w-100 h-auto" src={Sanctuary3.src} alt="Sanctuary Website" width={500} height={500}/>
                </div>
              </div>
          </section>
        </div>
        <div id="contact" className="flex flex-col items-center justify-center min-h-screen text-center">
          <section>
            <h2 className="text-4xl">Contact</h2>
            <div className="flex flex-col items-center m-4 p-4">
            <p className="mb-4">If you'd like to get in touch, feel free to reach out!</p>
            <form className="flex flex-col items-center">
              <input type="text" placeholder="Your Name" className="mb-4 p-2 border border-gray-300 rounded" />
              <input type="email" placeholder="Your Email" className="mb-4 p-2 border border-gray-300 rounded" />
              <textarea placeholder="Your Message" className="mb-4 p-4 border border-gray-300 rounded"></textarea>
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer">Send</button>
            </form>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
