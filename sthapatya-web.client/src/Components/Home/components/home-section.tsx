import { motion } from "motion/react";
import Counts from "../Counts/Counts"
export function HomeSection() {
    return (
        <>
        <section className="relative w-full h-screen overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover object-center opacity-100 transition-opacity duration-1000">
                    <source src="/LANDINGPAGEVIDEO.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Centered Content */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
                {/* Logo + Title */}
                <div className="flex items-center justify-center gap-4 mt-4">
                    <img
                        src="/logo.png"
                        alt="Sthapatya Consultants Logo"
                        className="h-16 w-auto md:h-20 lg:h-24 object-contain"
                    />
                    <h1
                        className="uppercase text-4xl md:text-6xl lg:text-7xl xl:text-8xl whitespace-nowrap inline-block"
                        style={{
                            fontFamily: "'Anton', sans-serif",
                            fontWeight: 900,
                            letterSpacing: "2px",
                            backgroundImage: "linear-gradient(to right, #FFEC5C, #FF9E3F)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Sthapatya Consultants
                    </h1>

                </div>

                {/* Subtitle */}
                <motion.p
                    className="text-lg md:text-2xl lg:text-3xl text-white mt-5"
                    style={{ fontFamily: "Roboto, sans-serif" }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Committed to Enhancing Civic Services with Technology
                    </motion.p>
                    {/* Counts Component */}
                    <div className="mt-10 w-full flex justify-center text-white">
                        <Counts />
                    </div>
            </div>
        </section>
           
        </>

    );
}
