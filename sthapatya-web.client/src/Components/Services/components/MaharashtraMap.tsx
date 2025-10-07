import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MapPin,
  Users,
  Building,
  TrendingUp,
  Award,
  Zap,
  Target,
  Globe,
  ArrowRight,
  CheckCircle,
  Activity,
  Star,
} from "lucide-react";

interface District {
  id: string;
  name: string;
  coordinates: { x: number; y: number };
  projects: number;
  population: string;
  area: string;
  specialization: string;
  status: "completed" | "ongoing" | "planned";
  description: string;
  achievements: string[];
}

interface IndiaState {
  id: string;
  name: string;
  coordinates: { x: number; y: number };
  status: "active" | "planned" | "target";
  projects: number;
}

export function MaharashtraMap() {
  const [hoveredDistrict, setHoveredDistrict] = useState<District | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<District | null>(
    null
  );
  const [showIndiaExpansion, setShowIndiaExpansion] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);

  const maharashtraDistricts: District[] = [
    {
      id: "mumbai",
      name: "Mumbai",
      coordinates: { x: 25, y: 70 },
      projects: 45,
      population: "12.4M",
      area: "603 km²",
      specialization: "Financial Hub & Smart City Initiative",
      status: "completed",
      description:
        "India's financial capital with advanced municipal digital infrastructure and smart city solutions.",
      achievements: [
        "100% Digital Services",
        "Smart Traffic Management",
        "E-Governance Portal",
        "IoT Infrastructure",
      ],
    },
    {
      id: "pune",
      name: "Pune",
      coordinates: { x: 35, y: 65 },
      projects: 38,
      population: "3.1M",
      area: "331 km²",
      specialization: "IT Hub & Innovation Center",
      status: "completed",
      description:
        "Major IT and automotive hub with comprehensive GIS mapping and digital transformation.",
      achievements: [
        "IT Park Management",
        "Digital Property Records",
        "Smart Parking",
        "Online Permit System",
      ],
    },
    {
      id: "nagpur",
      name: "Nagpur",
      coordinates: { x: 65, y: 45 },
      projects: 28,
      population: "2.4M",
      area: "218 km²",
      specialization: "Geographic Center & Logistics Hub",
      status: "ongoing",
      description:
        "Strategic logistics center with advanced transportation management and smart infrastructure.",
      achievements: [
        "Smart Traffic Signals",
        "Digital Waste Management",
        "GIS-based Planning",
        "E-Tendering",
      ],
    },
    {
      id: "nashik",
      name: "Nashik",
      coordinates: { x: 40, y: 35 },
      projects: 22,
      population: "1.5M",
      area: "259 km²",
      specialization: "Wine Capital & Religious Tourism",
      status: "ongoing",
      description:
        "Wine capital with tourism-focused digital services and cultural heritage management.",
      achievements: [
        "Tourism Portal",
        "Digital Pilgrimage Services",
        "Wine Industry GIS",
        "Smart Water Management",
      ],
    },
    {
      id: "aurangabad",
      name: "Aurangabad",
      coordinates: { x: 50, y: 45 },
      projects: 18,
      population: "1.2M",
      area: "138 km²",
      specialization: "Heritage City & Manufacturing",
      status: "ongoing",
      description:
        "UNESCO World Heritage site with digital heritage management and industrial automation.",
      achievements: [
        "Heritage Site Management",
        "Industrial GIS",
        "Smart Manufacturing",
        "Tourism Analytics",
      ],
    },
    {
      id: "solapur",
      name: "Solapur",
      coordinates: { x: 55, y: 75 },
      projects: 15,
      population: "0.95M",
      area: "181 km²",
      specialization: "Textile Hub & Agriculture",
      status: "planned",
      description:
        "Major textile center with agricultural technology integration and supply chain digitization.",
      achievements: [
        "Textile Industry Mapping",
        "Agricultural GIS",
        "Supply Chain Tracking",
        "Digital Marketplace",
      ],
    },
    {
      id: "kolhapur",
      name: "Kolhapur",
      coordinates: { x: 30, y: 85 },
      projects: 12,
      population: "0.55M",
      area: "466 km²",
      specialization: "Sugar Industry & Cultural Heritage",
      status: "planned",
      description:
        "Cultural hub with sugar industry automation and heritage tourism digital solutions.",
      achievements: [
        "Cultural Mapping",
        "Industry Automation",
        "Tourism Development",
        "Smart Agriculture",
      ],
    },
    {
      id: "amravati",
      name: "Amravati",
      coordinates: { x: 70, y: 35 },
      projects: 10,
      population: "0.65M",
      area: "134 km²",
      specialization: "Cotton Trading & Orange Cultivation",
      status: "planned",
      description:
        "Agricultural center with cotton trading systems and orange cultivation management.",
      achievements: [
        "Agricultural GIS",
        "Trading Platform",
        "Crop Monitoring",
        "Market Analytics",
      ],
    },
  ];

  const indiaStates: IndiaState[] = [
    {
      id: "karnataka",
      name: "Karnataka",
      coordinates: { x: 30, y: 80 },
      status: "active",
      projects: 25,
    },
    {
      id: "gujarat",
      name: "Gujarat",
      coordinates: { x: 15, y: 40 },
      status: "active",
      projects: 18,
    },
    {
      id: "rajasthan",
      name: "Rajasthan",
      coordinates: { x: 25, y: 25 },
      status: "planned",
      projects: 12,
    },
    {
      id: "madhya-pradesh",
      name: "Madhya Pradesh",
      coordinates: { x: 50, y: 35 },
      status: "planned",
      projects: 15,
    },
    {
      id: "telangana",
      name: "Telangana",
      coordinates: { x: 55, y: 65 },
      status: "active",
      projects: 22,
    },
    {
      id: "tamil-nadu",
      name: "Tamil Nadu",
      coordinates: { x: 45, y: 90 },
      status: "target",
      projects: 8,
    },
    {
      id: "kerala",
      name: "Kerala",
      coordinates: { x: 35, y: 95 },
      status: "target",
      projects: 6,
    },
    {
      id: "odisha",
      name: "Odisha",
      coordinates: { x: 75, y: 55 },
      status: "planned",
      projects: 10,
    },
    {
      id: "west-bengal",
      name: "West Bengal",
      coordinates: { x: 80, y: 45 },
      status: "target",
      projects: 14,
    },
    {
      id: "uttar-pradesh",
      name: "Uttar Pradesh",
      coordinates: { x: 60, y: 20 },
      status: "planned",
      projects: 20,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "#d8bea5";
      case "ongoing":
        return "#e1d385";
      case "planned":
        return "#ba7b72";
      case "active":
        return "#d8bea5";
      case "target":
        return "#ba7b72";
      default:
        return "#95231c";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return CheckCircle;
      case "ongoing":
        return Activity;
      case "planned":
        return Target;
      case "active":
        return Star;
      case "target":
        return ArrowRight;
      default:
        return MapPin;
    }
  };

  return (
    <div className="bg-card rounded-2xl p-8 shadow-xl overflow-hidden">
      {/* Header with Toggle */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-lg"
          >
            <Globe className="w-6 h-6 text-accent-foreground" />
          </motion.div>
          <div>
            <h3 className="text-xl font-medium text-foreground">
              {showIndiaExpansion
                ? "India Expansion Strategy"
                : "Maharashtra Operations Hub"}
            </h3>
            <p className="text-sm text-muted-foreground">
              {showIndiaExpansion
                ? "Scaling GIS solutions across India"
                : "District-wise project implementation"}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowIndiaExpansion(!showIndiaExpansion)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
              showIndiaExpansion
                ? "bg-accent text-accent-foreground"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>
              {showIndiaExpansion ? "View Maharashtra" : "View India"}
            </span>
          </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Map Area */}
        <div className="lg:col-span-2">
          <div className="relative bg-gradient-to-br from-secondary to-muted rounded-xl p-6 h-96 overflow-hidden border-2 border-border">
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-20">
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={`v-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="absolute w-px bg-accent/30"
                  style={{ left: `${i * 8.33}%`, height: "100%" }}
                />
              ))}
              {Array.from({ length: 10 }).map((_, i) => (
                <motion.div
                  key={`h-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="absolute h-px bg-accent/30"
                  style={{ top: `${i * 10}%`, width: "100%" }}
                />
              ))}
            </div>

            {/* Scanning Effect */}
            {animationPhase === 1 && (
              <motion.div
                animate={{
                  x: ["0%", "100%", "0%"],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-y-0 w-1 bg-gradient-to-b from-transparent via-accent to-transparent"
              />
            )}

            <AnimatePresence mode="wait">
              {!showIndiaExpansion ? (
                // Maharashtra Districts
                <motion.div
                  key="maharashtra"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  {/* Maharashtra Outline */}
                  <motion.svg
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 100 100"
                  >
                    <motion.path
                      d="M15,30 Q20,25 30,28 L45,25 Q55,30 65,28 L75,35 Q80,45 75,55 L70,70 Q65,80 55,85 L45,88 Q35,85 25,82 L15,75 Q10,65 12,55 L15,45 Z"
                      fill="none"
                      stroke="#e1d385"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      className="animate-pulse"
                    />
                  </motion.svg>

                  {/* District Points */}
                  {maharashtraDistricts.map((district, index) => {
                    const StatusIcon = getStatusIcon(district.status);

                    return (
                      <motion.div
                        key={district.id}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.2,
                          type: "spring",
                          stiffness: 200,
                        }}
                        whileHover={{ scale: 1.4 }}
                        onHoverStart={() => setHoveredDistrict(district)}
                        onHoverEnd={() => setHoveredDistrict(null)}
                        onClick={() => setSelectedDistrict(district)}
                        className="absolute cursor-pointer group"
                        style={{
                          left: `${district.coordinates.x}%`,
                          top: `${district.coordinates.y}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        {/* Pulse Animation */}
                        <motion.div
                          animate={{
                            scale: [1, 1.8, 1],
                            opacity: [0.7, 0.2, 0.7],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute inset-0 rounded-full w-10 h-10"
                          style={{
                            backgroundColor: getStatusColor(district.status),
                          }}
                        />

                        {/* Main Icon */}
                        <div
                          className="relative w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-10 border-2 border-white"
                          style={{
                            backgroundColor: getStatusColor(district.status),
                          }}
                        >
                          <StatusIcon className="w-4 h-4 text-white" />
                        </div>

                        {/* District Label */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-card border border-border rounded-lg shadow-lg whitespace-nowrap z-20"
                        >
                          <p className="text-xs font-medium text-foreground">
                            {district.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {district.projects} Projects
                          </p>
                        </motion.div>

                        {/* Project Count Badge */}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.2 + 0.5 }}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium z-20"
                        >
                          {district.projects}
                        </motion.div>
                      </motion.div>
                    );
                  })}

                  {/* Connection Lines between major cities */}
                  {animationPhase === 2 && (
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      {[
                        ["mumbai", "pune"],
                        ["pune", "nashik"],
                        ["pune", "aurangabad"],
                        ["aurangabad", "nagpur"],
                      ].map(([from, to], index) => {
                        const fromDistrict = maharashtraDistricts.find(
                          (d) => d.id === from
                        );
                        const toDistrict = maharashtraDistricts.find(
                          (d) => d.id === to
                        );

                        if (!fromDistrict || !toDistrict) return null;

                        return (
                          <motion.line
                            key={`${from}-${to}`}
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.6 }}
                            transition={{ duration: 1, delay: index * 0.3 }}
                            x1={`${fromDistrict.coordinates.x}%`}
                            y1={`${fromDistrict.coordinates.y}%`}
                            x2={`${toDistrict.coordinates.x}%`}
                            y2={`${toDistrict.coordinates.y}%`}
                            stroke="#e1d385"
                            strokeWidth="2"
                            strokeDasharray="3,3"
                          />
                        );
                      })}
                    </svg>
                  )}
                </motion.div>
              ) : (
                // India Expansion Map
                <motion.div
                  key="india"
                  initial={{ opacity: 0, scale: 1.2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  {/* India Outline */}
                  <motion.svg
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, delay: 0.5 }}
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 100 100"
                  >
                    <motion.path
                      d="M20,10 Q30,5 40,8 L50,5 Q60,8 70,10 L80,15 Q90,25 85,35 L88,50 Q85,65 80,75 L75,85 Q65,95 55,92 L45,95 Q35,92 25,88 L15,80 Q5,70 8,60 L5,45 Q8,30 15,20 Z"
                      fill="rgba(149, 35, 28, 0.1)"
                      stroke="#95231c"
                      strokeWidth="2"
                      strokeDasharray="8,4"
                    />
                  </motion.svg>

                  {/* Maharashtra Highlight */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute w-8 h-8 border-4 border-accent rounded-lg"
                    style={{
                      left: "35%",
                      top: "60%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="w-full h-full bg-accent rounded flex items-center justify-center">
                      <Building className="w-3 h-3 text-accent-foreground" />
                    </div>
                  </motion.div>

                  {/* Other States */}
                  {indiaStates.map((state, index) => {
                    const StatusIcon = getStatusIcon(state.status);

                    return (
                      <motion.div
                        key={state.id}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: 1.5 + index * 0.2,
                          type: "spring",
                        }}
                        whileHover={{ scale: 1.3 }}
                        className="absolute cursor-pointer group"
                        style={{
                          left: `${state.coordinates.x}%`,
                          top: `${state.coordinates.y}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        {/* State Point */}
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center shadow-lg border border-white"
                          style={{
                            backgroundColor: getStatusColor(state.status),
                          }}
                        >
                          <StatusIcon className="w-3 h-3 text-white" />
                        </div>

                        {/* State Info */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-card border border-border rounded shadow-lg whitespace-nowrap z-20"
                        >
                          <p className="text-xs font-medium text-foreground">
                            {state.name}
                          </p>
                          <p className="text-xs text-muted-foreground capitalize">
                            {state.status}
                          </p>
                        </motion.div>
                      </motion.div>
                    );
                  })}

                  {/* Expansion Waves */}
                  {animationPhase === 3 && (
                    <motion.div
                      initial={{ scale: 0, opacity: 1 }}
                      animate={{ scale: 3, opacity: 0 }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute w-8 h-8 border-2 border-accent rounded-full"
                      style={{
                        left: "35%",
                        top: "60%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Information Panel */}
        <div className="lg:col-span-1">
          <AnimatePresence mode="wait">
            {hoveredDistrict && !showIndiaExpansion && (
              <motion.div
                key={hoveredDistrict.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-secondary rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium text-foreground">
                    {hoveredDistrict.name}
                  </h4>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium text-white"
                    style={{
                      backgroundColor: getStatusColor(hoveredDistrict.status),
                    }}
                  >
                    {hoveredDistrict.status}
                  </span>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Population:</span>
                    <span className="text-foreground font-medium">
                      {hoveredDistrict.population}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Area:</span>
                    <span className="text-foreground font-medium">
                      {hoveredDistrict.area}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Projects:</span>
                    <span className="text-foreground font-medium">
                      {hoveredDistrict.projects}
                    </span>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-xs text-muted-foreground mb-2">
                    Specialization:
                  </p>
                  <p className="text-sm text-foreground">
                    {hoveredDistrict.specialization}
                  </p>
                </div>
              </motion.div>
            )}

            {showIndiaExpansion && (
              <motion.div
                key="expansion-info"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-secondary rounded-xl p-6"
              >
                <h4 className="font-medium text-foreground mb-4">
                  India Expansion Strategy
                </h4>

                <div className="space-y-4">
                  <div className="p-3 bg-card rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-success rounded-full"></div>
                      <span className="text-sm font-medium text-foreground">
                        Active States (4)
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Karnataka, Gujarat, Telangana, Maharashtra
                    </p>
                  </div>

                  <div className="p-3 bg-card rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-warning rounded-full"></div>
                      <span className="text-sm font-medium text-foreground">
                        Planned States (5)
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Rajasthan, MP, Odisha, UP, Others
                    </p>
                  </div>

                  <div className="p-3 bg-card rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-info rounded-full"></div>
                      <span className="text-sm font-medium text-foreground">
                        Target States (4)
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Tamil Nadu, Kerala, West Bengal, Others
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Total Projects:
                    </span>
                    <span className="text-foreground font-medium">248+</span>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span className="text-muted-foreground">
                      Projected Growth:
                    </span>
                    <span className="text-success font-medium">+340%</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Detailed District Information Modal */}
      <AnimatePresence>
        {selectedDistrict && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedDistrict(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-medium text-foreground">
                  {selectedDistrict.name}
                </h3>
                <button
                  onClick={() => setSelectedDistrict(null)}
                  className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <Users className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="text-lg font-medium text-foreground">
                    {selectedDistrict.population}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Population
                  </div>
                </div>
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <Building className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="text-lg font-medium text-foreground">
                    {selectedDistrict.projects}
                  </div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <Target className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="text-lg font-medium text-foreground">
                    {selectedDistrict.area}
                  </div>
                  <div className="text-xs text-muted-foreground">Area</div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-medium text-foreground mb-3">
                  Specialization
                </h4>
                <p className="text-muted-foreground">
                  {selectedDistrict.specialization}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-medium text-foreground mb-3">
                  Description
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedDistrict.description}
                </p>
              </div>

              <div>
                <h4 className="font-medium text-foreground mb-3">
                  Key Achievements
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedDistrict.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-2 p-3 bg-secondary rounded-lg"
                    >
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      <span className="text-sm text-foreground">
                        {achievement}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
