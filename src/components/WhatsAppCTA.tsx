import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppCTA: React.FC = () => {
  // Use environment variable or fallback to verified number
  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '+27655443979';
  const message = encodeURIComponent('Hi Awaitsi, I would like to discuss a digital project.');
  // Strip non-numeric characters for the wa.me link
  const formattedNumber = phoneNumber.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${formattedNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
      aria-label="Chat with Awaitsi on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppCTA;
