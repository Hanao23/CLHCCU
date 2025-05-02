import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react'; // Assuming TikTok icon isn't in lucide-react

// Inline SVG for TikTok as it's likely not in lucide-react
const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d="M12.52 15.43a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z"/>
    <path d="M12.52 15.43V5.5a2 2 0 1 1 4 0v4.47"/>
    <path d="M12.52 15.43a4.5 4.5 0 0 0 4.47-4.47"/>
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
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-400 hover:text-white transition-colors">
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
