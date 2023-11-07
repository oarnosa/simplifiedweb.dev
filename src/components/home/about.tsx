import { MonitorSmartphone, Smartphone, GitPullRequest } from 'lucide-react';

const About = () => (
  <section id="about" className="py-24 lg:pt-24 lg:pb-36">
    <div className="container flex flex-col">
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
            businesses by making web design and development easy. We understand
            the unique challenges that small businesses face, and our dedicated
            team is here to simplify your online journey. Our approach is all
            about merging tech and design with user-friendly functionality,
            ensuring that your digital presence not only looks amazing but also
            drives results.
          </p>
          <p>
            Navigating the world of web design and development can be
            overwhelming, especially for small businesses with limited
            resources. That is where we come in. Our experts take the complexity
            out of the equation, offering streamlined solutions tailored to your
            specific needs. We believe that a simplified website does not mean
            sacrificing quality; it means focusing on what truly matters to your
            business and presenting it in the most effective way possible.
          </p>
        </div>
      </div>
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
    </div>
  </section>
);

export default About;
