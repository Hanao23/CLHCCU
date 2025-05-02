'use client';

import type { ReactNode } from 'react';
import { useState, useEffect } from 'react';

interface ParallaxSectionProps {
  backgroundImage?: string;
  children: ReactNode;
  className?: string;
  minHeight?: string;
  [key: string]: any; // Allow data-* attributes like data-ai-hint
}

export default function ParallaxSection({
  backgroundImage = "/images/event-image.jpg",
  children,
  className = '',
  minHeight = '100vh', // Default to full viewport height
  ...rest // Capture other props like data-ai-hint
}: ParallaxSectionProps) {
  const [isClient, setIsClient] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    setIsClient(true); // Set isClient to true only on the client side

    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        // Basic parallax effect: move background slower than scroll
        setOffsetY(window.pageYOffset * 0.5); // Adjust multiplier for parallax speed
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      // Initial call to set position
      handleScroll();

      // Cleanup listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []); // Empty dependency array ensures this runs once on mount


return (
    <section
      className={`relative overflow-hidden ${className}`}
      style={{ minHeight }} // Use minHeight prop dynamically
      {...rest} // Spread the rest of the props (including data-ai-hint)
    >
      {/* Background Image Container */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          // Apply parallax transform only on the client after mount
          transform: isClient ? `translateY(${offsetY}px)` : 'none',
          // Ensure transform changes smoothly
          transition: isClient ? 'transform 0.1s ease-out' : 'none',
          // Optimize rendering performance
          willChange: 'transform',
          // Ensure background stays behind content
          zIndex: -1,
          // Make background taller to allow vertical movement without showing edges
          // Adjust this value based on the desired parallax effect intensity
          top: isClient ? `-${offsetY * 0.5}px` : '0px', // Compensate for the translateY
          height: isClient ? `calc(100% + ${offsetY * 0.5}px)` : '100%', // Make taller based on offset
        }}
        aria-hidden="true"
      />

      {/* Optional Overlay - uncomment if needed
       <div className="absolute inset-0 bg-black/50 z-0"></div> */}

      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full w-full" style={{ minHeight }}>
           {/* Render children, allowing parent to control alignment/justification via className */}
           {children}
      </div>
    </section>
  );
}
