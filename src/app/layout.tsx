import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

import '@/styles/globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Small Business Web Design + Development | Simplified Web.Dev',
  description: 'Web Development Simplified.',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
