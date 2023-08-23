'use client';
import { useEffect, useState } from 'react';

import { ChevronUp, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import LogoDark from '@/assets/swd-logo-dark.png';
import { buttonVariants } from '@/components/ui/button';

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // get percentage of current scroll location
  const handleScroll = () => {
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const windowScroll = document.documentElement.scrollTop;

    const scrolled = (windowScroll / height) * 100;

    setScrollPosition(scrolled);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <nav className="h-[11vh] text-white bg-theme-primary">
      {/* Desktop Nav */}
      <div className="container items-center justify-between hidden h-full gap-16 lg:flex">
        {/* Logo */}
        <Link href="#">
          <Image
            src={LogoDark}
            alt="Simplified Web.Dev Logo"
            className="w-32"
          />
        </Link>
        {/* End Logo */}

        {/* Menu */}
        <div className="flex gap-12 font-semibold">
          <Link href="#about" className="transition-all duration-300 group">
            About
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-theme-secondary"></span>
          </Link>
          <Link href="#services" className="transition-all duration-300 group">
            Services
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-theme-secondary"></span>
          </Link>
          <Link href="#portfolio" className="transition-all duration-300 group">
            Portfolio
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-theme-secondary"></span>
          </Link>
          <Link href="#contact" className="transition-all duration-300 group">
            Contact
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-theme-secondary"></span>
          </Link>
        </div>
        {/* End Menu */}

        {/* CTA */}
        <Link
          href="#contact"
          className={`${buttonVariants({
            variant: 'default',
          })} font-semibold text-white bg-theme-secondary hover:bg-theme-secondary/90 active:bg-theme-secondary/80`}
        >
          Start Your Project
        </Link>
        {/* End CTA */}
      </div>
      {/* End Desktop Nav */}

      {/* Mobile Nav */}
      <div className="container flex items-center justify-between h-full gap-16 lg:hidden ">
        {/* Logo */}
        <Link href="#">
          <Image
            src={LogoDark}
            alt="Simplified Web.Dev Logo"
            className="w-28"
          />
        </Link>
        {/* End Logo */}

        {/* Hamburger Icon */}
        <Menu
          size={32}
          className="transition-all cursor-pointer hover:opacity-90"
          onClick={() => setNavOpen(true)}
        />
        {/* End Hamburger Icon */}

        {/* Overlay */}
        <div
          className={`
          fixed top-0 left-0 w-screen h-screen bg-black/40 transition-all z-40 ease-in-out
          ${!navOpen && 'hidden'}
          `}
          onClick={() => setNavOpen(false)}
        ></div>
        {/* End Overlay */}

        <aside
          className={`
          fixed top-0 right-0 z-50 transition-all flex flex-col w-screen h-screen md:w-3/5 p-8 font-semibold text-black bg-gray-50
          ${navOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <X
            className="mb-2 ml-auto cursor-pointer"
            onClick={() => setNavOpen(false)}
          />
          <div className="flex flex-col space-y-6">
            <Link
              href="#about"
              className="transition-all duration-300 group"
              onClick={() => setNavOpen(false)}
            >
              About
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-theme-secondary"></span>
            </Link>
            <Link
              href="#services"
              className="transition-all duration-300 group"
              onClick={() => setNavOpen(false)}
            >
              Services
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-theme-secondary"></span>
            </Link>
            <Link
              href="#portfolio"
              className="transition-all duration-300 group"
              onClick={() => setNavOpen(false)}
            >
              Portfolio
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-theme-secondary"></span>
            </Link>
            <Link
              href="#contact"
              className="transition-all duration-300 group"
              onClick={() => setNavOpen(false)}
            >
              Contact
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-theme-secondary"></span>
            </Link>
          </div>
          <Link
            href="#contact"
            className={`
            font-semibold text-white bg-theme-secondary hover:bg-theme-secondary/90 active:bg-theme-secondary/80 mt-12
            ${buttonVariants({ variant: 'default' })}
            `}
            onClick={() => setNavOpen(false)}
          >
            Start Your Project
          </Link>
        </aside>
      </div>
      {/* End Mobile Nav */}

      {/* Back To Top Button */}
      <button
        type="button"
        className={`
        fixed flex z-40 items-center justify-center p-1 text-white rounded-full bottom-5 right-5 bg-theme-secondary transition-all ease-in-out
        ${scrollPosition >= 5 ? 'opacity-90' : 'opacity-0'}
        ${scrollPosition >= 99 && '-translate-y-16'}
        `}
        onClick={() => scrollToTop()}
      >
        <ChevronUp size={24} />
      </button>
      {/* End Back To Top Button */}
    </nav>
  );
};

export default Navigation;
