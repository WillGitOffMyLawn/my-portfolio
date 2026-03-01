// src/components/Hero.js
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

// Simple noise function for organic shapes
function noise(x, y, time) {
  // Simple noise function based on sin/cos with multiple frequencies
  const value = 
    Math.sin(x * 0.1 + time * 0.1) * Math.cos(y * 0.1 - time * 0.05) +
    Math.sin(x * 0.2 - time * 0.15) * Math.cos(y * 0.2 + time * 0.1) * 0.5 +
    Math.sin(x * 0.4 + time * 0.2) * Math.cos(y * 0.4 - time * 0.15) * 0.25;
    
  return value;
}

export default function Hero() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const blobs = [];
    const colors = ['rgba(191, 0, 255, 0.4)', 'rgba(247, 37, 133, 0.4)', 'rgba(72, 149, 239, 0.4)', 'rgba(88, 24, 69, 0.4)'];
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    // Create initial blobs
    const createBlobs = () => {
      // Scale factor based on screen size (smaller for mobile, larger for desktop)
      const scaleFactor = Math.min(canvas.width, canvas.height) / 1000;
      
      for (let i = 0; i < 9; i++) {
        blobs.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          baseRadius: Math.random() * (100 * scaleFactor) + (50 * scaleFactor), // Scale base radius to screen size
          radius: 0, // Current actual radius with undulation applied
          color: colors[Math.floor(Math.random() * colors.length)],
          vx: Math.random() * 0.2 - 0.1,
          vy: Math.random() * 0.2 - 0.1,
          growthFactor: Math.random() * 0.05 - 0.025,
          maxRadius: Math.random() * (150 * scaleFactor) + (70 * scaleFactor), // Scale max radius to screen size
          minRadius: Math.random() * (40 * scaleFactor) + (30 * scaleFactor), // Scale min radius to screen size
          mass: Math.random() * 10 + 5,
          distortionX: Math.random() * 0.4 + 0.8,
          distortionY: Math.random() * 0.4 + 0.8,
          rotation: Math.random() * Math.PI,
          // Parameters for undulating edges
          noiseScale: Math.random() * 1 + 0.5, // Scale of undulation
          noiseSpeed: Math.random() * 0.01 + 0.005, // Speed of undulation
          noiseSeed: Math.random() * 100, // Starting point in noise space
          undulationDepth: Math.random() * 0.3 + 0.1, // How much the edges undulate
        });
      }
    };

    // Check for collision between two blobs with undulating edges
    const checkCollision = (blob1, blob2) => {
      // Basic distance check first (optimization to avoid expensive calculations)
      const dx = blob1.x - blob2.x;
      const dy = blob1.y - blob2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Maximum possible radius with distortion and undulation
      const maxPossibleRadius1 = blob1.baseRadius * Math.max(blob1.distortionX, blob1.distortionY) * (1 + blob1.undulationDepth);
      const maxPossibleRadius2 = blob2.baseRadius * Math.max(blob2.distortionX, blob2.distortionY) * (1 + blob2.undulationDepth);
      
      // If they're definitely too far apart, skip detailed check
      if (distance > (maxPossibleRadius1 + maxPossibleRadius2)) {
        return false;
      }
      
      // For closer blobs, do a more detailed collision check
      const time = timeRef.current;
      const angleSteps = 12; // Check points around the perimeter
      
      // Direction vector from blob1 to blob2
      const dirX = dx / distance;
      const dirY = dy / distance;
      
      // Check if any points on blob1 collide with blob2
      for (let i = 0; i < angleSteps; i++) {
        const angle = (Math.PI * 2 / angleSteps) * i;
        
        // Get the point on blob1's perimeter in the direction of blob2
        const angleToCheck1 = Math.atan2(dirY, dirX) + angle;
        const baseX1 = Math.cos(angleToCheck1);
        const baseY1 = Math.sin(angleToCheck1);
        
        // Calculate the actual undulating radius at this point for blob1
        const noiseValue1 = noise(
          baseX1 * 10 * blob1.noiseScale, 
          baseY1 * 10 * blob1.noiseScale, 
          time * blob1.noiseSpeed + blob1.noiseSeed
        );
        const undulatingRadius1 = blob1.baseRadius * (1 + noiseValue1 * blob1.undulationDepth);
        const actualX1 = undulatingRadius1 * blob1.distortionX * baseX1;
        const actualY1 = undulatingRadius1 * blob1.distortionY * baseY1;
        
        // Rotate the point based on blob rotation
        const rotatedX1 = actualX1 * Math.cos(blob1.rotation) - actualY1 * Math.sin(blob1.rotation);
        const rotatedY1 = actualX1 * Math.sin(blob1.rotation) + actualY1 * Math.cos(blob1.rotation);
        
        // Get the world position of this point on blob1
        const worldX1 = blob1.x + rotatedX1;
        const worldY1 = blob1.y + rotatedY1;
        
        // Get the opposite angle for checking blob2
        const oppositeAngle = Math.atan2(worldY1 - blob2.y, worldX1 - blob2.x);
        const baseX2 = Math.cos(oppositeAngle);
        const baseY2 = Math.sin(oppositeAngle);
        
        // Calculate the actual undulating radius at this point for blob2
        const noiseValue2 = noise(
          baseX2 * 10 * blob2.noiseScale, 
          baseY2 * 10 * blob2.noiseScale, 
          time * blob2.noiseSpeed + blob2.noiseSeed
        );
        const undulatingRadius2 = blob2.baseRadius * (1 + noiseValue2 * blob2.undulationDepth);
        const actualX2 = undulatingRadius2 * blob2.distortionX * baseX2;
        const actualY2 = undulatingRadius2 * blob2.distortionY * baseY2;
        
        // Rotate the point based on blob rotation
        const rotatedX2 = actualX2 * Math.cos(blob2.rotation) - actualY2 * Math.sin(blob2.rotation);
        const rotatedY2 = actualX2 * Math.sin(blob2.rotation) + actualY2 * Math.cos(blob2.rotation);
        
        // Check distance between these two points on the perimeter
        const pointDx = worldX1 - blob2.x;
        const pointDy = worldY1 - blob2.y;
        const pointDistance = Math.sqrt(pointDx * pointDx + pointDy * pointDy);
        
        // If the point on blob1 is inside blob2's radius at the opposite angle
        if (pointDistance < Math.sqrt(rotatedX2 * rotatedX2 + rotatedY2 * rotatedY2)) {
          return true;
        }
      }
      
      return false;
    };
    
    // Handle collision between two blobs
    const resolveCollision = (blob1, blob2) => {
      // Calculate distance vector between blobs
      const dx = blob2.x - blob1.x;
      const dy = blob2.y - blob1.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Calculate normalized direction vector
      const nx = dx / distance;
      const ny = dy / distance;
      
      // Calculate effective blob sizes with distortion
      const effectiveRadius1 = blob1.baseRadius * Math.max(blob1.distortionX, blob1.distortionY);
      const effectiveRadius2 = blob2.baseRadius * Math.max(blob2.distortionX, blob2.distortionY);
      
      // Calculate overlap (penetration depth)
      const overlap = effectiveRadius1 + effectiveRadius2 - distance;
      
      if (overlap <= 0) return; // No collision
      
      // Calculate mass proportions for collision response
      const totalMass = blob1.mass + blob2.mass;
      const blob1Ratio = blob2.mass / totalMass;
      const blob2Ratio = blob1.mass / totalMass;
      
      // Extremely gentle position adjustment to prevent overlap
      // Much smaller than before (0.005 instead of 0.03)
      const separationFactor = 0.005;
      const separationX = nx * overlap * separationFactor;
      const separationY = ny * overlap * separationFactor;
      
      blob1.x -= separationX * blob1Ratio;
      blob1.y -= separationY * blob1Ratio;
      blob2.x += separationX * blob2Ratio;
      blob2.y += separationY * blob2Ratio;
      
      // Extremely gentle velocity adjustment
      // Much smaller than before (0.002 instead of 0.02)
      const separationForce = 0.002 * overlap;
      
      // Apply very subtle separation force
      blob1.vx -= nx * separationForce * blob1Ratio;
      blob1.vy -= ny * separationForce * blob1Ratio;
      blob2.vx += nx * separationForce * blob2Ratio;
      blob2.vy += ny * separationForce * blob2Ratio;
    };

    // Draw blobs and update their position/size
    const drawBlobs = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update time for animation
      timeRef.current += 0.01;
      
      // Check for collisions
      for (let i = 0; i < blobs.length; i++) {
        for (let j = i + 1; j < blobs.length; j++) {
          if (checkCollision(blobs[i], blobs[j])) {
            resolveCollision(blobs[i], blobs[j]);
          }
        }
      }
      
      blobs.forEach(blob => {
        // Update position
        blob.x += blob.vx;
        blob.y += blob.vy;
        
        // Update base radius size
        blob.baseRadius += blob.growthFactor;
        
        // Apply velocity limits to prevent excessive speeds
        const maxSpeed = 0.5;
        const speed = Math.sqrt(blob.vx * blob.vx + blob.vy * blob.vy);
        if (speed > maxSpeed) {
          blob.vx = (blob.vx / speed) * maxSpeed;
          blob.vy = (blob.vy / speed) * maxSpeed;
        }
        
        // Add slight damping to gradually slow blobs, but not completely
        const damping = 0.995;
        blob.vx *= damping;
        blob.vy *= damping;
        
        // Add passive movement - ensure blobs always have some velocity
        const minSpeed = 0.1; // Increased from 0.05 for faster movement
        if (speed < minSpeed) {
          // Instead of random direction, boost in current direction or create a minimal new one
          if (speed > 0.001) {
            // If there's still some direction, maintain it but boost the magnitude
            const boostFactor = minSpeed / speed;
            blob.vx *= boostFactor;
            blob.vy *= boostFactor;
          } else {
            // If completely stopped, add a stronger push in a consistent direction
            // Use blob's position relative to center to create a subtle flow pattern
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const towardsCenterX = centerX - blob.x;
            const towardsCenterY = centerY - blob.y;
            const distToCenter = Math.sqrt(towardsCenterX * towardsCenterX + towardsCenterY * towardsCenterY);
            
            if (distToCenter > 0) {
              // Normalize and apply stronger force, creating a more noticeable orbital movement
              const normalizedX = towardsCenterY / distToCenter;  // Perpendicular to center vector
              const normalizedY = -towardsCenterX / distToCenter; // to create circulation
              
              blob.vx += normalizedX * 0.05; // Increased from 0.03
              blob.vy += normalizedY * 0.05; // Increased from 0.03
            }
          }
        }
        
        // Improved edge collision with buffer to prevent sticking
        const buffer = 10;
        const effectiveRadius = blob.baseRadius * Math.max(blob.distortionX, blob.distortionY);
        
        if (blob.x - effectiveRadius < buffer) {
          blob.x = effectiveRadius + buffer;
          blob.vx = Math.abs(blob.vx) * 0.7;
        } else if (blob.x + effectiveRadius > canvas.width - buffer) {
          blob.x = canvas.width - effectiveRadius - buffer;
          blob.vx = -Math.abs(blob.vx) * 0.7;
        }
        
        if (blob.y - effectiveRadius < buffer) {
          blob.y = effectiveRadius + buffer;
          blob.vy = Math.abs(blob.vy) * 0.7;
        } else if (blob.y + effectiveRadius > canvas.height - buffer) {
          blob.y = canvas.height - effectiveRadius - buffer;
          blob.vy = -Math.abs(blob.vy) * 0.7;
        }
        
        // Reverse growth direction when reaching min/max size
        if (blob.baseRadius > blob.maxRadius || blob.baseRadius < blob.minRadius) {
          blob.growthFactor *= -1;
        }
        
        // Save the current context state
        ctx.save();
        
        // Translate to blob center for rotation
        ctx.translate(blob.x, blob.y);
        ctx.rotate(blob.rotation);
        
        // Apply gradient for softer edges - modified for undulating edges
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, blob.baseRadius * (1 + blob.undulationDepth * 1.2));
        const baseColor = blob.color.replace(/[^,]+\)/, '0.7)'); // Increase center opacity
        const midColor = blob.color.replace(/[^,]+\)/, '0.4)');  // Medium opacity for mid-region
        const edgeColor = blob.color.replace(/[^,]+\)/, '0)');   // Transparent edges
        
        gradient.addColorStop(0, baseColor);
        gradient.addColorStop(0.6, baseColor);
        gradient.addColorStop(0.85, midColor);   // Added mid gradient stop
        gradient.addColorStop(1, edgeColor);
        
        // Draw undulating blob shape
        ctx.fillStyle = gradient;
        ctx.beginPath();
        
        // Generate undulating shape
        const numPoints = 60; // increased from 50 for smoother shape
        const time = timeRef.current * blob.noiseSpeed + blob.noiseSeed;
        
        for (let i = 0; i < numPoints; i++) {
          const angle = (Math.PI * 2 / numPoints) * i;
          
          // Calculate position on the circle
          const baseX = Math.cos(angle);
          const baseY = Math.sin(angle);
          
          // Generate noise value for this point
          const noiseValue = noise(
            baseX * 10 * blob.noiseScale, 
            baseY * 10 * blob.noiseScale, 
            time
          );
          
          // Apply noise to radius (creates the undulation)
          const undulatingRadius = blob.baseRadius * (1 + noiseValue * blob.undulationDepth);
          
          // Apply distortion
          const x = undulatingRadius * blob.distortionX * baseX;
          const y = undulatingRadius * blob.distortionY * baseY;
          
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.closePath();
        ctx.fill();
        
        // Add enhanced glow effect for feathered edge appearance
        ctx.shadowBlur = 30;  // Increased from 25
        ctx.shadowColor = blob.color.replace(/[^,]+\)/, '0.35)'); // Increased opacity
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.globalCompositeOperation = 'source-over';
        ctx.fill();
        
        // Additional softer outer glow 
        ctx.shadowBlur = 40;
        ctx.shadowColor = blob.color.replace(/[^,]+\)/, '0.15)'); // Very subtle outer glow
        ctx.fill();
        
        // Restore context
        ctx.restore();
      });
      
      animationRef.current = requestAnimationFrame(drawBlobs);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    createBlobs();
    drawBlobs();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);
  
  return (
    <section id="hero" className="hero">
      {/* Background layer with canvas */}
      <div className="hero-background">
        <canvas ref={canvasRef} className="lava-lamp-canvas"></canvas>
      </div>
      
      {/* Main container */}
      <div className="hero-container">
        {/* Glassmorphic content box that wraps everything else */}
        <div className="glassmorphic-wrapper">
          <div className="hero-content" style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
            <div style={{ flex: '1 1 58%', minWidth: 0 }}>
              <motion.div
                className="hero-title"
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1>Crafting the Future</h1>
              </motion.div>
              <motion.div
                className="hero-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2>Product Manager &middot; Developer &middot; Innovator</h2>
              </motion.div>
              <motion.div
                className="hero-text"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <p>
                  Welcome to my digital space, where creativity meets technology. I design and develop sleek, futuristic experiences that blend aesthetics with functionality. Explore my projects, skills, and vision—crafted with precision, innovation, and a passion for pushing the boundaries of design.
                </p>
              </motion.div>
            </div>
            <motion.div
              className="hero-image"
              style={{ flex: '0 0 320px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="headshot-glow">
                <Image 
                  src="/images/Headshot.png" 
                  alt="Headshot of William Fagan"
                  width={400}
                  height={400}
                  priority
                  style={{ borderRadius: '10px', objectFit: 'contain', width: '100%', height: 'auto' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        .hero {
          padding: 120px 0 80px;
          color: #fff;
          position: relative;
          overflow: hidden;
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: transparent;
          z-index: 0;
        }
        
        .lava-lamp-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .hero-container {
          padding: 0 20px;
          max-width: 1200px;
          width: 100%;
          position: relative;
          z-index: 10;
        }
        
        /* New glassmorphic wrapper that sits on top of everything */
        .hero-content {
          padding: 10px;
          position: relative;
          z-index: 25;
        }
        
        .hero-title h1 {
          font-family: 'Orbitron', sans-serif;
          font-weight: 700;
          margin: 0 0 5px;
          font-size: clamp(2.2rem, 5vw, 4rem);
          letter-spacing: 0.05em;
          text-align: left;
          padding: 0 1rem 0.5rem 1rem;
          background: linear-gradient(135deg, #fff 0%, #c4b5fd 40%, #10b981 70%, #fff 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: heroGradient 6s ease infinite;
        }
        
        @keyframes heroGradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .hero-subtitle h2 {
          font-family: 'BankGothic Md BT', sans-serif;
          font-size: clamp(1rem, 2vw, 1.4rem);
          margin: 0 0 0.5rem 0;
          padding: 0.5rem 1rem;
          text-align: left;
          color: rgba(255, 255, 255, 0.5);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          line-height: 1.3;
          white-space: normal;
          overflow: visible;
        }
        
        .hero-text p {
          font-family: 'Nexa Bold', sans-serif;
          font-size: 1.25rem;
          margin: 1.5rem 0 0 0;
          text-align: left;
          line-height: 1.6;
          padding: 0 1rem 1rem 1rem;
        }
        
        .hero-image img {
          width: 100%;
          height: auto;
          border-radius: 10px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
          object-fit: contain;
        }
        
        .headshot-glow {
          position: relative;
          display: inline-block;
        }
        .headshot-glow::before {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.5), rgba(16, 185, 129, 0.5));
          filter: blur(12px);
          opacity: 0.6;
          z-index: -1;
          animation: glowPulse 3s ease-in-out infinite;
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        
        @media (max-width: 768px) {
          .hero-content {
            flex-direction: column !important;
            text-align: center;
          }
          
          .hero-title h1 {
            text-align: center;
          }
          
          .hero-subtitle h2 {
            text-align: center;
          }
          
          .hero-text p {
            text-align: center;
            font-size: 1.1rem;
          }
        }
        
        @media (max-width: 480px) {
          .hero-text p {
            font-size: 1rem;
            padding: 0 0.5rem 1rem;
          }
        }
      `}</style>
    </section>
  );
}
