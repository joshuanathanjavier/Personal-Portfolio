"use client";

import Image from "next/image";
import Link from "next/link";
import Profile from "@/app/assets/minime.png";
import Logos from "@/components/logo";
import Projects from "@/components/projects";
import { ChevronUp, Mail, Linkedin, Github } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-medium text-center text-white select-none">
      <main>
        <Link
          href="#home"
          className="hover:scale-110 transition-transform duration-300 ease-out"
        >
          <div className="fixed bottom-4 right-4 z-50 border-2 border-[#ededed] rounded-full p-2 bg-[#000] hover:bg-[#ededed] hover:text-[#000] transition-colors duration-300 ease-out">
            <ChevronUp size={24} />
          </div>
        </Link>
        <div
          id="home"
          className="flex flex-col items-center justify-center min-h-screen text-center"
        >
          <section>
            <h1>JOSHUA NATHAN JAVIER</h1>
            <p>
              <span className="text-6xl md:text-8xl animate-(--animate-color)">
                JOSHI.DEV
              </span>
              <br />
              <span className="text-2xl md:text-4xl">Front-End Developer</span>
              <br />
            </p>
          </section>
        </div>
        <div
          id="about"
          className="flex flex-col items-center justify-center min-h-screen text-center "
        >
          <section>
            <h2 className="text-4xl">About Me</h2>
            <div className="static flex flex-col items-center md:items-right right-0 mx-auto md:absolute md:mr-150 mt-10">
              <div className="static">
                <Image
                  className="w-20 md:w-60"
                  src={Profile.src}
                  alt="Profile Picture"
                  width={250}
                  height={250}
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col items-left m-10 p-4 md:ml-100">
              <p className="text-justify= w-full md:w-1/4 text-justify">
                I like creating things that I am passionate about. I am a
                front-end developer with a passion for creating beautiful and
                functional web applications. <br />
                <br /> I have experience in HTML, CSS, JavaScript, and React. I
                am always eager to learn new technologies and improve my skills.
                I want to build my own game myself.
              </p>
            </div>
            <h2 className="text-4xl">Skills</h2>
            <Logos />
          </section>
        </div>
        <div
          id="projects"
          className="flex flex-col items-center justify-center min-h-screen text-center"
        >
          <section>
            <Projects />
          </section>
        </div>
        <div
          id="contact"
          className="flex flex-col items-center justify-center min-h-screen text-center"
        >
          <section>
            <h2 className="text-4xl">Contact</h2>
            <div className="flex flex-col items-left m-4 p-4">
              <p className="mb-4">
                If you'd like to get in touch, feel free to reach out!
              </p>
              <div className="flex flex-col md:flex-row gap-10 md:gap-20 p-5 items-center">
                <div className="bg-[#000000d8] h-fit p-10 border-2 rounded-4xl">
                  <div className="flex flex-col self-center gap-4">
                    {/* <h1>Email:</h1> */}
                    <h4 className="text-3xl">Get in Touch</h4>
                    <p className="flex gap-1">
                      <Mail size={24} />
                      <a
                        href="mailto:hanssetsun@gmail.com"
                        className="underline font-semibold"
                      >
                        hanssetsun@gmail.com
                      </a>
                    </p>
                    {/* <h1>LinkedIn:</h1> */}
                    <p className="flex flex-row gap-1 items-center">
                      <Linkedin size={24} />
                      <a
                        href="https://www.linkedin.com/in/joshuanathanjavier/"
                        className="underline font-semibold"
                      >
                        joshuanathanjavier
                      </a>
                    </p>
                    {/* <h1>Github:</h1> */}
                    <p className="flex gap-1">
                      <Github size={24} />
                      <a
                        href="https://github.com/joshuanathanjavier/"
                        className="underline font-semibold"
                      >
                        joshunathanjavier
                      </a>
                    </p>
                  </div>
                </div>
                <div className="bg-[#111010d2] p-10 border-2 rounded-4xl">
                  <form
                    action="https://formspree.io/f/xaqalwbb"
                    method="POST"
                    className="flex flex-col items-center gap-1"
                  >
                    <h4 className="text-3xl">Contact Me</h4>
                    <div>
                      <div className="flex flex-col md:flex-row gap-2">
                        <div>
                          <label htmlFor="name" className="flex flex-col items-start">
                            Name:
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            placeholder="Your Name"
                            required
                            minLength={2}
                            className="mb-4 w-full p-2 border border-gray-300 rounded"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="flex flex-col items-start">
                            Email:
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="Your Email"
                            required
                            className="mb-4 w-full p-2 border border-gray-300 rounded"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="message" className="flex flex-col items-start">
                          Message:
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          placeholder="Your Message"
                          required
                          minLength={10}
                          rows={5}
                          className="mb-4 w-full p-4 border border-gray-300 rounded"
                        />

                        <button
                          type="submit"
                          className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
