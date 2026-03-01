import Link from 'next/link';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Lost in Space &middot; William Fagan</title>
      </Head>
      <div className="not-found">
        <motion.div
          className="not-found-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="glitch-text">404</h1>
          <p className="subtitle">Lost in space</p>
          <p className="description">
            The page you&apos;re looking for has drifted beyond the observable universe.
          </p>
          <Link href="/" className="home-link">
            Return to Earth
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        .not-found {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem;
          position: relative;
          z-index: 20;
        }
        .glitch-text {
          font-family: 'Zilap Orion', sans-serif;
          font-size: clamp(6rem, 15vw, 12rem);
          background: linear-gradient(135deg, #7c3aed 0%, #10b981 50%, #7c3aed 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 4s ease infinite;
          margin: 0;
          line-height: 1;
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .subtitle {
          font-family: 'BankGothic Md BT', sans-serif;
          font-size: 1.5rem;
          color: rgba(255, 255, 255, 0.7);
          margin: 1rem 0;
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }
        .description {
          font-family: 'Nexa Bold', sans-serif;
          color: rgba(255, 255, 255, 0.4);
          font-size: 1rem;
          max-width: 400px;
          margin: 0 auto 2rem;
        }
        .home-link {
          display: inline-block;
          padding: 0.75rem 2rem;
          background: rgba(124, 58, 237, 0.2);
          border: 1px solid rgba(124, 58, 237, 0.4);
          border-radius: 0.5rem;
          color: #fff;
          font-family: 'Nexa Bold', sans-serif;
          font-size: 0.9rem;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: all 0.3s ease;
        }
        .home-link:hover {
          background: rgba(124, 58, 237, 0.4);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(124, 58, 237, 0.3);
        }
      `}</style>
    </>
  );
}
