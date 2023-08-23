import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import SansBeam from 'next/font/local';

import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import Navigation from '@/components/Navigation';

import '@/styles/globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});
const sansBeam = SansBeam({
  src: [
    {
      path: '../assets/fonts/SansBeamBody-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/SansBeamBody-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/SansBeamBody-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/SansBeamBody-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/SansBeamBody-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sans-beam',
});

export const metadata: Metadata = {
  title: 'Small Business Web Development | Simplified Web.Dev',
  description:
    'Empowering Small Businesses with Effortless Web Development Solutions - Your Online Presence, Simplified.',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="scroll-smooth">
      {process.env.GA_TRACKING_ID && (
        <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID} />
      )}
      <body
        className={`${montserrat.variable} ${sansBeam.variable} font-serif`}
      >
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
