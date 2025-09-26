import { motion } from 'motion/react';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from './components/hero-section';
import VisionSection from './components/vision-section';
import MissionSection from './components/mission-section';
import FounderVisionSection from './components/founder-vision-section';
import TeamSection from './components/team-section';
import TestimonialsSection from './components/testimonials-section';

import "./styles/About.css";
export default function About() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const el = document.querySelector(location.hash);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);
    return (
        <div className="min-h-screen relative">
            {/* Smooth scroll container */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Hero + Who We Are Section */}
                <HeroSection />

                {/* Vision Section - Expansion Map */}
                <VisionSection />

                {/* Mission Section - Service Integration */}
                <MissionSection />

                {/* Founder's Vision */}
                <FounderVisionSection />

                {/* Founding Team */}
                <TeamSection />

                {/* Testimonials / Partners */}
                <TestimonialsSection />
            </motion.div>
        </div>
    );
}