import Carousel from '@/components/carousel';

const Portfolio = () => (
  <section id="portfolio" className="py-24 xl:pt-36 xl:pb-72">
    <div className="container">
      <div className="flex items-center">
        <div className="w-8 h-0.5 mr-2 bg-theme-secondary"></div>
        <span className="font-semibold">Our Recent Work</span>
      </div>
      <Carousel />
    </div>
  </section>
);
export default Portfolio;
