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
import { Menu, X } from 'lucide-react';

// Inline SVG for TikTok Icon
const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Determine initial styles based *only* on pathname (consistent server/client)
  const isOnHomepage = pathname === '/';
  const initialHeaderBgClass = isOnHomepage
    ? 'bg-transparent'
    : 'bg-background/95 shadow-md backdrop-blur-sm';
  const initialHeaderBorderClass = isOnHomepage
    ? 'border-transparent'
    : 'border-border';
  const initialTextClass = isOnHomepage
    ? 'text-white drop-shadow-md'
    : 'text-foreground';
  const initialHoverTextClass = isOnHomepage
    ? 'hover:text-gray-200 drop-shadow-sm'
    : 'hover:text-primary';
  const initialDonateButtonVariant = isOnHomepage ? 'outline' : 'secondary';
  const initialDonateButtonClass = isOnHomepage
    ? 'border-white text-white bg-transparent hover:bg-white hover:text-black'
    : 'bg-gray-700 hover:bg-gray-600 text-white';
  const initialMobileTriggerClass = isOnHomepage
    ? 'text-white hover:bg-white/10'
    : 'text-foreground hover:bg-accent';

  // State to hold the dynamic classes, initialized with pathname-based values
  const [headerBgClass, setHeaderBgClass] = useState(initialHeaderBgClass);
  const [headerBorderClass, setHeaderBorderClass] = useState(
    initialHeaderBorderClass
  );
  const [textClass, setTextClass] = useState(initialTextClass);
  const [hoverTextClass, setHoverTextClass] = useState(initialHoverTextClass);
  const [donateButtonVariant, setDonateButtonVariant] = useState(
    initialDonateButtonVariant as 'secondary' | 'outline'
  );
  const [donateButtonClass, setDonateButtonClass] = useState(
    initialDonateButtonClass
  );
  const [mobileTriggerClass, setMobileTriggerClass] = useState(
    initialMobileTriggerClass
  );

  useEffect(() => {
    setIsClient(true); // Indicate client-side execution

    const handleScroll = () => {
      const currentScrollState = window.scrollY > 10;

      // Update styles based on scroll and pathname *only on the client*
      const useScrolledStyles = currentScrollState || pathname !== '/';
      setHeaderBgClass(
        useScrolledStyles
          ? 'bg-background/95 shadow-md backdrop-blur-sm'
          : 'bg-transparent'
      );
      setHeaderBorderClass(
        useScrolledStyles ? 'border-border' : 'border-transparent'
      );
      setTextClass(
        useScrolledStyles ? 'text-foreground' : 'text-white drop-shadow-md'
      );
      setHoverTextClass(
        useScrolledStyles
          ? 'hover:text-primary'
          : 'hover:text-gray-200 drop-shadow-sm'
      );
      setDonateButtonVariant(useScrolledStyles ? 'secondary' : 'outline');
      setDonateButtonClass(
        useScrolledStyles
          ? 'bg-gray-700 hover:bg-gray-600 text-white'
          : 'border-white text-white bg-transparent hover:bg-white hover:text-black'
      );
      setMobileTriggerClass(
        useScrolledStyles
          ? 'text-foreground hover:bg-accent'
          : 'text-white hover:bg-white/10'
      );
    };

    // Set initial scroll state on mount if window is defined
    if (typeof window !== 'undefined') {
      handleScroll();
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [pathname]); // Re-run effect if pathname changes or on initial client mount

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Render based on client state to avoid hydration mismatch for dynamic classes
  // If not client yet, render with initial (pathname-based) styles
  const currentHeaderBg = isClient ? headerBgClass : initialHeaderBgClass;
  const currentHeaderBorder = isClient
    ? headerBorderClass
    : initialHeaderBorderClass;
  const currentText = isClient ? textClass : initialTextClass;
  const currentHoverText = isClient ? hoverTextClass : initialHoverTextClass;
  const currentDonateVariant = isClient
    ? donateButtonVariant
    : initialDonateButtonVariant;
  const currentDonateClass = isClient
    ? donateButtonClass
    : initialDonateButtonClass;
  const currentMobileTrigger = isClient
    ? mobileTriggerClass
    : initialMobileTriggerClass;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${currentHeaderBg} border-b ${currentHeaderBorder}`}
    >
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        <Link
          href="/"
          className={`text-xl transition-colors duration-300 ${
            pathname === '/' ? 'font-bold' : 'font-normal'
          } ${currentText}`}
        >
          CLHCCU
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${currentHoverText} ${currentText}`}
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            variant={currentDonateVariant}
            className={currentDonateClass}
          >
            <Link href="/donate">Donate</Link>
          </Button>
        </nav>

        {/* Mobile Navigation Trigger */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className={currentMobileTrigger}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[280px] bg-background/80 backdrop-blur-sm p-0"
          >
            <SheetHeader className="flex flex-row justify-between items-center p-4 border-b">
              <SheetTitle asChild>
                <Link
                  href="/"
                  className={`text-xl ${
                    pathname === '/' ? 'font-bold' : 'font-normal'
                  } text-foreground`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  CLHCCU
                </Link>
              </SheetTitle>
              <SheetClose asChild>
                <Button variant="ghost" size="icon" aria-label="Close menu">
                  <X className="h-6 w-6" />
                </Button>
              </SheetClose>
            </SheetHeader>
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
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="w-full bg-gray-700 hover:bg-gray-600 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link href="/donate">Donate</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
