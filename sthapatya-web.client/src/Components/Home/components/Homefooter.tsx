import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

export function FooterSection() {
  return (
    <footer style={{ backgroundColor: '#95231c' }} className="text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 
                className="text-3xl xl:text-4xl mb-6"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Sthapatya Consultants
              </h3>
              <p 
                className="text-lg mb-4"
                style={{ color: '#e1d385', fontFamily: 'Montserrat, sans-serif' }}
              >
                (India) Pvt. Ltd.
              </p>
              <p 
                className="text-white/80 mb-8 leading-relaxed"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                Transforming architectural visions into reality across India with innovative design solutions and expert consultation services.
              </p>
              
              {/* Social Media Links */}
              <div className="flex space-x-4">
                {[
                  { icon: <Linkedin className="w-5 h-5" />, href: "#" },
                  { icon: <Facebook className="w-5 h-5" />, href: "#" },
                  { icon: <Twitter className="w-5 h-5" />, href: "#" },
                  { icon: <Instagram className="w-5 h-5" />, href: "#" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="w-10 h-10 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300"
                    style={{ backgroundColor: '#ba7b72' }}
                  >
                    <div className="text-white">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 
                className="text-2xl mb-6"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Contact Info
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-1" style={{ color: '#e1d385' }} />
                  <div>
                    <p 
                      className="text-white/90"
                      style={{ fontFamily: 'Roboto, sans-serif' }}
                    >
                      Office No. 301, Prabhu Chambers,<br />
                      Andheri West, Mumbai - 400058<br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" style={{ color: '#e1d385' }} />
                  <p 
                    className="text-white/90"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                  >
                    +91 98765 43210
                  </p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" style={{ color: '#e1d385' }} />
                  <p 
                    className="text-white/90"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                  >
                    info@sthapatyaconsultants.com
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Services Quick Links */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 
                className="text-2xl mb-6"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Our Services
              </h4>
              <ul className="space-y-3">
                {[
                  'Architectural Design',
                  'Structural Engineering',
                  'Project Management',
                  'Interior Design',
                  'Urban Planning',
                  'Sustainability Consulting'
                ].map((service, index) => (
                  <li key={index}>
                    <a 
                      href="#services"
                      className="text-white/80 hover:text-white transition-colors duration-200"
                      style={{ fontFamily: 'Roboto, sans-serif' }}
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Quick Contact Form */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 
                className="text-2xl mb-6"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Quick Contact
              </h4>
              
              <form className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                />
                <Textarea
                  placeholder="Your Message"
                  rows={3}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 resize-none"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                />
                <Button 
                  type="submit"
                  className="w-full hover:shadow-lg transition-all duration-300"
                  style={{ backgroundColor: '#ba7b72', fontFamily: 'Montserrat, sans-serif' }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#e1d385';
                    e.target.style.color = '#95231c';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#ba7b72';
                    e.target.style.color = 'white';
                  }}
                >
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p 
            className="text-white/60 text-sm mb-4 md:mb-0"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            © 2024 Sthapatya Consultants (India) Pvt. Ltd. All rights reserved.
          </p>
          
          <div className="flex space-x-6 text-sm">
            <a 
              href="#" 
              className="text-white/60 hover:text-white transition-colors duration-200"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-white/60 hover:text-white transition-colors duration-200"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Terms of Service
            </a>
            <a 
              href="#" 
              className="text-white/60 hover:text-white transition-colors duration-200"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Careers
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}