import About from '@/components/home/about';
import Contact from '@/components/home/contact';
import Hero from '@/components/home/hero';
import Model from '@/components/home/model';
import Portfolio from '@/components/home/portfolio';
import Pricing from '@/components/home/pricing';
import Services from '@/components/home/services';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Model />
      <Services />
      <Pricing />
      <Portfolio />
      <Contact />
    </main>
  );
};

export default Home;
