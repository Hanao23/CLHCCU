'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react'; // Using Menu for mobile trigger

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/teams', label: 'Teams' },
  { href: '/events', label: 'Events' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 shadow-md backdrop-blur-sm' : 'bg-transparent'
      } border-b border-transparent ${isScrolled ? 'border-border' : ''}`}
    >
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        <Link href="/" className={`text-xl font-bold ${isScrolled ? 'text-foreground' : 'text-white drop-shadow-md'}`}>
          CLHCCU
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${isScrolled ? 'text-foreground' : 'text-white hover:text-gray-200 drop-shadow-sm'}`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild variant="secondary" className="bg-gray-700 hover:bg-gray-600 text-white">
            <Link href="/donate">Donate</Link>
          </Button>
        </nav>

        {/* Mobile Navigation Trigger */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className={`${isScrolled ? 'text-foreground' : 'text-white hover:bg-white/10'} `}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-background p-0">
             <div className="flex justify-between items-center p-4 border-b">
                <Link href="/" className="text-xl font-bold text-foreground" onClick={() => setMobileMenuOpen(false)}>
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
                  onClick={() => setMobileMenuOpen(false)}
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
