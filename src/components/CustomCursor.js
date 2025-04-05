// src/components/CustomCursor.js
import { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is likely mobile/tablet with touch
    const checkIfMobile = () => {
      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) || window.matchMedia("(max-width: 768px)").matches
      );
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    // Don't show custom cursor on mobile devices
    if (isMobile) return;

    // Track mouse movement
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    // Hide cursor when it leaves the window
    const onMouseLeave = () => {
      setIsVisible(false);
    };

    // Show cursor when it enters the window
    const onMouseEnter = () => {
      setIsVisible(true);
    };

    // Track hover on interactive elements
    const onMouseOver = (e) => {
      const targetElement = e.target;
      if (
        targetElement.tagName === 'BUTTON' ||
        targetElement.tagName === 'A' ||
        targetElement.tagName === 'INPUT' ||
        targetElement.closest('a') ||
        targetElement.closest('button') ||
        targetElement.classList.contains('glow-on-hover') ||
        targetElement.closest('.slick-arrow') ||
        targetElement.closest('.carousel-card')
      ) {
        setIsHovering(true);
      }
    };

    const onMouseOut = () => {
      setIsHovering(false);
    };

    // Add listeners
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    // Apply glow-on-hover class to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .slick-arrow, .carousel-card');
    interactiveElements.forEach(el => {
      el.classList.add('glow-on-hover');
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      window.removeEventListener('resize', checkIfMobile);
    };
  }, [isHovering, isVisible, isMobile]);

  // Don't render on mobile or server-side
  if (isMobile || typeof window === 'undefined') {
    return null;
  }

  return (
    <>
      <div 
        className="cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0,
          width: isHovering ? '12px' : '8px',
          height: isHovering ? '12px' : '8px',
        }}
      />
      <div 
        className={`cursor-outline ${isHovering ? 'hovering' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.2 : 1})`,
        }}
      />
    </>
  );
}