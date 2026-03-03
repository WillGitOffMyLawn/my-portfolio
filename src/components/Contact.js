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
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
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
                <div className="form-field">
                  <label htmlFor="contact-name" className="sr-only">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-email" className="sr-only">Your Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <label htmlFor="contact-message" className="sr-only">Your Message</label>
              <textarea
                id="contact-message"
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

      <style jsx global>{`
        .contact-section {
          background-color: transparent;
          color: #fff;
          padding: 0;
        }
        
        .contact-container {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        
        .contact-section .glassmorphic-wrapper {
          max-width: 37.5rem;
        }
        
        .contact-content {
          text-align: left; /* Keep text left-aligned */
          width: 100%;
        }
        
        .contact-section h2 {
          font-family: 'BankGothic Md BT', sans-serif;
          font-size: 2rem;
          margin-top: 0;
          margin-bottom: 1.25rem;
          text-shadow: 0 0 20px rgba(124, 58, 237, 0.3), 0 0 40px rgba(124, 58, 237, 0.15);
        }
        
        .contact-section p {
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
          width: 100%;
          padding: 0.625rem 0.9375rem; // 10px 15px
          border-radius: 0.3125rem; // 5px
          border: 1px solid rgba(255, 255, 255, 0.15);
          font-family: 'Nexa Bold', sans-serif;
          font-size: 1rem;
          background-color: rgba(255, 255, 255, 0.1);
          color: #fff;
        }
        
        .form-field {
          flex: 1;
        }
        
        .contact-form textarea {
          padding: 0.625rem 0.9375rem;
          border-radius: 0.3125rem;
          border: 1px solid rgba(255, 255, 255, 0.15);
          font-family: 'Nexa Bold', sans-serif;
          font-size: 1rem;
          background-color: rgba(255, 255, 255, 0.1);
          color: #fff;
        }
        
        .contact-form input::placeholder, .contact-form textarea::placeholder {
          color: #ccc;
        }
        
        .status {
          font-family: 'Nexa Bold', sans-serif;
          font-size: 0.9rem;
        }
        
        .error {
          color: #ef4444;
        }
        
        .success {
          color: #10b981;
        }
        
        @media (max-width: 37.5rem) { // 600px
          .input-row {
            flex-direction: column;
            gap: 0.9375rem; // 15px
          }
        }
      `}</style>
    </motion.section>
  );
}
