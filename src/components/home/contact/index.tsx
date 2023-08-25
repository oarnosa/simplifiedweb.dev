import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

import ContactForm from '@/components/home/contact/contact-form';

const Contact = () => (
  <section id="contact" className="py-24 xl:pt-36 xl:pb-72 bg-gray-50">
    <div className="container xl:grid xl:grid-cols-12 xl:gap-24">
      {/* Info */}
      <div className="mb-12 xl:col-span-4 xl:mb-0">
        <div className="flex items-center">
          <div className="w-8 h-0.5 mr-2 bg-theme-secondary"></div>
          <span className="font-semibold">Contact Us</span>
        </div>
        <h2 className="mt-4 mb-8 font-sans text-2xl font-semibold capitalize lg:mt-8 lg:mb-16 md:text-3xl lg:text-4xl">
          Let&apos;s Get Your Project Started
        </h2>
        <div className="space-y-4 lg:text-lg">
          {/* Phone */}
          <div className="flex items-center">
            <Phone size={30} className="mr-4" />
            <Link
              href="tel:7866988065"
              className="transition-all duration-300 group"
            >
              <span>(786) 698 8065</span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-theme-secondary"></span>
            </Link>
          </div>
          {/* End Phone */}

          {/* Email */}
          <div className="flex items-center">
            <Mail size={30} className="mr-4" />
            <Link
              href="mailto:info@simplifiedweb.dev"
              className="transition-all duration-300 group"
            >
              <span>simplifiedweb.info@gmail.com</span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-theme-secondary"></span>
            </Link>
          </div>
          {/* End Email */}

          {/* Location */}
          <div className="flex items-center">
            <MapPin size={30} className="mr-4" />
            <Link
              href="https://goo.gl/maps/LDjEwqe8e3G9j5gWA"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 group"
            >
              <span>Miami, FL</span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-theme-secondary"></span>
            </Link>
          </div>
          {/* End Location */}
        </div>
      </div>
      {/* End Info */}

      {/* Form */}
      <div className="p-8 text-white rounded-md shadow-md md:p-16 xl:-mt-64 xl:-mb-32 xl:col-span-8 bg-theme-primary">
        <ContactForm />
      </div>
      {/* End Form */}
    </div>
  </section>
);
export default Contact;
