// import { motion } from "motion/react";
// import Counts from "../Counts/Counts"
// export function HomeSection() {
//     return (
//         <>
//         <section className="relative w-full h-screen overflow-hidden">
//             {/* Background Video */}
//             <div className="absolute inset-0 z-0">
//                 <video autoPlay
//                     muted
//                     loop
//                     playsInline
//                     preload="auto"
//                     className="w-full h-full object-cover object-center opacity-100 transition-opacity duration-1000">
//                     <source src="/LANDINGPAGEVIDEO.mp4" type="video/mp4" />
//                 </video>
//                 <div className="absolute inset-0 bg-black/40"></div>
//             </div>

//             {/* Centered Content */}
//             <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
//                 {/* Logo + Title */}
//                 <div className="flex items-center justify-center gap-4 mt-4">
//                     <img
//                         src="/logo.png"
//                         alt="Sthapatya Consultants Logo"
//                         className="h-16 w-auto md:h-20 lg:h-24 object-contain"
//                     />
//                     <h1
//                         className="uppercase text-4xl md:text-6xl lg:text-7xl xl:text-8xl whitespace-nowrap inline-block"
//                         style={{
//                             fontFamily: "'Anton', sans-serif",
//                             fontWeight: 900,
//                             letterSpacing: "2px",
//                             backgroundImage: "linear-gradient(to right, #FFEC5C, #FF9E3F)",
//                             WebkitBackgroundClip: "text",
//                             WebkitTextFillColor: "transparent",
//                         }}
//                     >
//                         Sthapatya Consultants
//                     </h1>

//                 </div>

//                 {/* Subtitle */}
//                 <motion.p
//                     className="text-lg md:text-2xl lg:text-3xl text-white mt-5"
//                     style={{ fontFamily: "Roboto, sans-serif" }}
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8, delay: 0.6 }}
//                 >
//                     Committed to Enhancing Civic Services with Technology
//                     </motion.p>
//                     {/* Counts Component */}
//                     <div className="mt-10 w-full flex justify-center text-white">
//                         <Counts />
//                     </div>
//             </div>
//         </section>
           
//         </>

//     );
// }



import { motion } from "motion/react";
import Counts from "../Counts/Counts";

export function HomeSection() {
    return (
        <>
            <section className="relative w-full h-screen overflow-hidden">
                {/* Background Video - Optimized */}
                <div className="absolute inset-0 z-0">
                    <video 
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover object-center opacity-100 transition-opacity duration-1000"
                        poster="/video-poster.jpg"
                    >
                        <source src="/LANDINGPAGEVIDEO.mp4" type="video/mp4" />
                        {/* Fallback for browsers that don't support video */}
                        <img src="/video-poster.jpg" alt="Background" className="w-full h-full object-cover" />
                    </video>
                    <div className="absolute h-screen inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
                </div>

                {/* Centered Content - Fully Responsive */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-3 sm:px-4 md:px-6 lg:px-8">
                    
                    {/* Logo + Title - Responsive Layout */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-3 sm:mb-4 md:mb-6">
                        {/* Logo - Responsive Sizing */}
                        <motion.img
                            src="/logo.png"
                            alt="Sthapatya Consultants Logo"
                            className="h-12 w-auto xs:h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 object-contain"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                        />
                        
                        {/* Title - Responsive Typography */}
                        <motion.h1
                            className="uppercase text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight"
                            style={{
                                fontFamily: "'Anton', sans-serif",
                                fontWeight: 900,
                                letterSpacing: "0.02em",
                                backgroundImage: "linear-gradient(to right, #FFEC5C, #FF9E3F)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                textShadow: "0 2px 10px rgba(255, 236, 92, 0.3)",
                            }}
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="block sm:inline">Sthapatya</span>
                            <span className="hidden sm:inline"> </span>
                            <span className="block sm:inline">Consultants</span>
                        </motion.h1>
                    </div>

                    {/* Subtitle - Responsive Typography */}
                    <motion.p
                        className="text-sm xs:text-base sm:text-lg pb-14 md:text-xl lg:text-2xl xl:text-3xl text-white px-2 sm:px-4 md:px-6 lg:px-8 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl leading-relaxed sm:leading-relaxed md:leading-relaxed"
                        style={{ 
                            fontFamily: "Roboto, sans-serif",
                            textShadow: "0 2px 8px rgba(0, 0, 0, 0.8)"
                        }}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Committed to Enhancing Civic Services with Technology
                    </motion.p>

                    {/* Counts Component - Responsive Container */}
                    {/* <motion.div 
                        className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 w-full max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl px-2 sm:px-4 md:px-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                    >
                        <Counts />
                    </motion.div> */}
                </div>

                {/* Scroll Indicator - Optional but Professional */}
                <motion.div 
                    className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                >
                    <motion.div
                        className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
                        animate={{ 
                            y: [0, 10, 0],
                        }}
                        transition={{ 
                            duration: 1.5, 
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <motion.div 
                            className="w-1 h-2 sm:w-1.5 sm:h-3 bg-white rounded-full"
                            animate={{ 
                                opacity: [1, 0.3, 1],
                            }}
                            transition={{ 
                                duration: 1.5, 
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>
                </motion.div>
            </section>
        </>
    );
}
