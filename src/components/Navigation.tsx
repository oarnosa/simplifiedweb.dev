'use client';
import { useState } from 'react';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import LogoDark from '@/assets/swd-logo-dark.png';
import { buttonVariants } from '@/components/ui/button';

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="h-24 text-white bg-theme-primary">
      {/* Desktop Nav */}
      <div className="container items-center justify-between hidden h-full gap-16 lg:flex">
        {/* Logo */}
        <Link href="#">
          <Image
            src={LogoDark}
            alt="Simplified Web.Dev Logo"
            className="w-40"
          />
        </Link>
        {/* End Logo */}

        {/* Menu */}
        <div className="flex gap-12 font-semibold">
          <Link href="#about" className="transition duration-300 group">
            About
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-theme-secondary"></span>
          </Link>
          <Link href="#services" className="transition duration-300 group">
            Services
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-theme-secondary"></span>
          </Link>
          <Link href="#portfolio" className="transition duration-300 group">
            Portfolio
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-theme-secondary"></span>
          </Link>
          <Link href="#contact" className="transition duration-300 group">
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
      <div className="container flex items-center justify-between h-full gap-16 lg:hidden">
        {/* Logo */}
        <Link href="#">
          <Image
            src={LogoDark}
            alt="Simplified Web.Dev Logo"
            className="w-32"
          />
        </Link>
        {/* End Logo */}

        {/* Hamburger Icon */}
        <Menu size={32} onClick={() => setNavOpen(true)} />
        {/* End Hamburger Icon */}

        {/* Main Menu */}
        <div
          className={`fixed top-0 right-0 z-50 ${
            navOpen ? 'flex' : 'hidden'
          } flex-col w-screen h-screen md:w-3/5 p-8 font-semibold text-black bg-gray-50`}
        >
          <X
            className="mb-2 ml-auto cursor-pointer"
            onClick={() => setNavOpen(false)}
          />
          <div className="flex flex-col space-y-6">
            <Link href="#about" className="transition duration-300 group">
              About
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-theme-secondary"></span>
            </Link>
            <Link href="#services" className="transition duration-300 group">
              Services
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-theme-secondary"></span>
            </Link>
            <Link href="#portfolio" className="transition duration-300 group">
              Portfolio
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-theme-secondary"></span>
            </Link>
            <Link href="#contact" className="transition duration-300 group">
              Contact
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-theme-secondary"></span>
            </Link>
          </div>
          <Link
            href="#contact"
            className={`${buttonVariants({
              variant: 'default',
            })} font-semibold text-white bg-theme-secondary hover:bg-theme-secondary/90 active:bg-theme-secondary/80 mt-12`}
          >
            Start Your Project
          </Link>
        </div>
        {/* Main Menu */}
      </div>
      {/* End Mobile Nav */}
    </div>
  );
};

export default Navigation;
