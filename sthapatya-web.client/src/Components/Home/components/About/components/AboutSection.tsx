// import { motion } from "motion/react";
// import { FileText, Droplets, Calculator, CreditCard } from "lucide-react";
// import { Button } from "./ui/button";
// import { Card } from "./ui/card";
// import { ImageWithFallback } from "./figma/ImageWithFallback";
// import { LiquidWaveGradientStyle } from "./OverlayStyles";
// import "../styles/cards.css";
// import { InteractiveKmlMap } from "./InteractiveKmlMap";
// const workShowcases = [
//   {
//     id: "property-survey",
//     icon: <FileText className="z-0 w-6 h-6 md:w-8 md:h-8" />,
//     title: "Door-to-Door Survey for Property Tax",
//     description:
//       "A scientific and data-driven approach to property assessment. Our teams conduct detailed on-ground surveys, capturing property attributes, ownership details, and geo-tagging information to build reliable databases for municipal bodies.",
//   },
//   {
//     id: "water-tax",
//     icon: <Droplets className="z-0 w-6 h-6 md:w-8 md:h-8" />,
//     title: "Water Tax Assessment & Management",
//     description:
//       "Our intelligent water billing systems ensure fair and efficient revenue collection. With technology at the core, we provide seamless integration of usage tracking, billing, and citizen communication.",
//   },
//   {
//     id: "calculations",
//     icon: <Calculator className="z-0 w-6 h-6 md:w-8 md:h-8" />,
//     title: "All Calculations",
//     description:
//       "Automation eliminates human error. From property valuation to taxation, our algorithms ensure accuracy, transparency, and compliance with government norms.",
//   },
//   {
//     id: "bill-payments",
//     icon: <CreditCard className="z-0 w-6 h-6 md:w-8 md:h-8" />,
//     title: "Bill Payments with Technology",
//     description:
//       "We simplify payments through secure digital platforms, enabling citizens to transact easily while reducing administrative burden for urban local bodies.",
//   },
// ];



// const councils = [
//   {
//     id: "maharashtra",
//     name: "Maharashtra",
//     region: "Central",
//     properties: 45,
//     residential: 27,
//     commercial: 13,
//     industrial: 4,
//     coords: [180, 280],
//     demand: "112M",
//     area: "307,713 sq km",
//     description: "Western state of India known for its industrial and commercial prominence",
//     majorProjects: [
//       "Digital Maharashtra Initiative",
//       "Property Tax Modernization",
//       "Smart City Development",
//       "Water Resource Management",
//       "Industrial Policy Implementation"
//     ]
//   },
//   {
//     id: "Mumbai",
//     name: "Mumbai",
//     region: "Konkan",
//     properties: 32,
//     residential: 18,
//     commercial: 10,
//     industrial: 4,
//     coords: [170, 350],
//     demand: "12.4M",
//     area: "603 sq km",
//     description: "Financial capital of India and Maharashtra's largest city",
//     majorProjects: [
//       "Property Tax Digitization",
//       "Smart Traffic Management",
//       "Waste Management System",
//       "Water Supply Optimization",
//       "Building Permission Portal"
//     ]
//   },
//   {
//     id: "Panvel",
//     name: "Panvel",
//     region: "Konkan",
//     properties: "3.6 Lakhs",
//     residential: 16,
//     commercial: 8,
//     industrial: 4,
//     coords: [120, 220],
//     demand: "424CR",
//     area: "111 sq km",
//     description: "Emerging satellite city near Mumbai with rapid development",
//     majorProjects: [
//       "New Panvel Development",
//       "Transportation Hub",
//       "Industrial Zone Planning",
//       "Residential Complex Management"
//     ]
//   },
//   {
//     id: "Thane",
//     name: "Thane",
//     region: "Konkan",
//     properties: "6.29 Lakhs",
//     residential: 9,
//     commercial: 4,
//     industrial: 2,
//     coords: [150, 180],
//     demand: "728CR",
//     area: "147 sq km",
//     description: "City of Lakes, adjacent to Mumbai",
//     majorProjects: [
//       "Digital Property Records",
//       "Water Management System",
//       "Garbage Collection Management",
//       "Building Approval System"
//     ]
//   },
//   {
//     id: "Amravati",
//     name: "Amravati",
//     region: "Vidarbha",
//     properties: "3.5 Lakhs",
//     residential: 12,
//     commercial: 7,
//     industrial: 3,
//     coords: [190, 400],
//     demand: "291CR",
//     area: "124 sq km",
//     description: "Ancient city known for its temples and cultural heritage",
//     majorProjects: [
//       "Heritage Conservation",
//       "Tourism Management",
//       "Agricultural Market System",
//       "Water Distribution Network"
//     ]
//   },
//   {
//     id: "andhra",
//     name: "Akola",
//     region: "Vidarbha",
//     properties: "1.76 Lakhs",
//     residential: 10,
//     commercial: 5,
//     industrial: 3,
//     coords: [210, 360],
//     demand: "283CR",
//     area: "106.47 sq km",
//     description: "Cotton city known for its textile industry",
//     majorProjects: [
//       "Cotton Market Digitization",
//       "Textile Industry Portal",
//       "Agricultural Data System",
//       "Urban Planning Initiative"
//     ]
//   }
// ];

// const projectImages = [
//   {
//     id: "modern-architecture",
//     src: "./images/1.jpg",
//     alt: "Modern architectural building design",
//     title: "Contemporary Design",
//   },
//   {
//     id: "engineering-construction",
//     src: "./images/4.jpg",
//     alt: "Architectural engineering and construction",
//     title: "Engineering Excellence",
//   },
//   {
//     id: "blueprint-planning",
//     src: "./images/2.jpg",
//     alt: "Architectural blueprint and planning",
//     title: "Strategic Planning",
//   },
//   {
//     id: "traditional-indian",
//     src: "./About/4.png",
//     alt: "Traditional Indian architecture",
//     title: "Cultural Heritage",
//   },
// ];



// export function AboutSection() {
//     const handleDistrictClick = (district: any) => {
//     if (district.isEnabled && onDistrictClick) {
//       // Find matching council data by name
//       const matchingCouncil = councils.find(
//         (council) =>
//           council.name.toLowerCase().includes(district.name.toLowerCase()) ||
//           district.name.toLowerCase().includes(council.name.toLowerCase())
//       );

//       if (matchingCouncil) {
//         onDistrictClick(matchingCouncil.id);
//       } else {
//         // If no exact match, create a generic entry
//         onDistrictClick(district.name);
//       }
//     }
//   };


//   return (
//     <section
//       className="w-full py-12 md:py-16 px-12 flex items-stretch"
//       style={{
//         background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
//       }}
//     >
//       <div className="max-w-full w-full mx-auto px-4 md:px-8 lg:px-12">
//         <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch min-h-[700px]">
//           {/* Left Column - Text, Button & Cards (60%) */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="flex-shrink-0 lg:w-[60%] flex flex-col space-y-12"
//           >
//             {/* Cards Section - Below Text and Button */}
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.5 }}
//               viewport={{ once: true }}
//               className="flex-1"
//             >
//               <div className="space-y-6">
//                 <motion.p
//                   initial={{ opacity: 0, y: 20, x: -20 }}
//                   whileInView={{ opacity: 1, y: 0, x: 0 }}
//                   transition={{
//                     duration: 0.7,
//                     delay: 0.1,
//                     ease: "easeOut",
//                   }}
//                   viewport={{ once: true }}
//                   className="leading-relaxed text-lg"
//                   style={{
//                     color: "#4a4a4a",
//                     lineHeight: "1.7",
//                   }}
//                   whileHover={{
//                     x: 5,
//                     transition: { duration: 0.2 },
//                   }}
//                 >
//                   At Sthapatya Consultants, we blend architectural precision
//                   with technology-driven solutions to empower cities. Founded in
//                   Maharashtra, we specialize in civic infrastructure, property
//                   taxation systems, and urban governance solutions. With every
//                   project, our mission is to make governance smarter,
//                   transparent, and citizen-centric.
//                 </motion.p>
//               </div>
//               <br />
//               {/* Cards Section - Below Text and Button */}
//               <motion.div
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.5 }}
//                 viewport={{ once: true }}
//                 className="flex flex-wrap gap-6 justify-center items-center"
//               >
//                 <div className="w-full max-w-md lg:max-w-lg">
//                   <InteractiveKmlMap
//                     kmlFile="/mh.kml"
//                     onDistrictClick={handleDistrictClick}
//                     councils={councils}
//                   />
//                 </div>
//               </motion.div>

//                 {/* Partnership Statistics */}
//             <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.6 }}
//                 viewport={{ once: true }}
//                 className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
//             >
//                 {[
//                     { number: "12+", label: "Municipal Corps" },
//                     { number: "18+", label: "City Councils" },
//                     { number: "200+", label: "Projects Delivered" },
//                     { number: "98%", label: "Client Satisfaction" },
//                 ].map((stat, index) => (
//                     <div key={index} className="text-center p-2 sm:p-3 lg:p-4">
//                         <motion.div
//                             className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-1 sm:mb-2 lg:mb-3 font-bold"
//                             style={{
//                                 color: "#95231c",
//                                 fontFamily: "Montserrat, sans-serif",
//                             }}
//                             initial={{ opacity: 0, scale: 0.5 }}
//                             whileInView={{ opacity: 1, scale: 1 }}
//                             transition={{
//                                 duration: 0.5,
//                                 delay: 0.8 + index * 0.1,
//                             }}
//                             viewport={{ once: true }}
//                             whileHover={{ scale: 1.1, color: "#ba7b72" }}
//                         >
//                             {stat.number}
//                         </motion.div>
//                         <div
//                             className="text-sm sm:text-base lg:text-lg text-gray-700 font-normal"
//                             style={{ fontFamily: "Roboto, sans-serif" }}
//                         >
//                             {stat.label}
//                         </div>
//                     </div>
//                 ))}
//             </motion.div>
//             </motion.div>

//             {/* Text and Button Section */}
//             <div className="space-y-1">
//               {/* Company Description */}

//               {/* CTA Button */}
//               <motion.div
//                 initial={{ opacity: 0, y: 30, scale: 0.8 }}
//                 whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                 transition={{
//                   duration: 0.6,
//                   delay: 0.3,
//                   type: "spring",
//                   stiffness: 100,
//                 }}
//                 className="flex justify-center items-center mx-auto"
//                 viewport={{ once: true }}
//               >
//                 <motion.button
//                   className="px-8 py-4 rounded-2xl text-white text-lg transition-all duration-300 relative overflow-hidden"
//                   style={{
//                     background:
//                       "linear-gradient(135deg, #57000D 0%, #8b0000 100%)",
//                     fontWeight: "600",
//                     boxShadow: "0 8px 25px rgba(87, 0, 13, 0.3)",
//                     border: "2px solid transparent",
//                   }}
//                   whileHover={{
//                     scale: 1.05,
//                     boxShadow: "0 12px 35px rgba(87, 0, 13, 0.4)",
//                     background:
//                       "linear-gradient(135deg, #6b0000 0%, #9b0000 100%)",
//                   }}
//                   whileTap={{ scale: 0.95 }}
//                   onHoverStart={() => {}}
//                 >
//                   {/* Button background animation */}
//                   <motion.div
//                     className="absolute inset-0 rounded-full"
//                     style={{
//                       background:
//                         "linear-gradient(135deg, #fbb9b6 0%, #f8a5a2 100%)",
//                       opacity: 0,
//                     }}
//                     whileHover={{ opacity: 0.1 }}
//                     transition={{ duration: 0.3 }}
//                   />

//                   {/* Button text */}
//                   <span className="relative z-10">Discover Our Approach</span>

//                   {/* Shine effect */}
//                   <motion.div
//                     className="absolute inset-0 rounded-2xl"
//                     style={{
//                       background:
//                         "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)",
//                       transform: "translateX(-100%)",
//                     }}
//                     whileHover={{
//                       transform: "translateX(100%)",
//                       transition: { duration: 0.6 },
//                     }}
//                   />
//                 </motion.button>
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* Right Column - Project Images (40%) */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             viewport={{ once: true }}
//             className="flex-shrink-0 lg:w-[40%] flex flex-col justify-center"
//           >
//             <div className="grid grid-cols-2 gap-6 h-full">
//               {projectImages.map((image, index) => {
//                 // Different animations for each image
//                 const getHoverAnimation = (index) => {
//                   switch (index) {
//                     case 0: // Slide from left with glow
//                       return {
//                         x: [0, -10, 0],
//                         scale: 1.03,
//                         rotateY: [-2, 2, 0],
//                         boxShadow:
//                           "0 20px 40px rgba(251, 185, 182, 0.4), 0 0 30px rgba(251, 185, 182, 0.3)",
//                         transition: { duration: 0.4, type: "spring" },
//                       };
//                     case 1: // Rotate and zoom with pulse
//                       return {
//                         scale: 1.08,
//                         rotate: [0, 3, -3, 0],
//                         boxShadow: "0 25px 50px rgba(87, 0, 13, 0.3)",
//                         transition: {
//                           duration: 0.5,
//                           type: "spring",
//                           stiffness: 200,
//                         },
//                       };
//                     case 2: // Flip effect with slide
//                       return {
//                         rotateX: [0, -5, 5, 0],
//                         y: [0, -5, 0],
//                         scale: 1.04,
//                         boxShadow:
//                           "0 30px 60px rgba(87, 0, 13, 0.25), 0 10px 20px rgba(251, 185, 182, 0.2)",
//                         transition: { duration: 0.6, ease: "easeOut" },
//                       };
//                     case 3: // Bounce with color shift
//                       return {
//                         scale: [1, 1.1, 1.06],
//                         y: [0, -8, -2],
//                         boxShadow:
//                           "0 35px 70px rgba(87, 0, 13, 0.4), 0 0 40px rgba(251, 185, 182, 0.5)",
//                         transition: {
//                           duration: 0.7,
//                           type: "spring",
//                           bounce: 0.4,
//                         },
//                       };
//                     default:
//                       return { scale: 1.05 };
//                   }
//                 };

//                 const getImageAnimation = (index) => {
//                   switch (index) {
//                     case 0:
//                       return { scale: 1.15, x: 5, filter: "brightness(1.1)" };
//                     case 1:
//                       return {
//                         scale: 1.2,
//                         rotate: 2,
//                         filter: "contrast(1.1) saturate(1.2)",
//                       };
//                     case 2:
//                       return {
//                         scale: 1.12,
//                         y: -3,
//                         filter: "brightness(1.05) contrast(1.05)",
//                       };
//                     case 3:
//                       return {
//                         scale: 1.18,
//                         filter: "saturate(1.3) brightness(1.1)",
//                       };
//                     default:
//                       return { scale: 1.1 };
//                   }
//                 };

//                 const getOverlayStyle = (index) => {
//                   switch (index) {
//                     case 0:
//                       return "linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, transparent 70%)";
//                     case 1:
//                       return "linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.3) 100%)";
//                     case 2:
//                       return "linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 100%)";
//                     case 3:
//                       return "radial-gradient(circle at center, rgba(0, 0, 0, 0.5) 0%, transparent 70%)";
//                     default:
//                       return "linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 60%)";
//                   }
//                 };

//                 const getTextAnimation = (index:any) => {
//                   switch (index) {
//                     case 0:
//                       return {
//                         x: [-30, 0],
//                         opacity: [0, 1],
//                         transition: { duration: 0.3 },
//                       };
//                     case 1:
//                       return {
//                         scale: [0.8, 1],
//                         rotate: [5, 0],
//                         opacity: [0, 1],
//                         transition: { duration: 0.3 },
//                       };
//                     case 2:
//                       return {
//                         y: [30, 0],
//                         opacity: [0, 1],
//                         transition: { duration: 0.3 },
//                       };
//                     case 3:
//                       return {
//                         scale: [1.2, 1],
//                         opacity: [0, 1],
//                         transition: { duration: 0.3, type: "spring" },
//                       };
//                     default:
//                       return {
//                         y: [20, 0],
//                         opacity: [0, 1],
//                         transition: { duration: 0.3 },
//                       };
//                   }
//                 };

//                 return (
//                   <motion.div
//                     key={image.id}
//                     initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
//                     whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
//                     transition={{
//                       duration: 0.7,
//                       delay: 0.4 + index * 0.15,
//                       type: "spring",
//                       stiffness: 80,
//                     }}
//                     viewport={{ once: true }}
//                     className="relative group cursor-pointer overflow-hidden rounded-2xl"
//                     style={{
//                       background:
//                         "linear-gradient(135deg, rgba(251, 185, 182, 0.1) 0%, rgba(87, 0, 13, 0.1) 100%)",
//                       boxShadow: "0 8px 25px rgba(87, 0, 13, 0.15)",
//                       border: "2px solid rgba(251, 185, 182, 0.2)",
//                       minHeight: "160px",
//                     }}
//                     whileHover={getHoverAnimation(index)}
//                     variants={{
//                       hover: {},
//                     }}
//                     initial="initial"
//                     animate="initial"
//                     whileHover="hover"
//                   >
//                     <motion.div
//                       className="w-full h-full"
//                       whileHover={getImageAnimation(index)}
//                       transition={{ duration: 0.5, ease: "easeOut" }}
//                     >
//                       <ImageWithFallback
//                         src={image.src}
//                         alt={image.alt}
//                         className="w-full h-full object-cover"
//                         style={{ minHeight: "160px" }}
//                       />
//                     </motion.div>

//                     {/* Liquid Wave Overlay */}
//                     <LiquidWaveGradientStyle index={index}>
//                       <motion.div className="text-center">
//                         <motion.h3
//                           className="text-white font-bold mb-2"
//                           style={{
//                             fontSize: index === 1 ? "18px" : "16px",
//                             textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
//                           }}
//                         >
//                           Strategic Planning
//                         </motion.h3>

//                         <motion.p
//                           className="text-white text-xs opacity-90"
//                           style={{
//                             textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
//                             maxWidth: "150px",
//                             margin: "0 auto",
//                           }}
//                         >
//                           Strategic architectural planning
//                         </motion.p>
//                       </motion.div>
//                     </LiquidWaveGradientStyle>

//                     {/* Animated border on hover */}
//                     <motion.div
//                       className="absolute inset-0 rounded-2xl pointer-events-none"
//                       style={{
//                         border: "2px solid transparent",
//                       }}
//                       whileHover={{
//                         borderColor: "#fbb9b6",
//                         boxShadow: "0 0 20px rgba(251, 185, 182, 0.5)",
//                       }}
//                       transition={{ duration: 0.3 }}
//                     />
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }import { motion } from "motion/react";


import { FileText, Droplets, Calculator, CreditCard } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { LiquidWaveGradientStyle } from "./OverlayStyles";
import "../styles/cards.css";
import { InteractiveKmlMap } from "./InteractiveKmlMap";
import { useState } from "react";
import { motion } from "framer-motion";

const workShowcases = [
  {
    id: "property-survey",
    icon: <FileText className="z-0 w-6 h-6 md:w-8 md:h-8" />,
    title: "Door-to-Door Survey for Property Tax",
    description:
      "A scientific and data-driven approach to property assessment. Our teams conduct detailed on-ground surveys, capturing property attributes, ownership details, and geo-tagging information to build reliable databases for municipal bodies.",
  },
  {
    id: "water-tax",
    icon: <Droplets className="z-0 w-6 h-6 md:w-8 md:h-8" />,
    title: "Water Tax Assessment & Management",
    description:
      "Our intelligent water billing systems ensure fair and efficient revenue collection. With technology at the core, we provide seamless integration of usage tracking, billing, and citizen communication.",
  },
  {
    id: "calculations",
    icon: <Calculator className="z-0 w-6 h-6 md:w-8 md:h-8" />,
    title: "All Calculations",
    description:
      "Automation eliminates human error. From property valuation to taxation, our algorithms ensure accuracy, transparency, and compliance with government norms.",
  },
  {
    id: "bill-payments",
    icon: <CreditCard className="z-0 w-6 h-6 md:w-8 md:h-8" />,
    title: "Bill Payments with Technology",
    description:
      "We simplify payments through secure digital platforms, enabling citizens to transact easily while reducing administrative burden for urban local bodies.",
  },
];

// Complete data for all Maharashtra districts
const allCouncilsData = [
  // Major Cities
  {
    id: "Mumbai",
    name: "Mumbai",
    region: "Konkan",
    properties: "4.2 Million",
    residential: 65,
    commercial: 25,
    industrial: 10,
    demand: "2,450CR",
    area: "603 sq km",
    description: "Financial capital of India and Maharashtra's largest city",
    majorProjects: [
      "Property Tax Digitization",
      "Smart Traffic Management",
      "Waste Management System",
      "Water Supply Optimization",
      "Building Permission Portal",
      "Coastal Road Development"
    ]
  },
  {
    id: "Pune",
    name: "Pune",
    region: "Pune",
    properties: "2.8 Million",
    residential: 60,
    commercial: 30,
    industrial: 10,
    demand: "1,850CR",
    area: "516 sq km",
    description: "Cultural capital and major IT hub of Maharashtra",
    majorProjects: [
      "Smart City Mission",
      "Metro Rail Project",
      "River Restoration",
      "Digital Property Records",
      "Traffic Management System"
    ]
  },
  {
    id: "Nagpur",
    name: "Nagpur",
    region: "Vidarbha",
    properties: "1.5 Million",
    residential: 55,
    commercial: 25,
    industrial: 20,
    demand: "980CR",
    area: "227 sq km",
    description: "Orange city and winter capital of Maharashtra",
    majorProjects: [
      "Smart City Development",
      "Water Distribution Network",
      "Property Tax Modernization",
      "Solid Waste Management",
      "IT Park Development"
    ]
  },
  {
    id: "Nashik",
    name: "Nashik",
    region: "Nashik",
    properties: "1.2 Million",
    residential: 58,
    commercial: 22,
    industrial: 20,
    demand: "750CR",
    area: "259 sq km",
    description: "Wine capital and holy city of Maharashtra",
    majorProjects: [
      "Water Supply Enhancement",
      "Property Survey Project",
      "Smart Parking System",
      "Industrial Zone Planning",
      "River Front Development"
    ]
  },
  {
    id: "Aurangabad",
    name: "Aurangabad",
    region: "Marathwada",
    properties: "950K",
    residential: 52,
    commercial: 23,
    industrial: 25,
    demand: "620CR",
    area: "139 sq km",
    description: "Tourism hub known for Ajanta and Ellora caves",
    majorProjects: [
      "Heritage Conservation",
      "Tourism Infrastructure",
      "Water Management System",
      "Property Tax System",
      "Smart Lighting Project"
    ]
  },
  {
    id: "Solapur",
    name: "Solapur",
    region: "Solapur",
    properties: "850K",
    residential: 50,
    commercial: 20,
    industrial: 30,
    demand: "580CR",
    area: "180 sq km",
    description: "Textile hub of Maharashtra",
    majorProjects: [
      "Textile Industry Support",
      "Water Conservation",
      "Property Digitization",
      "Waste Management",
      "Industrial Corridor Development"
    ]
  },
  {
    id: "Amravati",
    name: "Amravati",
    region: "Vidarbha",
    properties: "650K",
    residential: 48,
    commercial: 22,
    industrial: 30,
    demand: "420CR",
    area: "270 sq km",
    description: "Educational center in Vidarbha region",
    majorProjects: [
      "Educational Infrastructure",
      "Water Distribution",
      "Property Tax Reform",
      "Smart City Initiatives",
      "Agricultural Market System"
    ]
  },
  {
    id: "Nanded",
    name: "Nanded",
    region: "Marathwada",
    properties: "550K",
    residential: 45,
    commercial: 20,
    industrial: 35,
    demand: "380CR",
    area: "63 sq km",
    description: "Sikh pilgrimage center on banks of Godavari",
    majorProjects: [
      "Pilgrimage City Development",
      "Water Supply Project",
      "Property Management System",
      "Smart Transportation",
      "River Front Development"
    ]
  },
  {
    id: "Kolhapur",
    name: "Kolhapur",
    region: "Kolhapur",
    properties: "680K",
    residential: 46,
    commercial: 24,
    industrial: 30,
    demand: "450CR",
    area: "66 sq km",
    description: "Historical city known for its cultural heritage",
    majorProjects: [
      "Heritage Conservation",
      "Water Supply Enhancement",
      "Property Tax Modernization",
      "Smart City Project",
      "Industrial Estate Development"
    ]
  },
  {
    id: "Sangli",
    name: "Sangli",
    region: "Pune",
    properties: "480K",
    residential: 44,
    commercial: 21,
    industrial: 35,
    demand: "350CR",
    area: "96 sq km",
    description: "Turmeric city and major trading center",
    majorProjects: [
      "Agricultural Market System",
      "Water Management",
      "Property Digitization",
      "Smart Lighting",
      "Industrial Zone Planning"
    ]
  },
  {
    id: "Malegaon",
    name: "Malegaon",
    region: "Nashik",
    properties: "420K",
    residential: 42,
    commercial: 18,
    industrial: 40,
    demand: "320CR",
    area: "35 sq km",
    description: "Textile and powerloom industry center",
    majorProjects: [
      "Textile Industry Support",
      "Water Supply Project",
      "Property Survey",
      "Waste Management",
      "Skill Development Center"
    ]
  },
  {
    id: "Jalgaon",
    name: "Jalgaon",
    region: "Nashik",
    properties: "460K",
    residential: 43,
    commercial: 19,
    industrial: 38,
    demand: "340CR",
    area: "68 sq km",
    description: "Banana city and major agricultural hub",
    majorProjects: [
      "Agricultural Market System",
      "Water Conservation",
      "Property Tax System",
      "Smart Transportation",
      "Cold Storage Development"
    ]
  },
  {
    id: "Dhule",
    name: "Dhule",
    region: "Nashik",
    properties: "380K",
    residential: 41,
    commercial: 19,
    industrial: 40,
    demand: "290CR",
    area: "136 sq km",
    description: "Educational hub in north Maharashtra",
    majorProjects: [
      "Educational Infrastructure",
      "Water Supply Enhancement",
      "Property Management",
      "Smart City Initiatives",
      "Industrial Development"
    ]
  },
  {
    id: "Ahmednagar",
    name: "Ahmednagar",
    region: "Pune",
    properties: "380K",
    residential: 40,
    commercial: 20,
    industrial: 40,
    demand: "300CR",
    area: "104 sq km",
    description: "Historical city with rich heritage",
    majorProjects: [
      "Heritage Conservation",
      "Water Management System",
      "Property Digitization",
      "Smart Lighting",
      "Tourism Development"
    ]
  },
  {
    id: "Chandrapur",
    name: "Chandrapur",
    region: "Vidarbha",
    properties: "320K",
    residential: 38,
    commercial: 17,
    industrial: 45,
    demand: "280CR",
    area: "142 sq km",
    description: "Coal city and industrial hub",
    majorProjects: [
      "Industrial Zone Management",
      "Water Supply Project",
      "Property Tax System",
      "Environmental Management",
      "Smart Transportation"
    ]
  },
  {
    id: "Parbhani",
    name: "Parbhani",
    region: "Marathwada",
    properties: "310K",
    residential: 39,
    commercial: 18,
    industrial: 43,
    demand: "270CR",
    area: "52 sq km",
    description: "Educational center in Marathwada",
    majorProjects: [
      "Educational Infrastructure",
      "Water Distribution",
      "Property Management",
      "Agricultural Support",
      "Smart City Planning"
    ]
  },
  {
    id: "Latur",
    name: "Latur",
    region: "Marathwada",
    properties: "380K",
    residential: 40,
    commercial: 20,
    industrial: 40,
    demand: "310CR",
    area: "96 sq km",
    description: "Major trading center in Marathwada",
    majorProjects: [
      "Water Conservation Project",
      "Property Tax Modernization",
      "Smart Transportation",
      "Industrial Development",
      "Educational Infrastructure"
    ]
  },
  {
    id: "Bhiwandi",
    name: "Bhiwandi",
    region: "Konkan",
    properties: "720K",
    residential: 45,
    commercial: 25,
    industrial: 30,
    demand: "480CR",
    area: "57 sq km",
    description: "Textile and logistics hub",
    majorProjects: [
      "Textile Industry Support",
      "Logistics Infrastructure",
      "Property Management",
      "Water Supply Enhancement",
      "Smart Transportation"
    ]
  },
  {
    id: "Navi Mumbai",
    name: "Navi Mumbai",
    region: "Konkan",
    properties: "1.8 Million",
    residential: 62,
    commercial: 28,
    industrial: 10,
    demand: "1,250CR",
    area: "108 sq km",
    description: "Planned satellite city of Mumbai",
    majorProjects: [
      "Smart City Development",
      "Property Tax System",
      "Water Supply Network",
      "Waste Management",
      "Transportation Hub"
    ]
  },
  {
    id: "Kalyan-Dombivli",
    name: "Kalyan-Dombivli",
    region: "Konkan",
    properties: "1.5 Million",
    residential: 58,
    commercial: 27,
    industrial: 15,
    demand: "980CR",
    area: "137 sq km",
    description: "Twin cities in Mumbai metropolitan region",
    majorProjects: [
      "Property Digitization",
      "Water Management",
      "Smart Transportation",
      "Waste Management System",
      "Urban Renewal Project"
    ]
  },
  {
    id: "Thane",
    name: "Thane",
    region: "Konkan",
    properties: "1.9 Million",
    residential: 56,
    commercial: 29,
    industrial: 15,
    demand: "1,150CR",
    area: "147 sq km",
    description: "City of Lakes, adjacent to Mumbai",
    majorProjects: [
      "Digital Property Records",
      "Water Management System",
      "Garbage Collection Management",
      "Building Approval System",
      "Smart City Mission"
    ]
  },
  {
    id: "Pimpri-Chinchwad",
    name: "Pimpri-Chinchwad",
    region: "Pune",
    properties: "2.5 Million",
    residential: 54,
    commercial: 26,
    industrial: 20,
    demand: "1,420CR",
    area: "181 sq km",
    description: "Industrial twin city of Pune",
    majorProjects: [
      "Industrial Zone Management",
      "Property Tax System",
      "Water Supply Enhancement",
      "Smart Transportation",
      "Waste Management"
    ]
  },
  {
    id: "Vasai-Virar",
    name: "Vasai-Virar",
    region: "Konkan",
    properties: "1.2 Million",
    residential: 60,
    commercial: 25,
    industrial: 15,
    demand: "750CR",
    area: "311 sq km",
    description: "Rapidly growing city in Mumbai region",
    majorProjects: [
      "Property Survey Project",
      "Water Supply Network",
      "Smart City Development",
      "Transportation System",
      "Coastal Management"
    ]
  },
  {
    id: "Miraj-Kupwad",
    name: "Miraj-Kupwad",
    region: "Kolhapur",
    properties: "520K",
    residential: 42,
    commercial: 23,
    industrial: 35,
    demand: "380CR",
    area: "76 sq km",
    description: "Twin cities known for medical and textile industries",
    majorProjects: [
      "Medical Infrastructure",
      "Textile Industry Support",
      "Property Management",
      "Water Supply Project",
      "Smart Lighting"
    ]
  },
  {
    id: "Panvel",
    name: "Panvel",
    region: "Konkan",
    properties: "1.1 Million",
    residential: 55,
    commercial: 30,
    industrial: 15,
    demand: "680CR",
    area: "111 sq km",
    description: "Emerging satellite city near Mumbai with rapid development",
    majorProjects: [
      "New Panvel Development",
      "Transportation Hub",
      "Industrial Zone Planning",
      "Residential Complex Management",
      "Smart City Project"
    ]
  },
  {
    id: "Ichalkaranji",
    name: "Ichalkaranji",
    region: "Kolhapur",
    properties: "325K",
    residential: 40,
    commercial: 20,
    industrial: 40,
    demand: "280CR",
    area: "72 sq km",
    description: "Manchester of Maharashtra - textile hub",
    majorProjects: [
      "Textile Industry Development",
      "Water Supply Enhancement",
      "Property Tax System",
      "Skill Development Center",
      "Industrial Estate Planning"
    ]
  },
  {
    id: "Yavatmal",
    name: "Yavatmal",
    region: "Vidarbha",
    properties: "132K",
    residential: 38,
    commercial: 17,
    industrial: 45,
    demand: "180CR",
    area: "112 sq km",
    description: "Cotton and agricultural hub",
    majorProjects: [
      "Agricultural Market System",
      "Water Conservation",
      "Property Management",
      "Cotton Industry Support",
      "Educational Infrastructure"
    ]
  },
  {
    id: "Akola",
    name: "Akola",
    region: "Vidarbha",
    properties: "428K",
    residential: 41,
    commercial: 19,
    industrial: 40,
    demand: "320CR",
    area: "106 sq km",
    description: "Cotton city known for its textile industry",
    majorProjects: [
      "Cotton Market Digitization",
      "Textile Industry Portal",
      "Agricultural Data System",
      "Urban Planning Initiative",
      "Water Distribution Network"
    ]
  },
  {
    id: "Nandurbar",
    name: "Nandurbar",
    region: "Nashik",
    properties: "68K",
    residential: 36,
    commercial: 16,
    industrial: 48,
    demand: "120CR",
    area: "68 sq km",
    description: "Tribal district with agricultural focus",
    majorProjects: [
      "Tribal Development Project",
      "Water Supply Enhancement",
      "Property Management System",
      "Agricultural Support",
      "Educational Infrastructure"
    ]
  },
  {
    id: "Wardha",
    name: "Wardha",
    region: "Vidarbha",
    properties: "106K",
    residential: 37,
    commercial: 18,
    industrial: 45,
    demand: "150CR",
    area: "75 sq km",
    description: "Gandhi's Karmabhoomi and cotton center",
    majorProjects: [
      "Heritage Conservation",
      "Agricultural Market System",
      "Water Management",
      "Property Tax System",
      "Educational Development"
    ]
  },
  {
    id: "Gondia",
    name: "Gondia",
    region: "Vidarbha",
    properties: "132K",
    residential: 35,
    commercial: 15,
    industrial: 50,
    demand: "160CR",
    area: "42 sq km",
    description: "Rice bowl of Vidarbha",
    majorProjects: [
      "Rice Industry Support",
      "Water Conservation",
      "Property Management",
      "Agricultural Infrastructure",
      "Transportation Network"
    ]
  },
  {
    id: "Bhandara",
    name: "Bhandara",
    region: "Vidarbha",
    properties: "91K",
    residential: 36,
    commercial: 16,
    industrial: 48,
    demand: "140CR",
    area: "39 sq km",
    description: "Brass city and industrial center",
    majorProjects: [
      "Brass Industry Support",
      "Water Supply Project",
      "Property Tax System",
      "Industrial Estate Development",
      "Smart Lighting"
    ]
  },
  {
    id: "Hingoli",
    name: "Hingoli",
    region: "Marathwada",
    properties: "72K",
    residential: 34,
    commercial: 16,
    industrial: 50,
    demand: "110CR",
    area: "45 sq km",
    description: "Agricultural district in Marathwada",
    majorProjects: [
      "Agricultural Market System",
      "Water Conservation",
      "Property Management",
      "Irrigation Project",
      "Educational Infrastructure"
    ]
  },
  {
    id: "Jalna",
    name: "Jalna",
    region: "Marathwada",
    properties: "285K",
    residential: 39,
    commercial: 18,
    industrial: 43,
    demand: "240CR",
    area: "67 sq km",
    description: "Steel city and agricultural hub",
    majorProjects: [
      "Steel Industry Support",
      "Water Supply Enhancement",
      "Property Tax System",
      "Agricultural Infrastructure",
      "Industrial Development"
    ]
  },
  {
    id: "Beed",
    name: "Beed",
    region: "Marathwada",
    properties: "146K",
    residential: 37,
    commercial: 17,
    industrial: 46,
    demand: "180CR",
    area: "41 sq km",
    description: "Historical city with agricultural focus",
    majorProjects: [
      "Water Conservation Project",
      "Property Management",
      "Agricultural Support",
      "Educational Infrastructure",
      "Smart City Planning"
    ]
  },
  {
    id: "Osmanabad",
    name: "Osmanabad",
    region: "Marathwada",
    properties: "112K",
    residential: 35,
    commercial: 16,
    industrial: 49,
    demand: "150CR",
    area: "98 sq km",
    description: "Historical city with rich heritage",
    majorProjects: [
      "Heritage Conservation",
      "Water Supply Project",
      "Property Tax System",
      "Agricultural Support",
      "Tourism Development"
    ]
  },
  {
    id: "Nanded-Waghala",
    name: "Nanded-Waghala",
    region: "Marathwada",
    properties: "550K",
    residential: 45,
    commercial: 20,
    industrial: 35,
    demand: "380CR",
    area: "63 sq km",
    description: "Sikh pilgrimage center on banks of Godavari",
    majorProjects: [
      "Pilgrimage City Development",
      "Water Supply Project",
      "Property Management System",
      "Smart Transportation",
      "River Front Development"
    ]
  },
  {
    id: "Latur",
    name: "Latur",
    region: "Marathwada",
    properties: "382K",
    residential: 40,
    commercial: 20,
    industrial: 40,
    demand: "310CR",
    area: "96 sq km",
    description: "Major trading center in Marathwada",
    majorProjects: [
      "Water Conservation Project",
      "Property Tax Modernization",
      "Smart Transportation",
      "Industrial Development",
      "Educational Infrastructure"
    ]
  },
  {
    id: "Buldhana",
    name: "Buldhana",
    region: "Vidarbha",
    properties: "67K",
    residential: 33,
    commercial: 15,
    industrial: 52,
    demand: "100CR",
    area: "48 sq km",
    description: "Agricultural district in Vidarbha",
    majorProjects: [
      "Agricultural Market System",
      "Water Conservation",
      "Property Management",
      "Irrigation Project",
      "Educational Infrastructure"
    ]
  },
  {
    id: "Washim",
    name: "Washim",
    region: "Vidarbha",
    properties: "62K",
    residential: 32,
    commercial: 15,
    industrial: 53,
    demand: "95CR",
    area: "51 sq km",
    description: "Cotton and agricultural hub",
    majorProjects: [
      "Cotton Industry Support",
      "Water Supply Project",
      "Property Tax System",
      "Agricultural Infrastructure",
      "Educational Development"
    ]
  },
  {
    id: "Amravati",
    name: "Amravati",
    region: "Vidarbha",
    properties: "647K",
    residential: 48,
    commercial: 22,
    industrial: 30,
    demand: "420CR",
    area: "270 sq km",
    description: "Educational center in Vidarbha region",
    majorProjects: [
      "Educational Infrastructure",
      "Water Distribution",
      "Property Tax Reform",
      "Smart City Initiatives",
      "Agricultural Market System"
    ]
  },
  {
    id: "Yavatmal",
    name: "Yavatmal",
    region: "Vidarbha",
    properties: "132K",
    residential: 38,
    commercial: 17,
    industrial: 45,
    demand: "180CR",
    area: "112 sq km",
    description: "Cotton and agricultural hub",
    majorProjects: [
      "Agricultural Market System",
      "Water Conservation",
      "Property Management",
      "Cotton Industry Support",
      "Educational Infrastructure"
    ]
  },
  {
    id: "Chandrapur",
    name: "Chandrapur",
    region: "Vidarbha",
    properties: "321K",
    residential: 38,
    commercial: 17,
    industrial: 45,
    demand: "280CR",
    area: "142 sq km",
    description: "Coal city and industrial hub",
    majorProjects: [
      "Industrial Zone Management",
      "Water Supply Project",
      "Property Tax System",
      "Environmental Management",
      "Smart Transportation"
    ]
  },
  {
    id: "Gadchiroli",
    name: "Gadchiroli",
    region: "Vidarbha",
    properties: "45K",
    residential: 30,
    commercial: 12,
    industrial: 58,
    demand: "80CR",
    area: "32 sq km",
    description: "Tribal district with rich forest resources",
    majorProjects: [
      "Tribal Development Project",
      "Forest Conservation",
      "Property Management",
      "Water Supply Enhancement",
      "Educational Infrastructure"
    ]
  },
  {
    id: "Raigad",
    name: "Raigad",
    region: "Konkan",
    properties: "220K",
    residential: 42,
    commercial: 23,
    industrial: 35,
    demand: "260CR",
    area: "153 sq km",
    description: "Historical fort district and coastal area",
    majorProjects: [
      "Tourism Development",
      "Coastal Management",
      "Property Tax System",
      "Water Supply Project",
      "Smart City Initiatives"
    ]
  },
  {
    id: "Ratnagiri",
    name: "Ratnagiri",
    region: "Konkan",
    properties: "76K",
    residential: 35,
    commercial: 20,
    industrial: 45,
    demand: "120CR",
    area: "88 sq km",
    description: "Coastal district known for Alphonso mangoes",
    majorProjects: [
      "Coastal Development",
      "Mango Industry Support",
      "Property Management",
      "Water Supply Enhancement",
      "Tourism Infrastructure"
    ]
  },
  {
    id: "Sindhudurg",
    name: "Sindhudurg",
    region: "Konkan",
    properties: "52K",
    residential: 33,
    commercial: 19,
    industrial: 48,
    demand: "90CR",
    area: "92 sq km",
    description: "Coastal paradise with pristine beaches",
    majorProjects: [
      "Tourism Development",
      "Coastal Conservation",
      "Property Tax System",
      "Water Supply Project",
      "Smart City Planning"
    ]
  },
  {
    id: "Satara",
    name: "Satara",
    region: "Pune",
    properties: "150K",
    residential: 36,
    commercial: 19,
    industrial: 45,
    demand: "180CR",
    area: "96 sq km",
    description: "Historical city with rich cultural heritage",
    majorProjects: [
      "Heritage Conservation",
      "Water Management",
      "Property Tax System",
      "Agricultural Support",
      "Tourism Development"
    ]
  },
  {
    id: "Sangli",
    name: "Sangli",
    region: "Pune",
    properties: "480K",
    residential: 44,
    commercial: 21,
    industrial: 35,
    demand: "350CR",
    area: "96 sq km",
    description: "Turmeric city and major trading center",
    majorProjects: [
      "Agricultural Market System",
      "Water Management",
      "Property Digitization",
      "Smart Lighting",
      "Industrial Zone Planning"
    ]
  },
  {
    id: "Kolhapur",
    name: "Kolhapur",
    region: "Kolhapur",
    properties: "681K",
    residential: 46,
    commercial: 24,
    industrial: 30,
    demand: "450CR",
    area: "66 sq km",
    description: "Historical city known for its cultural heritage",
    majorProjects: [
      "Heritage Conservation",
      "Water Supply Enhancement",
      "Property Tax Modernization",
      "Smart City Project",
      "Industrial Estate Development"
    ]
  },
  {
    id: "Solapur",
    name: "Solapur",
    region: "Solapur",
    properties: "951K",
    residential: 50,
    commercial: 20,
    industrial: 30,
    demand: "580CR",
    area: "180 sq km",
    description: "Textile hub of Maharashtra",
    majorProjects: [
      "Textile Industry Support",
      "Water Conservation",
      "Property Digitization",
      "Waste Management",
      "Industrial Corridor Development"
    ]
  },
  {
    id: "Jalgaon",
    name: "Jalgaon",
    region: "Nashik",
    properties: "462K",
    residential: 43,
    commercial: 19,
    industrial: 38,
    demand: "340CR",
    area: "68 sq km",
    description: "Banana city and major agricultural hub",
    majorProjects: [
      "Agricultural Market System",
      "Water Conservation",
      "Property Tax System",
      "Smart Transportation",
      "Cold Storage Development"
    ]
  },
  {
    id: "Dhule",
    name: "Dhule",
    region: "Nashik",
    properties: "376K",
    residential: 41,
    commercial: 19,
    industrial: 40,
    demand: "290CR",
    area: "136 sq km",
    description: "Educational hub in north Maharashtra",
    majorProjects: [
      "Educational Infrastructure",
      "Water Supply Enhancement",
      "Property Management",
      "Smart City Initiatives",
      "Industrial Development"
    ]
  },
  {
    id: "Nandurbar",
    name: "Nandurbar",
    region: "Nashik",
    properties: "68K",
    residential: 36,
    commercial: 16,
    industrial: 48,
    demand: "120CR",
    area: "68 sq km",
    description: "Tribal district with agricultural focus",
    majorProjects: [
      "Tribal Development Project",
      "Water Supply Enhancement",
      "Property Management System",
      "Agricultural Support",
      "Educational Infrastructure"
    ]
  },
  {
    id: "Ahmednagar",
    name: "Ahmednagar",
    region: "Pune",
    properties: "379K",
    residential: 40,
    commercial: 20,
    industrial: 40,
    demand: "300CR",
    area: "104 sq km",
    description: "Historical city with rich heritage",
    majorProjects: [
      "Heritage Conservation",
      "Water Management System",
      "Property Digitization",
      "Smart Lighting",
      "Tourism Development"
    ]
  },
  {
    id: "Beed",
    name: "Beed",
    region: "Marathwada",
    properties: "146K",
    residential: 37,
    commercial: 17,
    industrial: 46,
    demand: "180CR",
    area: "41 sq km",
    description: "Historical city with agricultural focus",
    majorProjects: [
      "Water Conservation Project",
      "Property Management",
      "Agricultural Support",
      "Educational Infrastructure",
      "Smart City Planning"
    ]
  }
];

const projectImages = [
  {
    id: "modern-architecture",
    src: "./images/1.jpg",
    alt: "Modern architectural building design",
    title: "Contemporary Design",
  },
  {
    id: "engineering-construction",
    src: "./images/4.jpg",
    alt: "Architectural engineering and construction",
    title: "Engineering Excellence",
  },
  {
    id: "blueprint-planning",
    src: "./images/2.jpg",
    alt: "Architectural blueprint and planning",
    title: "Strategic Planning",
  },
  {
    id: "traditional-indian",
    src: "./About/4.png",
    alt: "Traditional Indian architecture",
    title: "Cultural Heritage",
  },
];

export function AboutSection() {
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const handleDistrictClick = (district) => {
    // Find matching council data by name
    const matchingCouncil = allCouncilsData.find(
      (council) =>
        council.name.toLowerCase().includes(district.name?.toLowerCase() || district.toLowerCase()) ||
        (district.name?.toLowerCase() || district.toLowerCase()).includes(council.name.toLowerCase())
    );

    if (matchingCouncil) {
      setSelectedDistrict(matchingCouncil);
    } else {
      // If no exact match, create a generic entry
      setSelectedDistrict({ name: district.name || district, majorProjects: [] });
    }
  };

  return (
    <section
      className="w-full py-12 md:py-16 px-12 flex items-stretch"
      style={{
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
      }}
    >
      <div className="max-w-full w-full mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch min-h-[700px]">
          {/* Left Column - Text, Button & Cards (60%) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-shrink-0 lg:w-[60%] flex flex-col space-y-12"
          >
            {/* Cards Section - Below Text and Button */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20, x: -20 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="leading-relaxed text-lg"
                  style={{
                    color: "#4a4a4a",
                    lineHeight: "1.7",
                  }}
                  whileHover={{
                    x: 5,
                    transition: { duration: 0.2 },
                  }}
                >
                  At Sthapatya Consultants, we blend architectural precision
                  with technology-driven solutions to empower cities. Founded in
                  Maharashtra, we specialize in civic infrastructure, property
                  taxation systems, and urban governance solutions. With every
                  project, our mission is to make governance smarter,
                  transparent, and citizen-centric.
                </motion.p>
              </div>
              <br />
              {/* Cards Section - Below Text and Button */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-6 justify-center items-center"
              >
                <div className="w-full max-w-md lg:max-w-lg">
                  <InteractiveKmlMap
                    kmlFile="/mh.kml"
                    onDistrictClick={handleDistrictClick}
                    councils={allCouncilsData}
                  />
                </div>
              </motion.div>

              {/* Partnership Statistics */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
              >
                {[
                  { number: "12+", label: "Municipal Corps" },
                  { number: "18+", label: "City Councils" },
                  { number: "200+", label: "Projects Delivered" },
                  { number: "98%", label: "Client Satisfaction" },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-2 sm:p-3 lg:p-4">
                    <motion.div
                      className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-1 sm:mb-2 lg:mb-3 font-bold"
                      style={{
                        color: "#95231c",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.8 + index * 0.1,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, color: "#ba7b72" }}
                    >
                      {stat.number}
                    </motion.div>
                    <div
                      className="text-sm sm:text-base lg:text-lg text-gray-700 font-normal"
                      style={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Text and Button Section */}
            <div className="space-y-1">
              {/* Company Description */}

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  type: "spring",
                  stiffness: 100,
                }}
                className="flex justify-center items-center mx-auto"
                viewport={{ once: true }}
              >
                <motion.button
                  className="px-8 py-4 rounded-2xl text-white text-lg transition-all duration-300 relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, #57000D 0%, #8b0000 100%)",
                    fontWeight: "600",
                    boxShadow: "0 8px 25px rgba(87, 0, 13, 0.3)",
                    border: "2px solid transparent",
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 12px 35px rgba(87, 0, 13, 0.4)",
                    background:
                      "linear-gradient(135deg, #6b0000 0%, #9b0000 100%)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => {}}
                >
                  {/* Button background animation */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        "linear-gradient(135deg, #fbb9b6 0%, #f8a5a2 100%)",
                      opacity: 0,
                    }}
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Button text */}
                  <span className="relative z-10">Discover Our Approach</span>

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background:
                        "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)",
                      transform: "translateX(-100%)",
                    }}
                    whileHover={{
                      transform: "translateX(100%)",
                      transition: { duration: 0.6 },
                    }}
                  />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Project Images (40%) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex-shrink-0 lg:w-[40%] flex flex-col justify-center"
          >
            <div className="grid grid-cols-2 gap-6 h-full">
              {projectImages.map((image, index) => {
                // Different animations for each image
                const getHoverAnimation = (index:any) => {
                  switch (index) {
                    case 0: // Slide from left with glow
                      return {
                        x: [0, -10, 0],
                        scale: 1.03,
                        rotateY: [-2, 2, 0],
                        boxShadow:
                          "0 20px 40px rgba(251, 185, 182, 0.4), 0 0 30px rgba(251, 185, 182, 0.3)",
                        transition: { duration: 0.4, type: "spring" },
                      };
                    case 1: // Rotate and zoom with pulse
                      return {
                        scale: 1.08,
                        rotate: [0, 3, -3, 0],
                        boxShadow: "0 25px 50px rgba(87, 0, 13, 0.3)",
                        transition: {
                          duration: 0.5,
                          type: "spring",
                          stiffness: 200,
                        },
                      };
                    case 2: // Flip effect with slide
                      return {
                        rotateX: [0, -5, 5, 0],
                        y: [0, -5, 0],
                        scale: 1.04,
                        boxShadow:
                          "0 30px 60px rgba(87, 0, 13, 0.25), 0 10px 20px rgba(251, 185, 182, 0.2)",
                        transition: { duration: 0.6, ease: "easeOut" },
                      };
                    case 3: // Bounce with color shift
                      return {
                        scale: [1, 1.1, 1.06],
                        y: [0, -8, -2],
                        boxShadow:
                          "0 35px 70px rgba(87, 0, 13, 0.4), 0 0 40px rgba(251, 185, 182, 0.5)",
                        transition: {
                          duration: 0.7,
                          type: "spring",
                          bounce: 0.4,
                        },
                      };
                    default:
                      return { scale: 1.05 };
                  }
                };

                const getImageAnimation = (index) => {
                  switch (index) {
                    case 0:
                      return { scale: 1.15, x: 5, filter: "brightness(1.1)" };
                    case 1:
                      return {
                        scale: 1.2,
                        rotate: 2,
                        filter: "contrast(1.1) saturate(1.2)",
                      };
                    case 2:
                      return {
                        scale: 1.12,
                        y: -3,
                        filter: "brightness(1.05) contrast(1.05)",
                      };
                    case 3:
                      return {
                        scale: 1.18,
                        filter: "saturate(1.3) brightness(1.1)",
                      };
                    default:
                      return { scale: 1.1 };
                  }
                };

                const getOverlayStyle = (index) => {
                  switch (index) {
                    case 0:
                      return "linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, transparent 70%)";
                    case 1:
                      return "linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.3) 100%)";
                    case 2:
                      return "linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 100%)";
                    case 3:
                      return "radial-gradient(circle at center, rgba(0, 0, 0, 0.5) 0%, transparent 70%)";
                    default:
                      return "linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 60%)";
                  }
                };

                const getTextAnimation = (index) => {
                  switch (index) {
                    case 0:
                      return {
                        x: [-30, 0],
                        opacity: [0, 1],
                        transition: { duration: 0.3 },
                      };
                    case 1:
                      return {
                        scale: [0.8, 1],
                        rotate: [5, 0],
                        opacity: [0, 1],
                        transition: { duration: 0.3 },
                      };
                    case 2:
                      return {
                        y: [30, 0],
                        opacity: [0, 1],
                        transition: { duration: 0.3 },
                      };
                    case 3:
                      return {
                        scale: [1.2, 1],
                        opacity: [0, 1],
                        transition: { duration: 0.3, type: "spring" },
                      };
                    default:
                      return {
                        y: [20, 0],
                        opacity: [0, 1],
                        transition: { duration: 0.3 },
                      };
                  }
                };

                return (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.4 + index * 0.15,
                      type: "spring",
                      stiffness: 80,
                    }}
                    viewport={{ once: true }}
                    className="relative group cursor-pointer overflow-hidden rounded-2xl"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(251, 185, 182, 0.1) 0%, rgba(87, 0, 13, 0.1) 100%)",
                      boxShadow: "0 8px 25px rgba(87, 0, 13, 0.15)",
                      border: "2px solid rgba(251, 185, 182, 0.2)",
                      minHeight: "160px",
                    }}
                    whileHover={getHoverAnimation(index)}
                    variants={{
                      hover: {},
                    }}
                    initial="initial"
                    animate="initial"
                    whileHover="hover"
                  >
                    <motion.div
                      className="w-full h-full"
                      whileHover={getImageAnimation(index)}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <ImageWithFallback
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                        style={{ minHeight: "160px" }}
                      />
                    </motion.div>

                    {/* Liquid Wave Overlay */}
                    <LiquidWaveGradientStyle index={index}>
                      <motion.div className="text-center">
                        <motion.h3
                          className="text-white font-bold mb-2"
                          style={{
                            fontSize: index === 1 ? "18px" : "16px",
                            textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
                          }}
                        >
                          Strategic Planning
                        </motion.h3>

                        <motion.p
                          className="text-white text-xs opacity-90"
                          style={{
                            textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                            maxWidth: "150px",
                            margin: "0 auto",
                          }}
                        >
                          Strategic architectural planning
                        </motion.p>
                      </motion.div>
                    </LiquidWaveGradientStyle>

                    {/* Animated border on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{
                        border: "2px solid transparent",
                      }}
                      whileHover={{
                        borderColor: "#fbb9b6",
                        boxShadow: "0 0 20px rgba(251, 185, 182, 0.5)",
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

