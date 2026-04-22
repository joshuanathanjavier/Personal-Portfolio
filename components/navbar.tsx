"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Linkedin, Github, Gitlab, Menu, X } from "lucide-react";

function navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <header
        className={[
          "fixed top-0 left-1/2 -translate-x-1/2 z-50 select-none text-white",
          "transition-all duration-300 ease-linear",
          scrolled
            ? "mt-[10px] w-1/2 rounded-[50px] border-2 border-[#f0f0f0] bg-black px-4"
            : "mt-0 w-full rounded-none border-y-2 border-[#f0f0f0] bg-black px-4",
        ].join(" ")}
      >
        <nav className="flex items-center justify-between max-w-8xl mx-auto py-5">
          <h1 className="px-6 md:px-10">
            <b>joshi.dev</b>
          </h1>
          <div className="hidden md:flex space-x-10">
            <Link
              className="hover:scale-110 transition-transform duration-300 ease-out"
              href="#home"
            >
              <b>Home</b>
            </Link>
            <Link
              className="hover:scale-105 transition-transform duration-300 ease-out"
              href="#about"
            >
              <b>About</b>
            </Link>
            <Link
              className="hover:scale-105 transition-transform duration-300 ease-out"
              href="#projects"
            >
              <b>Projects</b>
            </Link>
            <Link
              className="hover:scale-105 transition-transform duration-300 ease-out"
              href="#contact"
            >
              <b>Contact</b>
            </Link>
            <p className={["text-[#f0f0f0]", scrolled ? "hidden" : "flex"].join(" ")}>|</p>
            <div className={["hover:scale-120 hover:rotate-10 transition-transform duration-300", scrolled ? "hidden" : "flex"].join(" ")}>
              <Link
                href="https://www.linkedin.com/in/joshuanathanjavier/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </Link>
            </div>
            <div className={["hover:scale-110 hover:-rotate-10 transition-transform duration-300", scrolled ? "hidden" : "flex"].join(" ")}>
              <Link
                href="https://www.github.com/joshuanathanjavier"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} />
              </Link>
            </div>
            <div className={["hover:scale-110 hover:rotate-15 transition-transform duration-300", scrolled ? "hidden" : "flex"].join(" ")}>
              <Link
                href="https://gitlab.com/joshuanathanjavier"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Gitlab size={24} />
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <div className={["md:hidden flex space-x-4 right-0","transition-all duration-300 ease-in-out", scrolled ? "hidden" : "flex"].join(" ")}>
              <Link
                href="https://www.linkedin.com/in/joshuanathanjavier/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </Link>
              <Link
                href="https://www.github.com/joshuanathanjavier"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} />
              </Link>
              <Link
                href="https://gitlab.com/joshuanathanjavier"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Gitlab size={24} />
              </Link>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-[#000] border-2 border-white p-4 md:hidden">
            <div className="flex flex-col items-center space-y-4">
              <Link href="#home" onClick={() => setIsOpen(false)}>
                <b>Home</b>
              </Link>
              <Link href="#about" onClick={() => setIsOpen(false)}>
                <b>About</b>
              </Link>
              <Link href="#projects" onClick={() => setIsOpen(false)}>
                <b>Projects</b>
              </Link>
              <Link href="#contact" onClick={() => setIsOpen(false)}>
                <b>Contact</b>
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default navbar;
