// src/components/Contact.js
import { useState } from 'react';
import { motion } from 'framer-motion';

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
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Get in Touch</h2>
          <p>
            I&apos;d love to hear from you! Whether you have a question, project idea, or just want to say hello,
            please use the form below.
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
            <button type="submit" className="button">
              Send Message
            </button>
            {status.message && (
              <p className={`status ${status.error ? 'error' : 'success'}`}>{status.message}</p>
            )}
          </form>
        </motion.div>
      </div>

      <style jsx>{`
        .contact-section {
          background-color: #1A1A1A;
          color: #fff;
          padding: 60px 20px;
        }
        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          padding: 0 20px;
        }
        .contact-content {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 40px;
          text-align: left;
        }
        h2 {
          font-family: 'BankGothic Md BT', sans-serif;
          font-size: 2rem;
          margin-bottom: 20px;
        }
        p {
          font-family: 'Nexa Bold', sans-serif;
          font-size: 1rem;
          margin-bottom: 30px;
          max-width: 600px;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-width: 600px;
        }
        .input-row {
          display: flex;
          gap: 20px;
        }
        .input-row input {
          flex: 1;
          padding: 10px 15px;
          border-radius: 5px;
          border: none;
          font-family: 'Nexa Bold', sans-serif;
          font-size: 1rem;
          background-color: rgba(255, 255, 255, 0.2);
          color: #fff;
        }
        textarea {
          padding: 10px 15px;
          border-radius: 5px;
          border: none;
          font-family: 'Nexa Bold', sans-serif;
          font-size: 1rem;
          background-color: rgba(255, 255, 255, 0.2);
          color: #fff;
        }
        input::placeholder, textarea::placeholder {
          color: #ccc;
        }
        .button {
          padding: 12px 20px;
          border: none;
          border-radius: 5px;
          background-color: #FFD700;
          color: #1A1A1A;
          font-family: 'Nexa Bold', sans-serif;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.2s ease;
          align-self: flex-start;
        }
        .button:hover {
          background-color: #e6c200;
          transform: scale(1.05);
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
      `}</style>
    </section>
  );
}
