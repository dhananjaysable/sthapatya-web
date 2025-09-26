import { useState } from 'react';
import { Send } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const isValid = formData.name && formData.email && formData.message && formData.consent;

  return (
    <div className="rounded-xl p-8" style={{ backgroundColor: '#f3f3f3' }}>
      <div className="mb-6">
        <h3 className="mb-2" style={{ color: '#95231c' }}>Get In Touch</h3>
        <p style={{ color: '#dddcdb' }}>Fill out the form below and we'll get back to you shortly.</p>
      </div>

      {isSubmitted && (
        <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: '#e1d385', color: '#95231c' }}>
          <p className="font-medium">Thank you for reaching out!</p>
          <p className="text-sm mt-1">We'll get back to you within 24 hours.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block mb-2" style={{ color: '#95231c' }}>
            Name <span style={{ color: '#95231c' }}>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border-2 border-transparent focus:border-opacity-50 transition-colors duration-200"
            style={{ 
              backgroundColor: '#fefefe',
              color: '#95231c'
            }}
            onFocus={(e) => e.target.style.borderColor = '#95231c'}
            onBlur={(e) => e.target.style.borderColor = 'transparent'}
            placeholder="Enter your full name"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block mb-2" style={{ color: '#95231c' }}>
            Email <span style={{ color: '#95231c' }}>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border-2 border-transparent focus:border-opacity-50 transition-colors duration-200"
            style={{ 
              backgroundColor: '#fefefe',
              color: '#95231c'
            }}
            onFocus={(e) => e.target.style.borderColor = '#95231c'}
            onBlur={(e) => e.target.style.borderColor = 'transparent'}
            placeholder="Enter your email address"
          />
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block mb-2" style={{ color: '#95231c' }}>
            Phone <span className="text-sm" style={{ color: '#dddcdb' }}>(Optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border-2 border-transparent focus:border-opacity-50 transition-colors duration-200"
            style={{ 
              backgroundColor: '#fefefe',
              color: '#95231c'
            }}
            onFocus={(e) => e.target.style.borderColor = '#95231c'}
            onBlur={(e) => e.target.style.borderColor = 'transparent'}
            placeholder="Enter your phone number"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block mb-2" style={{ color: '#95231c' }}>
            Message <span style={{ color: '#95231c' }}>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 rounded-lg border-2 border-transparent focus:border-opacity-50 transition-colors duration-200 resize-vertical"
            style={{ 
              backgroundColor: '#fefefe',
              color: '#95231c'
            }}
            onFocus={(e) => e.target.style.borderColor = '#95231c'}
            onBlur={(e) => e.target.style.borderColor = 'transparent'}
            placeholder="Tell us about your project or inquiry..."
          />
        </div>

        {/* Consent Checkbox */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
            className="mt-1 w-4 h-4 rounded accent-[#95231c]"
          />
          <label htmlFor="consent" className="text-sm" style={{ color: '#dddcdb' }}>
            I agree to the processing of my personal data in accordance with the privacy policy 
            and consent to receive communications from Sthapatya Consultants.
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isValid}
          className="w-full py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ 
            backgroundColor: isValid ? '#95231c' : '#dddcdb',
            color: '#fefefe'
          }}
          onMouseEnter={(e) => {
            if (isValid) e.target.style.backgroundColor = '#ba7b72';
          }}
          onMouseLeave={(e) => {
            if (isValid) e.target.style.backgroundColor = '#95231c';
          }}
        >
          <Send className="w-4 h-4" />
          Send Message
        </button>
      </form>

      {/* Additional Info */}
      <div className="mt-6 pt-6 border-t" style={{ borderColor: '#e1d385' }}>
        <p className="text-sm" style={{ color: '#dddcdb' }}>
          By submitting this form, you acknowledge that your information will be used to 
          contact you regarding your inquiry. We respect your privacy and will never share 
          your information with third parties.
        </p>
      </div>
    </div>
  );
}