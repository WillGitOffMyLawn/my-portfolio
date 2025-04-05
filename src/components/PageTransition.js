// src/components/PageTransition.js
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export default function PageTransition({ children }) {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
        <motion.div
          className="page-transition-overlay"
          initial={{ transform: "translateY(100%)" }}
          animate={{ transform: "translateY(100%)" }}
          exit={{ transform: "translateY(0%)" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
    </AnimatePresence>
  );
}