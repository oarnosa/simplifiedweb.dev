'use client';

import { useState } from 'react';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

import PROJECTS_DATA from '@/assets/projects.data';

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [projects] = useState(PROJECTS_DATA);

  const handleNext = () => {
    let next = current + 1;
    if (next <= projects.length - 1) {
      setCurrent(next);
    }
  };

  const handlePrev = () => {
    let prev = current - 1;
    if (prev >= 0) setCurrent(prev);
  };

  return (
    <div className="mt-4 mb-8 lg:my-12">
      {/* Carousel Content */}
      {projects
        .filter((_, index) => index === current)
        .map((project) => (
          <div
            key={project.id}
            className="items-center justify-center mb-8 lg:mb-12 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-8"
          >
            {/* Title */}
            <div className="flex flex-col max-w-xl mb-12 space-y-4 lg:mb-0">
              <h2 className="font-sans text-2xl font-semibold md:text-3xl lg:text-4xl">
                {project.title}
              </h2>
              <p>{project.description}</p>
              <Link
                href={project.url}
                className="flex items-center font-semibold group hover:text-black/80 w-fit"
                target="_blank"
                rel="noopener noreferrer"
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
            <div className="flex h-full p-0 max-h-96 md:hidden lg:bg-gray-100 lg:border-2 lg:rounded-md lg:min-h-[384px] lg:flex lg:px-16 lg:py-12">
              <img
                src={project.images.landing}
                alt={project.title}
                className="object-cover object-top w-full rounded-xl"
              />
            </div>
            {/* Thumbnail Landing */}

            {/* Thumbnail Top / Content Scroll */}
            <div className="relative h-full overflow-hidden bg-gray-100 border-2 rounded-md max-h-96 min-h-[384px] hidden md:flex">
              <img
                src={project.images.top}
                alt={project.title}
                className="absolute z-10 w-80 left-16 top-12 rounded-t-xl"
              />
              <img
                src={project.images.scroll}
                alt={project.title}
                className="absolute top-0 w-80 right-16"
              />
            </div>
            {/* End Thumbnail Top / Content Scroll */}

            {/* Thumbnail Section */}
            <div className="h-full px-16 pb-12 bg-gray-100 border-2 rounded-md max-h-96 min-h-[384px] hidden lg:flex">
              <img
                src={project.images.section}
                alt={project.title}
                className="object-cover object-bottom w-full rounded-t-none rounded-xl"
              />
            </div>
            {/* End Thumbnail Section */}
          </div>
        ))}
      {/* End Carousel Content */}

      {/* Carousel Nav */}
      <div className="flex items-center justify-center space-x-4">
        <ChevronLeft
          size={32}
          strokeWidth={3}
          className={`cursor-pointer ${
            current === 0 ? 'text-gray-200' : 'text-black'
          }`}
          onClick={handlePrev}
        />
        {projects.map((project) => (
          <div
            key={project.id}
            className={`w-6 h-1.5 cursor-pointer ${
              current === projects.indexOf(project)
                ? 'bg-theme-secondary'
                : 'bg-black'
            }`}
            onClick={() => {
              setCurrent(projects.indexOf(project));
            }}
          ></div>
        ))}
        <ChevronRight
          size={32}
          strokeWidth={3}
          className={`cursor-pointer ${
            current === projects.length - 1 ? 'text-gray-200' : 'text-black'
          }`}
          onClick={handleNext}
        />
      </div>
      {/* End Carousel Nav */}
    </div>
  );
};

export default Carousel;
