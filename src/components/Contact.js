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
          padding: 0 1.25rem; // Horizontal only; vertical handled by container gap
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
          max-width: 37.5rem;
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
    </motion.section>
  );
}
