import { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const toastId = toast.loading('Sending message...');

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success('Message sent successfully!', {
          id: toastId,
        });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        toast.error('Failed to send message. Please try again.', {
          id: toastId,
        });
        console.error('EmailJS error:', error.text);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="John Doe"
        required
      />

      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="john.doe@example.com"
        required
      />

      <label>Message:</label>
      <textarea
        name="message"
        rows="3"
        value={formData.message}
        onChange={handleChange}
        placeholder="Hi, I would like to talk about.."
        required
      />

      <button type="submit" className="contact-btn" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}

export default ContactForm;
