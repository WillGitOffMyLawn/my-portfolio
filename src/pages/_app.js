// src/pages/_app.js
import Head from 'next/head';
import { useEffect } from 'react';
import '../styles/globals.css';
import '../styles/carousel.css';
import '../styles/glassmorphic.css';
import styles from '../styles/button-fix.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PageTransition from '../components/PageTransition';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // RAF-throttled scroll handler
    let scrollTicking = false;
    const handleParallax = () => {
      if (scrollTicking) return;
      scrollTicking = true;
      requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--parallax-offset', `${window.scrollY * 0.02}px`);
        scrollTicking = false;
      });
    };

    // RAF-throttled mousemove — no React state update needed, just CSS vars
    let mouseTicking = false;
    const handleMouseMove = (e) => {
      if (mouseTicking) return;
      mouseTicking = true;
      requestAnimationFrame(() => {
        const normalizedX = (e.clientX / window.innerWidth) * 2 - 1;
        const normalizedY = (e.clientY / window.innerHeight) * 2 - 1;
        document.documentElement.style.setProperty('--mouse-x', normalizedX.toFixed(3));
        document.documentElement.style.setProperty('--mouse-y', normalizedY.toFixed(3));
        mouseTicking = false;
      });
    };

    const createStars = () => {
      const container = document.body;
      const starCount = Math.min(Math.floor(window.innerWidth / 4), 100);
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
    
    // Debounced resize — don't recreate stars on every pixel of resize
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(createStars, 250);
    };

    window.addEventListener('scroll', handleParallax, { passive: true });
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    createStars();
    
    const overlay = document.createElement('div');
    overlay.classList.add('bg-gradient-overlay');
    document.body.appendChild(overlay);

    // Add grain texture overlay — use canvas-generated PNG instead of SVG feTurbulence (much cheaper for GPU)
    const grain = document.createElement('div');
    grain.classList.add('grain-overlay');
    const grainCanvas = document.createElement('canvas');
    grainCanvas.width = 128;
    grainCanvas.height = 128;
    const gCtx = grainCanvas.getContext('2d');
    const imageData = gCtx.createImageData(128, 128);
    for (let i = 0; i < imageData.data.length; i += 4) {
      const v = Math.random() * 255;
      imageData.data[i] = v;
      imageData.data[i + 1] = v;
      imageData.data[i + 2] = v;
      imageData.data[i + 3] = 255;
    }
    gCtx.putImageData(imageData, 0, 0);
    grain.style.backgroundImage = `url(${grainCanvas.toDataURL()})`;
    grain.style.backgroundRepeat = 'repeat';
    document.body.appendChild(grain);
    
    const existingShapes = document.querySelectorAll('.geometric-shape');
    existingShapes.forEach(shape => shape.remove());

    // Shooting stars at random intervals
    const shootingInterval = setInterval(() => {
      if (Math.random() > 0.6) return;
      const star = document.createElement('div');
      star.classList.add('shooting-star');
      star.style.top = `${Math.random() * 60}%`;
      star.style.left = `${Math.random() * 60}%`;
      document.body.appendChild(star);
      setTimeout(() => star.remove(), 1500);
    }, 4000);
    
    return () => {
      window.removeEventListener('scroll', handleParallax);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(shootingInterval);
      const overlayElement = document.querySelector('.bg-gradient-overlay');
      if (overlayElement) overlayElement.remove();
      const grainElement = document.querySelector('.grain-overlay');
      if (grainElement) grainElement.remove();
    };
  }, []);

  return (
    <>
      <Head>
        <title>William Fagan&apos;s Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'William Fagan',
              url: 'https://williamhfagan.com',
              image: 'https://williamhfagan.com/images/Headshot.webp',
              jobTitle: 'Product Manager & Developer',
              sameAs: [
                'https://github.com/WillGitOffMyLawn',
                'https://linkedin.com/in/williamhfagan',
              ],
            }),
          }}
        />
      </Head>
      <div className={styles.buttonFix}>
        <a href="#main-content" className="skip-to-content">Skip to content</a>
        <Navbar />
        <PageTransition>
          <main id="main-content">
            <Component {...pageProps} />
          </main>
        </PageTransition>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
