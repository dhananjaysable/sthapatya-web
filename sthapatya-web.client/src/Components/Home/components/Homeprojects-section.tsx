import { useState } from "react";
import { motion } from "motion/react";
import Kmlfile  from "./kmlfile";

const councils = [
    { id: "maharashtra", name: "Maharashtra", region: "Central", projects: 45, residential: 27, commercial: 13, industrial: 4, coords: [180, 280] },
    { id: "Mumbai", name: "Mumbai", region: "Central", projects: 32, coords: [170, 350] },
    { id: "Panvel", name: "Panvel", region: "Central", projects: 28, coords: [120, 220] },
    { id: "Thane", name: "Thane", region: "Central", projects: 15, coords: [150, 180] },
    { id: "Amaravati", name: "Amaravati", region: "Central", projects: 22, coords: [190, 400] },
    { id: "andhra", name: "Akola", region: "Central", projects: 18, coords: [210, 360] },
];

const projectCards = [
    { id: "property-tax", title: "Property Tax", description: "Comprehensive taxation system", gradient: "from-red-900 to-red-700" },
    { id: "water-tax", title: "Water Tax Management", description: "Water utility billing", gradient: "from-red-700 to-red-500" },
    { id: "trade-licence", title: "Trade Licence Management", description: "Business licensing system", gradient: "from-yellow-600 to-yellow-400" },
    { id: "city-mapping", title: "ELU / PLU City Mapping", description: "Urban planning maps", gradient: "from-amber-600 to-amber-400" },
    { id: "integrated-software", title: "Integrated Softwares and Mobile App", description: "Unified platform", gradient: "from-red-800 to-red-600" },
    { id: "ntis", title: "NTIS (New Tax Information System)", description: "Modern tax processing", gradient: "from-red-600 to-red-400" },
    { id: "pmc-tax", title: "PMC Tax Application (CMS)", description: "Content management", gradient: "from-yellow-500 to-yellow-300" },
    { id: "data-analysis", title: "Data Analysis", description: "Analytics platform", gradient: "from-amber-500 to-amber-300" },
    { id: "asset-management", title: "Asset Management", description: "Asset tracking", gradient: "from-red-700 to-red-500" },
    { id: "garbage-collection", title: "Garbage Collection Management", description: "Waste management", gradient: "from-red-500 to-red-300" },
    { id: "sanitation", title: "Sanitation Management", description: "Hygiene systems", gradient: "from-yellow-400 to-yellow-200" },
    { id: "gis-system", title: "GIS", description: "Mapping solutions", gradient: "from-amber-400 to-amber-200" },
];

export function OurProjectsSection() {
    const [selectedCouncil, setSelectedCouncil] = useState("maharashtra");
    const [cardIndex] = useState(0);

    const visibleCards = projectCards.slice(1 + cardIndex * 4, 1 + (cardIndex + 1) * 4);

    return (
        <section className="py-12 lg:py-16 bg-[#f3f3f3]">
            <div className="max-w-[100rem] mx-auto py-10 px-4 lg:px-0 w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">

                {/* LEFT: State Councils List */}
                <div className="flex flex-col w-full space-y-6">
                    <div className="w-full bg-gray-50 rounded-lg shadow p-4 h-[380px] overflow-y-auto">
                        <h4 className="text-lg md:text-xl font-bold mb-3 text-[#95231c] sticky top-0 bg-gray-50 py-2">State Councils & Projects</h4>
                        <ul className="space-y-3">
                            {councils.map((council) => (
                                <li
                                    key={council.id}
                                    onClick={() => setSelectedCouncil(council.id)}
                                    className={`p-4 rounded-lg cursor-pointer transition transform hover:scale-[1.02] ${selectedCouncil === council.id
                                            ? "bg-[#ba7b72] text-white shadow-lg"
                                            : "bg-white text-[#95231c] shadow"
                                        }`}
                                >
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h5 className="font-semibold">{council.name}</h5>
                                            <p className="text-xs md:text-sm opacity-80">{council.region} Region</p>
                                        </div>
                                        <span className="font-bold">{council.projects} Projects</span>
                                    </div>

                                    {selectedCouncil === council.id && council.residential && (
                                        <div className="grid grid-cols-3 gap-2 mt-3 text-sm">
                                            <div>
                                                <p className="opacity-80">Residential</p>
                                                <p className="font-semibold">{council.residential}</p>
                                            </div>
                                            <div>
                                                <p className="opacity-80">Commercial</p>
                                                <p className="font-semibold">{council.commercial}</p>
                                            </div>
                                            <div>
                                                <p className="opacity-80">Industrial</p>
                                                <p className="font-semibold">{council.industrial}</p>
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
                    {/* Map Container */}
                    <div className="relative flex flex-col md:flex-row items-center justify-center w-full h-auto">
                        <div className="relative w-full md:w-1/2 max-w-[40rem] h-[250px] md:h-[350px] flex justify-center">
                            {/*<img src="/maha.png" alt="Maharashtra Map" className="h-full object-contain" />*/}
                            <Kmlfile kmlFile="/mh.kml" /> 
                        </div>

                        <div className="relative w-full md:w-1/2 max-w-[40rem] h-[300px] md:h-[400px] flex justify-center md:justify-end">
                            <img src="/IND.png" alt="India Map" className="h-full object-contain" />
                        </div>

                        {/* Animated Arrow (SVG overlay) */}
                        <svg
                            className="absolute top-0 left-0 w-full h-full pointer-events-none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 600 400"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <motion.path
                                d="M 60 150 C 300 100, 500 210, 500 210"
                                stroke="#ba7b72"
                                strokeWidth="3"
                                fill="transparent"
                                strokeLinecap="round"
                                strokeDasharray="6 6"
                                initial={{ strokeDashoffset: 0 }}
                                animate={{ strokeDashoffset: -1000 }}
                                transition={{
                                    duration: 25,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    ease: "linear"
                                }}
                            />
                            <motion.circle
                                cx="500"
                                cy="210"
                                r="6"
                                fill="#ba7b72"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
