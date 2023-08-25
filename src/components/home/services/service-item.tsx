import { CheckCircle } from 'lucide-react';

const ServiceItem = ({ children }: { children: string }) => (
  <li className="flex items-center">
    <CheckCircle className="mr-2 text-theme-secondary" />
    {children}
  </li>
);

export default ServiceItem;
