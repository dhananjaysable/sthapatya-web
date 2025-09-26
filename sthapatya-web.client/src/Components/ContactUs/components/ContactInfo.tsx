import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import exampleImage from "../assets/40484b9ba89dff64cfe4493fbc6790f5ae60c198.png";

export function ContactInfo() {
  const addresses = [
    { name: "Head Office – Amravati", address: "123 Main Street, Amravati, Maharashtra 444601" },
    { name: "Pune Office", address: "456 Tech Park, Pune, Maharashtra 411001" },
    { name: "Panvel Office", address: "789 Business Center, Panvel, Maharashtra 410206" },
    { name: "Thane Office", address: "321 Corporate Hub, Thane, Maharashtra 400601" }
  ];

  const phoneNumbers = [
    { label: "General Enquiry", number: "+91 98765 43210" },
    { label: "Sales Department", number: "+91 98765 43211" },
    { label: "Support Team", number: "+91 98765 43212" }
  ];

  const emails = [
    { label: "HR Department", email: "hr@sthapatya.com" },
    { label: "Support Team", email: "support@sthapatya.com" },
    { label: "Media Relations", email: "media@sthapatya.com" },
    { label: "Partnerships", email: "partnerships@sthapatya.com" }
  ];

  return (
    <div className="space-y-8">
      {/* Logo and Header */}
      <div className="space-y-4">
        <div className="w-16 h-16">
          <img 
            src={exampleImage} 
            alt="Sthapatya Consultants Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <h2 className="mb-2" style={{ color: '#95231c' }}>Contact Us</h2>
          <p style={{ color: '#ba7b72' }}>We'd love to hear from you!</p>
        </div>
        <div className="w-16 h-0.5" style={{ backgroundColor: '#e1d385' }}></div>
      </div>

      {/* Addresses */}
      <div className="space-y-4">
        <h3 style={{ color: '#95231c' }}>Our Offices</h3>
        <div className="space-y-3">
          {addresses.map((addr, index) => (
            <div key={index} className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#95231c' }} />
              <div>
                <div className="font-medium" style={{ color: '#95231c' }}>{addr.name}</div>
                <div className="text-sm" style={{ color: '#111111' }}>{addr.address}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Phone Numbers */}
      <div className="space-y-4">
        <h3 style={{ color: '#95231c' }}>Phone Numbers</h3>
        <div className="space-y-2">
          {phoneNumbers.map((phone, index) => (
            <div key={index} className="flex items-center gap-3">
              <Phone className="w-4 h-4 flex-shrink-0" style={{ color: '#95231c' }} />
              <div>
                      <span className="text-sm" style={{ color: '#95231c' }}>{phone.label}: </span>
                <a href={`tel:${phone.number}`} className="hover:underline" style={{ color: '#111111' }}>
                  {phone.number}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Email Addresses */}
      <div className="space-y-4">
        <h3 style={{ color: '#95231c' }}>Email Addresses</h3>
        <div className="space-y-2">
          {emails.map((email, index) => (
            <div key={index} className="flex items-center gap-3">
              <Mail className="w-4 h-4 flex-shrink-0" style={{ color: '#95231c' }} />
              <div>
                      <span className="text-sm" style={{ color: '#95231c' }}>{email.label}: </span>
                <a 
                  href={`mailto:${email.email}`} 
                  className="hover:underline transition-colors duration-200"
                  style={{ color: '#111111' }}
                  onMouseEnter={(e) => e.target.style.color = '#95231c'}
                  onMouseLeave={(e) => e.target.style.color = '#111111'}
                >
                  {email.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Business Hours */}
      <div className="space-y-4">
        <h3 style={{ color: '#95231c' }}>Business Hours</h3>
        <div className="flex items-center gap-3">
          <Clock className="w-4 h-4 flex-shrink-0" style={{ color: '#95231c' }} />
          <div style={{ color: '#ba7b72' }}>
            Monday – Saturday, 10:00 AM – 6:00 PM (IST)
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="space-y-4">
        <h3 style={{ color: '#95231c' }}>Quick Actions</h3>
        <div className="grid grid-cols-1 gap-3">
          <a 
            href="#office-locations"
            className="flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:transform hover:scale-105"
            style={{ backgroundColor: '#f3f3f3' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#e1d385'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#f3f3f3'}
          >
            <MapPin className="w-5 h-5" style={{ color: '#95231c' }} />
            <span className="text-sm" style={{ color: '#95231c' }}>View All Office Locations</span>
          </a>
          
          <a 
            href="tel:+919876543210"
            className="flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:transform hover:scale-105"
            style={{ backgroundColor: '#f3f3f3' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#e1d385'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#f3f3f3'}
          >
            <Phone className="w-5 h-5" style={{ color: '#95231c' }} />
            <span className="text-sm" style={{ color: '#95231c' }}>Call Us Now</span>
          </a>
          
          <a 
            href="mailto:info@sthapatya.com"
            className="flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:transform hover:scale-105"
            style={{ backgroundColor: '#f3f3f3' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#e1d385'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#f3f3f3'}
          >
            <Mail className="w-5 h-5" style={{ color: '#95231c' }} />
            <span className="text-sm" style={{ color: '#95231c' }}>Send Email</span>
          </a>
        </div>
      </div>

      {/* Footer Links */}
      <div className="pt-4 border-t" style={{ borderColor: '#e1d385' }}>
        <a 
          href="#" 
          className="inline-flex items-center gap-2 transition-colors duration-200"
          style={{ color: '#ba7b72' }}
          onMouseEnter={(e) => e.target.style.color = '#95231c'}
          onMouseLeave={(e) => e.target.style.color = '#ba7b72'}
        >
          View FAQs <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}