// import { useState, useEffect } from 'react';
// import { motion } from 'motion/react';
// import { ChevronLeft, ChevronRight, Search, BarChart3, Smartphone, Map, Building, Settings } from 'lucide-react';

// const services = [
//     {
//         id: 'property-survey',
//         icon: <Search className="w-8 h-8" />,
//         title: "Property Survey Tax Assessment & Digitization",
//         description: "Comprehensive property mapping, assessment, and digital transformation services for accurate taxation.",
//         color: '#95231c'
//     },
//     {
//         id: 'data-analysis',
//         icon: <BarChart3 className="w-8 h-8" />,
//         title: "Data Analysis",
//         description: "Advanced analytics and insights for informed decision-making in urban planning and taxation.",
//         color: '#ba7b72'
//     },
//     {
//         id: 'integrated-software',
//         icon: <Smartphone className="w-8 h-8" />,
//         title: "Integrated Softwares & Mobile Apps",
//         description: "Custom software solutions and mobile applications for streamlined municipal operations.",
//         color: '#e1d385'
//     },
//     {
//         id: 'gis',
//         icon: <Map className="w-8 h-8" />,
//         title: "GIS",
//         description: "Geographic Information Systems for spatial data management and analysis.",
//         color: '#d8bea5'
//     },
//     {
//         id: 'elu-plu',
//         icon: <Building className="w-8 h-8" />,
//         title: "ELU/PLU City Mapping",
//         description: "Existing Land Use and Proposed Land Use mapping for comprehensive urban planning.",
//         color: '#95231c'
//     },
//     {
//         id: 'asset-management',
//         icon: <Settings className="w-8 h-8" />,
//         title: "Asset Management",
//         description: "Comprehensive asset tracking, maintenance, and lifecycle management solutions.",
//         color: '#ba7b72'
//     }
// ];

// export function ServicesSection() {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//     const itemsPerView = 1; // default for small screens

//     // Update itemsPerView based on screen width
//     const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
//     useEffect(() => {
//         const handleResize = () => setWindowWidth(window.innerWidth);
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     const responsiveItemsPerView = windowWidth >= 1024 ? 3 : windowWidth >= 768 ? 2 : 1;

//     // Auto-play functionality
//     useEffect(() => {
//         if (!isAutoPlaying) return;

//         const interval = setInterval(() => {
//             setCurrentIndex((prev) => (prev + 1) % (services.length - responsiveItemsPerView + 1));
//         }, 4000);

//         return () => clearInterval(interval);
//     }, [isAutoPlaying, responsiveItemsPerView]);

//     const nextSlide = () => {
//         setCurrentIndex((prev) => (prev + 1) % (services.length - responsiveItemsPerView + 1));
//         setIsAutoPlaying(false);
//     };

//     const prevSlide = () => {
//         setCurrentIndex((prev) => (prev - 1 + services.length - responsiveItemsPerView + 1) % (services.length - responsiveItemsPerView + 1));
//         setIsAutoPlaying(false);
//     };

//     const handleServiceClick = (service:any) => {
//         console.log(`Navigate to ${service.title} page`);
//     };

//     return (
//         <section className="w-full py-12 md:py-16 flex flex-col items-center" style={{ backgroundColor: '#fefefe' }}>
//             <div className=" w-[90%] px-4 md:px-8">
//                 {/* Introduction Paragraph */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     viewport={{ once: true }}
//                     className="text-center mb-12 md:mb-16 max-w-4xl mx-auto"
//                 >
//                     <motion.p
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.2 }}
//                         viewport={{ once: true }}
//                         className="text-base md:text-xl text-gray-700 leading-relaxed font-normal mb-6 md:mb-8"
//                         style={{ fontFamily: 'Roboto, sans-serif' }}
//                     >
//                         We provide cutting-edge technology solutions for municipal governments, offering comprehensive services from property assessment to digital transformation. Our integrated approach combines traditional surveying excellence with modern data analytics and software development.
//                     </motion.p>
//                     <motion.div
//                         initial={{ scaleX: 0 }}
//                         whileInView={{ scaleX: 1 }}
//                         transition={{ duration: 1, delay: 0.5 }}
//                         viewport={{ once: true }}
//                         className="w-24 md:w-32 h-1 mx-auto"
//                         style={{ backgroundColor: '#e1d385' }}
//                     />
//                 </motion.div>

//                 {/* Services Carousel */}
//                 <div className="relative w-full">
//                     <div
//                         className="overflow-hidden"
//                         onMouseEnter={() => setIsAutoPlaying(false)}
//                         onMouseLeave={() => setIsAutoPlaying(true)}
//                     >
//                         <motion.div
//                             className="flex gap-6 md:gap-8"
//                             animate={{ x: `-${currentIndex * (100 / responsiveItemsPerView)}%` }}
//                             transition={{ duration: 0.6, ease: "easeInOut" }}
//                         >
//                             {services.map((service, index) => (
//                                 <motion.div
//                                     key={service.id}
//                                     initial={{ opacity: 0, y: 50 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.6, delay: index * 0.1 }}
//                                     viewport={{ once: true }}
//                                     whileHover={{ y: -10, scale: 1.03, boxShadow: "0 25px 50px rgba(0,0,0,0.1)" }}
//                                     className="flex-shrink-0 cursor-pointer"
//                                     style={{ width: `calc(${100 / responsiveItemsPerView}% - 1rem)` }}
//                                     onClick={() => handleServiceClick(service)}
//                                 >
//                                     <div
//                                         className="p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full min-h-[320px] flex flex-col"
//                                         style={{ backgroundColor: '#f3f3f3' }}
//                                     >
//                                         <motion.div
//                                             className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300"
//                                             style={{ backgroundColor: service.color }}
//                                             whileHover={{ rotate: 180 }}
//                                             transition={{ duration: 0.6 }}
//                                         >
//                                             {service.icon}
//                                         </motion.div>

//                                         <h3
//                                             className="text-lg md:text-xl mb-3 md:mb-4 font-semibold flex-shrink-0"
//                                             style={{ color: '#95231c', fontFamily: 'Montserrat, sans-serif' }}
//                                         >
//                                             {service.title}
//                                         </h3>

//                                         <p
//                                             className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 md:mb-6 flex-grow"
//                                             style={{ fontFamily: 'Roboto, sans-serif' }}
//                                         >
//                                             {service.description}
//                                         </p>

//                                         <motion.div
//                                             className="inline-flex items-center group-hover:translate-x-2 transition-transform duration-300 mt-auto"
//                                             style={{ color: service.color, fontFamily: 'Montserrat, sans-serif' }}
//                                         >
//                                             <span className="font-medium text-sm md:text-base">Learn More</span>
//                                             <motion.svg
//                                                 className="w-4 h-4 md:w-5 md:h-5 ml-2"
//                                                 fill="none"
//                                                 stroke="currentColor"
//                                                 viewBox="0 0 24 24"
//                                                 whileHover={{ x: 5 }}
//                                                 transition={{ duration: 0.2 }}
//                                             >
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                                             </motion.svg>
//                                         </motion.div>

//                                         <motion.div className="mt-3 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
//                                             <motion.div
//                                                 className="h-full rounded-full"
//                                                 style={{ backgroundColor: service.color }}
//                                                 initial={{ width: 0 }}
//                                                 whileInView={{ width: "100%" }}
//                                                 transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
//                                                 viewport={{ once: true }}
//                                             />
//                                         </motion.div>
//                                     </div>
//                                 </motion.div>
//                             ))}
//                         </motion.div>
//                     </div>

//                     {/* Navigation Buttons */}
//                     <button
//                         onClick={prevSlide}
//                         className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-6 p-3 md:p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-10 opacity-80 hover:opacity-100"
//                         style={{ backgroundColor: '#95231c' }}
//                     >
//                         <ChevronLeft className="w-5 md:w-6 h-5 md:h-6 text-white" />
//                     </button>

//                     <button
//                         onClick={nextSlide}
//                         className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-6 p-3 md:p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-10 opacity-80 hover:opacity-100"
//                         style={{ backgroundColor: '#95231c' }}
//                     >
//                         <ChevronRight className="w-5 md:w-6 h-5 md:h-6 text-white" />
//                     </button>

//                     {/* Dots Indicator */}
//                     <div className="flex justify-center space-x-2 md:space-x-3 mt-8 md:mt-12">
//                         {Array.from({ length: services.length - responsiveItemsPerView + 1 }).map((_, index) => (
//                             <button
//                                 key={index}
//                                 onClick={() => {
//                                     setCurrentIndex(index);
//                                     setIsAutoPlaying(false);
//                                 }}
//                                 className={`h-2 md:h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-6 md:w-8' : 'w-2 md:w-3'
//                                     }`}
//                                 style={{
//                                     backgroundColor: index === currentIndex ? '#95231c' : '#ba7b72'
//                                 }}
//                             />
//                         ))}
//                     </div>

//                     {/* Auto-play indicator */}
//                     <div className="flex justify-center mt-4">
//                         <motion.div
//                             className="text-sm text-gray-500 flex items-center"
//                             style={{ fontFamily: 'Roboto, sans-serif' }}
//                         >
//                             <div
//                                 className={`w-2 h-2 rounded-full mr-2 transition-colors duration-300 ${isAutoPlaying ? 'bg-green-500' : 'bg-gray-400'
//                                     }`}
//                             />
//                             {isAutoPlaying ? 'Auto-playing' : 'Paused'}
//                         </motion.div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselImages = [
  "/Services/4.jpg", // Replace with your paths or URLs
  "/Services/5.jpg",
  "/Services/6.jpg",
  "/Services/drone.jpg",
];

function ImageCarousel() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    setIsAutoPlaying(false);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
    setIsAutoPlaying(false);
  };

  return (
    <div className="w-full mb-8 flex flex-col items-center relative group">
      {/* Removed inline style, added `aspect-video` for responsive height */}
      <div
        className="relative w-full overflow-hidden rounded-2xl shadow-xl bg-gray-200 aspect-video"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <AnimatePresence initial={false}>
          <motion.img
            key={currentImage} 
            src={carouselImages[currentImage]}
            alt={`Carousel ${currentImage + 1}`}
            className="absolute top-0 left-0 object-cover w-full h-full" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} 
            transition={{ opacity: { duration: 0.8, ease: "easeInOut" } }}
          />
        </AnimatePresence>
        
        {/* Navigation Buttons */}
        <button
          aria-label="Prev"
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-white/70 rounded-full shadow transition hover:bg-white z-10"
        >
          <ChevronLeft className="w-5 h-5 text-[#95231c]" />
        </button>
        <button
          aria-label="Next"
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-white/70 rounded-full shadow transition hover:bg-white z-10"
        >
          <ChevronRight className="w-5 h-5 text-[#95231c]" />
        </button>
      </div>
      {/* Dots indicator */}
      <div className="flex space-x-2 mt-4">
        {carouselImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentImage(idx);
              setIsAutoPlaying(false);
            }}
            className={`h-2 w-6 rounded-full transition-colors ${
              currentImage === idx ? "bg-[#95231c]" : "bg-[#ba7b72]"
            }`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section
      className="w-full py-12 md:py-16 flex flex-col items-center"
      style={{ backgroundColor: "#fefefe" }}
    >
      <div className="w-[80%] px-4 md:px-8">
        <ImageCarousel />
      </div>
    </section>
  );
}