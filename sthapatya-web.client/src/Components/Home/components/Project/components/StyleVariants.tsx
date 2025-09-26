import { useState } from "react";
import { motion } from "motion/react";
import { MergedProjectsClientsSection } from "./MergedProjectsClientsSection";

// Style variant options
const styleVariants = {
  // 1. Current Default Style
  default: {
    name: "Default Style",
    description: "Current centered layout with gradient background",
    containerClass: "bg-gradient-to-b from-[#f3f3f3] via-[#e8e8e8] to-[#d8bea5]",
    contentClass: "max-w-7xl xl:max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8",
    sectionSpacing: "py-6 sm:py-8 lg:py-10",
    textAlign: "text-center",
    cardStyle: "rounded-xl shadow-md",
    colorScheme: "default"
  },

  // 2. Full Width Modern
  fullWidth: {
    name: "Full Width Modern",
    description: "Edge-to-edge layout with minimal padding",
    containerClass: "bg-white",
    contentClass: "w-full px-2 sm:px-4",
    sectionSpacing: "py-4 sm:py-6 lg:py-8",
    textAlign: "text-center",
    cardStyle: "rounded-lg shadow-lg",
    colorScheme: "modern"
  },

  // 3. Left Aligned Content
  leftAligned: {
    name: "Left Aligned Layout",
    description: "All content aligned to the left for a clean editorial look",
    containerClass: "bg-gray-50",
    contentClass: "max-w-6xl mx-auto px-6 sm:px-8 lg:px-12",
    sectionSpacing: "py-8 sm:py-12 lg:py-16",
    textAlign: "text-left",
    cardStyle: "rounded-md shadow-sm border",
    colorScheme: "editorial"
  },

  // 4. Compact Minimal
  compact: {
    name: "Compact Minimal",
    description: "Tight spacing with minimal design elements",
    containerClass: "bg-white",
    contentClass: "max-w-5xl mx-auto px-4 sm:px-6",
    sectionSpacing: "py-3 sm:py-4 lg:py-6",
    textAlign: "text-center",
    cardStyle: "rounded border border-gray-200",
    colorScheme: "minimal"
  },

  // 5. Split Screen
  splitScreen: {
    name: "Split Screen Layout",
    description: "Projects on left, clients on right (desktop)",
    containerClass: "bg-gradient-to-r from-gray-100 to-gray-200",
    contentClass: "w-full",
    sectionSpacing: "py-8 sm:py-10 lg:py-12",
    textAlign: "text-center",
    cardStyle: "rounded-xl shadow-lg",
    colorScheme: "split"
  },

  // 6. Magazine Style
  magazine: {
    name: "Magazine Style",
    description: "Varied layouts with asymmetrical elements",
    containerClass: "bg-white",
    contentClass: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    sectionSpacing: "py-6 sm:py-8 lg:py-12",
    textAlign: "text-left",
    cardStyle: "rounded-lg shadow-md border-l-4 border-red-500",
    colorScheme: "magazine"
  }
};

const colorSchemes = {
  default: {
    primary: "#95231c",
    secondary: "#ba7b72",
    background: "bg-gradient-to-b from-[#f3f3f3] via-[#e8e8e8] to-[#d8bea5]",
    cardBg: "bg-gray-50",
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700"
  },
  modern: {
    primary: "#1f2937",
    secondary: "#3b82f6",
    background: "bg-white",
    cardBg: "bg-gray-50",
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-600"
  },
  editorial: {
    primary: "#374151",
    secondary: "#6b7280",
    background: "bg-gray-50",
    cardBg: "bg-white",
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700"
  },
  minimal: {
    primary: "#000000",
    secondary: "#666666",
    background: "bg-white",
    cardBg: "bg-gray-50",
    textPrimary: "text-black",
    textSecondary: "text-gray-600"
  },
  split: {
    primary: "#7c3aed",
    secondary: "#a855f7",
    background: "bg-gradient-to-r from-purple-50 to-blue-50",
    cardBg: "bg-white",
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700"
  },
  magazine: {
    primary: "#dc2626",
    secondary: "#ea580c",
    background: "bg-white",
    cardBg: "bg-gray-50",
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700"
  }
};

export function StyleVariants() {
  const [selectedVariant, setSelectedVariant] = useState<keyof typeof styleVariants>("default");

  return (
    <div className="min-h-screen w-full">
      {/* Style Selector */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex flex-wrap gap-2">
            <h2 className="text-lg font-semibold text-gray-900 mb-2 w-full">
              Choose Your Style:
            </h2>
            {Object.entries(styleVariants).map(([key, variant]) => (
              <button
                key={key}
                onClick={() => setSelectedVariant(key as keyof typeof styleVariants)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedVariant === key
                    ? "bg-blue-500 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {variant.name}
              </button>
            ))}
          </div>
          
          {/* Current Style Description */}
          <div className="mt-3 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>{styleVariants[selectedVariant].name}:</strong>{" "}
              {styleVariants[selectedVariant].description}
            </p>
          </div>
        </div>
      </div>

      {/* Render Selected Style */}
      <motion.div
        key={selectedVariant}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styleVariants[selectedVariant].containerClass}
        style={{
          minHeight: "calc(100vh - 120px)",
        }}
      >
        <StyleWrapper variant={styleVariants[selectedVariant]} />
      </motion.div>
    </div>
  );
}

function StyleWrapper({ variant }: { variant: typeof styleVariants.default }) {
  if (variant.name === "Split Screen Layout") {
    return <SplitScreenLayout variant={variant} />;
  }
  
  if (variant.name === "Magazine Style") {
    return <MagazineLayout variant={variant} />;
  }

  return (
    <div className={variant.contentClass}>
      <div className={variant.sectionSpacing}>
        <MergedProjectsClientsSection />
      </div>
    </div>
  );
}

function SplitScreenLayout({ variant }: { variant: typeof styleVariants.default }) {
  return (
    <div className="min-h-screen">
      {/* Mobile: Stack vertically */}
      <div className="lg:hidden">
        <MergedProjectsClientsSection />
      </div>
      
      {/* Desktop: Split screen */}
      <div className="hidden lg:grid lg:grid-cols-2 min-h-screen">
        {/* Left: Projects */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center">
          <div className="w-full">
            <div className="max-w-2xl">
              {/* Projects content would go here - simplified for demo */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl xl:text-6xl font-bold text-gray-900 mb-6">
                  Our Projects
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Comprehensive municipal solutions across Maharashtra's leading corporations and councils.
                </p>
                
                {/* Statistics Grid */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    { number: "12+", label: "Municipal Corps" },
                    { number: "18+", label: "City Councils" },
                    { number: "200+", label: "Projects" },
                    { number: "98%", label: "Satisfaction" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <div className="text-3xl font-bold text-purple-600 mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Right: Clients */}
        <div className="bg-gradient-to-bl from-purple-50 to-blue-50 p-8 flex items-center">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl xl:text-6xl font-bold text-gray-900 mb-6">
                Our Clients
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Trusted partnerships with Maharashtra's leading municipal corporations and city councils.
              </p>
              
              {/* Sample client logos grid */}
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="h-24 bg-white rounded-lg shadow-sm flex items-center justify-center hover:shadow-md transition-shadow"
                  >
                    <div className="text-gray-400">Logo {item}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MagazineLayout({ variant }: { variant: typeof styleVariants.default }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Full width */}
      <div className="relative h-screen flex items-center bg-gradient-to-r from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Left: Large title */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-tight mb-6">
                  Municipal
                  <br />
                  <span className="text-red-600">Solutions</span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-700 max-w-2xl">
                  Transforming urban governance across Maharashtra through innovative technology partnerships.
                </p>
              </motion.div>
            </div>
            
            {/* Right: Statistics card */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white p-8 rounded-lg shadow-xl border-l-4 border-red-500"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Impact</h3>
                <div className="space-y-4">
                  {[
                    { number: "12+", label: "Municipal Corporations" },
                    { number: "18+", label: "City Councils" },
                    { number: "200+", label: "Projects Delivered" },
                  ].map((stat, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-600">{stat.label}</span>
                      <span className="font-bold text-red-600">{stat.number}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Sections */}
      <div className="py-16">
        <MergedProjectsClientsSection />
      </div>
    </div>
  );
}