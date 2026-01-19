'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';
import { Menu, X, Church } from 'lucide-react';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/teams', label: 'Teams' },
  { href: '/events', label: 'Events' },
  { href: '/ministries', label: 'Ministries' },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    
    // Set initial state on mount for client to avoid hydration mismatch
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isOnHomepage = pathname === '/';
  // Derive transparency state from hasScrolled, which is now safe from hydration mismatch
  const isTransparent = isOnHomepage && !hasScrolled;

  const headerClasses = isTransparent
    ? 'bg-transparent border-transparent'
    : 'bg-background/95 shadow-md backdrop-blur-sm border-border';
  
  const textClasses = isTransparent ? 'text-white' : 'text-foreground';
  
  const hoverTextClasses = isTransparent
    ? 'hover:text-gray-200 drop-shadow-sm'
    : 'hover:text-primary';

  const donateButtonClasses = isTransparent
    ? 'border-white text-white bg-transparent hover:bg-white hover:text-black'
    : 'bg-gray-700 hover:bg-gray-600 text-white';

  const mobileTriggerClasses = isTransparent
    ? 'text-white hover:bg-white/10'
    : 'text-foreground hover:bg-accent';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${headerClasses}`}
    >
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        <Link
          href="/"
          className={`text-xl font-bold transition-colors duration-300 ${textClasses} ${isTransparent ? 'drop-shadow-md' : ''}`}
        >
          CLHCCU
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${textClasses} ${hoverTextClasses}`}
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            variant={isTransparent ? 'outline' : 'secondary'}
            className={donateButtonClasses}
          >
            <Link href="/donate">Donate</Link>
          </Button>
        </nav>

        {/* Mobile Navigation Trigger */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className={mobileTriggerClasses}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full h-full bg-black/20 backdrop-blur-xl p-0 border-l-0"
          >
            <div className="flex flex-col h-full">
              <SheetHeader className="flex flex-row justify-between items-center p-4 border-b border-white/20">
                <SheetTitle asChild>
                  <Link
                    href="/"
                    className="text-xl text-white drop-shadow-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    CLHCCU
                  </Link>
                </SheetTitle>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" aria-label="Close menu">
                    <X className="h-6 w-6" />
                  </Button>
                </SheetClose>
              </SheetHeader>
              <nav className="flex flex-col items-center justify-center flex-1 space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-2xl font-medium text-white drop-shadow-sm rounded-lg p-3 transition-all duration-300 transform hover:scale-110 hover:bg-white/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-8">
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Link href="/donate">Donate</Link>
                  </Button>
                </div>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
