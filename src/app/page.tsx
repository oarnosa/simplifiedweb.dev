import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <main className="bg-theme-primary">
      {/* Hero */}
      <section className="h-[65vh] text-white bg-theme-primary">
        <div className="container flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-6xl font-semibold">Simplified</h1>
          <h1 className="mt-2 text-6xl font-semibold ">
            <span className="text-7xl text-theme-secondary">{'{ '}</span>
            Web Development
            <span className="text-7xl text-theme-secondary">{' }'}</span>
          </h1>
          <p className="max-w-xl my-10 text-neutral-300">
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
      <section></section>
      {/* End About */}

      {/* Services */}
      <section>
        <h2>What We Do</h2>
      </section>
      {/* End Services */}

      {/* Pricing */}
      <section>
        <h2>Pricing</h2>
      </section>
      {/* End Pricing */}

      {/* Portfolio */}
      <section>
        <h2>Our Work</h2>
      </section>
      {/* End Portfolio */}

      {/* Contact */}
      <section>
        <h2>Start Your Project</h2>
      </section>
      {/* End Contact */}
    </main>
  );
};

export default Home;
