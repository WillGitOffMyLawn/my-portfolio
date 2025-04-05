// src/pages/_app.js
import Head from 'next/head';
import { useEffect, useState } from 'react';
import '../styles/globals.css';
import styles from '../styles/button-fix.module.css'; // Import button fix styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PageTransition from '../components/PageTransition';

function MyApp({ Component, pageProps }) {
  const [, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Add parallax effect on scroll and mouse movement
  useEffect(() => {
    const handleParallax = () => {
      const scrollPosition = window.scrollY;
      
      // Apply subtle parallax movement to background gradients based on scroll
      document.documentElement.style.setProperty('--parallax-offset', `${scrollPosition * 0.02}px`);
    };

    // Handle mouse movement for interactive background
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      // Calculate normalized mouse position (-1 to 1)
      const normalizedX = (clientX / windowWidth) * 2 - 1;
      const normalizedY = (clientY / windowHeight) * 2 - 1;
      
      // Update mouse position state
      setMousePosition({ x: normalizedX, y: normalizedY });
      
      // Apply subtle effect to background based on mouse position
      document.documentElement.style.setProperty('--mouse-x', normalizedX.toFixed(3));
      document.documentElement.style.setProperty('--mouse-y', normalizedY.toFixed(3));
    };

    // Create twinkling stars effect
    const createStars = () => {
      const container = document.body;
      const starCount = Math.min(window.innerWidth / 3, 150); // Responsive star count, max 150
      // Remove any existing stars first
      const existingStars = document.querySelectorAll('.star');
      existingStars.forEach(star => star.remove());
      
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random position
        const xPos = Math.random() * 100;
        const yPos = Math.random() * 100;
        
        // Random size (mostly small with a few larger ones)
        const size = Math.random() < 0.9 ? 
                    Math.random() * 1.5 + 1 : // 90% small stars (1-2.5px)
                    Math.random() * 3 + 2.5;  // 10% larger stars (2.5-5.5px)
        
        // Random opacity
        const opacity = Math.random() * 0.5 + 0.3; // 0.3-0.8
        
        // Apply styles
        star.style.left = `${xPos}%`;
        star.style.top = `${yPos}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.opacity = opacity;
        
        // Random animation delay
        const animDelay = Math.random() * 5;
        star.style.animationDelay = `${animDelay}s`;
        
        // Random animation duration (slower is better for subtle effect)
        const animDuration = Math.random() * 5 + 5; // 5-10s
        star.style.animationDuration = `${animDuration}s`;
        
        // Apply twinkle animation to some stars
        if (Math.random() > 0.6) { // 40% of stars twinkle
          star.style.animation = `twinkle ${animDuration}s ease-in-out infinite`;
        }
        
        container.appendChild(star);
      }
    };
    
    // Handle window resize for responsive elements
    const handleResize = () => {
      createStars();
    };

    window.addEventListener('scroll', handleParallax);
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initial creation
    createStars();
    
    // Add gradient overlay
    const overlay = document.createElement('div');
    overlay.classList.add('bg-gradient-overlay');
    document.body.appendChild(overlay);
    
    // Remove any existing geometric shapes that might be present
    const existingShapes = document.querySelectorAll('.geometric-shape');
    existingShapes.forEach(shape => shape.remove());
    
    return () => {
      window.removeEventListener('scroll', handleParallax);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      const overlayElement = document.querySelector('.bg-gradient-overlay');
      if (overlayElement) overlayElement.remove();
    };
  }, []);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-pM2w9nl5Kp1GfJzhG0Jb/2tLdnhH8B6tVItuJmghWk6MfxtT0RjyoIR+LrUKooI9LS2XlxE+RG0Bf1Kj+E63og=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <style jsx global>{`
        /* Global carousel arrow styles with !important flags to ensure they override component-specific styles */
        .slick-prev, 
        .slick-next {
          position: absolute !important;
          top: 50% !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          width: clamp(32px, 3.5vw, 44px) !important; /* Responsive width */
          height: clamp(32px, 3.5vw, 44px) !important; /* Responsive height */
          padding: 0 !important;
          transform: translate(0, -50%) !important;
          cursor: pointer !important;
          border: none !important;
          outline: none !important;
          
          /* Enhanced glassmorphic effect with darker background for better visibility */
          background: rgba(0, 0, 0, 0.6) !important;
          backdrop-filter: blur(5px) !important;
          -webkit-backdrop-filter: blur(5px) !important;
          border-radius: 50% !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3) !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          z-index: 10 !important;
          
          /* Hide text */
          font-size: 0 !important;
          color: transparent !important;
          overflow: hidden !important;
          transition: all 0.3s ease !important;
        }
        
        /* Explicit hover transform with !important to force the scale effect */
        .slick-prev:hover, 
        .slick-next:hover {
          background: rgba(0, 0, 0, 0.75) !important;
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.4) !important;
          transform: translate(0, -50%) scale(1.15) !important; /* Force scale effect on hover */
        }
        
        .slick-prev {
          left: 15px !important;
        }
        
        .slick-next {
          right: 15px !important;
        }
        
        /* Centralized arrow positioning */
        .slick-prev:before, 
        .slick-next:before {
          content: "" !important;
          position: absolute !important;
          top: 50% !important;
          left: 50% !important;
          transform: translate(-50%, -50%) !important;
          width: clamp(16px, 2vw, 24px) !important; /* Responsive icon size */
          height: clamp(16px, 2vw, 24px) !important; /* Responsive icon size */
          background-position: center !important;
          background-repeat: no-repeat !important;
          background-size: contain !important;
          opacity: 1 !important;
        }
        
        /* Custom arrow SVGs with proper centering */
        .slick-prev:before {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 18l-6-6 6-6'/%3E%3C/svg%3E") !important;
          transform: translate(-50%, -50%) translateX(-1px) !important; /* Fine-tune centering */
        }
        
        .slick-next:before {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9 18l6-6-6-6'/%3E%3C/svg%3E") !important;
          transform: translate(-50%, -50%) translateX(1px) !important; /* Fine-tune centering */
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .slick-prev {
            left: 10px !important;
          }
          
          .slick-next {
            right: 10px !important;
          }
        }
        
        /* Dot indicators styling */
        .slick-dots {
          bottom: -30px;
        }
        
        .slick-dots li button:before {
          color: rgba(255, 255, 255, 0.5);
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        
        .slick-dots li.slick-active button:before {
          color: #fff;
          opacity: 1;
        }
        
        /* Hide the "Previous" and "Next" text */
        .slick-prev,
        .slick-next {
          font-size: 0 !important;
          line-height: 0 !important;
          text-indent: -9999px !important;
        }
        
        /* Make sure no additional elements appear inside arrows */
        .slick-prev *,
        .slick-next * {
          display: none !important;
        }
        
        /* Fix for buttons remaining transparent after click */
        .slick-prev:focus, 
        .slick-next:focus {
          background: rgba(0, 0, 0, 0.6) !important;
          outline: none !important;
          opacity: 1 !important;
        }
        
        /* Adding active state styling to match hover - with explicit transform */
        .slick-prev:active, 
        .slick-next:active {
          background: rgba(0, 0, 0, 0.75) !important;
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.4) !important;
          transform: translate(0, -50%) scale(1.15) !important; /* Force scale effect on active state */
        }
      `}</style>
      <div className={styles.buttonFix}>
        <PageTransition>
          <Component {...pageProps} />
        </PageTransition>
      </div>
    </>
  );
}

export default MyApp;
