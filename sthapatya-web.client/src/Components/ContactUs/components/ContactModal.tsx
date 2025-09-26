import { useState } from 'react';
import { X, Mail, Phone, MapPin, Send, Calendar } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    location: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Show success message or handle as needed
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0" style={{ backgroundColor: '#fefefe' }}>
        {/* Header */}
        <div className="p-8 border-b" style={{ borderColor: '#e1d385' }}>
          <DialogHeader>
            <div className="flex items-center justify-between">
              <div>
                <DialogTitle className="text-2xl mb-2" style={{ color: '#95231c' }}>
                  Start Your Project with Sthapatya Consultants
                </DialogTitle>
                <p style={{ color: '#ba7b72' }}>
                  Fill out the form below and our expert team will contact you within 24 hours
                </p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                style={{ color: '#95231c' }}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </DialogHeader>
        </div>

        {/* Form Content */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="mb-4 text-lg" style={{ color: '#95231c' }}>Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#333333' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2"
                    style={{ 
                      borderColor: '#dddcdb',
                      backgroundColor: '#fefefe'
                    }}
                    onFocus={(e) => e.target.style.ringColor = '#95231c'}
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#333333' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2"
                    style={{ 
                      borderColor: '#dddcdb',
                      backgroundColor: '#fefefe'
                    }}
                    onFocus={(e) => e.target.style.ringColor = '#95231c'}
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#333333' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2"
                    style={{ 
                      borderColor: '#dddcdb',
                      backgroundColor: '#fefefe'
                    }}
                    onFocus={(e) => e.target.style.ringColor = '#95231c'}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#333333' }}>
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2"
                    style={{ 
                      borderColor: '#dddcdb',
                      backgroundColor: '#fefefe'
                    }}
                    onFocus={(e) => e.target.style.ringColor = '#95231c'}
                    placeholder="Your company name (optional)"
                  />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div>
              <h3 className="mb-4 text-lg" style={{ color: '#95231c' }}>Project Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#333333' }}>
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2"
                    style={{ 
                      borderColor: '#dddcdb',
                      backgroundColor: '#fefefe'
                    }}
                    onFocus={(e) => e.target.style.ringColor = '#95231c'}
                  >
                    <option value="">Select project type</option>
                    <option value="residential">Residential Building</option>
                    <option value="commercial">Commercial Complex</option>
                    <option value="industrial">Industrial Facility</option>
                    <option value="infrastructure">Infrastructure Project</option>
                    <option value="renovation">Renovation/Extension</option>
                    <option value="consultation">Consultation Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#333333' }}>
                    Project Location *
                  </label>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2"
                    style={{ 
                      borderColor: '#dddcdb',
                      backgroundColor: '#fefefe'
                    }}
                    onFocus={(e) => e.target.style.ringColor = '#95231c'}
                  >
                    <option value="">Select location</option>
                    <option value="amravati">Amravati</option>
                    <option value="pune">Pune</option>
                    <option value="panvel">Panvel</option>
                    <option value="thane">Thane</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="nashik">Nashik</option>
                    <option value="aurangabad">Aurangabad</option>
                    <option value="other-maharashtra">Other Maharashtra Location</option>
                    <option value="other-state">Outside Maharashtra</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#333333' }}>
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2"
                    style={{ 
                      borderColor: '#dddcdb',
                      backgroundColor: '#fefefe'
                    }}
                    onFocus={(e) => e.target.style.ringColor = '#95231c'}
                  >
                    <option value="">Select budget range</option>
                    <option value="under-10l">Under ₹10 Lakhs</option>
                    <option value="10l-25l">₹10 - 25 Lakhs</option>
                    <option value="25l-50l">₹25 - 50 Lakhs</option>
                    <option value="50l-1cr">₹50 Lakhs - 1 Crore</option>
                    <option value="1cr-5cr">₹1 - 5 Crores</option>
                    <option value="above-5cr">Above ₹5 Crores</option>
                    <option value="consultation">Consultation Only</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-2" style={{ color: '#333333' }}>
                    Project Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2"
                    style={{ 
                      borderColor: '#dddcdb',
                      backgroundColor: '#fefefe'
                    }}
                    onFocus={(e) => e.target.style.ringColor = '#95231c'}
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (Within 1 month)</option>
                    <option value="3months">Within 3 months</option>
                    <option value="6months">Within 6 months</option>
                    <option value="1year">Within 1 year</option>
                    <option value="planning">Planning stage</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm mb-2" style={{ color: '#333333' }}>
                Project Description
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2"
                style={{ 
                  borderColor: '#dddcdb',
                  backgroundColor: '#fefefe'
                }}
                onFocus={(e) => e.target.style.ringColor = '#95231c'}
                placeholder="Please describe your project requirements, specific needs, or any questions you have..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 px-8 py-4 rounded-lg transition-all duration-200 hover:transform hover:scale-105"
                style={{ backgroundColor: '#95231c', color: '#fefefe' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#ba7b72'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#95231c'}
              >
                <Send className="w-5 h-5" />
                Submit Project Inquiry
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex-shrink-0 px-6 py-4 rounded-lg border-2 transition-all duration-200 hover:transform hover:scale-105"
                style={{ 
                  borderColor: '#95231c', 
                  color: '#95231c',
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#95231c';
                  e.target.style.color = '#fefefe';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#95231c';
                }}
              >
                Cancel
              </button>
            </div>
          </form>

          {/* Contact Info Footer */}
          <div className="mt-8 pt-6 border-t" style={{ borderColor: '#e1d385' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" style={{ color: '#95231c' }} />
                <span className="text-sm" style={{ color: '#333333' }}>+91 98765 43210</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" style={{ color: '#95231c' }} />
                <span className="text-sm" style={{ color: '#333333' }}>info@sthapatya.com</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4" style={{ color: '#95231c' }} />
                <span className="text-sm" style={{ color: '#333333' }}>Mon-Sat: 10 AM - 6 PM</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}