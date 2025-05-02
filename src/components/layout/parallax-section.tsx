'use client';

import type { ReactNode } from 'react';
import { useState, useEffect } from 'react';

interface ParallaxSectionProps {
  backgroundImage: string;
  children: ReactNode;
  className?: string;
  minHeight?: string;
  [key: string]: any; // Allow data-* attributes like data-ai-hint
}

export default function ParallaxSection({
  backgroundImage,
  children,
  className = '',
  minHeight = '100vh', // Default to full viewport height
  ...rest // Capture other props like data-ai-hint
}: ParallaxSectionProps) {
  const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
      // Calculate parallax offset based on scroll position and strength
      // The division factor controls the speed of the parallax effect
      setOffsetY(window.pageYOffset * 0.3);
    };

  useEffect(() => {
    // Check if window is defined (runs only on client-side)
    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', handleScroll);
      // Cleanup listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll)
      };
    }
  }, []);


return (
    <section
      className={`relative overflow-hidden ${className}`}
      style={{ minHeight: "100dvh" }}
      {...rest} // Spread the rest of the props (including data-ai-hint)
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-no-repeat" // Make taller to allow for movement
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: '150%', // Make taller to compensate for transform
          width:'100%',
          top:0,
          left:0,
          // Apply the parallax transformation
          // Move the background up as the user scrolls down
          transform: `translateY(${offsetY * 0.5}px)`,
          // Add will-change for performance optimization
          willChange: 'transform',
          zIndex: -1, // Ensure background is behind content
        }}
        aria-hidden="true"
      >
         {/* Optional Overlay - uncomment if needed
         <div className="absolute inset-0 bg-black/60 z-10"></div> */}
       </div>


      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center p-4">
           {/* Render children directly */}
           {children}
      </div>
    </section>
  );
}
