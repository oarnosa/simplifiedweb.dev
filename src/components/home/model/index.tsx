import {
  Code2,
  Rocket,
  AreaChart,
  PiggyBank,
  PencilLine,
  HelpingHand,
} from 'lucide-react';

import ModelCard from '@/components/home/model/model-card';

const Model = () => (
  <section id="model" className="py-24 bg-gray-50 lg:py-36">
    <div className="container">
      {/* Intro */}
      <h2 className="pb-8 font-sans text-2xl font-semibold text-center capitalize md:text-3xl lg:text-4xl">
        <span className="text-theme-secondary">$0</span> Down,{' '}
        <span className="text-theme-secondary">$200</span> Per Month <br /> 12
        Month Minimum Contract
      </h2>
      <p className="max-w-3xl pb-4 mx-auto text-center">
        Get started with a $0 upfront cost for a standard 5-page small business
        website. For more extensive needs, our custom pricing aligns with the
        project&apos;s scale, additional pages, and time commitment. You retain
        full ownership of your domain, content, listings, and profiles. Cancel
        anytime with no fees or hassle.
      </p>
      {/* End Intro */}

      {/* Cards */}
      <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
        <ModelCard>
          <Code2 size={64} className="text-theme-secondary" />
          <p className="font-sans font-semibold capitalize">
            Web Design & Development
          </p>
          <p>
            Over 40+ dedicated hours for refined web design and development
            excellence.
          </p>
        </ModelCard>
        <ModelCard>
          <Rocket size={60} className="text-theme-secondary" />
          <p className="font-sans font-semibold capitalize">Built for speed</p>
          <p>
            Attain a perfect 100 on Google Page Speed for enhanced SEO and
            performance.
          </p>
        </ModelCard>
        <ModelCard>
          <AreaChart size={64} className="text-theme-secondary" />
          <p className="font-sans font-semibold capitalize">Analytics</p>
          <p>
            Empower your site with insights using seamlessly integrated Google
            Analytics.
          </p>
        </ModelCard>
        <ModelCard>
          <PiggyBank size={64} className="text-theme-secondary" />
          <p className="font-sans font-semibold capitalize">
            Hosting Fees Included
          </p>
          <p>Hosting fees covered for a worry-free online presence.</p>
        </ModelCard>
        <ModelCard>
          <PencilLine size={60} className="text-theme-secondary" />
          <p className="font-sans font-semibold capitalize">
            Endless Revisions
          </p>
          <p>Unlimited edits to ensure your vision is perfectly realized.</p>
        </ModelCard>
        <ModelCard>
          <HelpingHand size={64} className="text-theme-secondary" />
          <p className="font-sans font-semibold capitalize">24/7 Support</p>
          <p>
            Round the clock help ensuring you&apos;re never alone on your
            journey.
          </p>
        </ModelCard>
      </div>
      {/* End Cards */}
    </div>
  </section>
);

export default Model;
