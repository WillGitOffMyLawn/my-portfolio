// src/components/PageTransition.js
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';

export default function PageTransition({ children }) {
  const router = useRouter();
  const [reducedMotion, setReducedMotion] = useState(false);
  const hasNavigated = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Track route changes — only animate after the first navigation
  useEffect(() => {
    const handleRouteChange = () => { hasNavigated.current = true; };
    router.events.on('routeChangeStart', handleRouteChange);
    return () => router.events.off('routeChangeStart', handleRouteChange);
  }, [router.events]);

  // On initial load, don't start at opacity 0 — prevents invisible content if JS errors break animation.
  // Only use entrance animation after client-side navigation.
  const shouldAnimate = hasNavigated.current && !reducedMotion;

  const variants = shouldAnimate
    ? {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0 },
      }
    : { initial: {}, animate: {}, exit: {} };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.pathname}
        initial={variants.initial}
        animate={variants.animate}
        exit={variants.exit}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}