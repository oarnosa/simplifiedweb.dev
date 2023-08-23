import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { ContactForm } from '@/lib/types';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const sendContactForm = async (data: ContactForm) =>
  fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => {
    if (!res.ok) throw new Error('Failed to send message');
    return res.json();
  });
