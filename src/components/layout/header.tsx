'use client';

import { usePathname } from 'next/navigation';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react'; // Using Menu for mobile trigger
// Inline SVG for TikTok Icon
const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);


const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/teams', label: 'Teams' },
  { href: '/events', label: 'Events' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {

  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    // Initial check in case page loads scrolled
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || pathname !== '/' ? 'bg-background/95 shadow-md backdrop-blur-sm' : 'bg-transparent'
      } border-b border-transparent ${isScrolled || pathname !== '/' ? 'border-border' : ''}`}
    >
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        <Link
          href="/"
          className={`text-xl transition-colors duration-300 ${pathname === '/' ? 'font-bold' : 'font-normal'} ${isScrolled || pathname !== '/' ? 'text-foreground' : 'text-white drop-shadow-md'}`}>
          CLHCCU
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${isScrolled || pathname !== '/' ? 'text-foreground' : 'text-white hover:text-gray-200 drop-shadow-sm'}`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild variant={isScrolled || pathname !== '/' ? 'secondary' : 'outline'} className={`${isScrolled || pathname !== '/' ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'border-white text-white bg-transparent hover:bg-white hover:text-black'}`}>
            <Link href="/donate">Donate</Link>
          </Button>
        </nav>

        {/* Mobile Navigation Trigger */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className={`${isScrolled || pathname !== '/' ? 'text-foreground' : 'text-white hover:bg-white/10'} `}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-background p-0">
             <div className="flex justify-between items-center p-4 border-b">
               <Link
                  href="/"
                  className={`text-xl ${pathname === '/' ? 'font-bold' : 'font-normal'} text-foreground`} onClick={() => setMobileMenuOpen(false)}>
                  CLHCCU
                </Link>
                 <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                </Button>
            </div>
            <nav className="flex flex-col space-y-4 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)} // Close menu on link click
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild variant="secondary" size="lg" className="w-full bg-gray-700 hover:bg-gray-600 text-white" onClick={() => setMobileMenuOpen(false)}>
                <Link href="/donate">Donate</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
