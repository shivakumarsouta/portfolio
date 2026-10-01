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
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <p className="text-sm mb-2" style={{ color: '#333333' }}>Fill out the form below to send me a message.</p>
      
      <label className="text-base font-bold" style={{ color: '#000000' }}>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your name"
        required
        className="w-full"
        style={{ backgroundColor: '#FFFFFF', border: '3px solid #000000', boxShadow: '2px 2px 0px 0px #000000', padding: '0.75rem 1rem', fontFamily: 'Space Grotesk, sans-serif', fontSize: '1rem', outline: 'none', transition: 'all 150ms', color: '#000000' }}
        onFocus={(e) => { e.target.style.boxShadow = '4px 4px 0px 0px #000000'; e.target.style.transform = 'translate(-1px, -1px)'; }}
        onBlur={(e) => { e.target.style.boxShadow = '2px 2px 0px 0px #000000'; e.target.style.transform = 'translate(0, 0)'; }}
      />

      <label className="text-base font-bold" style={{ color: '#000000' }}>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="you@example.com"
        required
        className="w-full"
        style={{ backgroundColor: '#FFFFFF', border: '3px solid #000000', boxShadow: '2px 2px 0px 0px #000000', padding: '0.75rem 1rem', fontFamily: 'Space Grotesk, sans-serif', fontSize: '1rem', outline: 'none', transition: 'all 150ms', color: '#000000' }}
        onFocus={(e) => { e.target.style.boxShadow = '4px 4px 0px 0px #000000'; e.target.style.transform = 'translate(-1px, -1px)'; }}
        onBlur={(e) => { e.target.style.boxShadow = '2px 2px 0px 0px #000000'; e.target.style.transform = 'translate(0, 0)'; }}
      />

      <label className="text-base font-bold" style={{ color: '#000000' }}>Message:</label>
      <textarea
        name="message"
        rows="3"
        value={formData.message}
        onChange={handleChange}
        placeholder="Tell me a little about your idea or opportunity..."
        required
        className="w-full resize-none"
        style={{ backgroundColor: '#FFFFFF', border: '3px solid #000000', boxShadow: '2px 2px 0px 0px #000000', padding: '0.75rem 1rem', fontFamily: 'Space Grotesk, sans-serif', fontSize: '1rem', outline: 'none', transition: 'all 150ms', color: '#000000' }}
        onFocus={(e) => { e.target.style.boxShadow = '4px 4px 0px 0px #000000'; e.target.style.transform = 'translate(-1px, -1px)'; }}
        onBlur={(e) => { e.target.style.boxShadow = '2px 2px 0px 0px #000000'; e.target.style.transform = 'translate(0, 0)'; }}
      />

      <button type="submit" className="w-full py-4 text-base font-bold transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px]" disabled={isSubmitting} style={{ backgroundColor: '#facc15', border: '3px solid #000000', boxShadow: '4px 4px 0px 0px #000000', color: '#000000' }} onMouseEnter={(e) => { e.target.style.boxShadow = '6px 6px 0px 0px #000000'; e.target.style.transform = 'translate(-2px, -2px)'; }} onMouseLeave={(e) => { e.target.style.boxShadow = '4px 4px 0px 0px #000000'; e.target.style.transform = 'translate(0, 0)'; }}>
        {isSubmitting ? 'Sending...' : 'Send Message →'}
      </button>
    </form>
  );
}

export default ContactForm;
