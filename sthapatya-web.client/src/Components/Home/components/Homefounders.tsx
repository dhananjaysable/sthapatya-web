import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function FoundersSection() {
    return (
        <section className="flex flex-col md:flex-row items-center py-12 md:py-20 bg-[#fefefe]">
            <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left - Founder Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <div className="rounded-2xl overflow-hidden shadow-xl w-64 sm:w-80 md:w-full max-w-sm">
                        <ImageWithFallback
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=400"
                            alt="Amol Doifode"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

                {/* Right - Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-center text-center lg:text-left"
                >
                    {/* Headline */}
                    <h2
                        className="text-2xl sm:text-3xl lg:text-3xl font-bold mb-4"
                        style={{
                            color: "#1a1a1a",
                            fontFamily: "Montserrat, sans-serif",
                        }}
                    >
                        Our focus enables us to provide customized, actionable recommendations that matter.
                    </h2>

                    {/* Italic sub-text */}
                    <p
                        className="italic border-l-4 pl-4 mb-4 sm:mb-6"
                        style={{
                            borderColor: "#95231c",
                            color: "#444",
                            fontFamily: "Roboto, sans-serif",
                        }}
                    >
                        We are dedicated to delivering end-to-end smart governance solutions, leveraging technology for efficient property tax management, water tax billing, city planning, and urban innovation.
                    </p>

                    {/* Detailed description */}
                    <p
                        className="text-gray-700 mb-6 sm:mb-8 leading-relaxed"
                        style={{ fontFamily: "Roboto, sans-serif" }}
                    >
                        Under the leadership of <strong>Amol Doifode</strong>, our mission is to transform municipal services with sustainable digital platforms. From property tax digitization to GIS-based planning and integrated mobile applications, we ensure transparency, accountability, and citizen-friendly governance.
                    </p>

                    {/* Founder Info + Signature */}
                    <div className="mb-4 sm:mb-6">
                        <p
                            className="font-semibold"
                            style={{ color: "#1a1a1a", fontFamily: "Montserrat, sans-serif" }}
                        >
                            Amol Doifode
                        </p>
                        <p
                            className="text-sm uppercase tracking-wide mb-2 sm:mb-4"
                            style={{ color: "#777", fontFamily: "Roboto, sans-serif" }}
                        >
                            Founder & CEO
                        </p>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Signature_Black.png"
                            alt="Signature"
                            className="w-24 sm:w-32 h-auto mx-auto lg:mx-0"
                        />
                    </div>

                    {/* Learn More Button */}
                    <motion.a
                        href="/about#founder-vision"
                        className="inline-block px-6 py-3 rounded-md text-white font-semibold"
                        style={{
                            backgroundColor: "#95231c",
                            fontFamily: "Montserrat, sans-serif",
                        }}
                        whileHover={{ scale: 1.05, backgroundColor: "#ba7b72" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Learn More
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
