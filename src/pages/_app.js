// src/pages/_app.js
import Head from 'next/head';
import { useEffect, useState } from 'react';
import '../styles/globals.css';
import '../styles/carousel.css';
import '../styles/glassmorphic.css';
import styles from '../styles/button-fix.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PageTransition from '../components/PageTransition';

function MyApp({ Component, pageProps }) {
  const [, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleParallax = () => {
      const scrollPosition = window.scrollY;
      document.documentElement.style.setProperty('--parallax-offset', `${scrollPosition * 0.02}px`);
    };

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const normalizedX = (clientX / windowWidth) * 2 - 1;
      const normalizedY = (clientY / windowHeight) * 2 - 1;
      setMousePosition({ x: normalizedX, y: normalizedY });
      document.documentElement.style.setProperty('--mouse-x', normalizedX.toFixed(3));
      document.documentElement.style.setProperty('--mouse-y', normalizedY.toFixed(3));
    };

    const createStars = () => {
      const container = document.body;
      const starCount = Math.min(window.innerWidth / 3, 150);
      const existingStars = document.querySelectorAll('.star');
      existingStars.forEach(star => star.remove());
      
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        const xPos = Math.random() * 100;
        const yPos = Math.random() * 100;
        const size = Math.random() < 0.9 ? 
                    Math.random() * 1.5 + 1 :
                    Math.random() * 3 + 2.5;
        const opacity = Math.random() * 0.5 + 0.3;
        star.style.left = `${xPos}%`;
        star.style.top = `${yPos}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.opacity = opacity;
        const animDelay = Math.random() * 5;
        star.style.animationDelay = `${animDelay}s`;
        const animDuration = Math.random() * 5 + 5;
        star.style.animationDuration = `${animDuration}s`;
        if (Math.random() > 0.6) {
          star.style.animation = `twinkle ${animDuration}s ease-in-out infinite`;
        }
        container.appendChild(star);
      }
    };
    
    const handleResize = () => { createStars(); };

    window.addEventListener('scroll', handleParallax);
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    createStars();
    
    const overlay = document.createElement('div');
    overlay.classList.add('bg-gradient-overlay');
    document.body.appendChild(overlay);
    
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
        <title>William Fagan&apos;s Portfolio</title>
      </Head>
      <div className={styles.buttonFix}>
        <PageTransition>
          <Component {...pageProps} />
        </PageTransition>
      </div>
    </>
  );
}

export default MyApp;
