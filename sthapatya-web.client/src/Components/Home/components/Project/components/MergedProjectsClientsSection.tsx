import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Kmlfile from "../../Kmlfile"

const councils = [
  {
    id: "maharashtra",
    name: "Maharashtra",
    region: "Central",
    projects: 45,
    residential: 27,
    commercial: 13,
    industrial: 4,
    coords: [180, 280],
  },
  {
    id: "Mumbai",
    name: "Mumbai",
    region: "Central",
    projects: 32,
    coords: [170, 350],
  },
  {
    id: "Panvel",
    name: "Panvel",
    region: "Central",
    projects: 28,
    coords: [120, 220],
  },
  {
    id: "Thane",
    name: "Thane",
    region: "Central",
    projects: 15,
    coords: [150, 180],
  },
  {
    id: "Amaravati",
    name: "Amaravati",
    region: "Central",
    projects: 22,
    coords: [190, 400],
  },
  {
    id: "andhra",
    name: "Akola",
    region: "Central",
    projects: 18,
    coords: [210, 360],
  },
];

const projectCards = [
  {
    id: "property-tax",
    title: "Property Tax",
    description: "Comprehensive taxation system",
    gradient: "from-red-900 to-red-700",
  },
  {
    id: "water-tax",
    title: "Water Tax Management",
    description: "Water utility billing",
    gradient: "from-red-700 to-red-500",
  },
  {
    id: "trade-licence",
    title: "Trade Licence Management",
    description: "Business licensing system",
    gradient: "from-yellow-600 to-yellow-400",
  },
  {
    id: "city-mapping",
    title: "ELU / PLU City Mapping",
    description: "Urban planning maps",
    gradient: "from-amber-600 to-amber-400",
  },
  {
    id: "integrated-software",
    title: "Integrated Softwares and Mobile App",
    description: "Unified platform",
    gradient: "from-red-800 to-red-600",
  },
  {
    id: "ntis",
    title: "NTIS (New Tax Information System)",
    description: "Modern tax processing",
    gradient: "from-red-600 to-red-400",
  },
  {
    id: "pmc-tax",
    title: "PMC Tax Application (CMS)",
    description: "Content management",
    gradient: "from-yellow-500 to-yellow-300",
  },
  {
    id: "data-analysis",
    title: "Data Analysis",
    description: "Analytics platform",
    gradient: "from-amber-500 to-amber-300",
  },
  {
    id: "asset-management",
    title: "Asset Management",
    description: "Asset tracking",
    gradient: "from-red-700 to-red-500",
  },
  {
    id: "garbage-collection",
    title: "Garbage Collection Management",
    description: "Waste management",
    gradient: "from-red-500 to-red-300",
  },
  {
    id: "sanitation",
    title: "Sanitation Management",
    description: "Hygiene systems",
    gradient: "from-yellow-400 to-yellow-200",
  },
  {
    id: "gis-system",
    title: "GIS",
    description: "Mapping solutions",
    gradient: "from-amber-400 to-amber-200",
  },
];

const municipalCorporations = [
  {
    name: "Mumbai Municipal Corporation",
    logo:""
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
    logo: "/logo/sangli.png"
  },
  {
    name: "Satara City Council",
    logo: "/logo/satara.png"
  },
  {
    name: "Ahmednagar City Council",
    logo: "/logo/ahmadnagar.png"
  },
  {
    name: "Dhule City Council",
    logo:"/logo/dhule.png"
  },
  {
    name: "Jalgaon City Council",
    logo: "/logo/jalgaon.png"
  },
];

function ClientCarousel({
  clients,
  title,
}: {
  clients: any[];
  title: string;
}) {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate clients array to create seamless loop
  const duplicatedClients = [...clients, ...clients];

  // Responsive card width calculation
  const getCardWidth = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 200; // sm
      if (window.innerWidth < 768) return 220; // md
      return 240; // lg+
    }
    return 240;
  };

  const [cardWidth, setCardWidth] = useState(240);
  const cardGap = 32;

  useEffect(() => {
    const handleResize = () => setCardWidth(getCardWidth());
    handleResize();
    window.addEventListener("resize", handleResize);
    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full">
      {/* Section Title */}
      <motion.h3
        className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-4 sm:mb-6 lg:mb-8 text-center font-semibold px-4"
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

      {/* Continuous Scrolling Cards */}
      <div
        className="relative overflow-hidden py-2 sm:py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex gap-4 sm:gap-6 lg:gap-8"
          animate={{
            x: isPaused
              ? undefined
              : [0, -(clients.length * (cardWidth + cardGap))],
          }}
          transition={{
            x: {
              duration: clients.length * 3,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            },
          }}
          style={{
            width: `${duplicatedClients.length * (cardWidth + cardGap)}px`,
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
              {/* Responsive Logo */}
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

              {/* Responsive Name */}
              <motion.h4
                className="text-center text-xs sm:text-sm lg:text-base font-medium leading-tight px-1"
                style={{
                  color: "#95231c",
                  fontFamily: "Montserrat, sans-serif",
                }}
                whileHover={{ color: "#ba7b72" }}
              >
                {client.name}
              </motion.h4>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Pause indicator */}
      {isPaused && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black bg-opacity-20 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
        >
          Paused
        </motion.div>
      )}
    </div>
  );
}

function OurProjectsSection() {
  const [selectedCouncil, setSelectedCouncil] =
    useState("maharashtra");
  const [cardIndex] = useState(0);

  const visibleCards = projectCards.slice(
    1 + cardIndex * 4,
    1 + (cardIndex + 1) * 4,
  );

  return (
    <div className="py-6 sm:py-8 lg:py-10">
      {/* Introduction Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-6 sm:mb-8 lg:mb-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed font-normal mb-4 sm:mb-6"
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
          className="w-24 sm:w-32 lg:w-40 h-1 mx-auto"
          style={{ backgroundColor: "#ba7b72" }}
        />
      </motion.div>

      {/* Partnership Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {[
          { number: "12+", label: "Municipal Corps" },
          { number: "18+", label: "City Councils" },
          { number: "200+", label: "Projects Delivered" },
          { number: "98%", label: "Client Satisfaction" },
        ].map((stat, index) => (
          <div
            key={index}
            className="text-center p-2 sm:p-3 lg:p-4"
          >
            <motion.div
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-1 sm:mb-2 lg:mb-3 font-bold"
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
              className="text-sm sm:text-base lg:text-lg text-gray-700 font-normal"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      <div className="max-w-7xl xl:max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout */}
        <div className="block lg:hidden space-y-6">
          {/* State Councils List - Mobile */}
          <div className="w-full bg-gray-50 rounded-lg shadow-lg p-4 sm:p-5">
            <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[#95231c] text-center">
              State Councils & Projects
            </h4>
            <div className="space-y-3 max-h-50 overflow-y-auto scrollbar-hide">
              {councils.map((council) => (
                <div
                  key={council.id}
                  onClick={() => setSelectedCouncil(council.id)}
                  className={`p-3 sm:p-4 rounded-lg cursor-pointer transition transform hover:scale-[1.02] ${
                    selectedCouncil === council.id
                      ? "bg-[#ba7b72] text-white shadow-lg"
                      : "bg-white text-[#95231c] shadow"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h5 className="text-sm sm:text-base font-semibold">
                        {council.name}
                      </h5>
                      <p className="text-xs opacity-80">
                        {council.region} Region
                      </p>
                    </div>
                    <span className="text-xs sm:text-sm font-bold">
                      {council.projects} Projects
                    </span>
                  </div>

                  {selectedCouncil === council.id &&
                    council.residential && (
                      <div className="grid grid-cols-3 gap-2 mt-3 text-xs">
                        <div>
                          <p className="opacity-80">
                            Residential
                          </p>
                          <p className="font-semibold">
                            {council.residential}
                          </p>
                        </div>
                        <div>
                          <p className="opacity-80">
                            Commercial
                          </p>
                          <p className="font-semibold">
                            {council.commercial}
                          </p>
                        </div>
                        <div>
                          <p className="opacity-80">
                            Industrial
                          </p>
                          <p className="font-semibold">
                            {council.industrial}
                          </p>
                        </div>
                      </div>
                    )}
                </div>
              ))}
            </div>
          </div>

          {/* Maps - Mobile */}
          <div className="relative w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="relative h-40 sm:h-52 rounded-lg overflow-hidden">
                {/*<ImageWithFallback*/}
                {/*  src="/maha.png"*/}
                {/*  alt="Maharashtra Map"*/}
                {/*  className="w-full h-full object-contain"*/}
                              {/*/>*/}
                <Kmlfile kmlFile="/mh.kml" /> 
              </div>
              <div className="relative h-40 sm:h-52 rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="/IND.png"
                  alt="India Map"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-6 xl:gap-8">
          {/* LEFT: State Councils List */}
          <div className="flex flex-col w-full">
            <div className="w-full bg-gray-50 rounded-lg shadow-lg p-5 xl:p-6 h-[380px] xl:h-[420px] overflow-y-auto scrollbar-hide">
              <h4 className="text-xl xl:text-2xl font-bold mb-4 text-[#95231c] sticky top-0 bg-gray-50 py-2">
                State Councils & Projects
              </h4>
              <ul className="space-y-4">
                {councils.map((council) => (
                  <li
                    key={council.id}
                    onClick={() =>
                      setSelectedCouncil(council.id)
                    }
                    className={`p-4 xl:p-5 rounded-lg cursor-pointer transition transform hover:scale-[1.02] ${
                      selectedCouncil === council.id
                        ? "bg-[#ba7b72] text-white shadow-lg"
                        : "bg-white text-[#95231c] shadow"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h5 className="text-base xl:text-lg font-semibold">
                          {council.name}
                        </h5>
                        <p className="text-sm opacity-80">
                          {council.region} Region
                        </p>
                      </div>
                      <span className="text-sm xl:text-base font-bold">
                        {council.projects} Projects
                      </span>
                    </div>

                    {selectedCouncil === council.id &&
                      council.residential && (
                        <div className="grid grid-cols-3 gap-3 mt-4 text-sm">
                          <div>
                            <p className="opacity-80">
                              Residential
                            </p>
                            <p className="font-semibold">
                              {council.residential}
                            </p>
                          </div>
                          <div>
                            <p className="opacity-80">
                              Commercial
                            </p>
                            <p className="font-semibold">
                              {council.commercial}
                            </p>
                          </div>
                          <div>
                            <p className="opacity-80">
                              Industrial
                            </p>
                            <p className="font-semibold">
                              {council.industrial}
                            </p>
                          </div>
                        </div>
                      )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT: Maps + Animated Arrow */}
          <div className="relative flex flex-col items-center justify-center w-full">
            <div className="relative w-full h-[380px] xl:h-[420px]">
              <div className="absolute inset-0 grid grid-cols-2 gap-3">
                <div className="relative rounded-lg overflow-hidden">
                  {/*<ImageWithFallback*/}
                  {/*  src="/maha.png"*/}
                  {/*  alt="Maharashtra Map"*/}
                  {/*  className="w-full h-full object-contain"*/}
                                  {/*/>*/}
                    <Kmlfile kmlFile="/mh.kml" /> 
                </div>
                <div className="relative rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src="/IND.png"
                    alt="India Map"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Growth Branch Animation (SVG overlay) */}
                          <svg
                              className="absolute top-0 left-0 w-full h-full pointer-events-none"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 510 200"
                              preserveAspectRatio="xMidYMid meet"
                          >
                              {/* Main trunk - starts immediately */}
                              <motion.path
                                  d="M 100 100 L 250 100"
                                  stroke="#95231c"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  fill="none"
                                  initial={{ pathLength: 0 }}
                                  animate={{ pathLength: 1 }}
                                  transition={{
                                      duration: 1.5,
                                      ease: "easeOut",
                                      repeat: Infinity,
                                      repeatDelay: 4.9, // Wait for ALL branches to finish
                                  }}
                              />

                              {/* First primary branch - starts when trunk finishes */}
                              <motion.path
                                  d="M 250 100 L 350 90"
                                  stroke="#ba7b72"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  fill="none"
                                  initial={{ pathLength: 0 }}
                                  animate={{ pathLength: 1 }}
                                  transition={{
                                      duration: 1.2,
                                      delay: 1.5, // Trunk duration
                                      ease: "easeOut",
                                      repeat: Infinity,
                                      repeatDelay: 3.4, // Wait for remaining branches
                                  }}
                              />

                              {/* Second primary branch - starts when first primary branch finishes */}
                              <motion.path
                                  d="M 250 100 L 350 110"
                                  stroke="#ba7b72"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  fill="none"
                                  initial={{ pathLength: 0 }}
                                  animate={{ pathLength: 1 }}
                                  transition={{
                                      duration: 1.2,
                                      delay: 2.7, // Trunk (1.5s) + First primary (1.2s)
                                      ease: "easeOut",
                                      repeat: Infinity,
                                      repeatDelay: 2.2, // Wait for secondary branches
                                  }}
                              />

                              {/* First secondary branch - starts when second primary branch finishes */}
                              <motion.path
                                  d="M 350 90 L 400 95"
                                  stroke="#ba7b72"
                                  strokeWidth="1"
                                  strokeLinecap="round"
                                  fill="none"
                                  initial={{ pathLength: 0 }}
                                  animate={{ pathLength: 1 }}
                                  transition={{
                                      duration: 0.8,
                                      delay: 3.9, // Trunk (1.5s) + First primary (1.2s) + Second primary (1.2s)
                                      ease: "easeOut",
                                      repeat: Infinity,
                                      repeatDelay: 1.0, // Wait for last branch
                                  }}
                              />

                              {/* Second secondary branch - starts when first secondary branch finishes */}
                              <motion.path
                                  d="M 350 110 L 400 105"
                                  stroke="#ba7b72"
                                  strokeWidth="1"
                                  strokeLinecap="round"
                                  fill="none"
                                  initial={{ pathLength: 0 }}
                                  animate={{ pathLength: 1 }}
                                  transition={{
                                      duration: 0.8,
                                      delay: 4.7, // Trunk (1.5s) + First primary (1.2s) + Second primary (1.2s) + First secondary (0.8s)
                                      ease: "easeOut",
                                      repeat: Infinity,
                                      repeatDelay: 0, // No delay - cycle restarts immediately
                                  }}
                              />
                          </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OurClientsSection() {
  return (
    <div className="flex items-center py-2 sm:py-4 lg:py-6">
      <div className="max-w-7xl xl:max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Carousels Container */}
        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
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
      </div>
    </div>
  );
}

export function MergedProjectsClientsSection() {
  return (
    <section className="bg-gradient-to-b from-[#f3f3f3] via-[#e8e8e8] to-[#d8bea5] w-full">
      {/* Projects Section */}
      <OurProjectsSection />

      {/* Clients Section */}
      <OurClientsSection />
    </section>
  );
}