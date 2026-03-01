import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Home', href: '/', section: 'hero' },
  { label: 'Skills', href: '/#skills', section: 'skills' },
  { label: 'Projects', href: '/#projects', section: 'projects' },
  { label: 'Resume', href: '/#resume', section: 'resume' },
  { label: 'About', href: '/#about', section: 'about' },
  { label: 'Contact', href: '/#contact', section: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const isHome = router.pathname === '/';

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      if (!isHome) return;
      const sections = NAV_LINKS.map(l => l.section);
      let current = 'hero';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  const handleClick = (e, link) => {
    if (isHome && link.section) {
      e.preventDefault();
      const el = document.getElementById(link.section);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setMobileOpen(false);
      }
    } else {
      setMobileOpen(false);
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            WF
          </Link>

          {/* Desktop links */}
          <div className="nav-links">
            {NAV_LINKS.map(link => (
              <a
                key={link.section}
                href={link.href}
                onClick={e => handleClick(e, link)}
                className={`nav-link ${isHome && activeSection === link.section ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className={`hamburger ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle navigation"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-drawer"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {NAV_LINKS.map(link => (
              <a
                key={link.section}
                href={link.href}
                onClick={e => handleClick(e, link)}
                className={`mobile-link ${isHome && activeSection === link.section ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 0.75rem 1.5rem;
          transition: all 0.4s ease;
          background: transparent;
        }
        .navbar.scrolled {
          background: rgba(10, 10, 15, 0.8);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
        }
        .nav-inner {
          max-width: 75rem;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-logo {
          font-family: 'Zilap Orion', sans-serif;
          font-size: 1.5rem;
          color: #fff;
          text-decoration: none;
          letter-spacing: 0.1em;
          background: linear-gradient(135deg, #7c3aed, #10b981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        .nav-link {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          font-family: 'Nexa Bold', sans-serif;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          transition: color 0.3s ease;
          position: relative;
        }
        .nav-link:hover {
          color: #fff;
        }
        .nav-link.active {
          color: #fff;
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #7c3aed, #10b981);
          border-radius: 1px;
        }

        /* Hamburger */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          z-index: 1001;
        }
        .hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        @media (max-width: 48rem) {
          .nav-links { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>

      <style jsx global>{`
        .mobile-drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 70vw;
          max-width: 300px;
          z-index: 999;
          background: rgba(10, 10, 15, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-left: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          flex-direction: column;
          padding: 5rem 2rem 2rem;
          gap: 1.5rem;
        }
        .mobile-link {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          font-family: 'Nexa Bold', sans-serif;
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          transition: color 0.3s ease;
          padding: 0.5rem 0;
        }
        .mobile-link:hover,
        .mobile-link.active {
          color: #fff;
        }
        .mobile-link.active {
          border-left: 3px solid #7c3aed;
          padding-left: 0.75rem;
        }
      `}</style>
    </>
  );
}
