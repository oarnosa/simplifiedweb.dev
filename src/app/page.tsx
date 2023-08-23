import {
  AreaChart,
  CheckCircle,
  ChevronRight,
  Code2,
  GitPullRequest,
  HelpingHand,
  Mail,
  MapPin,
  MonitorSmartphone,
  PencilLine,
  Phone,
  PiggyBank,
  Rocket,
  Smartphone,
} from 'lucide-react';
import Link from 'next/link';

import Carousel from '@/components/Carousel';
import ContactForm from '@/components/ContactForm';
import TypedAnimation from '@/components/TypedAnimation';
import { buttonVariants } from '@/components/ui/button';

const Home = () => {
  return (
    <main>
      {/* Hero */}
      <section className="h-[75vh] min-h-[600px] text-white bg-theme-primary">
        <div className="container flex flex-col items-center justify-center h-full text-center">
          {/* Intro Desktop */}
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
          {/* End Intro Desktop */}

          {/* Intro Mobile */}
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
          {/* End Intro Mobile */}

          <p className="max-w-xl my-12 text-gray-200">
            Empowering Small Businesses with Effortless Web Development
            Solutions - Your Online Presence, Simplified.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 lg:gap-8 lg:flex-row">
            <Link
              href="#contact"
              className={`${buttonVariants({
                variant: 'default',
              })} font-semibold text-white bg-theme-secondary hover:bg-theme-secondary/90 active:bg-theme-secondary/80`}
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
      {/* End Hero */}

      {/* About */}
      <section id="about" className="py-24 lg:py-36">
        <div className="container flex flex-col">
          {/* What We Do */}
          <div className="space-y-8 lg:gap-8 lg:grid lg:grid-cols-12">
            <div className="flex flex-col justify-around space-y-4 lg:col-span-5">
              <div className="flex items-center">
                <div className="w-8 h-0.5 mr-2 bg-theme-secondary"></div>
                <span className="font-semibold">What We Do</span>
              </div>
              <h2 className="font-sans text-2xl font-semibold capitalize md:text-3xl lg:text-4xl">
                Simplifying Web Design <br />& Development For Small Businesses
              </h2>
            </div>
            <div className="col-span-7">
              <p className="pb-4">
                At Simplified Web.Dev, we are on a mission to empower small
                businesses by making web design and development easy. We
                understand the unique challenges that small businesses face, and
                our dedicated team is here to simplify your online journey. Our
                approach is all about merging tech and design with user-friendly
                functionality, ensuring that your digital presence not only
                looks amazing but also drives results.
              </p>
              <p>
                Navigating the world of web design and development can be
                overwhelming, especially for small businesses with limited
                resources. That is where we come in. Our experts take the
                complexity out of the equation, offering streamlined solutions
                tailored to your specific needs. We believe that a simplified
                website does not mean sacrificing quality; it means focusing on
                what truly matters to your business and presenting it in the
                most effective way possible.
              </p>
            </div>
          </div>
          {/* End What We Do */}

          {/* Icons */}
          <div className="mt-16 space-y-8 md:gap-0 md:grid md:grid-cols-3 lg:mt-32 md:space-y-0">
            <div className="flex flex-col items-center justify-start space-y-4 text-center md:px-4 lg:px-8">
              <MonitorSmartphone size={64} className="text-theme-secondary" />
              <p className="font-sans font-semibold capitalize">Responsive</p>
              <p>
                Responsive designs that adapt gracefully, delivering consistent
                brilliance on every screen size and resolution.
              </p>
            </div>
            <div className="flex flex-col items-center justify-start space-y-4 text-center md:px-4 lg:px-8">
              <Smartphone size={64} className="text-theme-secondary" />
              <p className="font-sans font-semibold capitalize">Mobile First</p>
              <p>
                Crafting mobile-first websites that ensure seamless experiences
                across devices, tailored to your audience.
              </p>
            </div>
            <div className="flex flex-col items-center justify-start space-y-4 text-center md:px-4 lg:px-8">
              <GitPullRequest size={64} className="text-theme-secondary" />
              <p className="font-sans font-semibold capitalize">Optimized</p>
              <p>
                Maximizing website speed and visibility, fueling your digital
                success in search rankings and user engagement.
              </p>
            </div>
          </div>
          {/* End Icons */}
        </div>
      </section>
      {/* End About */}

      {/* Model */}
      <section id="model" className="py-24 bg-gray-50 lg:py-36">
        <div className="container">
          {/* Intro */}
          <h2 className="pb-8 font-sans text-2xl font-semibold text-center capitalize md:text-3xl lg:text-4xl">
            <span className="text-theme-secondary">$0</span> Down,{' '}
            <span className="text-theme-secondary">$200</span> Per Month <br />{' '}
            12 Month Minimum Contract
          </h2>
          <p className="max-w-3xl pb-4 mx-auto text-center">
            Get started with a $0 upfront cost for a standard 5-page small
            business website. For more extensive needs, our custom pricing
            aligns with the project&apos;s scale, additional pages, and time
            commitment. You retain full ownership of your domain, content,
            listings, and profiles. Cancel anytime with no fees or hassle.
          </p>
          {/* End Intro */}

          {/* Cards */}
          <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center h-full px-12 py-6 space-y-4 text-center transition-all bg-white border-t-8 rounded-md shadow-md xl:px-16 xl:py-8 border-t-theme-secondary hover:translate-x-2 hover:-translate-y-2">
              <Code2 size={64} className="text-theme-secondary" />
              <p className="font-sans font-semibold capitalize">
                Web Design & Development
              </p>
              <p>
                Over 40+ dedicated hours for refined web design and development
                excellence.
              </p>
            </div>
            <div className="flex flex-col items-center h-full px-12 py-6 space-y-4 text-center transition-all bg-white border-t-8 rounded-md shadow-md xl:px-16 xl:py-8 border-t-theme-secondary hover:translate-x-2 hover:-translate-y-2">
              <Rocket size={60} className="text-theme-secondary" />
              <p className="font-sans font-semibold capitalize">
                Built for speed
              </p>
              <p>
                Attain a perfect 100 on Google Page Speed for enhanced SEO and
                performance.
              </p>
            </div>
            <div className="flex flex-col items-center h-full px-12 py-6 space-y-4 text-center transition-all bg-white border-t-8 rounded-md shadow-md xl:px-16 xl:py-8 border-t-theme-secondary hover:translate-x-2 hover:-translate-y-2">
              <AreaChart size={64} className="text-theme-secondary" />
              <p className="font-sans font-semibold capitalize">Analytics</p>
              <p>
                Empower your site with insights using seamlessly integrated
                Google Analytics.
              </p>
            </div>
            <div className="flex flex-col items-center h-full px-12 py-6 space-y-4 text-center transition-all bg-white border-t-8 rounded-md shadow-md xl:px-16 xl:py-8 border-t-theme-secondary hover:translate-x-2 hover:-translate-y-2">
              <PiggyBank size={64} className="text-theme-secondary" />
              <p className="font-sans font-semibold capitalize">
                Hosting Fees Included
              </p>
              <p>Hosting fees covered for a worry-free online presence.</p>
            </div>
            <div className="flex flex-col items-center h-full px-12 py-6 space-y-4 text-center transition-all bg-white border-t-8 rounded-md shadow-md xl:px-16 xl:py-8 border-t-theme-secondary hover:translate-x-2 hover:-translate-y-2">
              <PencilLine size={60} className="text-theme-secondary" />
              <p className="font-sans font-semibold capitalize">
                Endless Revisions
              </p>
              <p>
                Unlimited edits to ensure your vision is perfectly realized.
              </p>
            </div>
            <div className="flex flex-col items-center h-full px-12 py-6 space-y-4 text-center transition-all bg-white border-t-8 rounded-md shadow-md xl:px-16 xl:py-8 border-t-theme-secondary hover:translate-x-2 hover:-translate-y-2">
              <HelpingHand size={64} className="text-theme-secondary" />
              <p className="font-sans font-semibold capitalize">24/7 Support</p>
              <p>
                Round the clock help ensuring you&apos;re never alone on your
                journey.
              </p>
            </div>
          </div>
          {/* End Cards */}
        </div>
      </section>
      {/* End Model */}

      {/* Services */}
      <section
        id="services"
        className="pt-24 pb-48 text-white lg:pt-36 lg:pb-72 bg-theme-primary"
      >
        <div className="container flex flex-col">
          <div className="space-y-8 xl:grid xl:grid-cols-12 xl:gap-24">
            <div className="flex flex-col justify-around space-y-4 lg:col-span-5">
              <div className="flex items-center">
                <div className="w-8 h-0.5 mr-2 bg-theme-secondary"></div>
                <span className="font-semibold">Services We Offer</span>
              </div>
              <h2 className="font-sans text-2xl font-semibold capitalize md:text-3xl lg:text-4xl">
                Giving Small Businesses <br />
                The Big Business Treatment
              </h2>
              <p className="pt-4 text-gray-200">
                Your success fuels our passion. We are not just here to build
                websites; we are here to build your online success story. Our
                team works closely with you to understand your goals, audience,
                and brand identity. From responsive designs that look stunning
                on any device to user experiences that convert visitors into
                customers, we are dedicated to bringing your vision to life. We
                are here to simplify your web design and development experience
                - because great things come from keeping it simple.
              </p>
            </div>
            <div className="col-span-7">
              <ul className="grid gap-4 font-semibold md:grid-cols-2 lg:gap-6 lg:text-lg">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 text-theme-secondary" />
                  Website Design
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 text-theme-secondary" />
                  Website Development
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 text-theme-secondary" />
                  Responsive Design
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 text-theme-secondary" />
                  E-commerce Solutions
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 text-theme-secondary" />
                  UI/UX Design
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 text-theme-secondary" />
                  Custom Web Applications
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 text-theme-secondary" />
                  Performance Optimization
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 text-theme-secondary" />
                  Web Hosting and Domain Services
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 text-theme-secondary" />
                  Search Engine Optimization (SEO)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 text-theme-secondary" />
                  Website Maintenance and Support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 text-theme-secondary" />
                  Content Management Systems
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 text-theme-secondary" />
                  Social Media Integration
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 text-theme-secondary" />
                  Analytics and Reporting
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 text-theme-secondary" />
                  Accessibility Compliance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* End Services */}

      {/* Pricing */}
      <section id="pricing">
        <div className="container">
          <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-6">
            {/* Blogging */}
            <div className="flex flex-col items-center self-center w-full max-w-md px-4 pt-8 pb-12 mb-8 text-center transition-all bg-white border-2 border-t-8 rounded-md shadow-md hover:-translate-y-2 md:px-8 lg:self-start xl:px-16 lg:-mt-16 h-fit">
              <p className="pb-4 font-sans text-xl font-semibold">
                Standard + Blogging
              </p>
              <p className="pb-2">Starting At</p>
              <h3 className="flex items-end pb-8 text-theme-primary">
                <span className="font-sans text-4xl font-semibold lg:text-5xl">
                  $400
                </span>{' '}
                / month
              </h3>
              <ul className="w-full space-y-4 text-start">
                <li className="grid grid-cols-12">
                  <ChevronRight className="col-span-1 text-theme-secondary" />
                  <b className="col-span-11">
                    Includes All Features From Standard
                  </b>
                </li>
                <li className="grid grid-cols-12">
                  <ChevronRight className="col-span-1 text-theme-secondary" />
                  <span className="col-span-11">Blog Integration</span>
                </li>
                <li className="grid grid-cols-12">
                  <ChevronRight className="col-span-1 text-theme-secondary" />
                  <span className="col-span-11">
                    Multi-User Access Management
                  </span>
                </li>
                <li className="grid grid-cols-12">
                  <ChevronRight className="col-span-1 text-theme-secondary" />
                  <span className="col-span-11">
                    Content Management System (CMS)
                  </span>
                </li>
              </ul>
            </div>
            {/* End Blogging */}

            {/* Standard */}
            <div className="flex flex-col items-center self-center order-first w-full max-w-md px-4 pt-8 pb-12 mb-8 -mt-24 text-center transition-all bg-white border-2 border-t-8 rounded-md shadow-md hover:-translate-y-2 md:px-8 lg:self-start xl:px-16 lg:order-none lg:-mt-36 border-theme-secondary h-fit">
              <p className="pb-4 font-sans text-xl font-semibold">Standard</p>
              <p className="pb-2">5 Pages</p>
              <h3 className="flex items-end pb-8 text-theme-primary">
                <span className="font-sans text-4xl font-semibold lg:text-5xl">
                  $200
                </span>{' '}
                / month
              </h3>
              <ul className="w-full space-y-4 text-start">
                <li className="grid grid-cols-12">
                  <ChevronRight className="col-span-1 text-theme-secondary" />
                  <span className="col-span-11">
                    Over 40+ Hours of Design, Development and Testing
                  </span>
                </li>
                <li className="grid grid-cols-12">
                  <ChevronRight className="col-span-1 text-theme-secondary" />
                  <span className="col-span-11">Custom Website Design</span>
                </li>
                <li className="grid grid-cols-12">
                  <ChevronRight className="col-span-1 text-theme-secondary" />
                  <span className="col-span-11">High-Performance</span>
                </li>
                <li className="grid grid-cols-12">
                  <ChevronRight className="col-span-1 text-theme-secondary" />
                  <span className="col-span-11">Unlimited Edits</span>
                </li>
                <li className="grid grid-cols-12">
                  <ChevronRight className="col-span-1 text-theme-secondary" />
                  <span className="col-span-11">Hosting Included</span>
                </li>
                <li className="grid grid-cols-12">
                  <ChevronRight className="col-span-1 text-theme-secondary" />
                  <span className="col-span-11">Domain Configuration</span>
                </li>
                <li className="grid grid-cols-12">
                  <ChevronRight className="col-span-1 text-theme-secondary" />
                  <span className="col-span-11">
                    Google Analytics Integration
                  </span>
                </li>
                <li className="grid grid-cols-12">
                  <ChevronRight className="col-span-1 text-theme-secondary" />
                  <span className="col-span-11">
                    Search Engine Optimization (SEO)
                  </span>
                </li>
                <li className="grid grid-cols-12">
                  <ChevronRight className="col-span-1 text-theme-secondary" />
                  <span className="col-span-11">
                    Contact Forms and Lead Generation
                  </span>
                </li>
                <li className="grid grid-cols-12">
                  <ChevronRight className="col-span-1 text-theme-secondary" />
                  <span className="col-span-11">Social Media Integration</span>
                </li>
                <li className="grid grid-cols-12">
                  <ChevronRight className="col-span-1 text-theme-secondary" />
                  <span className="col-span-11">
                    Portfolio and Testimonials
                  </span>
                </li>
                <li className="grid grid-cols-12">
                  <ChevronRight className="col-span-1 text-theme-secondary" />
                  <span className="col-span-11">Round-The-Clock Support</span>
                </li>
                <li className="grid grid-cols-12">
                  <ChevronRight className="col-span-1 text-theme-secondary" />
                  <span className="col-span-11">Lifetime Updates</span>
                </li>
              </ul>
            </div>
            {/* End Standard */}

            {/* Ecommerce */}
            <div className="flex flex-col items-center self-center w-full max-w-md px-4 pt-8 pb-12 mb-8 text-center transition-all bg-white border-2 border-t-8 rounded-md shadow-md hover:-translate-y-2 md:px-8 lg:self-start xl:px-16 lg:-mt-16 h-fit">
              <p className="pb-4 font-sans text-xl font-semibold">E-Commerce</p>
              <p className="pb-2">Starting At</p>
              <h3 className="flex items-end pb-8 text-theme-primary">
                <span className="font-sans text-4xl font-semibold lg:text-5xl">
                  $8k
                </span>
              </h3>
              <ul className="w-full space-y-4 text-start">
                <li className="grid grid-cols-12">
                  <ChevronRight className="col-span-1 text-theme-secondary" />
                  <b className="col-span-11">
                    Includes All Features From Standard + Blogging
                  </b>
                </li>
                <li className="grid grid-cols-12">
                  <ChevronRight className="col-span-1 text-theme-secondary" />
                  <span className="col-span-11">
                    Shopify or WooCommerce Integration
                  </span>
                </li>
                <li className="grid grid-cols-12">
                  <ChevronRight className="col-span-1 text-theme-secondary" />
                  <span className="col-span-11">Easy To Edit</span>
                </li>
                <li className="grid grid-cols-12">
                  <ChevronRight className="col-span-1 text-theme-secondary" />
                  <span className="col-span-11">
                    Data Protection and Security
                  </span>
                </li>
                <li className="grid grid-cols-12">
                  <ChevronRight className="col-span-1 text-theme-secondary" />
                  <span className="col-span-11">Training and Support</span>
                </li>
              </ul>
              <div className="w-full pt-8 pb-4 mt-8 border-t-2">
                <p>
                  Need a{' '}
                  <span className="font-semibold text-theme-secondary">
                    Custom Web App?
                  </span>
                </p>
                <p>We can build it.</p>
              </div>
              <Link
                href="#contact"
                className="flex items-center font-semibold group hover:text-black/80"
              >
                Contact Us
                <ChevronRight
                  size={16}
                  className="ml-1 transition-all group-hover:translate-x-1"
                />
              </Link>
            </div>
            {/* End Ecommerce */}
          </div>
        </div>
      </section>
      {/* End Pricing */}

      {/* Portfolio */}
      <section id="portfolio" className="py-24 xl:pt-36 xl:pb-72">
        <div className="container">
          <div className="flex items-center">
            <div className="w-8 h-0.5 mr-2 bg-theme-secondary"></div>
            <span className="font-semibold">Our Recent Work</span>
          </div>
          <Carousel />
        </div>
      </section>
      {/* End Portfolio */}

      {/* Contact */}
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
                  <span>info@simplifiedweb.dev</span>
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
      {/* End Contact */}
    </main>
  );
};

export default Home;
