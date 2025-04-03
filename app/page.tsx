"use client";

import Image from "next/image";

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col bg-[#0f0f0f] font-medium">
      <main>
        <div id="home" className="flex flex-col items-center justify-center min-h-screen bg-[#0f0f0f] text-center">
          <section>
            <h1>JOSHUA NATHAN JAVIER</h1>
             <p>
              <span className="text-2xl">JOSHI.DEV</span>
              <br />
              <span className="text-2xl">Full Stack Developer</span>
              <br />
            </p>
          </section>
        </div>
        <div id="about" className="flex flex-col items-center justify-center min-h-screen bg-[#0f0f0f] text-center">
          <section>
            <h2>About Me</h2>
            <p>
              I'm a passionate developer with experience in building web applications using modern technologies.
              I love coding and creating beautiful user experiences.
            </p>
          </section>
        </div>
        <div id="projects" className="flex flex-col items-center justify-center min-h-screen bg-[#0f0f0f] text-center">
          <section>
            <h2>Projects</h2>
            <div className="flex flex-wrap justify-center">
              <div className="w-1/3 p-4">
                <h3>Sanctuary</h3>
                <p>Sanctuary is a relaxing web application designed to create a safe haven for anyone seeking peace, calm, and tranquility. Developed by a group of passionate students, our project embodies our dedication to promoting mental well-being through curated soundscapes, soothing visuals, and user-friendly features.</p>
              </div>
            </div>
          </section>
        </div>
        <div id="contact" className="flex flex-col items-center justify-center min-h-screen bg-[#0f0f0f] text-center">
          <section>
            <h2>Contact</h2>
            <p>If you'd like to get in touch, feel free to reach out!</p>
            <form className="flex flex-col items-center">
              <input type="text" placeholder="Your Name" className="mb-4 p-2 border border-gray-300 rounded" />
              <input type="email" placeholder="Your Email" className="mb-4 p-2 border border-gray-300 rounded" />
              <textarea placeholder="Your Message" className="mb-4 p-2 border border-gray-300 rounded"></textarea>
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Send</button>
            </form>
          </section>
        </div>
      </main>
      </div>
  );
}
