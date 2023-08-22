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
      <section className="h-[70vh] text-white bg-theme-primary">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            distinctio quos repudiandae, adipisci magnam dolores molestiae
            dolorum rem fuga a.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                ducimus provident harum deserunt sunt non? Quod, cum dolore
                maiores, consequuntur dicta modi unde minima dolorum eveniet
                corporis sapiente, asperiores reprehenderit?
              </p>
              <p className="pb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Mollitia vel eos dolorem labore quaerat iure magnam aliquam
                reprehenderit nulla doloribus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                similique ad possimus perferendis impedit et voluptatibus
                veritatis aliquid officia animi commodi quibusdam quidem beatae
                non aspernatur in velit temporibus expedita consequatur,
                molestias vitae earum. Pariatur asperiores tenetur ipsum tempora
                fugit?
              </p>
            </div>
          </div>
          {/* End What We Do */}

          {/* Icons */}
          <div className="mt-16 space-y-8 md:gap-0 md:grid md:grid-cols-3 lg:mt-32">
            <div className="flex flex-col items-center justify-center space-y-4 text-center md:px-4 lg:px-8">
              <Smartphone size={64} className="text-theme-secondary" />
              <p className="font-sans font-semibold capitalize">Mobile First</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo minima, eaque pariatur est eligendi hic.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 text-center md:px-4 lg:px-8">
              <MonitorSmartphone size={64} className="text-theme-secondary" />
              <p className="font-sans font-semibold capitalize">Responsive</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                ipsam ad maiores eos in unde laboriosam voluptatibus laudantium
                aliquam dolore.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 text-center md:px-4 lg:px-8">
              <GitPullRequest size={64} className="text-theme-secondary" />
              <p className="font-sans font-semibold capitalize">Optimized</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                repudiandae sed. Reprehenderit rerum veritatis reiciendis.
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
            <span className="text-theme-secondary">$150</span> Per Month <br />{' '}
            12 Month Minimum Contract
          </h2>
          <p className="max-w-3xl pb-4 mx-auto text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            nostrum veritatis commodi porro illum asperiores quasi aut eveniet
            consectetur tenetur dolore fuga at itaque provident voluptate,
            dolorum quisquam culpa ipsa.
          </p>
          {/* End Intro */}

          {/* Cards */}
          <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center h-full px-16 py-8 space-y-4 text-center transition bg-white border-t-8 rounded-md shadow-md border-t-theme-secondary hover:translate-x-2 hover:-translate-y-2">
              <Code2 size={64} className="text-theme-secondary" />
              <p className="font-sans font-semibold capitalize">
                Web Design & Development
              </p>
              <p>Includes over 40 hours of design, development, and testing.</p>
            </div>
            <div className="flex flex-col items-center h-full px-16 py-8 space-y-4 text-center transition bg-white border-t-8 rounded-md shadow-md border-t-theme-secondary hover:translate-x-2 hover:-translate-y-2">
              <Rocket size={60} className="text-theme-secondary" />
              <p className="font-sans font-semibold capitalize">
                Built for speed
              </p>
              <p>
                We can achieve a perfect 100 on Google Page Speed scores and
                boost your search ranking.
              </p>
            </div>
            <div className="flex flex-col items-center h-full px-16 py-8 space-y-4 text-center transition bg-white border-t-8 rounded-md shadow-md border-t-theme-secondary hover:translate-x-2 hover:-translate-y-2">
              <AreaChart size={64} className="text-theme-secondary" />
              <p className="font-sans font-semibold capitalize">Analytics</p>
              <p>
                We install Google Analytics for free to monitor traffic and
                where it comes from.
              </p>
            </div>
            <div className="flex flex-col items-center h-full px-16 py-8 space-y-4 text-center transition bg-white border-t-8 rounded-md shadow-md border-t-theme-secondary hover:translate-x-2 hover:-translate-y-2">
              <PiggyBank size={64} className="text-theme-secondary" />
              <p className="font-sans font-semibold capitalize">
                Hosting Fees Included
              </p>
              <p>Hosting fees are built right into the monthly payment.</p>
            </div>
            <div className="flex flex-col items-center h-full px-16 py-8 space-y-4 text-center transition bg-white border-t-8 rounded-md shadow-md border-t-theme-secondary hover:translate-x-2 hover:-translate-y-2">
              <PencilLine size={60} className="text-theme-secondary" />
              <p className="font-sans font-semibold capitalize">
                Unlimited Edits
              </p>
              <p>
                Change anything you want at anytime and it will be done that
                day.
              </p>
            </div>
            <div className="flex flex-col items-center h-full px-16 py-8 space-y-4 text-center transition bg-white border-t-8 rounded-md shadow-md border-t-theme-secondary hover:translate-x-2 hover:-translate-y-2">
              <HelpingHand size={64} className="text-theme-secondary" />
              <p className="font-sans font-semibold capitalize">24/7 Support</p>
              <p>
                Call direct anytime day or night, no phone trees or automated
                responses.
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
          <div className="space-y-8 lg:grid lg:grid-cols-12 lg:gap-24">
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti magni harum mollitia, est vitae aliquid asperiores
                nulla, illo exercitationem nam eaque modi eos, omnis tempore
                ratione quod in placeat a.
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
            <div className="flex flex-col items-center self-center w-full max-w-md px-4 pt-8 pb-12 mb-8 text-center bg-white border-2 border-t-8 rounded-md shadow-md md:px-8 lg:self-start lg:px-16 lg:-mt-16 h-fit">
              <p className="pb-4 font-sans text-xl font-semibold">
                Standard + Blogging
              </p>
              <p className="pb-2">Starting At</p>
              <h3 className="flex items-end pb-8 text-theme-primary">
                <span className="font-sans text-4xl font-semibold lg:text-5xl">
                  $300
                </span>{' '}
                / month
              </h3>
              <ul className="w-full space-y-4">
                <li className="flex justify-start">
                  <ChevronRight className="text-gray-300" /> List Item
                </li>
                <li className="flex justify-start">
                  <ChevronRight className="text-gray-300" /> List Item
                </li>
                <li className="flex justify-start">
                  <ChevronRight className="text-gray-300" /> List Item
                </li>
                <li className="flex justify-start">
                  <ChevronRight className="text-gray-300" /> List Item
                </li>
                <li className="flex justify-start">
                  <ChevronRight className="text-gray-300" /> List Item
                </li>
              </ul>
            </div>
            {/* End Blogging */}

            {/* Standard */}
            <div className="flex flex-col items-center self-center order-first w-full max-w-md px-4 pt-8 pb-12 mb-8 -mt-24 text-center bg-white border-2 border-t-8 rounded-md shadow-md md:px-8 lg:self-start lg:px-16 lg:order-none lg:-mt-36 border-theme-secondary h-fit">
              <p className="pb-4 font-sans text-xl font-semibold">Standard</p>
              <p className="pb-2">5 Pages</p>
              <h3 className="flex items-end pb-8 text-theme-primary">
                <span className="font-sans text-4xl font-semibold lg:text-5xl">
                  $150
                </span>{' '}
                / month
              </h3>
              <ul className="w-full space-y-4">
                <li className="flex justify-start">
                  <ChevronRight className="text-theme-secondary" /> List Item
                </li>
                <li className="flex justify-start">
                  <ChevronRight className="text-theme-secondary" /> List Item
                </li>
                <li className="flex justify-start">
                  <ChevronRight className="text-theme-secondary" /> List Item
                </li>
                <li className="flex justify-start">
                  <ChevronRight className="text-theme-secondary" /> List Item
                </li>
                <li className="flex justify-start">
                  <ChevronRight className="text-theme-secondary" /> List Item
                </li>
                <li className="flex justify-start">
                  <ChevronRight className="text-theme-secondary" /> List Item
                </li>
                <li className="flex justify-start">
                  <ChevronRight className="text-theme-secondary" /> List Item
                </li>
                <li className="flex justify-start">
                  <ChevronRight className="text-theme-secondary" /> List Item
                </li>
                <li className="flex justify-start">
                  <ChevronRight className="text-theme-secondary" /> List Item
                </li>
                <li className="flex justify-start">
                  <ChevronRight className="text-theme-secondary" /> List Item
                </li>
                <li className="flex justify-start">
                  <ChevronRight className="text-theme-secondary" /> List Item
                </li>
                <li className="flex justify-start">
                  <ChevronRight className="text-theme-secondary" /> List Item
                </li>
                <li className="flex justify-start">
                  <ChevronRight className="text-theme-secondary" /> List Item
                </li>
              </ul>
            </div>
            {/* End Standard */}

            {/* Ecommerce */}
            <div className="flex flex-col items-center self-center w-full max-w-md px-4 pt-8 pb-12 mb-8 text-center bg-white border-2 border-t-8 rounded-md shadow-md md:px-8 lg:self-start lg:px-16 lg:-mt-16 h-fit">
              <p className="pb-4 font-sans text-xl font-semibold">E-Commerce</p>
              <p className="pb-2">Starting At</p>
              <h3 className="flex items-end pb-8 text-theme-primary">
                <span className="font-sans text-4xl font-semibold lg:text-5xl">
                  $5K
                </span>
              </h3>
              <ul className="w-full space-y-4">
                <li className="flex justify-start">
                  <ChevronRight className="text-gray-300" /> List Item
                </li>
                <li className="flex justify-start">
                  <ChevronRight className="text-gray-300" /> List Item
                </li>
                <li className="flex justify-start">
                  <ChevronRight className="text-gray-300" /> List Item
                </li>
                <li className="flex justify-start">
                  <ChevronRight className="text-gray-300" /> List Item
                </li>
                <li className="flex justify-start">
                  <ChevronRight className="text-gray-300" /> List Item
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
      <section id="portfolio" className="py-24 lg:pt-36 lg:pb-72">
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
      <section id="contact" className="py-24 lg:pt-36 lg:pb-72 bg-gray-50">
        <div className="container lg:grid lg:grid-cols-12 lg:gap-24">
          {/* Info */}
          <div className="mb-12 lg:col-span-4 lg:mb-0">
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
                  className="transition duration-300 group"
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
                  className="transition duration-300 group"
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
                  className="transition duration-300 group"
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
          <div className="p-8 text-white rounded-md md:p-16 lg:-mt-64 lg:-mb-32 lg:col-span-8 bg-theme-primary">
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
