import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import TypedAnimation from '@/components/typed-animation';
import { buttonVariants } from '@/components/ui/button';

const Hero = () => (
  <section className="h-[75vh] min-h-[600px] text-white bg-theme-primary">
    <div className="container flex flex-col items-center justify-center h-full text-center">
      {/* Desktop */}
      <div className="flex-col hidden font-sans text-5xl font-semibold md:flex lg:text-6xl">
        <h1 className="font-sans text-5xl font-semibold lg:text-6xl">
          Simplified
        </h1>
        <div className="flex items-center justify-center mt-2 space-x-2">
          <span className="text-6xl lg:text-7xl text-theme-secondary">
            {'{'}
          </span>
          <TypedAnimation
            strings={[
              'Web Development',
              'Web Design',
              'Website Hosting',
              'Website Maintenance',
              'SEO Services',
              'Content Creation',
            ]}
          />
          <span className="text-6xl lg:text-7xl text-theme-secondary">
            {'}'}
          </span>
        </div>
      </div>
      {/* End Desktop */}

      {/* Mobile */}
      <div className="flex flex-col font-sans text-4xl font-semibold md:hidden">
        <h1 className="font-sans text-4xl font-semibold">Simplified Web</h1>
        <div className="flex items-center justify-center mt-2 space-x-2">
          <span className="text-5xl text-theme-secondary">{'{'}</span>
          <TypedAnimation
            strings={['Development', 'Design', 'Hosting', 'Maintenance']}
          />
          <span className="text-5xl text-theme-secondary">{'}'}</span>
        </div>
      </div>
      {/* End Mobile */}

      <p className="max-w-xl my-12 text-gray-200">
        Empowering Small Businesses with Effortless Web Development Solutions -
        Your Online Presence, Simplified.
      </p>
      <div className="flex flex-col items-center justify-center gap-4 lg:gap-8 lg:flex-row">
        <Link
          href="#contact"
          className={`
          font-semibold text-white bg-theme-secondary hover:bg-theme-secondary/90 active:bg-theme-secondary/80
          ${buttonVariants({ variant: 'default' })}
          `}
        >
          Start Your Project
        </Link>
        <Link
          href="#contact"
          className="items-center hidden lg:flex group hover:text-white/90"
        >
          Contact Us
          <ChevronRight
            size={16}
            className="ml-1 transition-all group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  </section>
);

export default Hero;
