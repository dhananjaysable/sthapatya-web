// //InteractiveKmlMap.tsx
// import { useEffect, useState } from "react";
// import Kmlfile from "./kmlfile";


// const councils = [
//   {
//     id: "maharashtra",
//     name: "Maharashtra",
//     region: "Central",
//     properties: 45,
//     residential: 27,
//     commercial: 13,
//     industrial: 4,
//     coords: [180, 280],
//     demand: "112M",
//     area: "307,713 sq km",
//     description: "Western state of India known for its industrial and commercial prominence",
//     majorProjects: [
//       "Digital Maharashtra Initiative",
//       "Property Tax Modernization",
//       "Smart City Development",
//       "Water Resource Management",
//       "Industrial Policy Implementation"
//     ]
//   },
//   {
//     id: "Mumbai",
//     name: "Mumbai",
//     region: "Konkan",
//     properties: 32,
//     residential: 18,
//     commercial: 10,
//     industrial: 4,
//     coords: [170, 350],
//     demand: "12.4M",
//     area: "603 sq km",
//     description: "Financial capital of India and Maharashtra's largest city",
//     majorProjects: [
//       "Property Tax Digitization",
//       "Smart Traffic Management",
//       "Waste Management System",
//       "Water Supply Optimization",
//       "Building Permission Portal"
//     ]
//   },
//   {
//     id: "Panvel",
//     name: "Panvel",
//     region: "Konkan",
//     properties: "3.6 Lakhs",
//     residential: 16,
//     commercial: 8,
//     industrial: 4,
//     coords: [120, 220],
//     demand: "424CR",
//     area: "111 sq km",
//     description: "Emerging satellite city near Mumbai with rapid development",
//     majorProjects: [
//       "New Panvel Development",
//       "Transportation Hub",
//       "Industrial Zone Planning",
//       "Residential Complex Management"
//     ]
//   },
//   {
//     id: "Thane",
//     name: "Thane",
//     region: "Konkan",
//     properties: "6.29 Lakhs",
//     residential: 9,
//     commercial: 4,
//     industrial: 2,
//     coords: [150, 180],
//     demand: "728CR",
//     area: "147 sq km",
//     description: "City of Lakes, adjacent to Mumbai",
//     majorProjects: [
//       "Digital Property Records",
//       "Water Management System",
//       "Garbage Collection Management",
//       "Building Approval System"
//     ]
//   },
//   {
//     id: "Amaravati",
//     name: "Amaravati",
//     region: "Vidarbha",
//     properties: "3.5 Lakhs",
//     residential: 12,
//     commercial: 7,
//     industrial: 3,
//     coords: [190, 400],
//     demand: "291CR",
//     area: "124 sq km",
//     description: "Ancient city known for its temples and cultural heritage",
//     majorProjects: [
//       "Heritage Conservation",
//       "Tourism Management",
//       "Agricultural Market System",
//       "Water Distribution Network"
//     ]
//   },
//   {
//     id: "andhra",
//     name: "Akola",
//     region: "Vidarbha",
//     properties: "1.76 Lakhs",
//     residential: 10,
//     commercial: 5,
//     industrial: 3,
//     coords: [210, 360],
//     demand: "283CR",
//     area: "106.47 sq km",
//     description: "Cotton city known for its textile industry",
//     majorProjects: [
//       "Cotton Market Digitization",
//       "Textile Industry Portal",
//       "Agricultural Data System",
//       "Urban Planning Initiative"
//     ]
//   }
// ];

// const projectCards = [
//   {
//     id: "property-tax",
//     title: "Property Tax",
//     description: "Comprehensive taxation system",
//     gradient: "from-gray-900 to-gray-700",
//   },
//   {
//     id: "water-tax",
//     title: "Water Tax Management",
//     description: "Water utility billing",
//     gradient: "from-gray-700 to-gray-500",
//   },
//   {
//     id: "trade-licence",
//     title: "Trade Licence Management",
//     description: "Business licensing system",
//     gradient: "from-yellow-600 to-yellow-400",
//   },
//   {
//     id: "city-mapping",
//     title: "ELU / PLU City Mapping",
//     description: "Urban planning maps",
//     gradient: "from-amber-600 to-amber-400",
//   },
//   {
//     id: "integrated-software",
//     title: "Integrated Softwares and Mobile App",
//     description: "Unified platform",
//     gradient: "from-gray-800 to-gray-600",
//   },
//   {
//     id: "ntis",
//     title: "NTIS (New Tax Information System)",
//     description: "Modern tax processing",
//     gradient: "from-gray-600 to-gray-400",
//   },
//   {
//     id: "pmc-tax",
//     title: "PMC Tax Application (CMS)",
//     description: "Content management",
//     gradient: "from-yellow-500 to-yellow-300",
//   },
//   {
//     id: "data-analysis",
//     title: "Data Analysis",
//     description: "Analytics platform",
//     gradient: "from-amber-500 to-amber-300",
//   },
//   {
//     id: "asset-management",
//     title: "Asset Management",
//     description: "Asset tracking",
//     gradient: "from-gray-700 to-gray-500",
//   },
//   {
//     id: "garbage-collection",
//     title: "Garbage Collection Management",
//     description: "Waste management",
//     gradient: "from-gray-500 to-gray-300",
//   },
//   {
//     id: "sanitation",
//     title: "Sanitation Management",
//     description: "Hygiene systems",
//     gradient: "from-yellow-400 to-yellow-200",
//   },
//   {
//     id: "gis-system",
//     title: "GIS",
//     description: "Mapping solutions",
//     gradient: "from-amber-400 to-amber-200",
//   },
// ];


// const municipalCorporations = [
//   {
//     name: "Thane Municipal Corporation",
//     logo: "./municiple_logo/thane.jpg",
//   },
//   {
//     name: "Pimpri Chinchawad Municipal Corporation",
//     logo: "./municiple_logo/pcmc.jpg",
//   },
//   {
//     name: "Amravati Municipal Corporation",
//     logo: "./municiple_logo/amt.jpg",
//   },
//   {
//     name: "Akola Municipal Corporation",
//     logo: "./municiple_logo/akola.jpg",
//   },
//   {
//     name: "Jalgaon Municipal Corporation",
//     logo: "./municiple_logo/jalgao.jpg",
//   },
//   {
//     name: "Parbhani Municipal Corporation",
//     logo: "./municiple_logo/parbhani.jpg",
//   },
//   {
//     name: "Latur Municipal Corporation",
//     logo: "./municiple_logo/latur.jpg",
//   },
//   {
//     name: "Dhule Municipal Corporation",
//     logo: "./municiple_logo/dhule.jpg",
//   },
//   {
//     name: "Nanded Municipal Corporation",
//     logo: "./municiple_logo/nanded.jpg",
//   },
// ];

// const cityCouncils = [
//   {
//     name: "Chiplun City Council",
//     logo: "./municiple_logo/chiplun.jpg",
//   },
//   {
//     name: "Chakan City Council",
//     logo: "./municiple_logo/chakan.png",
//   },
//   {
//     name: "Karad City Council",
//     logo: "./municiple_logo/karad.png",
//   },
//   {
//     name: "Mahad City Council",
//     logo: "./municiple_logo/mahad.jpg",
//   },
//   {
//     name: "Akluj City Council",
//     logo: "./municiple_logo/akluj.jpg",
//   },
//   {
//     name: "Baramati City Council",
//     logo: "./municiple_logo/baramati.jpg",
//   },
//   {
//     name: "Dahanu City Council",
//     logo: "./municiple_logo/dahanu.png",
//   },
//   {
//     name: "Washim City Council",
//     logo: "./municiple_logo/washim.png",
//   },
//   {
//     name: "Shegaon City Council",
//     logo: "./municiple_logo/shegao.png",
//   },
// ];

// // Enhanced KML component with MultiGeometry support
// export function InteractiveKmlMap({ kmlFile, onDistrictClick }) {
//   const [paths, setPaths] = useState([]);
//   const [viewBox, setViewBox] = useState("0 0 100 100");
//   const [hovegrayDistrict, setHovegrayDistrict] = useState(null);

//   useEffect(() => {
//     fetch(kmlFile)
//       .then((res) => res.text())
//       .then((text) => {
//         const parser = new DOMParser();
//         const xml = parser.parseFromString(text, "application/xml");

//         const placemarks = Array.from(xml.getElementsByTagName("Placemark"));
//         const newPaths = [];
//         let minX = Infinity,
//           minY = Infinity,
//           maxX = -Infinity,
//           maxY = -Infinity;

//         placemarks.forEach((placemark) => {
//           const name =
//             placemark.getElementsByTagName("name")[0]?.textContent || "Unknown";

//           // Check for MultiGeometry first
//           const multiGeometry =
//             placemark.getElementsByTagName("MultiGeometry")[0];
//           let coordElements = [];

//           if (multiGeometry) {
//             // Get all Polygon coordinates within MultiGeometry
//             coordElements = Array.from(
//               multiGeometry.getElementsByTagName("coordinates")
//             );
//           } else {
//             // Fall back to single Polygon
//             const coordTag = placemark.getElementsByTagName("coordinates")[0];
//             if (coordTag) coordElements = [coordTag];
//           }

//           coordElements.forEach((coordTag) => {
//             const coordText = coordTag.textContent?.trim() || "";
//             if (!coordText) return;

//             let points = coordText
//               .split(/\s+/)
//               .map((c) => {
//                 const [lng, lat, alt] = c.split(",").map(Number);
//                 if (!isNaN(lng) && !isNaN(lat)) {
//                   if (lng < minX) minX = lng;
//                   if (lat < minY) minY = lat;
//                   if (lng > maxX) maxX = lng;
//                   if (lat > maxY) maxY = lat;
//                   return `${lng},${-lat}`;
//                 }
//                 return "";
//               })
//               .filter(Boolean)
//               .join(" ");

//             // Ensure polygon is closed (first point = last point)
//             if (points) {
//               const pointArray = points.split(" ");
//               if (
//                 pointArray.length > 1 &&
//                 pointArray[0] !== pointArray[pointArray.length - 1]
//               ) {
//                 points += " " + pointArray[0];
//               }

//               newPaths.push({
//                 points,
//                 name,
//                 isVisible: true,
//                 isEnabled: true,
//               });
//             }
//           });
//         });

//         if (newPaths.length > 0) {
//           setPaths(newPaths);
//           // Add some padding to the viewBox
//           const paddingX = (maxX - minX) * 0.02;
//           const paddingY = (maxY - minY) * 0.02;
//           setViewBox(
//             `${minX - paddingX} ${-maxY - paddingY} ${
//               maxX - minX + 2 * paddingX
//             } ${maxY - minY + 2 * paddingY}`
//           );
//         }
//       })
//       .catch((err) => console.error("Error loading KML:", err));
//   }, [kmlFile]);



//   return (
//     <div className="relative w-full h-full">
//       <svg viewBox={viewBox} className="w-full h-full drop-shadow-lg">
//         {paths.map((p, i) => {
//           if (!p.isVisible) return null;

//           return (
//             <polygon
//               key={i}
//               points={p.points}
//               fill={hovegrayDistrict === p.name ? "#fbbf24" : "#f3f3f3"}
//               stroke="#95231c"
//               strokeWidth="0.02"
//               onClick={() => handleDistrictClick(p)}
//               onMouseEnter={() => setHovegrayDistrict(p.name)}
//               onMouseLeave={() => setHovegrayDistrict(null)}
//               className="cursor-pointer transition-all duration-200 hover:fill-yellow-200"
//             />
//           );
//         })}
//       </svg>

//       {hovegrayDistrict && (
//         <div
//           className="absolute bg-black bg-opacity-80 text-white text-sm px-3 py-2 rounded-lg pointer-events-none z-40"
//           style={{
//             top: "10px",
//             right: "10px",
//           }}
//         >
//           <div className="font-semibold">{hovegrayDistrict}</div>
//           <div className="text-xs opacity-80">Click to view projects</div>
//         </div>
//       )}
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface District {
  points: string;
  name: string;
  isVisible: boolean;
  isEnabled: boolean;
}

interface CouncilData {
  id: string;
  name: string;
  region: string;
  properties: string | number;
  residential: number;
  commercial: number;
  industrial: number;
  demand: string;
  area: string;
  description: string;
  majorProjects: string[];
}

interface InteractiveKmlMapProps {
  kmlFile: string;
  onDistrictClick?: (district: any) => void;
  councils: CouncilData[];
}

// Complete data for all Maharashtra districts
const allCouncilsData: CouncilData[] = [
  // Major Cities
  {
    id: "Mumbai",
    name: "Mumbai",
    region: "Konkan",
    properties: "4.2 Million",
    residential: 65,
    commercial: 25,
    industrial: 10,
    demand: "2,450CR",
    area: "603 sq km",
    description: "Financial capital of India and Maharashtra's largest city",
    majorProjects: [
      "Property Tax Digitization",
      "Smart Traffic Management",
      "Waste Management System",
      "Water Supply Optimization",
      "Building Permission Portal",
      "Coastal Road Development"
    ]
  },
  {
    id: "Pune",
    name: "Pune",
    region: "Pune",
    properties: "2.8 Million",
    residential: 60,
    commercial: 30,
    industrial: 10,
    demand: "1,850CR",
    area: "516 sq km",
    description: "Cultural capital and major IT hub of Maharashtra",
    majorProjects: [
      "Smart City Mission",
      "Metro Rail Project",
      "River Restoration",
      "Digital Property Records",
      "Traffic Management System"
    ]
  },
  {
    id: "Nagpur",
    name: "Nagpur",
    region: "Vidarbha",
    properties: "1.5 Million",
    residential: 55,
    commercial: 25,
    industrial: 20,
    demand: "980CR",
    area: "227 sq km",
    description: "Orange city and winter capital of Maharashtra",
    majorProjects: [
      "Smart City Development",
      "Water Distribution Network",
      "Property Tax Modernization",
      "Solid Waste Management",
      "IT Park Development"
    ]
  },
  {
    id: "Nashik",
    name: "Nashik",
    region: "Nashik",
    properties: "1.2 Million",
    residential: 58,
    commercial: 22,
    industrial: 20,
    demand: "750CR",
    area: "259 sq km",
    description: "Wine capital and holy city of Maharashtra",
    majorProjects: [
      "Water Supply Enhancement",
      "Property Survey Project",
      "Smart Parking System",
      "Industrial Zone Planning",
      "River Front Development"
    ]
  },
  {
    id: "Aurangabad",
    name: "Aurangabad",
    region: "Marathwada",
    properties: "950K",
    residential: 52,
    commercial: 23,
    industrial: 25,
    demand: "620CR",
    area: "139 sq km",
    description: "Tourism hub known for Ajanta and Ellora caves",
    majorProjects: [
      "Heritage Conservation",
      "Tourism Infrastructure",
      "Water Management System",
      "Property Tax System",
      "Smart Lighting Project"
    ]
  },
  {
    id: "Solapur",
    name: "Solapur",
    region: "Solapur",
    properties: "850K",
    residential: 50,
    commercial: 20,
    industrial: 30,
    demand: "580CR",
    area: "180 sq km",
    description: "Textile hub of Maharashtra",
    majorProjects: [
      "Textile Industry Support",
      "Water Conservation",
      "Property Digitization",
      "Waste Management",
      "Industrial Corridor Development"
    ]
  },
  {
    id: "Amravati",
    name: "Amravati",
    region: "Vidarbha",
    properties: "650K",
    residential: 48,
    commercial: 22,
    industrial: 30,
    demand: "420CR",
    area: "270 sq km",
    description: "Educational center in Vidarbha region",
    majorProjects: [
      "Educational Infrastructure",
      "Water Distribution",
      "Property Tax Reform",
      "Smart City Initiatives",
      "Agricultural Market System"
    ]
  },
  {
    id: "Nanded",
    name: "Nanded",
    region: "Marathwada",
    properties: "550K",
    residential: 45,
    commercial: 20,
    industrial: 35,
    demand: "380CR",
    area: "63 sq km",
    description: "Sikh pilgrimage center on banks of Godavari",
    majorProjects: [
      "Pilgrimage City Development",
      "Water Supply Project",
      "Property Management System",
      "Smart Transportation",
      "River Front Development"
    ]
  },
  {
    id: "Kolhapur",
    name: "Kolhapur",
    region: "Kolhapur",
    properties: "680K",
    residential: 46,
    commercial: 24,
    industrial: 30,
    demand: "450CR",
    area: "66 sq km",
    description: "Historical city known for its cultural heritage",
    majorProjects: [
      "Heritage Conservation",
      "Water Supply Enhancement",
      "Property Tax Modernization",
      "Smart City Project",
      "Industrial Estate Development"
    ]
  },
  {
    id: "Sangli",
    name: "Sangli",
    region: "Pune",
    properties: "480K",
    residential: 44,
    commercial: 21,
    industrial: 35,
    demand: "350CR",
    area: "96 sq km",
    description: "Turmeric city and major trading center",
    majorProjects: [
      "Agricultural Market System",
      "Water Management",
      "Property Digitization",
      "Smart Lighting",
      "Industrial Zone Planning"
    ]
  },
  {
    id: "Malegaon",
    name: "Malegaon",
    region: "Nashik",
    properties: "420K",
    residential: 42,
    commercial: 18,
    industrial: 40,
    demand: "320CR",
    area: "35 sq km",
    description: "Textile and powerloom industry center",
    majorProjects: [
      "Textile Industry Support",
      "Water Supply Project",
      "Property Survey",
      "Waste Management",
      "Skill Development Center"
    ]
  },
  {
    id: "Jalgaon",
    name: "Jalgaon",
    region: "Nashik",
    properties: "460K",
    residential: 43,
    commercial: 19,
    industrial: 38,
    demand: "340CR",
    area: "68 sq km",
    description: "Banana city and major agricultural hub",
    majorProjects: [
      "Agricultural Market System",
      "Water Conservation",
      "Property Tax System",
      "Smart Transportation",
      "Cold Storage Development"
    ]
  },
  {
    id: "Dhule",
    name: "Dhule",
    region: "Nashik",
    properties: "380K",
    residential: 41,
    commercial: 19,
    industrial: 40,
    demand: "290CR",
    area:  "136 sq km",
    description: "Educational hub in north Maharashtra",
    majorProjects: [
      "Educational Infrastructure",
      "Water Supply Enhancement",
      "Property Management",
      "Smart City Initiatives",
      "Industrial Development"
    ]
  },
  {
    id: "Ahmednagar",
    name: "Ahmednagar",
    region: "Pune",
    properties: "380K",
    residential: 40,
    commercial: 20,
    industrial: 40,
    demand: "300CR",
    area: "104 sq km",
    description: "Historical city with rich heritage",
    majorProjects: [
      "Heritage Conservation",
      "Water Management System",
      "Property Digitization",
      "Smart Lighting",
      "Tourism Development"
    ]
  },
  {
    id: "Chandrapur",
    name: "Chandrapur",
    region: "Vidarbha",
    properties: "320K",
    residential: 38,
    commercial: 17,
    industrial: 45,
    demand: "280CR",
    area: "142 sq km",
    description: "Coal city and industrial hub",
    majorProjects: [
      "Industrial Zone Management",
      "Water Supply Project",
      "Property Tax System",
      "Environmental Management",
      "Smart Transportation"
    ]
  },
  {
    id: "Parbhani",
    name: "Parbhani",
    region: "Marathwada",
    properties: "310K",
    residential: 39,
    commercial: 18,
    industrial: 43,
    demand: "270CR",
    area: "52 sq km",
    description: "Educational center in Marathwada",
    majorProjects: [
      "Educational Infrastructure",
      "Water Distribution",
      "Property Management",
      "Agricultural Support",
      "Smart City Planning"
    ]
  },
  {
    id: "Latur",
    name: "Latur",
    region: "Marathwada",
    properties: "380K",
    residential: 40,
    commercial: 20,
    industrial: 40,
    demand: "310CR",
    area: "96 sq km",
    description: "Major trading center in Marathwada",
    majorProjects: [
      "Water Conservation Project",
      "Property Tax Modernization",
      "Smart Transportation",
      "Industrial Development",
      "Educational Infrastructure"
    ]
  },
  {
    id: "Bhiwandi",
    name: "Bhiwandi",
    region: "Konkan",
    properties: "720K",
    residential: 45,
    commercial: 25,
    industrial: 30,
    demand: "480CR",
    area: "57 sq km",
    description: "Textile and logistics hub",
    majorProjects: [
      "Textile Industry Support",
      "Logistics Infrastructure",
      "Property Management",
      "Water Supply Enhancement",
      "Smart Transportation"
    ]
  },
  {
    id: "Navi Mumbai",
    name: "Navi Mumbai",
    region: "Konkan",
    properties: "1.8 Million",
    residential: 62,
    commercial: 28,
    industrial: 10,
    demand: "1,250CR",
    area: "108 sq km",
    description: "Planned satellite city of Mumbai",
    majorProjects: [
      "Smart City Development",
      "Property Tax System",
      "Water Supply Network",
      "Waste Management",
      "Transportation Hub"
    ]
  },
  {
    id: "Kalyan-Dombivli",
    name: "Kalyan-Dombivli",
    region: "Konkan",
    properties: "1.5 Million",
    residential: 58,
    commercial: 27,
    industrial: 15,
    demand: "980CR",
    area: "137 sq km",
    description: "Twin cities in Mumbai metropolitan region",
    majorProjects: [
      "Property Digitization",
      "Water Management",
      "Smart Transportation",
      "Waste Management System",
      "Urban Renewal Project"
    ]
  },
  {
    id: "Thane",
    name: "Thane",
    region: "Konkan",
    properties: "1.9 Million",
    residential: 56,
    commercial: 29,
    industrial: 15,
    demand: "1,150CR",
    area: "147 sq km",
    description: "City of Lakes, adjacent to Mumbai",
    majorProjects: [
      "Digital Property Records",
      "Water Management System",
      "Garbage Collection Management",
      "Building Approval System",
      "Smart City Mission"
    ]
  },
  {
    id: "Pimpri-Chinchwad",
    name: "Pimpri-Chinchwad",
    region: "Pune",
    properties: "2.5 Million",
    residential: 54,
    commercial: 26,
    industrial: 20,
    demand: "1,420CR",
    area: "181 sq km",
    description: "Industrial twin city of Pune",
    majorProjects: [
      "Industrial Zone Management",
      "Property Tax System",
      "Water Supply Enhancement",
      "Smart Transportation",
      "Waste Management"
    ]
  },
  {
    id: "Vasai-Virar",
    name: "Vasai-Virar",
    region: "Konkan",
    properties: "1.2 Million",
    residential: 60,
    commercial: 25,
    industrial: 15,
    demand: "750CR",
    area: "311 sq km",
    description: "Rapidly growing city in Mumbai region",
    majorProjects: [
      "Property Survey Project",
      "Water Supply Network",
      "Smart City Development",
      "Transportation System",
      "Coastal Management"
    ]
  },
  {
    id: "Miraj-Kupwad",
    name: "Miraj-Kupwad",
    region: "Kolhapur",
    properties: "520K",
    residential: 42,
    commercial: 23,
    industrial: 35,
    demand: "380CR",
    area: "76 sq km",
    description: "Twin cities known for medical and textile industries",
    majorProjects: [
      "Medical Infrastructure",
      "Textile Industry Support",
      "Property Management",
      "Water Supply Project",
      "Smart Lighting"
    ]
  },
  {
    id: "Panvel",
    name: "Panvel",
    region: "Konkan",
    properties: "1.1 Million",
    residential: 55,
    commercial: 30,
    industrial: 15,
    demand: "680CR",
    area: "111 sq km",
    description: "Emerging satellite city near Mumbai with rapid development",
    majorProjects: [
      "New Panvel Development",
      "Transportation Hub",
      "Industrial Zone Planning",
      "Residential Complex Management",
      "Smart City Project"
    ]
  },
  {
    id: "Ichalkaranji",
    name: "Ichalkaranji",
    region: "Kolhapur",
    properties: "325K",
    residential: 40,
    commercial: 20,
    industrial: 40,
    demand: "280CR",
    area: "72 sq km",
    description: "Manchester of Maharashtra - textile hub",
    majorProjects: [
      "Textile Industry Development",
      "Water Supply Enhancement",
      "Property Tax System",
      "Skill Development Center",
      "Industrial Estate Planning"
    ]
  },
  {
    id: "Yavatmal",
    name: "Yavatmal",
    region: "Vidarbha",
    properties: "132K",
    residential: 38,
    commercial: 17,
    industrial: 45,
    demand: "180CR",
    area: "112 sq km",
    description: "Cotton and agricultural hub",
    majorProjects: [
      "Agricultural Market System",
      "Water Conservation",
      "Property Management",
      "Cotton Industry Support",
      "Educational Infrastructure"
    ]
  },
  {
    id: "Akola",
    name: "Akola",
    region: "Vidarbha",
    properties: "428K",
    residential: 41,
    commercial: 19,
    industrial: 40,
    demand: "320CR",
    area: "106 sq km",
    description: "Cotton city known for its textile industry",
    majorProjects: [
      "Cotton Market Digitization",
      "Textile Industry Portal",
      "Agricultural Data System",
      "Urban Planning Initiative",
      "Water Distribution Network"
    ]
  },
  {
    id: "Nandurbar",
    name: "Nandurbar",
    region: "Nashik",
    properties: "68K",
    residential: 36,
    commercial: 16,
    industrial: 48,
    demand: "120CR",
    area: "68 sq km",
    description: "Tribal district with agricultural focus",
    majorProjects: [
      "Tribal Development Project",
      "Water Supply Enhancement",
      "Property Management System",
      "Agricultural Support",
      "Educational Infrastructure"
    ]
  },
  {
    id: "Wardha",
    name: "Wardha",
    region: "Vidarbha",
    properties: "106K",
    residential: 37,
    commercial: 18,
    industrial: 45,
    demand: "150CR",
    area: "75 sq km",
    description: "Gandhi's Karmabhoomi and cotton center",
    majorProjects: [
      "Heritage Conservation",
      "Agricultural Market System",
      "Water Management",
      "Property Tax System",
      "Educational Development"
    ]
  },
  {
    id: "Gondia",
    name: "Gondia",
    region: "Vidarbha",
    properties: "132K",
    residential: 35,
    commercial: 15,
    industrial: 50,
    demand: "160CR",
    area: "42 sq km",
    description: "Rice bowl of Vidarbha",
    majorProjects: [
      "Rice Industry Support",
      "Water Conservation",
      "Property Management",
      "Agricultural Infrastructure",
      "Transportation Network"
    ]
  },
  {
    id: "Bhandara",
    name: "Bhandara",
    region: "Vidarbha",
    properties: "91K",
    residential: 36,
    commercial: 16,
    industrial: 48,
    demand: "140CR",
    area: "39 sq km",
    description: "Brass city and industrial center",
    majorProjects: [
      "Brass Industry Support",
      "Water Supply Project",
      "Property Tax System",
      "Industrial Estate Development",
      "Smart Lighting"
    ]
  },
  {
    id: "Hingoli",
    name: "Hingoli",
    region: "Marathwada",
    properties: "72K",
    residential: 34,
    commercial: 16,
    industrial: 50,
    demand: "110CR",
    area: "45 sq km",
    description: "Agricultural district in Marathwada",
    majorProjects: [
      "Agricultural Market System",
      "Water Conservation",
      "Property Management",
      "Irrigation Project",
      "Educational Infrastructure"
    ]
  },
  {
    id: "Jalna",
    name: "Jalna",
    region: "Marathwada",
    properties: "285K",
    residential: 39,
    commercial: 18,
    industrial: 43,
    demand: "240CR",
    area: "67 sq km",
    description: "Steel city and agricultural hub",
    majorProjects: [
      "Steel Industry Support",
      "Water Supply Enhancement",
      "Property Tax System",
      "Agricultural Infrastructure",
      "Industrial Development"
    ]
  },
  {
    id: "Beed",
    name: "Beed",
    region: "Marathwada",
    properties: "146K",
    residential: 37,
    commercial: 17,
    industrial: 46,
    demand: "180CR",
    area: "41 sq km",
    description: "Historical city with agricultural focus",
    majorProjects: [
      "Water Conservation Project",
      "Property Management",
      "Agricultural Support",
      "Educational Infrastructure",
      "Smart City Planning"
    ]
  },
  {
    id: "Osmanabad",
    name: "Osmanabad",
    region: "Marathwada",
    properties: "112K",
    residential: 35,
    commercial: 16,
    industrial: 49,
    demand: "150CR",
    area: "98 sq km",
    description: "Historical city with rich heritage",
    majorProjects: [
      "Heritage Conservation",
      "Water Supply Project",
      "Property Tax System",
      "Agricultural Support",
      "Tourism Development"
    ]
  },
  {
    id: "Nanded-Waghala",
    name: "Nanded-Waghala",
    region: "Marathwada",
    properties: "550K",
    residential: 45,
    commercial: 20,
    industrial: 35,
    demand: "380CR",
    area: "63 sq km",
    description: "Sikh pilgrimage center on banks of Godavari",
    majorProjects: [
      "Pilgrimage City Development",
      "Water Supply Project",
      "Property Management System",
      "Smart Transportation",
      "River Front Development"
    ]
  },
  {
    id: "Latur",
    name: "Latur",
    region: "Marathwada",
    properties: "382K",
    residential: 40,
    commercial: 20,
    industrial: 40,
    demand: "310CR",
    area: "96 sq km",
    description: "Major trading center in Marathwada",
    majorProjects: [
      "Water Conservation Project",
      "Property Tax Modernization",
      "Smart Transportation",
      "Industrial Development",
      "Educational Infrastructure"
    ]
  },
  {
    id: "Buldhana",
    name: "Buldhana",
    region: "Vidarbha",
    properties: "67K",
    residential: 33,
    commercial: 15,
    industrial: 52,
    demand: "100CR",
    area: "48 sq km",
    description: "Agricultural district in Vidarbha",
    majorProjects: [
      "Agricultural Market System",
      "Water Conservation",
      "Property Management",
      "Irrigation Project",
      "Educational Infrastructure"
    ]
  },
  {
    id: "Washim",
    name: "Washim",
    region: "Vidarbha",
    properties: "62K",
    residential: 32,
    commercial: 15,
    industrial: 53,
    demand: "95CR",
    area: "51 sq km",
    description: "Cotton and agricultural hub",
    majorProjects: [
      "Cotton Industry Support",
      "Water Supply Project",
      "Property Tax System",
      "Agricultural Infrastructure",
      "Educational Development"
    ]
  },
  {
    id: "Amravati",
    name: "Amravati",
    region: "Vidarbha",
    properties: "647K",
    residential: 48,
    commercial: 22,
    industrial: 30,
    demand: "420CR",
    area: "270 sq km",
    description: "Educational center in Vidarbha region",
    majorProjects: [
      "Educational Infrastructure",
      "Water Distribution",
      "Property Tax Reform",
      "Smart City Initiatives",
      "Agricultural Market System"
    ]
  },
  {
    id: "Yavatmal",
    name: "Yavatmal",
    region: "Vidarbha",
    properties: "132K",
    residential: 38,
    commercial: 17,
    industrial: 45,
    demand: "180CR",
    area: "112 sq km",
    description: "Cotton and agricultural hub",
    majorProjects: [
      "Agricultural Market System",
      "Water Conservation",
      "Property Management",
      "Cotton Industry Support",
      "Educational Infrastructure"
    ]
  },
  {
    id: "Chandrapur",
    name: "Chandrapur",
    region: "Vidarbha",
    properties: "321K",
    residential: 38,
    commercial: 17,
    industrial: 45,
    demand: "280CR",
    area: "142 sq km",
    description: "Coal city and industrial hub",
    majorProjects: [
      "Industrial Zone Management",
      "Water Supply Project",
      "Property Tax System",
      "Environmental Management",
      "Smart Transportation"
    ]
  },
  {
    id: "Gadchiroli",
    name: "Gadchiroli",
    region: "Vidarbha",
    properties: "45K",
    residential: 30,
    commercial: 12,
    industrial: 58,
    demand: "80CR",
    area: "32 sq km",
    description: "Tribal district with rich forest resources",
    majorProjects: [
      "Tribal Development Project",
      "Forest Conservation",
      "Property Management",
      "Water Supply Enhancement",
      "Educational Infrastructure"
    ]
  },
  {
    id: "Raigad",
    name: "Raigad",
    region: "Konkan",
    properties: "220K",
    residential: 42,
    commercial: 23,
    industrial: 35,
    demand: "260CR",
    area: "153 sq km",
    description: "Historical fort district and coastal area",
    majorProjects: [
      "Tourism Development",
      "Coastal Management",
      "Property Tax System",
      "Water Supply Project",
      "Smart City Initiatives"
    ]
  },
  {
    id: "Ratnagiri",
    name: "Ratnagiri",
    region: "Konkan",
    properties: "76K",
    residential: 35,
    commercial: 20,
    industrial: 45,
    demand: "120CR",
    area: "88 sq km",
    description: "Coastal district known for Alphonso mangoes",
    majorProjects: [
      "Coastal Development",
      "Mango Industry Support",
      "Property Management",
      "Water Supply Enhancement",
      "Tourism Infrastructure"
    ]
  },
  {
    id: "Sindhudurg",
    name: "Sindhudurg",
    region: "Konkan",
    properties: "52K",
    residential: 33,
    commercial: 19,
    industrial: 48,
    demand: "90CR",
    area: "92 sq km",
    description: "Coastal paradise with pristine beaches",
    majorProjects: [
      "Tourism Development",
      "Coastal Conservation",
      "Property Tax System",
      "Water Supply Project",
      "Smart City Planning"
    ]
  },
  {
    id: "Satara",
    name: "Satara",
    region: "Pune",
    properties: "150K",
    residential: 36,
    commercial: 19,
    industrial: 45,
    demand: "180CR",
    area: "96 sq km",
    description: "Historical city with rich cultural heritage",
    majorProjects: [
      "Heritage Conservation",
      "Water Management",
      "Property Tax System",
      "Agricultural Support",
      "Tourism Development"
    ]
  },
  {
    id: "Sangli",
    name: "Sangli",
    region: "Pune",
    properties: "480K",
    residential: 44,
    commercial: 21,
    industrial: 35,
    demand: "350CR",
    area: "96 sq km",
    description: "Turmeric city and major trading center",
    majorProjects: [
      "Agricultural Market System",
      "Water Management",
      "Property Digitization",
      "Smart Lighting",
      "Industrial Zone Planning"
    ]
  },
  {
    id: "Kolhapur",
    name: "Kolhapur",
    region: "Kolhapur",
    properties: "681K",
    residential: 46,
    commercial: 24,
    industrial: 30,
    demand: "450CR",
    area: "66 sq km",
    description: "Historical city known for its cultural heritage",
    majorProjects: [
      "Heritage Conservation",
      "Water Supply Enhancement",
      "Property Tax Modernization",
      "Smart City Project",
      "Industrial Estate Development"
    ]
  },
  {
    id: "Solapur",
    name: "Solapur",
    region: "Solapur",
    properties: "951K",
    residential: 50,
    commercial: 20,
    industrial: 30,
    demand: "580CR",
    area: "180 sq km",
    description: "Textile hub of Maharashtra",
    majorProjects: [
      "Textile Industry Support",
      "Water Conservation",
      "Property Digitization",
      "Waste Management",
      "Industrial Corridor Development"
    ]
  },
  {
    id: "Jalgaon",
    name: "Jalgaon",
    region: "Nashik",
    properties: "462K",
    residential: 43,
    commercial: 19,
    industrial: 38,
    demand: "340CR",
    area: "68 sq km",
    description: "Banana city and major agricultural hub",
    majorProjects: [
      "Agricultural Market System",
      "Water Conservation",
      "Property Tax System",
      "Smart Transportation",
      "Cold Storage Development"
    ]
  },
  {
    id: "Dhule",
    name: "Dhule",
    region: "Nashik",
    properties: "376K",
    residential: 41,
    commercial: 19,
    industrial: 40,
    demand: "290CR",
    area: "136 sq km",
    description: "Educational hub in north Maharashtra",
    majorProjects: [
      "Educational Infrastructure",
      "Water Supply Enhancement",
      "Property Management",
      "Smart City Initiatives",
      "Industrial Development"
    ]
  },
  {
    id: "Nandurbar",
    name: "Nandurbar",
    region: "Nashik",
    properties: "68K",
    residential: 36,
    commercial: 16,
    industrial: 48,
    demand: "120CR",
    area: "68 sq km",
    description: "Tribal district with agricultural focus",
    majorProjects: [
      "Tribal Development Project",
      "Water Supply Enhancement",
      "Property Management System",
      "Agricultural Support",
      "Educational Infrastructure"
    ]
  },
  {
    id: "Ahmednagar",
    name: "Ahmednagar",
    region: "Pune",
    properties: "379K",
    residential: 40,
    commercial: 20,
    industrial: 40,
    demand: "300CR",
    area: "104 sq km",
    description: "Historical city with rich heritage",
    majorProjects: [
      "Heritage Conservation",
      "Water Management System",
      "Property Digitization",
      "Smart Lighting",
      "Tourism Development"
    ]
  },
  {
    id: "Beed",
    name: "Beed",
    region: "Marathwada",
    properties: "146K",
    residential: 37,
    commercial: 17,
    industrial: 46,
    demand: "180CR",
    area: "41 sq km",
    description: "Historical city with agricultural focus",
    majorProjects: [
      "Water Conservation Project",
      "Property Management",
      "Agricultural Support",
      "Educational Infrastructure",
      "Smart City Planning"
    ]
  }
];

export function InteractiveKmlMap({ kmlFile, onDistrictClick, councils }: InteractiveKmlMapProps) {
  const [paths, setPaths] = useState<District[]>([]);
  const [viewBox, setViewBox] = useState("0 0 100 100");
  const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    fetch(kmlFile)
      .then((res) => res.text())
      .then((text) => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "application/xml");

        const placemarks = Array.from(xml.getElementsByTagName("Placemark"));
        const newPaths: District[] = [];
        let minX = Infinity,
          minY = Infinity,
          maxX = -Infinity,
          maxY = -Infinity;

        placemarks.forEach((placemark) => {
          const name =
            placemark.getElementsByTagName("name")[0]?.textContent || "Unknown";

          const multiGeometry =
            placemark.getElementsByTagName("MultiGeometry")[0];
          let coordElements: Element[] = [];

          if (multiGeometry) {
            coordElements = Array.from(
              multiGeometry.getElementsByTagName("coordinates")
            );
          } else {
            const coordTag = placemark.getElementsByTagName("coordinates")[0];
            if (coordTag) coordElements = [coordTag];
          }

          coordElements.forEach((coordTag) => {
            const coordText = coordTag.textContent?.trim() || "";
            if (!coordText) return;

            let points = coordText
              .split(/\s+/)
              .map((c) => {
                const [lng, lat] = c.split(",").map(Number);
                if (!isNaN(lng) && !isNaN(lat)) {
                  if (lng < minX) minX = lng;
                  if (lat < minY) minY = lat;
                  if (lng > maxX) maxX = lng;
                  if (lat > maxY) maxY = lat;
                  return `${lng},${-lat}`;
                }
                return "";
              })
              .filter(Boolean)
              .join(" ");

            if (points) {
              const pointArray = points.split(" ");
              if (
                pointArray.length > 1 &&
                pointArray[0] !== pointArray[pointArray.length - 1]
              ) {
                points += " " + pointArray[0];
              }

              newPaths.push({
                points,
                name,
                isVisible: true,
                isEnabled: true,
              });
            }
          });
        });

        if (newPaths.length > 0) {
          setPaths(newPaths);
          const paddingX = (maxX - minX) * 0.02;
          const paddingY = (maxY - minY) * 0.02;
          setViewBox(
            `${minX - paddingX} ${-maxY - paddingY} ${
              maxX - minX + 2 * paddingX
            } ${maxY - minY + 2 * paddingY}`
          );
        }
      })
      .catch((err) => console.error("Error loading KML:", err));
  }, [kmlFile]);

  const handleDistrictClick = (district: District) => {
    if (district.isEnabled && onDistrictClick) {
      const matchingCouncil = allCouncilsData.find(
        (council) =>
          council.name.toLowerCase().includes(district.name.toLowerCase()) ||
          district.name.toLowerCase().includes(council.name.toLowerCase())
      );

      if (matchingCouncil) {
        onDistrictClick(matchingCouncil);
      } else {
        onDistrictClick(district);
      }
    }
  };

  const getCouncilStats = (districtName: string) => {
    return allCouncilsData.find(
      (council) =>
        council.name.toLowerCase().includes(districtName.toLowerCase()) ||
        districtName.toLowerCase().includes(council.name.toLowerCase())
    );
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const stats = hoveredDistrict ? getCouncilStats(hoveredDistrict) : null;

  return (
    <div className="w-full relative" onMouseMove={handleMouseMove}>
      <svg viewBox={viewBox} className="w-full">
        {paths.map((p, i) => {
          if (!p.isVisible) return null;

          const isHovered = hoveredDistrict === p.name;
          
          return (
            <polygon
              key={i}
              points={p.points}
              fill={isHovered ? "#fbb9b6" : "#f3f3f3"}
              stroke={isHovered ? "#95231c" : "#95231c"}
              strokeWidth={isHovered ? "0.05" : "0.02"}
              onClick={() => handleDistrictClick(p)}
              onMouseEnter={() => setHoveredDistrict(p.name)}
              onMouseLeave={() => setHoveredDistrict(null)}
              className="cursor-pointer transition-all duration-200"
              style={{
                filter: isHovered ? "drop-shadow(0 0 5px rgba(149, 35, 28, 0.5))" : "none"
              }}
            />
          );
        })}
      </svg>

      <AnimatePresence>
        {hoveredDistrict && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute bg-white text-gray-800 px-4 py-3 rounded-xl pointer-events-none z-50 shadow-2xl min-w-[320px]"
            style={{
              top: `${Math.min(mousePosition.y + 15, window.innerHeight - 400)}px`,
              left: `${Math.min(mousePosition.x + 15, window.innerWidth - 340)}px`,
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.05)",
              border: "1px solid rgba(149, 35, 28, 0.2)",
            }}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                <h4 className="text-red-700 font-bold text-lg">{hoveredDistrict}</h4>
                <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              
              {stats ? (
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-50 p-2 rounded border border-gray-200">
                      <div className="text-gray-500 text-xs mb-1">Region</div>
                      <div className="text-gray-800 font-medium">{stats.region}</div>
                    </div>
                    <div className="bg-gray-50 p-2 rounded border border-gray-200">
                      <div className="text-gray-500 text-xs mb-1">Area</div>
                      <div className="text-gray-800 font-medium">{stats.area}</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-2 rounded border border-gray-200">
                    <div className="text-gray-500 text-xs mb-1">Properties</div>
                    <div className="text-gray-800 font-medium text-lg">{stats.properties}</div>
                  </div>
                  
                  <div className="bg-gray-50 p-2 rounded border border-gray-200">
                    <div className="text-gray-500 text-xs mb-1">Demand</div>
                    <div className="text-green-600 font-medium text-lg">{stats.demand}</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 pt-1">
                    <div className="bg-gray-50 p-2 rounded border border-gray-200 text-center">
                      <div className="text-blue-600 font-bold">{stats.residential}%</div>
                      <div className="text-gray-500 text-xs">Residential</div>
                    </div>
                    <div className="bg-gray-50 p-2 rounded border border-gray-200 text-center">
                      <div className="text-purple-600 font-bold">{stats.commercial}%</div>
                      <div className="text-gray-500 text-xs">Commercial</div>
                    </div>
                    <div className="bg-gray-50 p-2 rounded border border-gray-200 text-center">
                      <div className="text-orange-600 font-bold">{stats.industrial}%</div>
                      <div className="text-gray-500 text-xs">Industrial</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-2 rounded border border-gray-200">
                    <div className="text-gray-500 text-xs mb-1">Description</div>
                    <div className="text-gray-700 text-xs">{stats.description}</div>
                  </div>
                  
                  <div className="bg-gray-50 p-2 rounded border border-gray-200">
                    <div className="text-gray-500 text-xs mb-1">Major Projects</div>
                    <div className="space-y-1">
                      {stats.majorProjects && stats.majorProjects.length > 0 ? (
                        stats.majorProjects.slice(0, 3).map((project, idx) => (
                          <div key={idx} className="flex items-center space-x-1">
                            <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                            <div className="text-gray-700 text-xs">{project}</div>
                          </div>
                        ))
                      ) : (
                        <div className="text-gray-500 text-xs">No projects listed</div>
                      )}
                      {stats.majorProjects && stats.majorProjects.length > 3 && (
                        <div className="text-gray-500 text-xs">
                          +{stats.majorProjects.length - 3} more projects
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-gray-500 text-sm text-center py-2">
                  No data available for this district
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}