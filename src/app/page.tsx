import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import TypedAnimation from '@/components/TypedAnimation';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <main>
      {/* Hero */}
      <section className="h-[65vh] text-white bg-theme-primary">
        <div className="container flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-6xl font-semibold">Simplified</h1>
          <div className="flex items-center justify-center mt-2 space-x-4 text-6xl font-semibold">
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
      <section className="">
        <div className="container">
          <h2>Who We Are</h2>
        </div>
      </section>
      {/* End About */}

      {/* Services */}
      <section className="">
        <div className="container">
          <h2>What We Do</h2>
        </div>
      </section>
      {/* End Services */}

      {/* Pricing */}
      <section className="">
        <div className="container">
          <h2>Pricing</h2>
        </div>
      </section>
      {/* End Pricing */}

      {/* Portfolio */}
      <section className="">
        <div className="container">
          <h2>Our Work</h2>
        </div>
      </section>
      {/* End Portfolio */}

      {/* Contact */}
      <section className="">
        <div className="container">
          <h2>Start Your Project</h2>
        </div>
      </section>
      {/* End Contact */}
    </main>
  );
};

export default Home;
