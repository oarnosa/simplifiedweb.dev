import { Copyright } from 'lucide-react';

const Footer = () => {
  return (
    <section className="text-white bg-theme-primary">
      <div className="container">
        <p className="flex items-center justify-center text-sm h-14">
          Copyright <Copyright size={16} className="mx-1" /> 2023 | Simplified
          Web.Dev | All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
