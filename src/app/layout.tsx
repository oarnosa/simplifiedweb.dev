import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import SansBeam from 'next/font/local';

import Footer from '@/components/Footer';
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
  title: 'Small Business Web Design + Development | Simplified Web.Dev',
  description: 'Web Development Simplified',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${sansBeam.variable} font-serif`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
