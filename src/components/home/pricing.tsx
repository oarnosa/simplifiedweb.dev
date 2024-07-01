import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const Pricing = () => (
  <section id="pricing">
    <div className="container">
      <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-6">
        {/* CMS */}
        <div className="flex flex-col items-center self-center w-full max-w-md px-4 pt-8 pb-12 mb-8 text-center transition-all bg-white border-2 border-t-8 rounded-md shadow-md xl:hover:-translate-y-2 md:px-8 lg:self-start xl:px-16 lg:-mt-16 h-fit">
          <p className="pb-4 font-sans text-xl font-semibold">Standard + CMS</p>
          <p className="pb-2">Starting At</p>
          <h3 className="flex items-end pb-8 text-theme-primary">
            <span className="font-sans text-4xl font-semibold lg:text-5xl">$300</span> / month
          </h3>
          <ul className="w-full space-y-4 text-start">
            <li className="grid grid-cols-12">
              <ChevronRight className="col-span-1 text-theme-secondary" />
              <b className="col-span-11">Includes All Features From Standard</b>
            </li>
            <li className="grid grid-cols-12">
              <ChevronRight className="col-span-1 text-theme-secondary" />
              <span className="col-span-11">Easy To Edit</span>
            </li>
            <li className="grid grid-cols-12">
              <ChevronRight className="col-span-1 text-theme-secondary" />
              <span className="col-span-11">Blog Integration</span>
            </li>
            <li className="grid grid-cols-12">
              <ChevronRight className="col-span-1 text-theme-secondary" />
              <span className="col-span-11">Multi-User Access Management</span>
            </li>
            <li className="grid grid-cols-12">
              <ChevronRight className="col-span-1 text-theme-secondary" />
              <span className="col-span-11">Content Management System (CMS)</span>
            </li>
          </ul>
        </div>
        {/* End CMS */}

        {/* Standard */}
        <div className="flex flex-col items-center self-center order-first w-full max-w-md px-4 pt-8 pb-12 mb-8 -mt-24 text-center transition-all bg-white border-2 border-t-8 rounded-md shadow-md xl:hover:-translate-y-2 md:px-8 lg:self-start xl:px-16 lg:order-none lg:-mt-36 border-theme-secondary h-fit">
          <p className="pb-4 font-sans text-xl font-semibold">Standard</p>
          <p className="pb-2">5 Pages</p>
          <h3 className="flex items-end pb-8 text-theme-primary">
            <span className="font-sans text-4xl font-semibold lg:text-5xl">$150</span> / month
          </h3>
          <ul className="w-full space-y-4 text-start">
            <li className="grid grid-cols-12">
              <ChevronRight className="col-span-1 text-theme-secondary" />
              <span className="col-span-11">Over 40+ Hours of Design, Development and Testing</span>
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
              <span className="col-span-11">Google Analytics Integration</span>
            </li>
            <li className="grid grid-cols-12">
              <ChevronRight className="col-span-1 text-theme-secondary" />
              <span className="col-span-11">Search Engine Optimization (SEO)</span>
            </li>
            <li className="grid grid-cols-12">
              <ChevronRight className="col-span-1 text-theme-secondary" />
              <span className="col-span-11">Contact Forms and Lead Generation</span>
            </li>
            <li className="grid grid-cols-12">
              <ChevronRight className="col-span-1 text-theme-secondary" />
              <span className="col-span-11">Social Media Integration</span>
            </li>
            <li className="grid grid-cols-12">
              <ChevronRight className="col-span-1 text-theme-secondary" />
              <span className="col-span-11">Portfolio and Testimonials</span>
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
        <div className="flex flex-col items-center self-center w-full max-w-md px-4 pt-8 pb-12 mb-8 text-center transition-all bg-white border-2 border-t-8 rounded-md shadow-md xl:hover:-translate-y-2 md:px-8 lg:self-start xl:px-16 lg:-mt-16 h-fit">
          <p className="pb-4 font-sans text-xl font-semibold">E-Commerce</p>
          <p className="pb-2">Starting At</p>
          <h3 className="flex items-end pb-8 text-theme-primary">
            <span className="font-sans text-4xl font-semibold lg:text-5xl">$5K</span>
          </h3>
          <ul className="w-full space-y-4 text-start">
            <li className="grid grid-cols-12">
              <ChevronRight className="col-span-1 text-theme-secondary" />
              <b className="col-span-11">Includes All Features From Standard + CMS</b>
            </li>
            <li className="grid grid-cols-12">
              <ChevronRight className="col-span-1 text-theme-secondary" />
              <span className="col-span-11">Shopify or WooCommerce Integration</span>
            </li>
            <li className="grid grid-cols-12">
              <ChevronRight className="col-span-1 text-theme-secondary" />
              <span className="col-span-11">Online Orders Management</span>
            </li>
            <li className="grid grid-cols-12">
              <ChevronRight className="col-span-1 text-theme-secondary" />
              <span className="col-span-11">Payment Processing</span>
            </li>
            <li className="grid grid-cols-12">
              <ChevronRight className="col-span-1 text-theme-secondary" />
              <span className="col-span-11">Data Protection and Security</span>
            </li>
            <li className="grid grid-cols-12">
              <ChevronRight className="col-span-1 text-theme-secondary" />
              <span className="col-span-11">Training and Support</span>
            </li>
          </ul>
          <div className="w-full pt-8 pb-4 mt-8 border-t-2">
            <p>
              Need a <span className="font-semibold text-theme-secondary">Custom Web App?</span>
            </p>
            <p>We can build it.</p>
          </div>
          <Link href="#contact" className="flex items-center font-semibold group hover:text-black/80">
            Contact Us
            <ChevronRight size={16} className="ml-1 transition-all group-hover:translate-x-1" />
          </Link>
        </div>
        {/* End Ecommerce */}
      </div>
    </div>
  </section>
);

export default Pricing;
