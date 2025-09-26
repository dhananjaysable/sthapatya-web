import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ContactUsSection() {
    const offices = [
        {
            name: "Office - Amravati",
            image: "https://images.unsplash.com/photo-1619070284836-e850273d69ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGFtcmF2YXRpfGVufDF8fHx8MTc1ODYxNDY0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "Amravati Office Building",
            title: "Amravati Office",
            address: "Siddhivinayak Nagar,\nAmravati, Maharashtra 444604"
        },
        {
            name: "Office - Pune",
            image: "https://images.unsplash.com/photo-1694697208040-41bc83fb54ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwb2ZmaWNlJTIwYnVpbGRpbmclMjBwdW5lfGVufDF8fHx8MTc1ODYxNDY0NHww&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "Pune Office Building",
            title: "Pune Office",
            address: "8th Floor, Mount Vert Velocity,\nBaner - Pashan Link Road,\nPashan - Sus Rd, Baner, Pune, Maharashtra 411021"
        },
        {
            name: "Office - Thane",
            image: "https://images.unsplash.com/photo-1738938744238-0f79909b742a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBjb21wbGV4JTIwdGhhbmV8ZW58MXx8fHwxNzU4NjE0NjQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
            alt: "Thane Office Building",
            title: "Thane Office",
            address: "LODHA SUPREMUS, 1101,\nSandoz Baug, Thane West,\nThane, Maharashtra"
        }
    ];

    const contactInfo = [
        {
            icon: <Phone className="w-6 h-6 text-white" />,
            title: "Phone Numbers",
            content: "Main: +91 98765 43210\nDirect: +91 98765 43211"
        },
        {
            icon: <Mail className="w-6 h-6 text-white" />,
            title: "Email Addresses",
            content: "General: info@sthapatyaconsultants.com\nProjects: projects@sthapatyaconsultants.com"
        },
        {
            icon: <Clock className="w-6 h-6 text-white" />,
            title: "Working Hours",
            content: "Mon-Fri: 9 AM - 6 PM\nSat: 9 AM - 1 PM\nSun: Closed"
        }
    ];

    return (
        <section className="flex flex-col items-center py-12 md:py-16 bg-[#95231c]">
            <div className="max-w-[90rem] w-full px-4 sm:px-6 lg:px-8 mx-auto">

                {/* Introduction */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto"
                >
                    <p className="text-xl sm:text-2xl text-white/90 leading-relaxed font-normal mb-6 sm:mb-8" style={{ fontFamily: 'Roboto, sans-serif' }}>
                        Ready to transform your architectural vision into reality? Connect with our team of experts and let's discuss how we can bring innovation to your next project.
                    </p>
                    <div className="w-28 h-1 mx-auto sm:w-32" style={{ backgroundColor: '#e1d385' }} />
                </motion.div>

                {/* Offices */}
                <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-12 sm:mb-16 items-center">
                    {offices.map((office, index) => (
                        <motion.div
                            key={office.name}
                            className="flex flex-col items-center text-center"
                            initial={{ opacity: 0, y: 30, scale: 0.8 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 mb-4 sm:mb-6"
                                whileHover={{ scale: 1.1, rotateY: 15, boxShadow: '0 25px 50px rgba(255,255,255,0.2)' }}
                                transition={{ duration: 0.3 }}
                            >
                                <ImageWithFallback
                                    src={office.image}
                                    alt={office.alt}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>

                            <div className="flex items-center justify-center space-x-2 mb-2 sm:mb-3">
                                <MapPin className="w-5 h-5 text-white" />
                                <h4 className="text-white font-semibold text-base sm:text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                    {office.title}
                                </h4>
                            </div>
                            <p className="text-white/80 text-sm sm:text-base leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                                {office.address.split('\n').map((line, i) => (
                                    <span key={i}>
                                        {line}
                                        {i < office.address.split('\n').length - 1 && <br />}
                                    </span>
                                ))}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Contact Info */}
                <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 sm:mb-16 flex items-center">
                    {contactInfo.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-4 text-center md:text-left"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mb-3 md:mb-0 ml-24"
                                style={{ backgroundColor: '#ba7b72' }}
                                whileHover={{ backgroundColor: '#e1d385', rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                            >
                                {item.icon}
                            </motion.div>
                            <div>
                                <h4 className="text-white mb-1 font-semibold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                    {item.title}
                                </h4>
                                <p className="text-white/80 text-sm sm:text-base leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                                    {item.content.split('\n').map((line, i) => (
                                        <span key={i}>
                                            {line}
                                            {i < item.content.split('\n').length - 1 && <br />}
                                        </span>
                                    ))}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>


                {/* Social Links & CTA */}
                <motion.div className="text-center">
                    <h4 className="text-white text-2xl font-semibold mb-6 sm:mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Connect With Us
                    </h4>
                    <div className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12">
                        {[
                            { icon: <Linkedin className="w-5 h-5" />, href: "#", color: '#0077b5' },
                            { icon: <Facebook className="w-5 h-5" />, href: "#", color: '#1877f2' },
                            { icon: <Twitter className="w-5 h-5" />, href: "#", color: '#1da1f2' },
                            { icon: <Instagram className="w-5 h-5" />, href: "#", color: '#e4405f' }
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center relative overflow-hidden"
                                style={{ backgroundColor: '#ba7b72' }}
                                whileHover={{
                                    scale: 1.2,
                                    y: -3,
                                    backgroundColor: social.color,
                                    boxShadow: "0 12px 25px rgba(255,255,255,0.3)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>

                    <motion.button
                        className="px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-semibold border-2"
                        style={{
                            backgroundColor: 'transparent',
                            borderColor: '#e1d385',
                            color: '#e1d385',
                            fontFamily: 'Montserrat, sans-serif'
                        }}
                        whileHover={{
                            backgroundColor: '#e1d385',
                            color: '#95231c',
                            scale: 1.05,
                            boxShadow: "0 8px 25px rgba(225, 211, 133, 0.4)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                    >
                        Schedule a Consultation
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
