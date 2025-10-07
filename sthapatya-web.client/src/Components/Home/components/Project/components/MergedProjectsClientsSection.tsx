import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Changed from "motion/react"
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Your data arrays (councils, projectCards, etc.) remain unchanged...
const municipalCorporations = [
  { name: "Thane Municipal Corporation", logo: "./municiple_logo/thane.jpg" },
  { name: "Pimpri Chinchawad Municipal Corporation", logo: "./municiple_logo/pcmc.jpg" },
  { name: "Amravati Municipal Corporation", logo: "./municiple_logo/amt.jpg" },
  { name: "Akola Municipal Corporation", logo: "./municiple_logo/akola.jpg" },
  { name: "Jalgaon Municipal Corporation", logo: "./municiple_logo/jalgao.jpg" },
  { name: "Parbhani Municipal Corporation", logo: "./municiple_logo/parbhani.jpg" },
  { name: "Latur Municipal Corporation", logo: "./municiple_logo/latur.jpg" },
  { name: "Dhule Municipal Corporation", logo: "./municiple_logo/dhule.jpg" },
  { name: "Nanded Municipal Corporation", logo: "./municiple_logo/nanded.jpg" },
];

const cityCouncils = [
  { name: "Chiplun City Council", logo: "./municiple_logo/chiplun.jpg" },
  { name: "Chakan City Council", logo: "./municiple_logo/chakan.png" },
  { name: "Karad City Council", logo: "./municiple_logo/karad.png" },
  { name: "Mahad City Council", logo: "./municiple_logo/mahad.jpg" },
  { name: "Akluj City Council", logo: "./municiple_logo/akluj.jpg" },
  { name: "Baramati City Council", logo: "./municiple_logo/baramati.jpg" },
  { name: "Dahanu City Council", logo: "./municiple_logo/dahanu.png" },
  { name: "Washim City Council", logo: "./municiple_logo/washim.png" },
  { name: "Shegaon City Council", logo: "./municiple_logo/shegao.png" },
];

function ClientCarousel({
  clients,
  title,
}: {
  clients: any[];
  title: string;
}) {
  const [isPaused, setIsPaused] = useState(false);
  const duplicatedClients = [...clients, ...clients];
  const cardWidth = 240; // Simplified for this example, but your responsive logic is also fine
  const cardGap = 32;

  // Calculate the total duration for the animation based on the number of clients
  const duration = clients.length * 3;

  return (
    <div className=" w-full">
      <motion.h3
        className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-4 sm:mb-6 lg:mb-8 text-center font-semibold px-4"
        style={{ color: "#95231c", fontFamily: "Montserrat, sans-serif" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h3>

      <div
        className="relative overflow-hidden py-2 sm:py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/*
          - The `animate` and `transition` props for scrolling have been removed.
          - We now use `className` to apply the CSS animation and pause state.
          - We use a CSS variable `--duration` to dynamically set the animation speed.
        */}
        <div
          className={`flex gap-4 sm:gap-6 lg:gap-8 scrolling-animation ${
            isPaused ? "paused" : ""
          }`}
          style={{
            width: `${duplicatedClients.length * (cardWidth + cardGap)}px`,
            // Pass the dynamic duration to the CSS animation
            animationDuration: `${duration}s`,
          }}
        >
          {duplicatedClients.map((client, index) => (
            <motion.div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 p-4 sm:p-5 lg:p-6 rounded-xl shadow-md flex flex-col items-center transition-all duration-300"
              style={{
                backgroundColor: "#f3f3f3",
                width: `${cardWidth}px`,
              }}
              whileHover={{
                scale: 1.05,
                y: -8,
                boxShadow: "0 12px 25px rgba(149, 35, 28, 0.2)",
              }}
            >
              <motion.div
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-2 sm:mb-3 rounded-full overflow-hidden shadow-sm"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.h4
                className="text-center text-xs sm:text-sm lg:text-base font-medium leading-tight px-1"
                style={{ color: "#95231c", fontFamily: "Montserrat, sans-serif" }}
                whileHover={{ color: "#ba7b72" }}
              >
                {client.name}
              </motion.h4>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function OurClientsSection() {
  return (
    <div className="flex items-center py-2 sm:py-4 lg:py-6">
      <div className="max-w-7xl xl:max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ClientCarousel
              clients={municipalCorporations}
              title="Municipal Corporations"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ClientCarousel clients={cityCouncils} title="City Councils" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function MergedProjectsClientsSection() {
  return (
    <section className="bg-gradient-to-b from-[#f3f3f3] via-[#e8e8e8] to-[#d8bea5] w-full">
      <OurClientsSection />
    </section>
  );
}