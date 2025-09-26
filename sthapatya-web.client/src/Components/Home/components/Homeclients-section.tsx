import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const municipalCorporations = [
  {
    name: "Mumbai Municipal Corporation",
    logo: "https://images.unsplash.com/photo-1599582909646-4d14b4b2a7dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdW5pY2lwYWwlMjBsb2dvfGVufDB8fHx8MTc1Nzc1OTg1MXww&ixlib=rb-4.1.0&q=80&w=200",
  },
  {
    name: "Pune Municipal Corporation",
    logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYnVpbGRpbmd8ZW58MHx8fHwxNzU3NzU5ODUxfDA&ixlib=rb-4.1.0&q=80&w=200",
  },
  {
    name: "Nashik Municipal Corporation",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE3NTc3NTk4NTF8MA&ixlib=rb-4.1.0&q=80&w=200",
  },
  {
    name: "Aurangabad Municipal Corporation",
    logo: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZ3xlbnwwfHx8fDE3NTc3NTk4NTF8MA&ixlib=rb-4.1.0&q=80&w=200",
  },
  {
    name: "Solapur Municipal Corporation",
    logo: "https://images.unsplash.com/photo-1569091478261-1a86e4823e62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidWlsZGluZ3xlbnwwfHx8fDE3NTc3NTk4NTF8MA&ixlib=rb-4.1.0&q=80&w=200",
  },
  {
    name: "Nagpur Municipal Corporation",
    logo: "https://images.unsplash.com/photo-1558618047-b2b4acfa5bdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZG1pbmlzdHJhdGlvbiUyMGJ1aWxkaW5nfGVufDB8fHx8MTc1Nzc1OTg1MXww&ixlib=rb-4.1.0&q=80&w=200",
  },
];

const cityCouncils = [
  {
    name: "Kolhapur City Council",
    logo: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwaGFsbHxlbnwwfHx8fDE3NTc3NTk4NTF8MA&ixlib=rb-4.1.0&q=80&w=200",
  },
  {
    name: "Sangli City Council",
    logo: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwb2ZmaWNlfGVufDB8fHx8MTc1Nzc1OTg1MXww&ixlib=rb-4.1.0&q=80&w=200",
  },
  {
    name: "Satara City Council",
    logo: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjBidWlsZGluZ3xlbnwwfHx8fDE3NTc3NTk4NTF8MA&ixlib=rb-4.1.0&q=80&w=200",
  },
  {
    name: "Ahmednagar City Council",
    logo: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXZpYyUyMGNlbnRlcnxlbnwwfHx8fDE3NTc3NTk4NTF8MA&ixlib=rb-4.1.0&q=80&w=200",
  },
  {
    name: "Dhule City Council",
    logo: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYWRtaW5pc3RyYXRpb258ZW58MHx8fHwxNzU3NzU5ODUxfDA&ixlib=rb-4.1.0&q=80&w=200",
  },
  {
    name: "Jalgaon City Council",
    logo: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdW5pY2lwYWwlMjBoYWxsfGVufDB8fHx8MTc1Nzc1OTg1MXww&ixlib=rb-4.1.0&q=80&w=200",
  },
];

function ClientCarousel({ clients, title }: { clients: any[], title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const itemsPerPage = 4; // logos per slide
  const totalPages = Math.ceil(clients.length / itemsPerPage);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 4000);

    return () => clearInterval(interval);
  }, [totalPages, isAutoPlay]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + totalPages) % totalPages,
    );
    setIsAutoPlay(false);
  };

  const currentClients = clients.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage,
  );

  return (
    <div className="relative">
      {/* Section Title */}
      <motion.h3
        className="text-3xl xl:text-4xl mb-8 text-center font-semibold"
        style={{
          color: "#95231c",
          fontFamily: "Montserrat, sans-serif",
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h3>

      {/* Logos + Names in gray cards */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
      >
        <motion.div
          className="flex gap-8 justify-center"
          animate={{ x: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {currentClients.map((client, index) => (
            <motion.div
              key={`${currentIndex}-${index}`}
              className="flex-shrink-0 w-56 p-6 rounded-xl shadow-md flex flex-col items-center transition-all duration-300"
              style={{ backgroundColor: '#f3f3f3' }}
              whileHover={{ 
                scale: 1.05, 
                y: -8, 
                boxShadow: "0 12px 25px rgba(149, 35, 28, 0.2)" 
              }}
            >
              {/* Larger Logo */}
              <motion.div 
                className="w-24 h-24 mb-3 rounded-full overflow-hidden shadow-sm"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Name */}
              <motion.h4 
                className="text-center text-sm font-medium leading-tight"
                style={{ color: '#95231c', fontFamily: 'Montserrat, sans-serif' }}
                whileHover={{ color: '#ba7b72' }}
              >
                {client.name}
              </motion.h4>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl"
        style={{ backgroundColor: "#ba7b72" }}
        whileHover={{ scale: 1.1, backgroundColor: "#95231c" }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </motion.button>

      <motion.button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl"
        style={{ backgroundColor: "#ba7b72" }}
        whileHover={{ scale: 1.1, backgroundColor: "#95231c" }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </motion.button>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsAutoPlay(false);
            }}
            className="w-3 h-3 rounded-full transition-all duration-300"
            style={{
              backgroundColor:
                currentIndex === index ? "#95231c" : "#dddcdb",
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
}

export function OurClientsSection() {
  return (
    <section
      className="min-h-screen flex items-center py-20"
      style={{ backgroundColor: "#d8bea5" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-normal mb-8"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Trusted by leading municipal corporations and city
            councils across Maharashtra and beyond, we have
            established lasting partnerships that drive urban
            development and innovation.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="w-32 h-1 mx-auto"
            style={{ backgroundColor: "#e1d385" }}
          />
        </motion.div>

        {/* Carousels Container */}
        <div className="space-y-16">
          {/* Municipal Corporations Carousel */}
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

          {/* City Councils Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ClientCarousel
              clients={cityCouncils}
              title="City Councils"
            />
          </motion.div>
        </div>

        {/* Partnership Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { number: "12+", label: "Municipal Corps" },
            { number: "18+", label: "City Councils" },
            { number: "200+", label: "Projects Delivered" },
            { number: "98%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <motion.div
                className="text-4xl xl:text-5xl mb-2 font-bold"
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
                className="text-gray-700 font-normal"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}