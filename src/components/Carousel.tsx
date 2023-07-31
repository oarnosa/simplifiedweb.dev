'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import PhxLanding from '@/assets/portfolio/phxrecover-landing.png';
import PhxScroll from '@/assets/portfolio/phxrecover-scroll.png';
import PhxSection from '@/assets/portfolio/phxrecover-section.png';
import PhxTop from '@/assets/portfolio/phxrecover-top.png';

const Carousel = () => {
  return (
    <div>
      <div className="flex items-center justify-center w-full">
        <div className="grid items-center justify-center grid-cols-2 grid-rows-2 gap-8 pt-8 pb-16">
          {/* Title */}
          <div className="flex flex-col max-w-xl space-y-6">
            <h2 className="font-sans text-4xl font-semibold">
              Phoenix Wellness <span className="font-serif">&</span> Recovery
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              sunt, magnam error dolorem quidem tenetur eum libero et aperiam
              odio.
            </p>
            <Link
              href="#"
              className="flex items-center font-semibold group hover:text-black/90"
            >
              Visit Website
              <ChevronRight
                size={16}
                className="ml-1 transition-all group-hover:translate-x-1"
              />
            </Link>
          </div>
          {/* End Title */}

          {/* Thumbnail Landing */}
          <div className="flex h-full px-16 py-12 bg-gray-100 border-2 rounded-md max-h-96">
            <Image
              src={PhxLanding}
              alt={PhxLanding.src}
              className="object-cover object-top w-full rounded-xl"
            />
          </div>
          {/* Thumbnail Landing */}

          {/* Thumbnail Top */}
          <div className="relative flex h-full overflow-hidden bg-gray-100 border-2 rounded-md max-h-96">
            <Image
              src={PhxTop}
              alt={PhxTop.src}
              className="absolute z-10 w-80 left-16 top-12 rounded-t-xl"
            />
            <Image
              src={PhxScroll}
              alt={PhxScroll.src}
              className="absolute top-0 w-80 right-16"
            />
          </div>
          {/* End Thumbnail Top */}

          {/* Thumbnail Bottom */}
          <div className="flex h-full px-16 pb-12 bg-gray-100 border-2 rounded-md max-h-96">
            <Image
              src={PhxSection}
              alt={PhxSection.src}
              className="object-cover object-bottom w-full rounded-t-none rounded-xl"
            />
          </div>
          {/* End Thumbnail Bottom */}
        </div>
      </div>
      {/* Count */}
      <div className="flex items-center justify-center space-x-4">
        <ChevronLeft size={36} strokeWidth={3} className="cursor-pointer" />
        <div className="w-8 h-1.5 cursor-pointer bg-theme-secondary"></div>
        <div className="w-8 h-1.5 bg-black cursor-pointer"></div>
        <div className="w-8 h-1.5 bg-black cursor-pointer"></div>
        <ChevronRight size={36} strokeWidth={3} className="cursor-pointer" />
      </div>
      {/* End Count */}
    </div>
  );
};

export default Carousel;
