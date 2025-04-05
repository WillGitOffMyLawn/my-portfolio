// src/components/Contact.js
import { useState } from 'react';
import { motion } from 'framer-motion';
import {Button} from '@/components/ui/button';

export default function Contact() {
  // Form state for submission and validation messages
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitted: false, error: false, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simple client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ submitted: false, error: true, message: "Please fill out all fields." });
      return;
    }

    // TODO: Replace this fetch call with your chosen email service API (e.g., Formspree or EmailJS)
    try {
      const res = await fetch("https://formspree.io/f/mjkgnpyz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus({ submitted: true, error: false, message: "Thanks for reaching out!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ submitted: false, error: true, message: "Something went wrong. Please try again." });
      }
    } catch (err) {
      console.error(err);
      setStatus({ submitted: false, error: true, message: "An error occurred. Please try again." });
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="glassmorphic-wrapper">
          <motion.div 
            className="contact-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center' }} // Center align the content
          >
            <h2>Get in Touch</h2>
            <p>
              I&apos;d love to connect with you! Whether you have a project idea, need a skilled project manager, or just want to discuss opportunities, feel free to reach out using the form below.
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="input-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <Button type="submit">
                Send Message
              </Button>
              {status.message && (
                <p className={`status ${status.error ? 'error' : 'success'}`}>{status.message}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          background-color: transparent;
          color: #fff;
          padding: 1.875rem 1.25rem; // 60px 20px
        }
        
        .contact-container {
          max-width: 75rem; // 1200px
          margin: 0 auto;
          width: 100%;
          padding: 0 1.25rem; // 0 20px
          display: flex;
          justify-content: center;
        }
        
        .glassmorphic-wrapper {
          position: relative;
          z-index: 20;
          width: 100%;
          max-width: 37.5rem; // 600px
          background: rgba(20, 20, 20, 0.65);
          border-radius: 1.25rem; // 20px
          overflow: hidden;
          padding: 1.75rem;
          
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
        
        .contact-content {
          text-align: left; /* Keep text left-aligned */
          width: 100%;
        }
        
        h2 {
          font-family: 'BankGothic Md BT', sans-serif;
          font-size: 2rem;
          margin-top: 0; /* Reset top margin */
          margin-bottom: 1.25rem; // 20px
        }
        
        p {
          font-family: 'Nexa Bold', sans-serif;
          font-size: 1rem;
          margin-bottom: 1.875rem; // 30px
          max-width: 37.5rem; // 600px
        }
        
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem; // 20px
        }
        
        .input-row {
          display: flex;
          gap: 1.25rem; // 20px
        }
        
        .input-row input {
          flex: 1;
          padding: 0.625rem 0.9375rem; // 10px 15px
          border-radius: 0.3125rem; // 5px
          border: 1px solid rgba(255, 255, 255, 0.2);
          font-family: 'Nexa Bold', sans-serif;
          font-size: 1rem;
          background-color: rgba(255, 255, 255, 0.1);
          color: #fff;
        }
        
        textarea {
          padding: 0.625rem 0.9375rem; // 10px 15px
          border-radius: 0.3125rem; // 5px
          border: 1px solid rgba(255, 255, 255, 0.2);
          font-family: 'Nexa Bold', sans-serif;
          font-size: 1rem;
          background-color: rgba(255, 255, 255, 0.1);
          color: #fff;
        }
        
        input::placeholder, textarea::placeholder {
          color: #ccc;
        }
        
        .status {
          font-family: 'Nexa Bold', sans-serif;
          font-size: 0.9rem;
        }
        
        .error {
          color: #D9534F;
        }
        
        .success {
          color: #5CB85C;
        }
        
        @media (max-width: 37.5rem) { // 600px
          .input-row {
            flex-direction: column;
            gap: 0.9375rem; // 15px
          }
        }
      `}</style>
    </section>
  );
}
