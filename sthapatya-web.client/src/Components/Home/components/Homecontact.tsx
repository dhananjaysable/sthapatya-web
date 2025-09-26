import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

export function ContactSection() {
  return (
    <section className="h-screen flex items-center py-20" style={{ backgroundColor: '#95231c' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white space-y-8"
          >
            <div>
              <h2 
                className="text-5xl lg:text-6xl xl:text-7xl mb-8 text-white"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Let's Connect
              </h2>
              <div className="w-24 h-1 mb-8" style={{ backgroundColor: '#e1d385' }}></div>
            </div>
            
            <p 
              className="text-xl mb-12 text-white/90 leading-relaxed"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Ready to transform your business? Get in touch with our team of experts and let's discuss how we can help you achieve your digital goals.
            </p>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#ba7b72' }}
                >
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p 
                    className="text-lg"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    +91 98765 43210
                  </p>
                  <p 
                    className="text-sm text-white/70"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                  >
                    Mon - Fri, 9AM - 6PM IST
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#ba7b72' }}
                >
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p 
                    className="text-lg"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    hello@innovatenext.com
                  </p>
                  <p 
                    className="text-sm text-white/70"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                  >
                    We'll respond within 24 hours
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#ba7b72' }}
                >
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p 
                    className="text-lg"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Mumbai, Maharashtra
                  </p>
                  <p 
                    className="text-sm text-white/70"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                  >
                    Serving clients across India
                  </p>
                </div>
              </motion.div>
            </div>
            
            {/* Social Media Links */}
            <div className="pt-8">
              <p 
                className="text-lg mb-4"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Follow Us
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: <Linkedin className="w-6 h-6" />, href: "#" },
                  { icon: <Twitter className="w-6 h-6" />, href: "#" },
                  { icon: <Instagram className="w-6 h-6" />, href: "#" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300"
                    style={{ backgroundColor: '#ba7b72' }}
                  >
                    <div className="text-white">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <div 
              className="p-8 lg:p-10 rounded-3xl shadow-2xl w-full"
              style={{ backgroundColor: '#fefefe' }}
            >
              <h3 
                className="text-3xl xl:text-4xl mb-6"
                style={{ color: '#95231c', fontFamily: 'Montserrat, sans-serif' }}
              >
                Send us a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label 
                      className="block text-sm mb-2"
                      style={{ color: '#95231c', fontFamily: 'Montserrat, sans-serif' }}
                    >
                      First Name
                    </label>
                    <Input 
                      placeholder="John"
                      className="border-2 focus:border-opacity-50"
                      style={{ borderColor: '#dddcdb', fontFamily: 'Roboto, sans-serif' }}
                    />
                  </div>
                  <div>
                    <label 
                      className="block text-sm mb-2"
                      style={{ color: '#95231c', fontFamily: 'Montserrat, sans-serif' }}
                    >
                      Last Name
                    </label>
                    <Input 
                      placeholder="Doe"
                      className="border-2 focus:border-opacity-50"
                      style={{ borderColor: '#dddcdb', fontFamily: 'Roboto, sans-serif' }}
                    />
                  </div>
                </div>
                
                <div>
                  <label 
                    className="block text-sm mb-2"
                    style={{ color: '#95231c', fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Email Address
                  </label>
                  <Input 
                    type="email"
                    placeholder="john.doe@company.com"
                    className="border-2 focus:border-opacity-50"
                    style={{ borderColor: '#dddcdb', fontFamily: 'Roboto, sans-serif' }}
                  />
                </div>
                
                <div>
                  <label 
                    className="block text-sm mb-2"
                    style={{ color: '#95231c', fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Phone Number
                  </label>
                  <Input 
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="border-2 focus:border-opacity-50"
                    style={{ borderColor: '#dddcdb', fontFamily: 'Roboto, sans-serif' }}
                  />
                </div>
                
                <div>
                  <label 
                    className="block text-sm mb-2"
                    style={{ color: '#95231c', fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Company (Optional)
                  </label>
                  <Input 
                    placeholder="Your Company Name"
                    className="border-2 focus:border-opacity-50"
                    style={{ borderColor: '#dddcdb', fontFamily: 'Roboto, sans-serif' }}
                  />
                </div>
                
                <div>
                  <label 
                    className="block text-sm mb-2"
                    style={{ color: '#95231c', fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your project or how we can help..."
                    rows={4}
                    className="border-2 focus:border-opacity-50 resize-none"
                    style={{ borderColor: '#dddcdb', fontFamily: 'Roboto, sans-serif' }}
                  />
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit"
                    className="w-full py-6 text-lg hover:shadow-lg transition-all duration-300"
                    style={{ backgroundColor: '#95231c', fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Send Message
                  </Button>
                </motion.div>
              </form>
              
              <p 
                className="text-sm text-gray-500 mt-6 text-center"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}