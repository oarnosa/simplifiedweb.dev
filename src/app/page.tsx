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
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <main>
      {/* Hero */}
      <section className="h-[65vh] text-white bg-theme-primary">
        <div className="container flex flex-col items-center justify-center h-full text-center">
          <h1 className="font-sans text-6xl font-semibold">Simplified</h1>
          <div className="flex items-center justify-center mt-2 space-x-4 font-sans text-6xl font-semibold">
            <span className="text-7xl text-theme-secondary">{'{ '}</span>
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
            <span className="text-7xl text-theme-secondary">{' }'}</span>
          </div>
          <p className="max-w-xl my-10 text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            distinctio quos repudiandae, adipisci magnam dolores molestiae
            dolorum rem fuga a.
          </p>
          <div className="flex items-center justify-center gap-8">
            <Button className="font-semibold text-white bg-theme-secondary hover:bg-theme-secondary/90 active:bg-theme-secondary/80">
              Start Your Project
            </Button>
            <Link
              href="#"
              className="flex items-center group hover:text-white/90"
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
      <section className="py-32">
        <div className="container flex flex-col">
          {/* What We Do */}
          <div className="grid grid-cols-12 gap-8">
            <div className="flex flex-col justify-around col-span-5">
              <div className="flex items-center">
                <div className="w-8 h-0.5 mr-2 bg-theme-secondary"></div>
                <span className="font-semibold">What We Do</span>
              </div>
              <h2 className="font-sans text-4xl font-semibold capitalize">
                Simplifying Web Design <br />
                <span className="font-serif">&</span> Development For Small
                Businesses
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
          <div className="grid grid-cols-3 mt-32">
            <div className="flex flex-col items-center justify-center px-8 space-y-4 text-center">
              <Smartphone size={64} className="text-theme-secondary" />
              <p className="font-sans font-semibold capitalize">Mobile First</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo minima, eaque pariatur est eligendi hic.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center px-8 space-y-4 text-center">
              <MonitorSmartphone size={64} className="text-theme-secondary" />
              <p className="font-sans font-semibold capitalize">Responsive</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                ipsam ad maiores eos in unde laboriosam voluptatibus laudantium
                aliquam dolore.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center px-8 space-y-4 text-center">
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
      <section className="bg-gray-50">
        <div className="container py-32">
          {/* Intro */}
          <h2 className="pb-8 font-sans text-4xl font-semibold text-center capitalize">
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
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center h-full px-16 py-8 space-y-4 text-center bg-white border-t-8 rounded-md border-t-theme-secondary">
              <Code2 size={64} className="text-theme-secondary" />
              <p className="font-sans font-semibold capitalize">
                Web Design <span className="font-serif">&</span> Development
              </p>
              <p>Includes over 40 hours of design, development, and testing.</p>
            </div>
            <div className="flex flex-col items-center h-full px-16 py-8 space-y-4 text-center bg-white border-t-8 rounded-md border-t-theme-secondary">
              <Rocket size={60} className="text-theme-secondary" />
              <p className="font-sans font-semibold capitalize">
                Built for speed
              </p>
              <p>
                We can achieve a perfect 100 on Google Page Speed scores and
                boost your search ranking.
              </p>
            </div>
            <div className="flex flex-col items-center h-full px-16 py-8 space-y-4 text-center bg-white border-t-8 rounded-md border-t-theme-secondary">
              <AreaChart size={64} className="text-theme-secondary" />
              <p className="font-sans font-semibold capitalize">Analytics</p>
              <p>
                We install Google Analytics for free to monitor traffic and
                where it comes from.
              </p>
            </div>
            <div className="flex flex-col items-center h-full px-16 py-8 space-y-4 text-center bg-white border-t-8 rounded-md border-t-theme-secondary">
              <PiggyBank size={64} className="text-theme-secondary" />
              <p className="font-sans font-semibold capitalize">
                Hosting Fees Included
              </p>
              <p>Hosting fees are built right into the monthly payment.</p>
            </div>
            <div className="flex flex-col items-center h-full px-16 py-8 space-y-4 text-center bg-white border-t-8 rounded-md border-t-theme-secondary">
              <PencilLine size={60} className="text-theme-secondary" />
              <p className="font-sans font-semibold capitalize">
                Unlimited Edits
              </p>
              <p>
                Change anything you want at anytime and it will be done that
                day.
              </p>
            </div>
            <div className="flex flex-col items-center h-full px-16 py-8 space-y-4 text-center bg-white border-t-8 rounded-md border-t-theme-secondary">
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
      <section className="pt-32 text-white pb-96 bg-theme-primary">
        <div className="container flex flex-col">
          <div className="grid grid-cols-12 gap-24">
            <div className="flex flex-col justify-around col-span-5">
              <div className="flex items-center">
                <div className="w-8 h-0.5 mr-2 bg-theme-secondary"></div>
                <span className="font-semibold">Services We Offer</span>
              </div>
              <h2 className="font-sans text-4xl font-semibold capitalize">
                Giving Small Businesses <br />
                The Big Business Treatment
              </h2>
              <p className="text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti magni harum mollitia, est vitae aliquid asperiores
                nulla, illo exercitationem nam eaque modi eos, omnis tempore
                ratione quod in placeat a.
              </p>
            </div>
            <div className="col-span-7">
              <ul className="grid grid-cols-2 gap-6 text-lg font-semibold">
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
      <section className="pb-16">
        <div className="container">
          <div className="grid grid-cols-3 gap-6">
            {/* Blogging */}
            <div className="flex flex-col items-center px-16 pt-8 pb-12 -mt-16 text-center bg-white border-2 border-t-8 rounded-md h-fit">
              <p className="pb-4 font-sans text-xl font-semibold">
                Standard + Blogging
              </p>
              <p className="pb-2">Starting At</p>
              <h3 className="flex items-end pb-8 text-theme-primary">
                <span className="font-sans text-5xl font-semibold">$300</span> /
                month
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
            <div className="flex flex-col items-center px-16 pt-8 pb-12 text-center bg-white border-2 border-t-8 rounded-md -mt-36 border-theme-secondary h-fit">
              <p className="pb-4 font-sans text-xl font-semibold">Standard</p>
              <p className="pb-2">5 Pages</p>
              <h3 className="flex items-end pb-8 text-theme-primary">
                <span className="font-sans text-5xl font-semibold">$150</span> /
                month
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
            <div className="flex flex-col items-center px-16 pt-8 pb-12 -mt-16 text-center bg-white border-2 border-t-8 rounded-md h-fit">
              <p className="pb-4 font-sans text-xl font-semibold">E-Commerce</p>
              <p className="pb-2">Starting At</p>
              <h3 className="flex items-end pb-8 text-theme-primary">
                <span className="font-sans text-5xl font-semibold">$5K</span>
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
                href="#"
                className="flex items-center font-semibold group hover:text-black/90"
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
      <section className="pt-32 pb-96">
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
      <section className="pt-32 pb-64 bg-gray-50">
        <div className="container grid grid-cols-12 gap-24">
          {/* Info */}
          <div className="col-span-4">
            <div className="flex items-center">
              <div className="w-8 h-0.5 mr-2 bg-theme-secondary"></div>
              <span className="font-semibold">Contact Us</span>
            </div>
            <h2 className="mt-8 mb-16 font-sans text-4xl font-semibold capitalize">
              Let&apos;s Get Your Project Started
            </h2>
            <div className="space-y-4">
              <p className="flex text-xl">
                <Phone size={32} className="mr-4" /> (786) 620 1200
              </p>
              <p className="flex text-xl">
                <Mail size={32} className="mr-4" /> info@simplifiedweb.dev
              </p>
              <p className="flex text-xl">
                <MapPin size={32} className="mr-4" /> Miami, FL
              </p>
            </div>
          </div>
          {/* End Info */}

          {/* Form */}
          <div className="col-span-8 p-16 -mt-64 -mb-32 text-white rounded-md bg-theme-primary">
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
