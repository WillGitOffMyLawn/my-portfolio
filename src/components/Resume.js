import { pdfjs, Document, Page } from 'react-pdf';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import AnimatedCounterComponent from './AnimatedCounter';
import { Button } from '@/components/ui/button';
// Import React Icons
import { FaUsers, FaRocket, FaHandshake, FaTools } from 'react-icons/fa';
import { CustomPrevArrow, CustomNextArrow } from './CarouselArrows';

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs';

const testimonials = [
  {
    quote: "William's vision and leadership transformed our projects.",
    author: "Jane Doe, CEO at Company A",
  },
  {
    quote: "An exceptional product manager who bridges technical and business needs seamlessly.",
    author: "John Smith, CTO at Company B",
  },
  {
    quote: "His strategic insight is matched only by his ability to execute.",
    author: "Alice Johnson, VP of Marketing at Company C",
  },
];

export default function Resume() {
  const onDocumentLoadSuccess = () => {};

  const testimonialSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };

  return (
    <section className="resume-section">
      <div className="resume-container">
        <div className="glassmorphic-wrapper">
          {/* Resume Header */}
          <header className="resume-header">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2>Resume</h2>
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
                I am a strategic project and product manager with ~5 years of experience bridging the gap between technical teams and client objectives. I have led diverse projects —from robotic deployments to website SEO and accessibility enhancements to agile software development— ensuring on-time, within-budget delivery. Passionate about innovation and streamlined operations, I excel at turning complex technical concepts into clear, actionable strategies.
                </p>
              </div>
              <div className="highlights-section">
                <ul className="highlights-list">
                  <li className="highlight-item">
                    <span className="highlight-icon"><FaUsers size={24} /></span> Led cross-functional teams to achieve project goals while fostering a positive team culture
                  </li>
                  <li className="highlight-item">
                    <span className="highlight-icon"><FaRocket size={24} /></span> Transformed products from prototypes to market-ready solutions
                  </li>
                  <li className="highlight-item">
                    <span className="highlight-icon"><FaHandshake size={24} /></span> Championed client-centric development that turned clients into advocates
                  </li>
                  <li className="highlight-item">
                    <span className="highlight-icon"><FaTools size={24} /></span> Leveraged the latest, cutting-edge tools and technologies
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

          {/* Testimonials Carousel */}
          <div className="testimonials-carousel">
            <Slider {...testimonialSettings}>
              {testimonials.map((t, index) => (
                <div key={index} className="testimonial-card">
                  <p className="quote">&quot;{t.quote}&quot;</p>
                  <p className="author">- {t.author}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Component Styles */}
      <style jsx>{`
        .resume-section {
          background-color: transparent; /* Changed from #1A1A1A to transparent */
          color: #fff;
          padding: 1.875rem 1.25rem; // Reduced from 3.75rem to 1.875rem (60px to 30px)
        }
        
        .resume-container {
          max-width: 75rem; // 1200px
          margin: 0 auto;
          width: 100%;
          position: relative;
        }
        
        .glassmorphic-wrapper {
          position: relative;
          z-index: 20;
          width: 100%;
          background: rgba(20, 20, 20, 0.65);
          border-radius: 1.25rem; // 20px
          overflow: hidden;
          padding: 1.75rem; // 20px
          
          /* Enhanced glassmorphism effect with stronger shadow */
          backdrop-filter: blur(0.75rem); // 12px
          -webkit-backdrop-filter: blur(0.75rem); // 12px
          box-shadow: 0 0.75rem 3rem rgba(0, 0, 0, 0.7),
                      0 0.25rem 1rem rgba(124, 58, 237, 0.15),
                      0 -0.25rem 1rem rgba(16, 185, 129, 0.1); // Multi-layered shadow with subtle color
          border: 1px solid rgba(255, 255, 255, 0.15);
          
          /* Metallic highlight at top */
          background-image: linear-gradient(
            180deg, 
            rgba(255, 255, 255, 0.12) 0%, 
            rgba(255, 255, 255, 0.03) 5%,
            rgba(255, 255, 255, 0) 20%
          );
          
          /* Add subtle shadow glow on hover */
          transition: all 0.3s ease-out;
        }
        
        /* Optional subtle hover effect */
        .glassmorphic-wrapper:hover {
          box-shadow: 0 0.85rem 3.5rem rgba(0, 0, 0, 0.7),
                      0 0.35rem 1.25rem rgba(124, 58, 237, 0.2),
                      0 -0.35rem 1.25rem rgba(16, 185, 129, 0.15);
          transform: translateY(-3px);
        }
        
        .resume-section h2 {
          font-family: 'BankGothic Md BT', sans-serif;
          font-size: 2rem;
          margin-top: 0; /* Reset top margin */
          margin-bottom: 1.5rem;
          text-align: left;
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
          border: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 1.25rem; // Updated from 1rem to match global minimum
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
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.2); // 4px 16px
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
        
        .testimonials-carousel {
          max-width: calc(100% - 3rem); // Reducing width by 40px total (20px on each side)
          margin-left: auto;
          margin-right: auto;
        }
        
        .testimonial-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(0.5rem); // 8px
          -webkit-backdrop-filter: blur(0.5rem); // 8px
          border-radius: 0.9375rem; // 15px
          padding: 1.25rem; // 20px
          font-family: 'Nexa Bold', sans-serif;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        
        .quote {
          font-style: italic;
          margin-bottom: 0.9375rem; // 15px
          font-size: 1.25rem; // Updated from 1rem to match global minimum
        }
        
        .author {
          text-align: right;
          font-weight: bold;
          font-size: 1.25rem; // Updated from 1rem to match global minimum
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
    </section>
  );
}