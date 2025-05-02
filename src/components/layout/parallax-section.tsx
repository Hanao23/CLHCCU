'use client';

import type { ReactNode } from 'react';
import { useState, useEffect } from 'react';

interface ParallaxSectionProps {
  backgroundImage: string;
  children: ReactNode;
  className?: string;
  minHeight?: string;
  strength?: number; // Adjust parallax effect intensity (0-100)
  [key: string]: any; // Allow data-* attributes like data-ai-hint
}

export default function ParallaxSection({
  backgroundImage,
  children,
  className = '',
  minHeight = '100vh', // Default to full viewport height
  strength = 30, // Default parallax strength
  ...rest // Capture other props like data-ai-hint
}: ParallaxSectionProps) {
  const [offsetY, setOffsetY] = useState(0);

  // Calculate the effective strength (preventing extreme values)
  const effectiveStrength = Math.max(0, Math.min(100, strength));

  useEffect(() => {
    const handleScroll = () => {
      // Calculate parallax offset based on scroll position and strength
      // The division factor controls the speed of the parallax effect
      setOffsetY(window.pageYOffset * (effectiveStrength / 100) * 0.5);
    };

    // Check if window is defined (runs only on client-side)
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      // Initial call to set position on load
      handleScroll();

      // Cleanup listener on component unmount
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [effectiveStrength]); // Re-run effect if strength changes


  return (
    <section
      className={`relative overflow-hidden ${className}`}
      style={{ minHeight }}
      {...rest} // Spread the rest of the props (including data-ai-hint)
    >
      <div
        className="absolute top-0 left-0 w-full h-[150%]" // Make taller to allow for movement
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          // Apply the parallax transformation
          // Move the background up as the user scrolls down
          transform: `translateY(-${offsetY}px)`,
          // Add will-change for performance optimization
          willChange: 'transform',
        }}
        aria-hidden="true" // Hide decorative background from screen readers
      />
      <div className="relative z-10 h-full" style={{ minHeight }}>
        {children}
      </div>
    </section>
  );
}
