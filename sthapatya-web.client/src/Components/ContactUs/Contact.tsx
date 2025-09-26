import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { OfficeLocations } from './components/OfficeLocations';
import { CompanyStats } from './components/CompanyStats';
import { FAQSection } from './components/FAQSection';
import { ContactInfo } from './components/ContactInfo';
import { ContactForm } from './components/ContactForm';
import { SocialLinks } from './components/SocialLinks';
//import "./styles/globals.css";
import "./styles/Contact.css";
export default function Contact() {
    return (
        <div className="min-h-screen" style={{ backgroundColor: '#fefefe' }}>
            {/* Hero Section */}
            <HeroSection />

            {/* About Section */}
            <AboutSection />

            {/* Office Locations with Maps */}
            <OfficeLocations />

            {/* Company Stats & Achievements */}
            <CompanyStats />

            {/* FAQ Section */}
            <FAQSection />

            {/* Contact Section */}
            <section id="contact-form" className="py-20" style={{ backgroundColor: '#f8f8f8' }}>
                <div className="max-w-[90rem] mx-auto px-8">
                    {/* Enhanced Section Header */}
                    <div className="text-center mb-20">
                        {/* Main Headline */}
                        <div className="rounded-3xl p-12 mb-8" style={{ backgroundColor: '#95231c' }}>
                            <div className="inline-block px-6 py-2 rounded-full mb-6" style={{ backgroundColor: '#e1d385' }}>
                                <span className="text-sm font-medium" style={{ color: '#95231c' }}>
                                    Ready to Get Started?
                                </span>
                            </div>
                            <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl" style={{ color: '#fefefe' }}>
                                Connect with Sthapatya Consultants
                            </h2>
                            <p className="max-w-3xl mx-auto text-lg leading-relaxed" style={{ color: '#d8bea5' }}>
                                Transform your architectural vision into reality with Maharashtra's most trusted engineering consultancy.
                                Our 29 years of expertise and innovative solutions are at your service.
                            </p>

                            {/* Key Benefits */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                                <div className="text-center">
                                    <div className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e1d385' }}>
                                        <span className="text-xl" style={{ color: '#95231c' }}>⚡</span>
                                    </div>
                                    <h4 className="mb-2" style={{ color: '#fefefe' }}>Quick Response</h4>
                                    <p className="text-sm" style={{ color: '#d8bea5' }}>24-hour response guarantee</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e1d385' }}>
                                        <span className="text-xl" style={{ color: '#95231c' }}>✓</span>
                                    </div>
                                    <h4 className="mb-2" style={{ color: '#fefefe' }}>Expert Consultation</h4>
                                    <p className="text-sm" style={{ color: '#d8bea5' }}>Free initial project assessment</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e1d385' }}>
                                        <span className="text-xl" style={{ color: '#95231c' }}>🏆</span>
                                    </div>
                                    <h4 className="mb-2" style={{ color: '#fefefe' }}>Proven Excellence</h4>
                                    <p className="text-sm" style={{ color: '#d8bea5' }}>500+ successful projects</p>
                                </div>
                            </div>
                        </div>

                        {/* Sub-heading */}
                        <h3 className="mb-4" style={{ color: '#95231c' }}>
                            Multiple Ways to Reach Us
                        </h3>
                        <p className="max-w-5xl mx-auto" style={{ color: '#ba7b72' }}>
                            Choose your preferred method of contact. Whether you call, email, or visit our offices,
                            we're committed to providing exceptional service and expert guidance for your project.
                        </p>
                        <div className="w-24 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: '#e1d385' }}></div>
                    </div>

                    {/* Two Column Contact Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Left Column - Contact Information */}
                        <div className="lg:col-span-5">
                            <ContactInfo />
                        </div>

                        {/* Right Column - Contact Form */}
                        <div className="lg:col-span-7">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="py-16" style={{ backgroundColor: '#95231c' }}>
                <div className="max-w-7xl mx-auto px-8">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                        {/* Company Info */}
                        <div className="md:col-span-2">
                            <h3 className="mb-4" style={{ color: '#fefefe' }}>Sthapatya Consultants</h3>
                            <p className="mb-6 leading-relaxed" style={{ color: '#d8bea5' }}>
                                Leading architectural and engineering consultancy firm in Maharashtra,
                                providing innovative solutions for over 29 years. Committed to excellence,
                                sustainability, and client satisfaction.
                            </p>
                            <SocialLinks />
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="mb-4" style={{ color: '#e1d385' }}>Quick Links</h4>
                            <ul className="space-y-2">
                                {['About Us', 'Services', 'Projects', 'Careers', 'Contact'].map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href="#"
                                            className="text-sm hover:underline transition-colors duration-200"
                                            style={{ color: '#d8bea5' }}
                                            onMouseEnter={(e) => e.target.style.color = '#fefefe'}
                                            onMouseLeave={(e) => e.target.style.color = '#d8bea5'}
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="mb-4" style={{ color: '#e1d385' }}>Services</h4>
                            <ul className="space-y-2">
                                {['Structural Engineering', 'MEP Services', 'Fire Safety', 'Green Building', 'Project Management'].map((service, index) => (
                                    <li key={index}>
                                        <a
                                            href="#"
                                            className="text-sm hover:underline transition-colors duration-200"
                                            style={{ color: '#d8bea5' }}
                                            onMouseEnter={(e) => e.target.style.color = '#fefefe'}
                                            onMouseLeave={(e) => e.target.style.color = '#d8bea5'}
                                        >
                                            {service}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="pt-8 border-t" style={{ borderColor: '#ba7b72' }}>
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <p className="text-sm" style={{ color: '#d8bea5' }}>
                                © 2024 Sthapatya Consultants. All rights reserved.
                            </p>
                            <div className="flex gap-6">
                                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="text-sm hover:underline transition-colors duration-200"
                                        style={{ color: '#d8bea5' }}
                                        onMouseEnter={(e) => e.target.style.color = '#fefefe'}
                                        onMouseLeave={(e) => e.target.style.color = '#d8bea5'}
                                    >
                                        {link}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </div>
    );
}