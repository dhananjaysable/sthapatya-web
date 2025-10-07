// import { motion } from "motion/react";

// export function FoundersSection() {
//     return (
//         <section className="flex flex-col md:flex-row items-center pb-6 md:pb-5 bg-white">
//             <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
//                 {/* Left - Founder Image */}
//                 <motion.div
//                     initial={{ opacity: 0, x: -50 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.8 }}
//                     viewport={{ once: true }}
//                     className="flex justify-center"
//                 >
//                     <motion.div 
//                         className="rounded-full overflow-hidden shadow-xl w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem]"
//                         whileHover={{ scale: 1.08 }}
//                         transition={{ duration: 0.3, ease: "easeOut" }}
//                     >
//                         <img
//                             src="/profile.jpg"
//                             alt="Amol Doifode"
//                             className="w-full h-full object-cover"
//                         />
//                     </motion.div>
//                 </motion.div>

//                 {/* Right - Content */}
//                 <motion.div
//                     initial={{ opacity: 0, x: 50 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.8, delay: 0.2 }}
//                     viewport={{ once: true }}
//                     className="flex flex-col justify-center text-center lg:text-left"
//                 >
//                     {/* Headline */}
//                     <h2
//                         className="text-2xl sm:text-3xl lg:text-3xl font-bold mb-4"
//                         style={{
//                             color: "#1a1a1a",
//                             fontFamily: "Montserrat, sans-serif",
//                         }}
//                     >
//                         Our focus enables us to provide customized, actionable recommendations that matter.
//                     </h2>

//                     {/* Detailed description */}
//                     <p
//                         className="text-gray-700 mb-6 sm:mb-8 leading-relaxed"
//                         style={{ fontFamily: "Roboto, sans-serif" }}
//                     >
//                         Under the leadership of <strong>Amol Doifode</strong>, our mission is to transform municipal services with sustainable digital platforms. From property tax digitization to GIS-based planning and integrated mobile applications, we ensure transparency, accountability, and citizen-friendly governance.
//                     </p>

//                     {/* Founder Info + Signature */}
//                     <div className="mb-4 sm:mb-6">
//                         <p
//                             className="font-semibold"
//                             style={{ color: "#1a1a1a", fontFamily: "Montserrat, sans-serif" }}
//                         >
//                             Amol Doifode
//                         </p>
//                         <p
//                             className="text-sm uppercase tracking-wide mb-2 sm:mb-4"
//                             style={{ color: "#777", fontFamily: "Roboto, sans-serif" }}
//                         >
//                             Founder & CEO
//                         </p>
//                         <img
//                             src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Signature_Black.png"
//                             alt="Signature"
//                             className="w-24 sm:w-32 h-auto mx-auto lg:mx-0"
//                         />
//                     </div>

//                     {/* Learn More Button */}
//                     <motion.a
//                         href="/about#founder-vision"
//                         className="inline-block px-6 py-3 rounded-md text-white font-semibold"
//                         style={{
//                             backgroundColor: "#95231c",
//                             fontFamily: "Montserrat, sans-serif",
//                         }}
//                         whileHover={{ scale: 1.05, backgroundColor: "#ba7b72" }}
//                         whileTap={{ scale: 0.95 }}
//                     >
//                         Learn More
//                     </motion.a>
//                 </motion.div>
//             </div>
//         </section>
//     );
// }


import { motion } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";

export function FoundersSection() {
    // Animation variants for staggered text fade-in
    const FADE_IN_VARIANTS = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring" } },
    };

    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
            {/* Decorative Background Shape */}
            <motion.div
                className="absolute top-1/2 left-1/4 w-96 h-96 bg-red-100/50 rounded-full blur-3xl"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            />

            <div className="relative max-w-6xl w-full px-4 sm:px-6 lg:px-8 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
                {/* Left - Founder Image */}
                <motion.div
                    className="relative flex justify-center items-center"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="relative rounded-full shadow-2xl w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] group"
                    >
                        {/* Decorative Ring */}
                        <motion.div
                            className="absolute -inset-3 rounded-full border-2 border-red-200/50 transition-transform duration-500 group-hover:rotate-45"
                        />
                        <div className="rounded-full overflow-hidden w-full h-full">
                            <img
                                src="/profile.jpg"
                                alt="Amol Doifode"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right - Content */}
                <motion.div
                    className="flex flex-col text-center lg:text-left"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.1 }}
                >
                    <motion.div variants={FADE_IN_VARIANTS}>
                      <Quote className="w-10 h-10 text-red-200 mb-2 mx-auto lg:mx-0" />
                    </motion.div>

                    <motion.h2
                        variants={FADE_IN_VARIANTS}
                        className="text-3xl sm:text-4xl font-bold mb-5 text-gray-800 font-montserrat"
                    >
                        Our focus enables customized, actionable recommendations that matter.
                    </motion.h2>

                    <motion.p
                        variants={FADE_IN_VARIANTS}
                        className="text-gray-600 mb-8 leading-relaxed font-roboto"
                    >
                        Under the leadership of <strong>Amol Doifode</strong>, our mission is to transform municipal services with sustainable digital platforms. From property tax digitization to GIS-based planning and integrated mobile applications, we ensure transparency, accountability, and citizen-friendly governance.
                    </motion.p>

                    <motion.div variants={FADE_IN_VARIANTS} className="mb-8">
                        <p className="font-semibold text-lg text-gray-800 font-montserrat">
                            Amol Doifode
                        </p>
                        <p className="text-sm uppercase tracking-wider text-gray-500 font-roboto mb-3">
                            Founder & CEO
                        </p>
                        {/* Using a span with a cursive font for a more authentic signature */}
                        <span className="font-dancing-script text-4xl text-gray-700">
                            Amol Doifode
                        </span>
                    </motion.div>

                    <motion.div variants={FADE_IN_VARIANTS} className="flex justify-center lg:justify-start">
                        <motion.a
                            href="/about#founder-vision"
                            className="group inline-flex items-center gap-3 px-8 py-4 rounded-lg text-white font-semibold font-montserrat text-lg transition-all duration-300 bg-gradient-to-r from-[#95231c] to-[#b9473e] shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/50"
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Learn More
                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}