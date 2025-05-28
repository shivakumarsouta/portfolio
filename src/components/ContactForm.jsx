import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('Message sent successfully!');
      setFormData({
        user_name: '',
        user_email: '',
        message: '',
      });
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="contact-section"
      id="contact"
    >
      <div className="container">
        <h2 className="section-title">Send a Message</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              id="name"
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={(e) =>
                setFormData({ ...formData, user_name: e.target.value })
              }
              className="form-input"
              required
              aria-required="true"
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <input
              id="email"
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={(e) =>
                setFormData({ ...formData, user_email: e.target.value })
              }
              className="form-input"
              required
              aria-required="true"
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="form-textarea"
              rows="5"
              required
              aria-required="true"
              placeholder="Your Message"
            />
          </div>
          <button type="submit" className="form-button">
            Send Message
          </button>
          {status && (
            <p
              className={`form-status ${
                status.includes('successfully') ? 'success' : 'error'
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </motion.section>
  );
}

export default ContactForm;
