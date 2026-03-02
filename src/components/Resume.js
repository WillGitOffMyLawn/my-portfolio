import { pdfjs, Document, Page } from 'react-pdf';
import { motion } from 'framer-motion';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import AnimatedCounterComponent from './AnimatedCounter';
import { Button } from '@/components/ui/button';
import { FaUsers, FaRocket, FaHandshake, FaTools } from 'react-icons/fa';

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs';

export default function Resume() {
  const onDocumentLoadSuccess = () => {};

  return (
    <motion.section
      id="resume"
      className="resume-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="resume-container">
        <div className="glassmorphic-wrapper">
          {/* Resume Header */}
          <header className="resume-header">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ marginTop: 0, marginBottom: '1.5rem' }}>Resume</h2>
            </motion.div>
          </header>

          {/* Two-column layout */}
          <div className="resume-content">
            {/* Left Column: Summary, Highlights, and Animated Counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="resume-left"
            >
              <div className="summary">
                <p style={{ fontFamily: "'Nexa Bold', sans-serif", fontSize: "1.25rem", maxWidth: "37.5rem", marginTop: "0rem" }}>
                Product manager with experience spanning robotics hardware, SaaS platforms, and cross-functional team leadership. Turns technical complexity into clear product direction from early customer research through shipping and scaling.
                </p>
              </div>
              <div className="highlights-section">
                <ul className="highlights-list">
                  <li className="highlight-item">
                    <span className="highlight-icon"><FaUsers size={24} /></span> Cross-functional jam breaker—unblocking complex technical projects spanning multiple teams
                  </li>
                  <li className="highlight-item">
                    <span className="highlight-icon"><FaRocket size={24} /></span> Drove data architecture and technical scaling initiatives to support 5× company growth
                  </li>
                  <li className="highlight-item">
                    <span className="highlight-icon"><FaHandshake size={24} /></span> Built sales pipelines from zero through direct outreach, trade shows, and community engagement
                  </li>
                  <li className="highlight-item">
                    <span className="highlight-icon"><FaTools size={24} /></span> Bridged technical teams and non-technical stakeholders—from field research to VC fundraising
                  </li>
                </ul>
                <AnimatedCounterComponent />
              </div>
            </motion.div>

            {/* Right Column: PDF Preview and Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="resume-right"
            >
              <div className="pdf-preview">
                <Document file="/William_Fagan_Resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                  <Page pageNumber={1} width={300} />
                </Document>
              </div>
              <div className="resume-buttons" style={{ marginTop: '1.25rem', display: 'flex', gap: '0.625rem', justifyContent: 'center' }}>
                <Button asChild variant="default">
                  <a href="/William_Fagan_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    View
                  </a>
                </Button>
                <Button asChild variant="default">
                  <a href="/William_Fagan_Resume.pdf" download>
                    Download
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Component Styles */}
      <style jsx global>{`
        .resume-section {
          background-color: transparent;
          color: #fff;
          padding: 0;
        }
        
        .resume-container {
          width: 100%;
          position: relative;
        }
        
        .resume-section h2 {
          font-family: 'BankGothic Md BT', sans-serif;
          font-size: 2rem;
          margin-top: 0;
          margin-bottom: 1.5rem;
          text-align: left;
          text-shadow: 0 0 20px rgba(124, 58, 237, 0.3), 0 0 40px rgba(124, 58, 237, 0.15);
        }
        
        .resume-header {
          margin-bottom: 1.5rem; // 30px
          text-align: left; /* Align the header itself to the left */
        }
        
        .resume-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 1.875rem; // 30px
          align-items: start;
          margin-bottom: 1.875rem; // 30px
        }
        
        .resume-left {
          text-align: left;
        }
        
        .summary {
          margin-bottom: 1.5rem; // Reduced from 1.875rem to 1.25rem (30px to 20px)
        }
        
        .highlights-section {
          margin-bottom: 1.875rem; // 30px
        }
        
        .highlights-list {
          list-style: none;
          padding: 0;
          margin: 0 0 0.9375rem 0; // 0 0 15px 0
          font-family: 'Nexa Bold', sans-serif;
          font-size: 1.25rem; // Updated from 1rem to match global minimum
        }
        
        .highlight-item {
          display: flex;
          align-items: center;
          margin-bottom: 0.9375rem; // 15px
          padding: 0.625rem; // 10px
          background: rgba(255, 255, 255, 0.05);
          border-radius: 0.625rem; // 10px
          border: 1px solid rgba(255, 255, 255, 0.15);
          font-size: 1.25rem;
        }
        
        .highlight-icon {
          color: #7c3aed; /* Purple-600 color to match button gradient */
          margin-right: 0.75rem; // 12px
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }
        
        .counter-container {
          padding-left: 0; // 0px
        }
        
        .resume-buttons {
          display: flex;
          gap: 0.625rem; // 10px
        }
        
        .resume-right {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 0.9375rem; // 15px
          padding: 1.25rem; // 20px
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.3);
        }
        
        /* Updated PDF preview: constrain to 18.75rem (300px) */
        .pdf-preview {
          max-width: 18.75rem; // 300px
          width: 100%;
          margin: 0 auto;
          display: flex;
          justify-content: center;
        }
        
        /* Add specific styling for the PDF on mobile */
        :global(.pdf-preview > div) {
          display: flex !important;
          justify-content: center !important;
          width: 100% !important;
        }
        
        :global(.pdf-preview canvas) {
          margin: 0 auto !important;
        }
        
        @media (max-width: 48rem) { // 768px
          .resume-content {
            grid-template-columns: 1fr;
          }
          
          .resume-left, .resume-right {
            margin-bottom: 1.875rem; // 30px
          }
        }
      `}</style>
      <style jsx global>{`
        .slick-dots li button:before {
          font-size: 0.75rem; // 12px
          color: #fff;
        }
      `}</style>
    </motion.section>
  );
}