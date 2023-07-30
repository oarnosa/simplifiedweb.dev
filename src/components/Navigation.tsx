import Image from 'next/image';
import Link from 'next/link';

import LogoDark from '@/assets/swd-logo-dark.png';

import { Button } from './ui/button';

const Navigation = () => {
  return (
    <div className="h-24 text-white bg-theme-primary">
      <div className="container flex items-center justify-between h-full gap-16">
        <Link href="#">
          <Image
            src={LogoDark}
            alt="Simplified Web.Dev Logo"
            className="w-40"
          />
        </Link>
        <div className="flex gap-12 font-semibold">
          <Link href="#" className="transition duration-300 group">
            About
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-theme-secondary"></span>
          </Link>
          <Link href="#" className="transition duration-300 group">
            Services
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-theme-secondary"></span>
          </Link>
          <Link href="#" className="transition duration-300 group">
            Pricing
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-theme-secondary"></span>
          </Link>
          <Link href="#" className="transition duration-300 group">
            Contact
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-theme-secondary"></span>
          </Link>
        </div>
        <Button className="font-semibold text-white bg-theme-secondary hover:bg-theme-secondary/90 active:bg-theme-secondary/80">
          Start Your Project
        </Button>
      </div>
    </div>
  );
};

export default Navigation;
