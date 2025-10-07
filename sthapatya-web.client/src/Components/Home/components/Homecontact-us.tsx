// import { motion } from 'motion/react';
// import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
// import { ImageWithFallback } from './figma/ImageWithFallback';

// export function ContactUsSection() {
//     const offices = [
//         {
//             name: "Office - Amravati",
//             image: "https://images.unsplash.com/photo-1619070284836-e850273d69ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGFtcmF2YXRpfGVufDF8fHx8MTc1ODYxNDY0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
//             alt: "Amravati Office Building",
//             title: "Amravati Office",
//             address: "Siddhivinayak Nagar,\nAmravati, Maharashtra 444604"
//         },
//         {
//             name: "Office - Pune",
//             image: "https://images.unsplash.com/photo-1694697208040-41bc83fb54ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwb2ZmaWNlJTIwYnVpbGRpbmclMjBwdW5lfGVufDF8fHx8MTc1ODYxNDY0NHww&ixlib=rb-4.1.0&q=80&w=1080",
//             alt: "Pune Office Building",
//             title: "Pune Office",
//             address: "8th Floor, Mount Vert Velocity,\nBaner - Pashan Link Road,\nPashan - Sus Rd, Baner, Pune, Maharashtra 411021"
//         },
//         {
//             name: "Office - Thane",
//             image: "https://images.unsplash.com/photo-1738938744238-0f79909b742a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBjb21wbGV4JTIwdGhhbmV8ZW58MXx8fHwxNzU4NjE0NjQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
//             alt: "Thane Office Building",
//             title: "Thane Office",
//             address: "LODHA SUPREMUS, 1101,\nSandoz Baug, Thane West,\nThane, Maharashtra"
//         }
//     ];

//     const contactInfo = [
//         {
//             icon: <Phone className="w-6 h-6 text-white" />,
//             title: "Phone Numbers",
//             content: "Main: +91 98765 43210\nDirect: +91 98765 43211"
//         },
//         {
//             icon: <Mail className="w-6 h-6 text-white" />,
//             title: "Email Addresses",
//             content: "General: info@sthapatyaconsultants.com\nProjects: projects@sthapatyaconsultants.com"
//         },
//         {
//             icon: <Clock className="w-6 h-6 text-white" />,
//             title: "Working Hours",
//             content: "Mon-Fri: 9 AM - 6 PM\nSat: 9 AM - 1 PM\nSun: Closed"
//         }
//     ];

//     return (
//         <section className="flex flex-col items-center py-12 md:py-16 bg-[#95231c]">
//             <div className="max-w-[90rem] w-full px-4 sm:px-6 lg:px-8 mx-auto">

//                 {/* Introduction */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     viewport={{ once: true }}
//                     className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto"
//                 >
//                     <p className="text-xl sm:text-2xl text-white/90 leading-relaxed font-normal mb-6 sm:mb-8" style={{ fontFamily: 'Roboto, sans-serif' }}>
//                         Ready to transform your architectural vision into reality? Connect with our team of experts and let's discuss how we can bring innovation to your next project.
//                     </p>
//                     <div className="w-28 h-1 mx-auto sm:w-32" style={{ backgroundColor: '#e1d385' }} />
//                 </motion.div>

//                 {/* Offices */}
//                 <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-12 sm:mb-16 items-center">
//                     {offices.map((office, index) => (
//                         <motion.div
//                             key={office.name}
//                             className="flex flex-col items-center text-center"
//                             initial={{ opacity: 0, y: 30, scale: 0.8 }}
//                             whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                             transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
//                             viewport={{ once: true }}
//                         >
//                             <motion.div
//                                 className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 mb-4 sm:mb-6"
//                                 whileHover={{ scale: 1.1, rotateY: 15, boxShadow: '0 25px 50px rgba(255,255,255,0.2)' }}
//                                 transition={{ duration: 0.3 }}
//                             >
//                                 <ImageWithFallback
//                                     src={office.image}
//                                     alt={office.alt}
//                                     className="w-full h-full object-cover"
//                                 />
//                             </motion.div>

//                             <div className="flex items-center justify-center space-x-2 mb-2 sm:mb-3">
//                                 <MapPin className="w-5 h-5 text-white" />
//                                 <h4 className="text-white font-semibold text-base sm:text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
//                                     {office.title}
//                                 </h4>
//                             </div>
//                             <p className="text-white/80 text-sm sm:text-base leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
//                                 {office.address.split('\n').map((line, i) => (
//                                     <span key={i}>
//                                         {line}
//                                         {i < office.address.split('\n').length - 1 && <br />}
//                                     </span>
//                                 ))}
//                             </p>
//                         </motion.div>
//                     ))}
//                 </motion.div>

//                 {/* Contact Info */}
//                 <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 sm:mb-16 flex items-center">
//                     {contactInfo.map((item, index) => (
//                         <motion.div
//                             key={index}
//                             className="flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-4 text-center md:text-left"
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
//                             viewport={{ once: true }}
//                         >
//                             <motion.div
//                                 className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mb-3 md:mb-0 ml-24"
//                                 style={{ backgroundColor: '#ba7b72' }}
//                                 whileHover={{ backgroundColor: '#e1d385', rotate: 360, scale: 1.1 }}
//                                 transition={{ duration: 0.6 }}
//                             >
//                                 {item.icon}
//                             </motion.div>
//                             <div>
//                                 <h4 className="text-white mb-1 font-semibold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
//                                     {item.title}
//                                 </h4>
//                                 <p className="text-white/80 text-sm sm:text-base leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
//                                     {item.content.split('\n').map((line, i) => (
//                                         <span key={i}>
//                                             {line}
//                                             {i < item.content.split('\n').length - 1 && <br />}
//                                         </span>
//                                     ))}
//                                 </p>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </motion.div>


//                 {/* Social Links & CTA */}
//                 <motion.div className="text-center">
//                     <h4 className="text-white text-2xl font-semibold mb-6 sm:mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
//                         Connect With Us
//                     </h4>
//                     <div className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12">
//                         {[
//                             { icon: <Linkedin className="w-5 h-5" />, href: "#", color: '#0077b5' },
//                             { icon: <Facebook className="w-5 h-5" />, href: "#", color: '#1877f2' },
//                             { icon: <Twitter className="w-5 h-5" />, href: "#", color: '#1da1f2' },
//                             { icon: <Instagram className="w-5 h-5" />, href: "#", color: '#e4405f' }
//                         ].map((social, index) => (
//                             <motion.a
//                                 key={index}
//                                 href={social.href}
//                                 className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center relative overflow-hidden"
//                                 style={{ backgroundColor: '#ba7b72' }}
//                                 whileHover={{
//                                     scale: 1.2,
//                                     y: -3,
//                                     backgroundColor: social.color,
//                                     boxShadow: "0 12px 25px rgba(255,255,255,0.3)"
//                                 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 transition={{ duration: 0.3 }}
//                             >
//                                 {social.icon}
//                             </motion.a>
//                         ))}
//                     </div>

//                     <motion.button
//                         className="px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-semibold border-2"
//                         style={{
//                             backgroundColor: 'transparent',
//                             borderColor: '#e1d385',
//                             color: '#e1d385',
//                             fontFamily: 'Montserrat, sans-serif'
//                         }}
//                         whileHover={{
//                             backgroundColor: '#e1d385',
//                             color: '#95231c',
//                             scale: 1.05,
//                             boxShadow: "0 8px 25px rgba(225, 211, 133, 0.4)"
//                         }}
//                         whileTap={{ scale: 0.95 }}
//                         transition={{ duration: 0.3 }}
//                     >
//                         Schedule a Consultation
//                     </motion.button>
//                 </motion.div>
//             </div>
//         </section>
//     );
// }



// import { motion } from 'motion/react';
// import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
// import { ImageWithFallback } from './figma/ImageWithFallback';
// import { Link } from 'react-router-dom';

// export function ContactUsSection() {
//     const offices = [
//         {
//             name: "Office - Amravati",
//             image: "./offices/amt.jpg",
//             alt: "Amravati Office Building",
//             title: "Amravati Office",
//             address: "4, Swapnashri Colony\nSiddhivinayak Nagar,Amravati,\nMaharashtra 444604"
//         },
//         {
//             name: "Office - Pune",
//             image: "./offices/pune.jpg",
//             alt: "Pune Office Building",
//             title: "Pune Office",
//             address: "8th Floor, Mount Vert Velocity,\nBaner - Pashan Link Road,\nPashan - Sus Rd, Baner, \nPune, Maharashtra 411021"
//         },
//         {
//             name: "Office - Thane",
//             image: "./offices/thane.jpeg",
//             alt: "Thane Office Building",
//             title: "Thane Office",
//             address: "LODHA SUPREMUS, 1101,\nSandoz Baug, Thane West,\nThane, Maharashtra"
//         },
//         {
//             name: "Office - Panvel",
//             image: "./offices/panvel.png",
//             alt: "Panvel Office Building",
//             title: "Panvel Office",
//             address: "A-103 Wing, \nYogeshwar Krupa Chs,\nThana Naka Road,\nOld Panvel,\nMaharashtra 410206"
//         }
//     ];

//     const contactInfo = [
//         {
//             icon: <Phone className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />,
//             title: "Phone Numbers",
//             content: "Main: +91 7774091416"
//         },
//         {
//             icon: <Mail className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />,
//             title: "Email Addresses",
//             content: "scipl@sthapatya.in"
//         },
//         {
//             icon: <Clock className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />,
//             title: "Working Hours",
//             content: "Mon-Fri: 10 AM - 7 PM\nSat: 10 AM - 5 PM\nSun: Closed"
//         }
//     ];

//     return (
//         <section className="w-full min-h-screen bg-[#95231c] relative">
//             {/* Container with full responsive padding */}
//             <div className="w-full px-2 py-4 xs:px-3 xs:py-5 sm:px-4 sm:py-6 md:px-6 md:py-8 lg:px-8 lg:py-10 xl:px-12 xl:py-12 2xl:px-16 2xl:py-16">
//                 <div className="mx-auto w-full max-w-8xl">
                    
//                     {/* Introduction Text - Mobile First */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8 }}
//                         viewport={{ once: true }}
//                         className="mb-4 text-center xs:mb-5 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-16"
//                     >
//                         <div className="mx-auto w-full max-w-5xl px-1 xs:px-2 sm:px-3 md:px-4">
//                             <p 
//                                 className="mb-2 text-xs leading-snug text-white/90 xs:mb-3 xs:text-sm xs:leading-normal sm:mb-4 sm:text-base sm:leading-relaxed md:mb-5 md:text-lg lg:text-xl lg:leading-8 xl:text-2xl 2xl:text-3xl" 
//                                 style={{ fontFamily: 'Roboto, sans-serif' }}
//                             >
// From property surveys to GIS mapping and smart city solutions, <br /> we deliver end-to-end expertise – Reach out for collaboration.
//                              </p>
//                             <div 
//                                 className="mx-auto h-0.5 w-8 xs:w-10 sm:w-12 md:h-1 md:w-16 lg:w-20 xl:w-24 2xl:w-32" 
//                                 style={{ backgroundColor: '#e1d385' }} 
//                             />
//                         </div>
//                     </motion.div>

//                     {/* Office Locations - Fully Responsive Grid */}
//                     <div className="mb-4 xs:mb-5 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-16">
//                         <div className="grid grid-cols-1 gap-3 xs:grid-cols-2 xs:gap-4 sm:gap-5 md:gap-6 lg:grid-cols-4 lg:gap-7 xl:gap-8 2xl:gap-10">
//                             {offices.map((office, index) => (
//                                 <motion.div
//                                     key={office.name}
//                                     className="flex flex-col items-center text-center p-2 xs:p-3 sm:p-4 md:p-5"
//                                     initial={{ opacity: 0, y: 30, scale: 0.8 }}
//                                     whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                                     transition={{ duration: 0.8, delay: 0.05 + index * 0.05 }}
//                                     viewport={{ once: true }}
//                                     whileHover={{ y: -2, scale: 1.02 }}
//                                 >
//                                     <motion.div
//                                         className="mb-1.5 h-12 w-12 overflow-hidden rounded-full  shadow-lg xs:mb-2 xs:h-14 xs:w-14 sm:mb-2.5 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:mb-3 lg:h-24 lg:w-24 xl:h-28 xl:w-28 2xl:h-32 2xl:w-32"
//                                         whileHover={{ 
//                                             scale: 1.05, 
//                                             rotateY: 8, 
//                                             boxShadow: '0 15px 30px rgba(255,255,255,0.2)' 
//                                         }}
//                                         transition={{ duration: 0.3 }}
//                                     >
//                                         <ImageWithFallback
//                                             src={office.image}
//                                             alt={office.alt}
//                                             className="h-full w-full object-cover"
//                                         />
//                                     </motion.div>

//                                     <div className="mb-1 flex items-center justify-center space-x-1 xs:space-x-1.5 sm:mb-1.5 sm:space-x-2">
//                                         <MapPin className="h-2.5 w-2.5 text-white xs:h-3 xs:w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 lg:h-5 lg:w-5" />
//                                         <h4 
//                                             className="text-xs font-semibold  text-white xs:text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl" 
//                                             style={{ fontFamily: 'Montserrat, sans-serif' }}
//                                         >
//                                             {office.title}
//                                         </h4>
//                                     </div>
                                    
//                                     <p 
//                                         className="px-0.5 text-xs leading-tight  text-white/80 xs:px-1 xs:leading-snug sm:text-xs sm:leading-relaxed md:text-sm lg:px-0 lg:text-sm xl:text-base 2xl:text-lg" 
//                                         style={{ fontFamily: 'Roboto, sans-serif' }}
//                                     >
//                                         {office.address.split('\n').map((line, i) => (
//                                             <span key={i}>
//                                                 {line}
//                                                 {i < office.address.split('\n').length - 1 && <br />}
//                                             </span>
//                                         ))}
//                                     </p>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Contact Information - Responsive Flex Layout */}
//                     <div className="mb-4 xs:mb-5 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-16">
//                         <div className="flex flex-col gap-2 xs:gap-3 sm:flex-row sm:justify-center sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
//                             {contactInfo.map((item, index) => (
//                                 <motion.div
//                                     key={index}
//                                     className="flex flex-1 items-start space-x-2 rounded-lg  p-2 xs:space-x-3 xs:p-3 sm:max-w-sm sm:flex-col sm:items-center sm:space-x-0 sm:space-y-2 sm:text-center md:p-4 lg:p-5"
//                                     initial={{ opacity: 0, y: 20 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
//                                     viewport={{ once: true }}
//                                     whileHover={{ y: -2, scale: 1.02 }}
//                                 >
//                                     <motion.div
//                                         className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full xs:h-7 xs:w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 xl:h-12 xl:w-12"
//                                         style={{ backgroundColor: '#ba7b72' }}
//                                         whileHover={{ 
//                                             backgroundColor: '#e1d385', 
//                                             rotate: 360, 
//                                             scale: 1.1 
//                                         }}
//                                         transition={{ duration: 0.6 }}
//                                     >
//                                         {item.icon}
//                                     </motion.div>
                                    
//                                     <div className="min-w-0 flex-1">
//                                         <h4 
//                                             className="mb-0.5 text-xs font-semibold text-white xs:mb-1 xs:text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl" 
//                                             style={{ fontFamily: 'Montserrat, sans-serif' }}
//                                         >
//                                             {item.title}
//                                         </h4>
//                                         <p 
//                                             className="break-words text-xs leading-tight text-white/80 xs:leading-snug sm:text-xs sm:leading-relaxed md:text-sm lg:text-base xl:text-lg" 
//                                             style={{ fontFamily: 'Roboto, sans-serif' }}
//                                         >
//                                             {item.content.split('\n').map((line, i) => (
//                                                 <span key={i}>
//                                                     {line}
//                                                     {i < item.content.split('\n').length - 1 && <br />}
//                                                 </span>
//                                             ))}
//                                         </p>
//                                     </div>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Social Links & CTA - Mobile Optimized */}
//                     <motion.div 
//                         className="text-center"
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8 }}
//                         viewport={{ once: true }}
//                     >
//                         <h4 
//                             className="mb-2 text-sm font-semibold text-white xs:mb-3 xs:text-base sm:mb-4 sm:text-lg md:mb-5 md:text-xl lg:mb-6 lg:text-2xl xl:text-3xl 2xl:text-4xl" 
//                             style={{ fontFamily: 'Montserrat, sans-serif' }}
//                         >
//                             Connect With Us
//                         </h4>
                        
//                         {/* Social Media Icons - Fully Responsive */}
//                         <div className="mb-3 flex justify-center space-x-2 xs:mb-4 xs:space-x-3 sm:mb-5 sm:space-x-4 md:space-x-5 lg:mb-6 lg:space-x-6 xl:mb-8 xl:space-x-8 2xl:space-x-10">
//                             {[
//                                 { icon: <Linkedin className="h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7" />, href: "https://www.linkedin.com/company/sthapatya-consultants/", color: '#0077b5' }
//                             ].map((social, index) => (
//                                 <motion.a
//                                     key={index}
//                                     href={social.href}
//                                     target='_blank'
//                                     className="flex h-6 w-6 items-center justify-center rounded-full xs:h-7 xs:w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14"
//                                     style={{ backgroundColor: '#ba7b72' }}
//                                     whileHover={{
//                                         scale: 1.2,
//                                         y: -2,
//                                         backgroundColor: social.color,
//                                         boxShadow: "0 6px 15px rgba(255,255,255,0.3)"
//                                     }}
//                                     whileTap={{ scale: 0.95 }}
//                                     transition={{ duration: 0.3 }}
//                                 >
//                                     {social.icon}
//                                 </motion.a>
//                             ))}
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     );
// }



import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router-dom';

export function ContactUsSection() {
    const offices = [
        {
            name: "Office - Amravati",
            image: "./offices/amt.jpg",
            alt: "Amravati Office Building",
            title: "Amravati",
            address: "4, Swapnashri Colony, Siddhivinayak Nagar, Amravati, Maharashtra 444604"
        },
        {
            name: "Office - Pune",
            image: "./offices/pune.jpg",
            alt: "Pune Office Building",
            title: "Pune",
            address: "8th Floor, Mount Vert Velocity, Baner - Pashan Link Road, Pune, Maharashtra 411021"
        },
        {
            name: "Office - Thane",
            image: "./offices/thane.jpeg",
            alt: "Thane Office Building",
            title: "Thane",
            address: "LODHA SUPREMUS, 1101, Sandoz Baug, Thane West, Maharashtra"
        },
        {
            name: "Office - Panvel",
            image: "./offices/panvel.png",
            alt: "Panvel Office Building",
            title: "Panvel",
            address: "A-103 Wing, Yogeshwar Krupa Chs, Thana Naka Road, Old Panvel, Maharashtra 410206"
        }
    ];

    const contactInfo = [
        {
            icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
            title: "Phone",
            content: "+91 7774091416",
            link: "tel:+917774091416"
        },
        {
            icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
            title: "Email",
            content: "scipl@sthapatya.in",
            link: "mailto:scipl@sthapatya.in"
        },
        {
            icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
            title: "Business Hours",
            content: "Mon-Fri: 10 AM - 7 PM |\nSat: 10 AM - 5 PM",
            subContent: "Sunday: Closed"
        }
    ];

    const quickLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Projects", path: "/projects" },
        { name: "Careers", path: "/careers" },
        { name: "Contact", path: "/contact" }
    ];

    const services = [
        { name: "Property Tax Surveys", path: "/services/property-tax" },
        { name: "Water Tax Management", path: "/services/water-tax" },
        { name: "GIS Mapping", path: "/services/gis" },
        { name: "Smart City Solutions", path: "/services/smart-city" }
    ];

    return (
        <footer className="w-full bg-gradient-to-br from-[#95231c] via-[#a62920] to-[#95231c] relative overflow-hidden">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="relative z-10">
                {/* Main Footer Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-8">
                    
                    {/* Introduction Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 sm:mb-16 lg:mb-20"
                    >
                        <h2 
                            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                            Let's Build Something Great Together
                        </h2>
                        <p 
                            className="text-base sm:text-lg lg:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed px-4"
                            style={{ fontFamily: 'Roboto, sans-serif' }}
                        >
                            From property surveys to GIS mapping and smart city solutions, we deliver end-to-end expertise. Reach out for collaboration.
                        </p>
                        <div 
                            className="mx-auto mt-6 h-1 w-24 sm:w-32 rounded-full"
                            style={{ backgroundColor: '#e1d385' }} 
                        />
                    </motion.div>
 {/* Office Locations Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="border-t border-white/10 pt-12 mb-12"
                    >
                        <h3 
                            className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center mb-8 sm:mb-10"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                            Our Office Locations
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                            {offices.map((office, index) => (
                                <motion.div
                                    key={office.name}
                                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 sm:p-6 hover:bg-white/10 transition-all duration-300"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 * index }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <motion.div
                                            className="mb-4 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden ring-4 ring-white/20"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ImageWithFallback
                                                src={office.image}
                                                alt={office.alt}
                                                className="w-full h-full object-cover"
                                            />
                                        </motion.div>
                                        
                                        <div className="flex items-center justify-center mb-3 space-x-2">
                                            <MapPin className="w-5 h-5 text-[#e1d385]" />
                                            <h5 
                                                className="text-base sm:text-lg font-semibold text-white"
                                                style={{ fontFamily: 'Montserrat, sans-serif' }}
                                            >
                                                {office.title}
                                            </h5>
                                        </div>
                                        
                                        <p 
                                            className="text-xs sm:text-sm text-white/70 leading-relaxed"
                                            style={{ fontFamily: 'Roboto, sans-serif' }}
                                        >
                                            {office.address}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    {/* Main Footer Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
                        
                        {/* Company Info & Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="lg:col-span-4"
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-3">
                                    <img src="./logo.png" alt="Logo" className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 
                                        className="text-xl sm:text-2xl font-bold text-white tracking-wide"
                                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                                    >
                                        STHAPATYA
                                    </h3>
                                    <p className="text-sm text-[#e1d385] tracking-wider">CONSULTANTS</p>
                                </div>
                            </div>
                            <p 
                                className="text-white/80 text-sm sm:text-base leading-relaxed mb-6"
                                style={{ fontFamily: 'Roboto, sans-serif' }}
                            >
                                Leading architectural consultancy firm specializing in innovative design solutions that blend traditional Indian architectural principles with contemporary functionality.
                            </p>
                            
                            {/* Social Media Links */}
                            <div className="flex space-x-4">
                                <motion.a
                                    href="https://www.linkedin.com/company/sthapatya-consultants/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                                    whileHover={{ scale: 1.1, backgroundColor: '#0077b5' }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Linkedin className="h-5 w-5 text-white" />
                                </motion.a>
                            </div>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2"
                        >
                            <h4 
                                className="text-lg sm:text-xl font-semibold text-white mb-4"
                                style={{ fontFamily: 'Montserrat, sans-serif' }}
                            >
                                Quick Links
                            </h4>
                            <ul className="space-y-2">
                                {quickLinks.map((link, index) => (
                                    <motion.li 
                                        key={index}
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Link
                                            to={link.path}
                                            className="text-white/80 hover:text-white text-sm sm:text-base transition-colors duration-200 flex items-center group"
                                            style={{ fontFamily: 'Roboto, sans-serif' }}
                                        >
                                            <span className="w-0 group-hover:w-2 h-0.5 bg-[#e1d385] transition-all duration-200 mr-0 group-hover:mr-2" />
                                            {link.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Services */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="lg:col-span-3"
                        >
                            <h4 
                                className="text-lg sm:text-xl font-semibold text-white mb-4"
                                style={{ fontFamily: 'Montserrat, sans-serif' }}
                            >
                                Our Services
                            </h4>
                            <ul className="space-y-2">
                                {services.map((service, index) => (
                                    <motion.li 
                                        key={index}
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Link
                                            to={service.path}
                                            className="text-white/80 hover:text-white text-sm sm:text-base transition-colors duration-200 flex items-center group"
                                            style={{ fontFamily: 'Roboto, sans-serif' }}
                                        >
                                            <span className="w-0 group-hover:w-2 h-0.5 bg-[#e1d385] transition-all duration-200 mr-0 group-hover:mr-2" />
                                            {service.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="lg:col-span-3"
                        >
                            <h4 
                                className="text-lg sm:text-xl font-semibold text-white mb-4"
                                style={{ fontFamily: 'Montserrat, sans-serif' }}
                            >
                                Contact Us
                            </h4>
                            <div className="space-y-4">
                                {contactInfo.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start space-x-3"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div 
                                            className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                                            style={{ backgroundColor: '#ba7b72' }}
                                        >
                                            {item.icon}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p 
                                                className="text-xs sm:text-sm text-white/60 mb-1"
                                                style={{ fontFamily: 'Montserrat, sans-serif' }}
                                            >
                                                {item.title}
                                            </p>
                                            {item.link ? (
                                                <a
                                                    href={item.link}
                                                    className="text-white text-sm sm:text-base hover:text-[#e1d385] transition-colors duration-200 break-words"
                                                    style={{ fontFamily: 'Roboto, sans-serif' }}
                                                >
                                                    {item.content}
                                                </a>
                                            ) : (
                                                <>
                                                    <p 
                                                        className="text-white text-sm sm:text-base break-words"
                                                        style={{ fontFamily: 'Roboto, sans-serif' }}
                                                    >
                                                        {item.content}
                                                    </p>
                                                    {item.subContent && (
                                                        <p 
                                                            className="text-white/80 text-xs sm:text-sm mt-1"
                                                            style={{ fontFamily: 'Roboto, sans-serif' }}
                                                        >
                                                            {item.subContent}
                                                        </p>
                                                    )}
                                                </>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                   
                </div>

                {/* Bottom Footer Bar */}
                <div className="border-t border-white/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                            <p 
                                className="text-white/60 text-xs sm:text-sm text-center sm:text-left"
                                style={{ fontFamily: 'Roboto, sans-serif' }}
                            >
                                © {new Date().getFullYear()} Sthapatya Consultants (India) Pvt. Ltd. All rights reserved.
                            </p>
                            
                            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
                                <Link 
                                    to="/privacy" 
                                    className="text-white/60 hover:text-white transition-colors duration-200"
                                    style={{ fontFamily: 'Roboto, sans-serif' }}
                                >
                                    Privacy Policy
                                </Link>
                                <Link 
                                    to="/terms" 
                                    className="text-white/60 hover:text-white transition-colors duration-200"
                                    style={{ fontFamily: 'Roboto, sans-serif' }}
                                >
                                    Terms of Service
                                </Link>
                                <Link 
                                    to="/sitemap" 
                                    className="text-white/60 hover:text-white transition-colors duration-200"
                                    style={{ fontFamily: 'Roboto, sans-serif' }}
                                >
                                    Sitemap
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
