// src/components/AnimatedText.js
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedText({ 
  text, 
  className = "", 
  once = true,
  type = "reveal", // 'reveal', 'gradient', 'typewriter', 'glow'
  delay = 0,
  duration = 0.5,
  staggerChildren = 0.04,
  ...props 
}) {
  const [isMounted, setIsMounted] = useState(false);
  const letters = Array.from(text);
  
  // Handle server-side rendering by mounting animations only after component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Default reveal animation - text animates up and fades in
  const defaultAnimation = {
    hidden: { y: 30, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * staggerChildren + delay,
        duration: duration,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  };

  // Gradient animation - gradient moves through text
  const gradientAnimation = {
    hidden: { opacity: 0.3, 
             backgroundPosition: "200% center",
             backgroundSize: "200% auto", 
           },
    visible: { 
      opacity: 1,
      backgroundPosition: "0% center",
      transition: {
        delay,
        duration: 2.5,
        ease: "easeInOut",
      },
    },
  };

  // Typewriter animation - text appears one letter at a time
  const typewriterAnimation = {
    hidden: { width: 0, opacity: 0 },
    visible: (i) => ({
      width: "100%",
      opacity: 1,
      transition: {
        delay: i * staggerChildren + delay,
        duration: duration,
        ease: "linear",
      },
    }),
  };

  // Glow animation - text glows on reveal
  const glowAnimation = {
    hidden: { 
      opacity: 0, 
      textShadow: "0 0 0px rgba(255, 255, 255, 0)" 
    },
    visible: (i) => ({
      opacity: 1,
      textShadow: "0 0 20px rgba(255, 255, 255, 0.5), 0 0 30px rgba(124, 58, 237, 0.3)",
      transition: {
        delay: i * staggerChildren + delay,
        duration: duration + 0.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  };

  // Select animation based on type
  const selectAnimation = (type) => {
    switch (type) {
      case "gradient":
        return gradientAnimation;
      case "typewriter":
        return typewriterAnimation;
      case "glow":
        return glowAnimation;
      case "reveal":
      default:
        return defaultAnimation;
    }
  };

  const animation = selectAnimation(type);

  if (!isMounted) {
    return (
      <span className={`animated-text ${className}`} {...props}>
        {text}
      </span>
    );
  }

  // For gradient effect that applies to the whole text rather than per letter
  if (type === "gradient") {
    return (
      <motion.span
        className={`animated-text gradient-text ${className}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
        {...props}
        variants={animation}
      >
        {text}
      </motion.span>
    );
  }

  // For typewriter effect
  if (type === "typewriter") {
    return (
      <div className={`animated-text typewriter ${className}`}>
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block overflow-hidden"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once }}
            variants={animation}
            style={{ position: 'relative', display: 'inline-block' }}
          >
            <span className="invisible">{letter === " " ? "\u00A0" : letter}</span>
            <motion.span
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          </motion.span>
        ))}
      </div>
    );
  }

  // For letter by letter animation (reveal and glow)
  return (
    <span className={`animated-text ${type}-text ${className}`} {...props}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once }}
          variants={animation}
          style={{ display: 'inline-block' }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
}