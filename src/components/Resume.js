// src/components/Resume.js
import { useState } from 'react';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs';
import { Document, Page } from 'react-pdf';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

const testimonials = [
  {
    quote: "William&apos;s vision and leadership transformed our projects.",
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
  // Removed unused numPages state and parameter
  const onDocumentLoadSuccess = () => {
    // No action needed for now
  };

  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="resume-section">
      <div className="resume-container">
        {/* Full-width title at the top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="resume-title"
        >
          <h2>Resume</h2>
        </motion.div>

        {/* Two-column layout: left = paragraph + buttons, right = PDF */}
        <div className="resume-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="resume-left"
          >
            <p>
              A brief summary of your professional experience goes here, highlighting key achievements, leadership skills, and the roles you&apos;re seeking.
              Use bullet points or short sentences to emphasize major milestones.
            </p>
            <div className="resume-buttons">
              <a
                href="/William_Fagan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="button view-button"
              >
                View
              </a>
              <a
                href="/William_Fagan_Resume.pdf"
                download
                className="button download-button"
              >
                Download
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="resume-right"
          >
            <div className="pdf-preview">
              <Document
                file="/William_Fagan_Resume.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page pageNumber={1} width={300} />
              </Document>
            </div>
          </motion.div>
        </div>

        {/* Testimonials carousel below the two columns */}
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

      <style jsx>{`
        .resume-section {
          background-color: #1A1A1A;
          color: #fff;
          padding: 40px 0;
        }
        .resume-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          padding: 0 20px;
        }
        /* Full-width title */
        .resume-title {
          margin-bottom: 20px;
          text-align: left;
        }
        .resume-title h2 {
          font-family: 'BankGothic Md BT', sans-serif;
          margin: 0;
          font-size: 2rem;
        }
        /* Two-column layout */
        .resume-grid {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 20px;
          align-items: start;
          margin-bottom: 10px;
        }
        .resume-left {
          text-align: left;
        }
        .resume-left p {
          font-family: 'Nexa Bold', sans-serif;
          font-size: 1rem;
          margin-bottom: 10px;
          max-width: 600px;
        }
        .resume-buttons {
          display: flex;
          gap: 10px;
        }
        .button {
          padding: 10px 20px;
          border-radius: 5px;
          text-decoration: none;
          font-family: 'Nexa Bold', sans-serif;
          color: #1A1A1A;
          background-color: #FFD700;
          transition: transform 0.2s ease, background-color 0.2s ease;
        }
        .button:hover {
          transform: scale(1.05);
          background-color: #e6c200;
        }
        .resume-right {
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }
        /* Remove any border around PDF preview */
        .pdf-preview {
          background-color: transparent;
          border: none;
          padding: 0;
        }
        .testimonials-carousel {
          margin-top: 30px;
        }
        .testimonial-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 10px;
          padding: 10px;
          text-align: left;
          font-family: 'Nexa Bold', sans-serif;
        }
        .quote {
          font-style: italic;
          margin-bottom: 10px;
        }
        .author {
          text-align: right;
          font-weight: bold;
        }
      `}</style>
      <style jsx global>{`
        /* Slick slider overrides for testimonials */
        .slick-dots li button:before {
          font-size: 12px;
          color: #fff;
        }
      `}</style>
    </section>
  );
}
