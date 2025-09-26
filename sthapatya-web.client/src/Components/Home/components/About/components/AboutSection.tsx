import { motion } from 'motion/react';
import { FileText, Droplets, Calculator, CreditCard } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { LiquidWaveGradientStyle } from './OverlayStyles';
import "../styles/cards.css";

const workShowcases = [
    {
        id: 'property-survey',
        icon: <FileText className="w-6 h-6 md:w-8 md:h-8" />,
        title: "Door-to-door survey for Property Tax",
        description: "Comprehensive property assessment and documentation services",
    },
    {
        id: 'water-tax',
        icon: <Droplets className="w-6 h-6 md:w-8 md:h-8" />,
        title: "Water Tax collection/management",
        description: "Efficient water utility billing and management systems",
    },
    {
        id: 'calculations',
        icon: <Calculator className="w-6 h-6 md:w-8 md:h-8" />,
        title: "All Calculations",
        description: "Automated, technology-driven calculation solutions",
    },
    {
        id: 'bill-payments',
        icon: <CreditCard className="w-6 h-6 md:w-8 md:h-8" />,
        title: "Bill Payments with Technology",
        description: "Modern digital payment processing solutions",
    }
];

const projectImages = [
    {
        id: 'modern-architecture',
        src: '/images/1.jpg',
        alt: 'Modern architectural building design',
        title: 'Contemporary Design'
    },
    {
        id: 'engineering-construction',
        src: '/images/2.jpg',
        alt: 'Architectural engineering and construction',
        title: 'Engineering Excellence'
    },
    {
        id: 'blueprint-planning',
        src: 'https://images.unsplash.com/photo-1758574697284-8e84046a45ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlcHJpbnQlMjBhcmNoaXRlY3R1cmFsJTIwcGxhbm5pbmd8ZW58MXx8fHwxNzU4ODA3MzQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Architectural blueprint and planning',
        title: 'Strategic Planning'
    },
    {
        id: 'traditional-indian',
        src: "/images/4.jpg",
        alt: 'Traditional Indian architecture',
        title: 'Cultural Heritage'
    }
];

export function AboutSection() {
    return (
        <section className="w-full py-12 md:py-16 px-12 flex items-stretch" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
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
                        {/* Text and Button Section */}
                        <div className="space-y-8">
                            {/* Company Description */}
                            <div className="space-y-6">
                                <motion.p
                                    initial={{ opacity: 0, y: 20, x: -20 }}
                                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                                    transition={{ 
                                        duration: 0.7, 
                                        delay: 0.1,
                                        ease: "easeOut"
                                    }}
                                    viewport={{ once: true }}
                                    className="leading-relaxed text-lg"
                                    style={{ 
                                        color: '#4a4a4a',
                                        lineHeight: '1.7'
                                    }}
                                    whileHover={{
                                        x: 5,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    Founded in Maharashtra, Sthapatya Consultants (India) Pvt. Ltd. has emerged as a leading architectural consultancy firm. We specialize in delivering innovative design solutions that blend traditional Indian architectural principles with contemporary functionality.
                                </motion.p>
                            </div>

                            {/* CTA Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: 0.3,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                viewport={{ once: true }}
                            >
                                <motion.button
                                    className="px-8 py-4 rounded-full text-white text-lg transition-all duration-300 relative overflow-hidden"
                                    style={{
                                        background: 'linear-gradient(135deg, #57000D 0%, #8b0000 100%)',
                                        fontWeight: '600',
                                        boxShadow: '0 8px 25px rgba(87, 0, 13, 0.3)',
                                        border: '2px solid transparent'
                                    }}
                                    whileHover={{ 
                                        scale: 1.05,
                                        boxShadow: '0 12px 35px rgba(87, 0, 13, 0.4)',
                                        background: 'linear-gradient(135deg, #6b0000 0%, #9b0000 100%)'
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    onHoverStart={() => {}}
                                >
                                    {/* Button background animation */}
                                    <motion.div
                                        className="absolute inset-0 rounded-full"
                                        style={{
                                            background: 'linear-gradient(135deg, #fbb9b6 0%, #f8a5a2 100%)',
                                            opacity: 0
                                        }}
                                        whileHover={{ opacity: 0.1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    
                                    {/* Button text */}
                                    <span className="relative z-10">Discover Our Approach</span>
                                    
                                    {/* Shine effect */}
                                    <motion.div
                                        className="absolute inset-0 rounded-full"
                                        style={{
                                            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
                                            transform: 'translateX(-100%)'
                                        }}
                                        whileHover={{
                                            transform: 'translateX(100%)',
                                            transition: { duration: 0.6 }
                                        }}
                                    />
                                </motion.button>
                            </motion.div>
                        </div>

                        {/* Cards Section - Below Text and Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="flex-1"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 justify-items-stretch">
                                {workShowcases.map((showcase, index) => (
                                    <motion.div
                                        key={showcase.id}
                                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ 
                                            duration: 0.6, 
                                            delay: 0.6 + (index * 0.1),
                                            type: "spring",
                                            stiffness: 100
                                        }}
                                        viewport={{ once: true }}
                                        className="group cursor-pointer flex justify-center"
                                        whileHover={{ 
                                            scale: 1.02,
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        <div className="card" style={{ width: '380px', height: '240px' }}>
                                            {/* Icon */}
                                            <div className="icon-wrapper">
                                                {showcase.icon}
                                            </div>

                                            {/* Default text */}
                                            <div className="content-default">
                                                <span className="name">{showcase.title}</span>
                                                <span className="about-me">{showcase.description}</span>
                                            </div>

                                            {/* Hover Panel */}
                                            <div className="bottom">
                                                <div className="content-hover">
                                                    <span className="name">{showcase.title}</span>
                                                    <span className="about-me">{showcase.description}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
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
                                const getHoverAnimation = (index) => {
                                    switch(index) {
                                        case 0: // Slide from left with glow
                                            return {
                                                x: [0, -10, 0],
                                                scale: 1.03,
                                                rotateY: [-2, 2, 0],
                                                boxShadow: '0 20px 40px rgba(251, 185, 182, 0.4), 0 0 30px rgba(251, 185, 182, 0.3)',
                                                transition: { duration: 0.4, type: "spring" }
                                            };
                                        case 1: // Rotate and zoom with pulse
                                            return {
                                                scale: 1.08,
                                                rotate: [0, 3, -3, 0],
                                                boxShadow: '0 25px 50px rgba(87, 0, 13, 0.3)',
                                                transition: { duration: 0.5, type: "spring", stiffness: 200 }
                                            };
                                        case 2: // Flip effect with slide
                                            return {
                                                rotateX: [0, -5, 5, 0],
                                                y: [0, -5, 0],
                                                scale: 1.04,
                                                boxShadow: '0 30px 60px rgba(87, 0, 13, 0.25), 0 10px 20px rgba(251, 185, 182, 0.2)',
                                                transition: { duration: 0.6, ease: "easeOut" }
                                            };
                                        case 3: // Bounce with color shift
                                            return {
                                                scale: [1, 1.1, 1.06],
                                                y: [0, -8, -2],
                                                boxShadow: '0 35px 70px rgba(87, 0, 13, 0.4), 0 0 40px rgba(251, 185, 182, 0.5)',
                                                transition: { duration: 0.7, type: "spring", bounce: 0.4 }
                                            };
                                        default:
                                            return { scale: 1.05 };
                                    }
                                };

                                const getImageAnimation = (index) => {
                                    switch(index) {
                                        case 0:
                                            return { scale: 1.15, x: 5, filter: 'brightness(1.1)' };
                                        case 1:
                                            return { scale: 1.2, rotate: 2, filter: 'contrast(1.1) saturate(1.2)' };
                                        case 2:
                                            return { scale: 1.12, y: -3, filter: 'brightness(1.05) contrast(1.05)' };
                                        case 3:
                                            return { scale: 1.18, filter: 'saturate(1.3) brightness(1.1)' };
                                        default:
                                            return { scale: 1.1 };
                                    }
                                };

                                const getOverlayStyle = (index) => {
                                    switch(index) {
                                        case 0:
                                            return 'linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, transparent 70%)';
                                        case 1:
                                            return 'linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.3) 100%)';
                                        case 2:
                                            return 'linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 100%)';
                                        case 3:
                                            return 'radial-gradient(circle at center, rgba(0, 0, 0, 0.5) 0%, transparent 70%)';
                                        default:
                                            return 'linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 60%)';
                                    }
                                };

                                const getTextAnimation = (index) => {
                                    switch(index) {
                                        case 0:
                                            return { x: [-30, 0], opacity: [0, 1], transition: { duration: 0.3 } };
                                        case 1:
                                            return { scale: [0.8, 1], rotate: [5, 0], opacity: [0, 1], transition: { duration: 0.3 } };
                                        case 2:
                                            return { y: [30, 0], opacity: [0, 1], transition: { duration: 0.3 } };
                                        case 3:
                                            return { scale: [1.2, 1], opacity: [0, 1], transition: { duration: 0.3, type: "spring" } };
                                        default:
                                            return { y: [20, 0], opacity: [0, 1], transition: { duration: 0.3 } };
                                    }
                                };

                                return (
                                <motion.div
                                    key={image.id}
                                    initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                                    transition={{ 
                                        duration: 0.7, 
                                        delay: 0.4 + (index * 0.15),
                                        type: "spring",
                                        stiffness: 80
                                    }}
                                    viewport={{ once: true }}
                                    className="relative group cursor-pointer overflow-hidden rounded-2xl"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(251, 185, 182, 0.1) 0%, rgba(87, 0, 13, 0.1) 100%)',
                                        boxShadow: '0 8px 25px rgba(87, 0, 13, 0.15)',
                                        border: '2px solid rgba(251, 185, 182, 0.2)',
                                        minHeight: '160px'
                                    }}
                                    whileHover={getHoverAnimation(index)}
                                    variants={{
                                        hover: {}
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
                                            style={{ minHeight: '160px' }}
                                        />
                                    </motion.div>
                                    
                                    {/* Liquid Wave Overlay */}
                                    <LiquidWaveGradientStyle index={index}>
                                        <motion.div className="text-center">
                                            <motion.h3
                                                className="text-white font-bold mb-2"
                                                style={{ 
                                                    fontSize: index === 1 ? '18px' : '16px',
                                                    textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
                                                }}
                                            >
                                                Strategic Planning
                                            </motion.h3>
                                            
                                            <motion.p
                                                className="text-white text-xs opacity-90"
                                                style={{ 
                                                    textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                                                    maxWidth: '150px',
                                                    margin: '0 auto'
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
                                            border: '2px solid transparent'
                                        }}
                                        whileHover={{
                                            borderColor: '#fbb9b6',
                                            boxShadow: '0 0 20px rgba(251, 185, 182, 0.5)'
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