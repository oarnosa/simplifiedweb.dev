import ServiceItem from '@/components/home/services/service-item';

const Services = () => (
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
            websites; we are here to build your online success story. Our team
            works closely with you to understand your goals, audience, and brand
            identity. From responsive designs that look stunning on any device
            to user experiences that convert visitors into customers, we are
            dedicated to bringing your vision to life. We are here to simplify
            your web design and development experience - because great things
            come from keeping it simple.
          </p>
        </div>
        <div className="col-span-7">
          <ul className="grid gap-4 font-semibold md:grid-cols-2 lg:gap-6 lg:text-lg">
            <ServiceItem>Website Design</ServiceItem>
            <ServiceItem>Website Development</ServiceItem>
            <ServiceItem>Responsive Design</ServiceItem>
            <ServiceItem>E-commerce Solutions</ServiceItem>
            <ServiceItem>UI/UX Design</ServiceItem>
            <ServiceItem>Custom Web Applications</ServiceItem>
            <ServiceItem>Performance Optimization</ServiceItem>
            <ServiceItem>Web Hosting and Domain Services</ServiceItem>
            <ServiceItem>Search Engine Optimization (SEO)</ServiceItem>
            <ServiceItem>Website Maintenance and Support</ServiceItem>
            <ServiceItem>Content Management Systems</ServiceItem>
            <ServiceItem>Social Media Integration</ServiceItem>
            <ServiceItem>Analytics and Reporting</ServiceItem>
            <ServiceItem>Accessibility Compliance</ServiceItem>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
export default Services;
