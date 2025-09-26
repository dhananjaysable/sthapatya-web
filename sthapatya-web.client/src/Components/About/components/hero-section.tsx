import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Building, Code, Network } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative py-8 md:min-h-[100vh] md:py-8 lg:py-12 md:flex md:items-center md:justify-center overflow-hidden"
      style={{ backgroundColor: "#f3f3f3" }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Civil/Architectural Elements */}
        <motion.div
          className="absolute top-10 md:top-20 left-4 md:left-10 opacity-10"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Building
            size={60}
            className="md:w-[120px] md:h-[120px]"
            style={{ color: "#95231c" }}
          />
        </motion.div>

        {/* IT/Digital Elements */}
        <motion.div
          className="absolute bottom-16 md:bottom-32 right-4 md:right-16 opacity-10"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Code
            size={50}
            className="md:w-[100px] md:h-[100px]"
            style={{ color: "#95231c" }}
          />
        </motion.div>

        {/* Network Grid Pattern */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Network
            size={120}
            className="md:w-[200px] md:h-[200px]"
            style={{ color: "#95231c" }}
          />
        </motion.div>

        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-12 h-12 md:w-20 md:h-20 opacity-10"
          style={{ backgroundColor: "#e1d385" }}
          animate={{
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 left-1/4 w-10 h-10 md:w-16 md:h-16 rounded-full opacity-10"
          style={{ backgroundColor: "#ba7b72" }}
          animate={{
            x: [0, 25, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-4 md:px-6">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-3 md:mb-6 lg:mb-8 leading-tight"
          style={{ color: "#95231c" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Building Infrastructures & Technologies for Tomorrow
        </motion.h1>

        <motion.div
          className="max-w-xl md:max-w-5xl mx-auto mb-4 md:mb-8 lg:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: "easeOut",
          }}
        >
          <p
            className="text-base md:text-lg lg:text-xl leading-relaxed px-2"
            style={{ color: "#666666" }}
          >
            We are a dynamic organization at the intersection of
            civil engineering and information technology,
            creating integrated solutions that build stronger
            communities and smarter infrastructure across India.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: "easeOut",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            size="lg"
            className="px-8 md:px-12 py-4 md:py-6 text-base md:text-lg relative overflow-hidden group transition-all duration-500"
            style={{
              backgroundColor: "#e1d385",
              color: "#95231c",
              border: "none",
              boxShadow: "0 10px 25px rgba(225, 211, 133, 0.3)",
            }}
          >
            <span className="relative z-10">
              Explore Our Services
            </span>
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-20"
              style={{ backgroundColor: "#95231c" }}
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute inset-0 rounded-lg"
              style={{
                boxShadow: "0 0 30px rgba(225, 211, 133, 0.6)",
              }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="mt-6 mb-6 md:absolute md:bottom-4 lg:bottom-8 md:left-1/2 md:transform md:-translate-x-1/2 flex justify-center"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="w-5 h-8 md:w-6 md:h-10 border-2 rounded-full flex justify-center"
          style={{ borderColor: "#95231c" }}
        >
          <motion.div
            className="w-1 h-2 md:h-3 rounded-full mt-1 md:mt-2"
            style={{ backgroundColor: "#95231c" }}
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}