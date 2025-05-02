import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';

// Inline SVG for TikTok Icon
const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);


export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
            <p className="mb-1">
              <a href="tel:09263629126" className="hover:text-white transition-colors">
                 0926 362 9126
              </a>
            </p>
            <p>
              <a href="mailto:clhccu@gmail.com" className="hover:text-white transition-colors">
                clhccu@gmail.com
              </a>
            </p>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Our Location</h3>
            <p>2MWF+2G8,</p>
            <p>San Fernando, Pampanga, Philippines</p>
          </div>

          {/* Social Media & Copyright */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Connect With Us</h3>
            <div className="flex justify-center md:justify-start space-x-4 mb-4 items-center"> {/* Added items-center */}
              <a href="https://www.facebook.com/clhccu" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/clhccu_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              {/* Replaced text T with TikTok SVG Icon */}
              <a href="https://www.tiktok.com/@clhccu?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-400 hover:text-white transition-colors">
                 <TikTokIcon />
              </a>
            </div>
             <p className="text-sm">&copy; {new Date().getFullYear()} CLHCCU. All Rights Reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
