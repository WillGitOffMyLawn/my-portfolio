import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-links">
            <a href="https://github.com/WillGitOffMyLawn" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/williamhfagan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:williamhfagan@gmail.com" aria-label="Email">
              <HiOutlineMail size={20} />
            </a>
          </div>
          <p className="footer-credit">
            Built with Next.js &middot; &copy; {new Date().getFullYear()} William Fagan
          </p>
        </div>
      </footer>

      <style jsx>{`
        .site-footer {
          position: relative;
          z-index: 20;
          padding: 2rem 1.5rem;
          margin-top: 4rem;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          background: rgba(10, 10, 15, 0.6);
          backdrop-filter: blur(0.75rem);
          -webkit-backdrop-filter: blur(0.75rem);
        }
        .footer-inner {
          max-width: 75rem;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .footer-links {
          display: flex;
          gap: 1.5rem;
        }
        .footer-links a {
          color: rgba(255, 255, 255, 0.5);
          transition: color 0.3s ease, transform 0.3s ease;
        }
        .footer-links a:hover {
          color: #7c3aed;
          transform: translateY(-2px);
        }
        .footer-credit {
          color: rgba(255, 255, 255, 0.35);
          font-family: 'Nexa Bold', sans-serif;
          font-size: 0.9rem;
          letter-spacing: 0.05em;
        }
      `}</style>
    </>
  );
}
