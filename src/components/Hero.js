// src/components/Hero.js
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-content"
        >
          <div className="hero-title">
            <h1>Crafting the Future</h1>
            <h2>William Fagan&apos;s Portfolio</h2>
          </div>
          <div className="hero-body">
            <div className="hero-text">
              <p>
                Welcome to my digital space, where creativity meets technology. I design and develop sleek, futuristic experiences that blend aesthetics with functionality. Explore my projects, skills, and vision—crafted with precision, innovation, and a passion for pushing the boundaries of design.
              </p>
            </div>
            <div className="hero-image">
              <img src="/images/headshot.png" alt="Headshot of William Fagan" />
            </div>
          </div>
        </motion.div>
      </div>
      <style jsx>{`
        .hero {
          /* New animated background using a multi-stop gradient */
          background: linear-gradient(135deg, #BF00FF, #F72585, #4895EF, #1A1A1A);
          background-size: 125% 100%;
          animation: lava 20s ease-in-out infinite;
          padding: 100px 0;
          color: #fff;
          position: relative;
          overflow: hidden;
        }
        .hero-container {
          padding: 0 20px;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .hero-content {
          background: rgba(255, 255, 255, 0.5); /* increased opacity */
          padding: 40px;
          border-radius: 20px;
          backdrop-filter: blur(0px);
          position: relative;
          z-index: 2;
        }
        .hero-title h1 {
          font-family: 'Zilap Orion', sans-serif;
          margin: 0 0 10px;
          font-size: 3.5rem;
          letter-spacing: 0.1em; /* increased letter spacing by ~10% */
          text-align: left;
        }
        .hero-title h2 {
          font-family: 'BankGothic Md BT', sans-serif;
          margin: 0 0 20px;
          font-size: 2rem;
          text-align: left;
        }
        .hero-body {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 20px;
        }
        .hero-text p {
          font-family: 'Nexa Bold', sans-serif;
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0;
          text-align: left;
        }
        .hero-image {
          margin-left: 20px;
          flex-shrink: 0;
        }
        .hero-image img {
          max-width: 250px; /* slightly larger image */
          width: 100%;
          border-radius: 10px;
        }
        /* Alternative lava lamp animation with multiple stops */
        @keyframes lava {
          0% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 50% 0%;
          }
          50% {
            background-position: 100% 50%;
          }
          75% {
            background-position: 50% 100%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}
