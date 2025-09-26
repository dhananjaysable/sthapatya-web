import React from "react";
import { motion } from "motion/react";
import { Building, Users, Award, Globe, Lightbulb, Target } from "lucide-react";

const milestones = [
    { year: "2018", title: "Foundation", description: "Sthapatya Consultants established in Mumbai, Maharashtra", icon: <Building className="w-8 h-8" />, position: { x: 10, y: 70 } },
    { year: "2019", title: "Team Expansion", description: "Grew to 15+ architects and engineers", icon: <Users className="w-8 h-8" />, position: { x: 26, y: 62 } },
    { year: "2020", title: "First Awards", description: "Recognized for sustainable design excellence", icon: <Award className="w-8 h-8" />, position: { x: 42, y: 54 } },
    { year: "2021", title: "Innovation Hub", description: "Launched digital design solutions", icon: <Lightbulb className="w-8 h-8" />, position: { x: 58, y: 46 } },
    { year: "2022", title: "Multi-State Presence", description: "Expanded to 5 major Indian states", icon: <Globe className="w-8 h-8" />, position: { x: 74, y: 38 } },
    { year: "2024", title: "Strategic Vision", description: "Targeting nationwide architectural leadership", icon: <Target className="w-8 h-8" />, position: { x: 90, y: 30 } },
];

export function OurJourneySection() {
    return (
        <section className="flex flex-col items-center py-8 sm:py-12 lg:py-16 xl:py-20 bg-white">
            <div className="max-w-7xl w-full px-3 sm:px-4 lg:px-6 xl:px-8">
                {/* Timeline */}
                <div className="relative w-full h-[16rem] sm:h-[18rem] md:h-[20rem] lg:h-[22rem] xl:h-80">
                    <svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                    >
                        {/* Background dashed line */}
                        <path
                            d="M 8,70 L 24,62 L 40,54 L 56,46 L 72,38 L 88,30"
                            stroke="#ba7b72"
                            strokeWidth="1"
                            fill="none"
                            opacity="0.4"
                            strokeDasharray="3,3"
                        />

                        {/* Animated progress line */}
                        <motion.path
                            d="M 8,70 L 24,62 L 40,54 L 56,46 L 72,38 L 88,30"
                            stroke="#95231c"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="4,4"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
                            viewport={{ once: true }}
                        />
                    </svg>

                    {/* Milestone Points */}
                    {milestones.map((m, i) => (
                        <motion.div
                            key={m.year}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2"
                            style={{ left: `${m.position.x}%`, top: `${m.position.y}%` }}
                            initial={{ opacity: 0, scale: 0, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1 + i * 0.5, type: "spring", stiffness: 150 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="relative flex flex-col items-center"
                                whileHover={{ scale: 1.15, zIndex: 10 }}
                                transition={{ duration: 0.2 }}
                            >
                                {/* Dot */}
                                <motion.div
                                    className="absolute top-6 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full border-2 border-white"
                                    style={{ backgroundColor: "#e1d385" }}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: 1.5 + i * 0.5 }}
                                    viewport={{ once: true }}
                                />

                                {/* Icon */}
                                <motion.div
                                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center shadow-lg mb-2 mx-auto"
                                    style={{ backgroundColor: "#95231c" }}
                                    initial={{ rotate: -180, opacity: 0, scale: 0 }}
                                    whileInView={{ rotate: 0, opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 1.2 + i * 0.5, type: "spring", stiffness: 200 }}
                                    viewport={{ once: true }}
                                    whileHover={{ rotate: 360 }}
                                >
                                    {React.cloneElement(m.icon, { className: "w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" })}
                                </motion.div>

                                {/* Info Card */}
                                <motion.div
                                    className="p-2 sm:p-3 rounded-lg shadow-lg text-center w-24 sm:w-28 md:w-32 lg:w-36"
                                    style={{ backgroundColor: "#fefefe" }}
                                    initial={{ opacity: 0, y: 30, scale: 0.7 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 1.5 + i * 0.5, type: "spring", stiffness: 120 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(149, 35, 28, 0.15)" }}
                                >
                                    <motion.div
                                        className="text-sm sm:text-base lg:text-lg mb-1"
                                        style={{ color: "#95231c", fontFamily: "Montserrat, sans-serif" }}
                                    >
                                        {m.year}
                                    </motion.div>
                                    <motion.h3
                                        className="text-xs sm:text-sm mb-1"
                                        style={{ color: "#95231c", fontFamily: "Montserrat, sans-serif" }}
                                    >
                                        {m.title}
                                    </motion.h3>
                                    <motion.p
                                        className="text-xs text-gray-600 leading-tight"
                                        style={{ fontFamily: "Roboto, sans-serif" }}
                                    >
                                        {m.description}
                                    </motion.p>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Achievement Stats */}
                <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 lg:mt-16">
                    {[
                        { number: "150+", label: "Projects Completed" },
                        { number: "8", label: "States Covered" },
                        { number: "25+", label: "Team Members" },
                        { number: "6", label: "Years of Excellence" },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <motion.div
                                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-1 sm:mb-2"
                                style={{ color: "#95231c", fontFamily: "Montserrat, sans-serif" }}
                                initial={{ opacity: 0, scale: 0.3, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 4.7 + i * 0.2, type: "spring", stiffness: 200 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.1, color: "#ba7b72" }}
                            >
                                {stat.number}
                            </motion.div>
                            <motion.div
                                className="text-xs sm:text-sm lg:text-base text-gray-700"
                                style={{ fontFamily: "Roboto, sans-serif" }}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 4.9 + i * 0.2, duration: 0.4 }}
                                viewport={{ once: true }}
                            >
                                {stat.label}
                            </motion.div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}