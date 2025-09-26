import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import indiaMapImage from "figma:asset/74c0ff034250b4271aacfa2159580502384e9466.png";
import maharashtraMapImage from "figma:asset/7ba2fbfe6892c5b7a026b5f1ee5d07f50347e397.png";

const animationStyles = {
  // 1. Current Dashed Arrow
  dashedArrow: "Dashed Arrow (Current)",
  
  // 2. Growing Circle Ripples
  rippleEffect: "Ripple Effect",
  
  // 3. Particle Flow
  particleFlow: "Particle Flow",
  
  // 4. Pulsing Connection
  pulsingConnection: "Pulsing Connection",
  
  // 5. Growth Tree Branch
  growthBranch: "Growth Branch",
  
  // 6. Data Stream
  dataStream: "Data Stream",
  
  // 7. Network Expansion
  networkExpansion: "Network Expansion",
  
  // 8. Progress Bar Growth
  progressGrowth: "Progress Growth"
};

// Animation Component 1: Current Dashed Arrow
function DashedArrowAnimation() {
  return (
    <svg
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 200"
      preserveAspectRatio="xMidYMid meet"
    >
      <motion.path
        d="M 80 100 C 180 80, 280 100, 320 100"
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
        cx="320"
        cy="100"
        r="6"
        fill="#ba7b72"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </svg>
  );
}

// Animation Component 2: Ripple Effect
function RippleEffectAnimation() {
  return (
    <svg
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 200"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Expanding ripples from Maharashtra */}
      {[1, 2, 3].map((i) => (
        <motion.circle
          key={i}
          cx="80"
          cy="100"
          r="0"
          stroke="#ba7b72"
          strokeWidth="2"
          fill="transparent"
          opacity="0.7"
          animate={{
            r: [0, 150],
            opacity: [0.7, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 1,
            ease: "easeOut"
          }}
        />
      ))}
      
      {/* Connection line */}
      <motion.path
        d="M 80 100 L 320 100"
        stroke="#95231c"
        strokeWidth="2"
        strokeDasharray="4 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      
      {/* Target pulse */}
      <motion.circle
        cx="320"
        cy="100"
        r="8"
        fill="#95231c"
        animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </svg>
  );
}

// Animation Component 3: Particle Flow
function ParticleFlowAnimation() {
  const particles = Array.from({ length: 8 }, (_, i) => i);
  
  return (
    <svg
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 200"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Base path */}
      <path
        d="M 80 100 C 180 80, 280 100, 320 100"
        stroke="#ba7b72"
        strokeWidth="1"
        fill="transparent"
        opacity="0.3"
      />
      
      {/* Flowing particles */}
      {particles.map((particle) => (
        <motion.circle
          key={particle}
          r="3"
          fill="#95231c"
          opacity="0.8"
          animate={{
            offsetDistance: ["0%", "100%"]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: particle * 0.3,
            ease: "easeInOut"
          }}
          style={{
            offsetPath: "path('M 80 100 C 180 80, 280 100, 320 100')"
          }}
        />
      ))}
      
      {/* Glowing endpoints */}
      <motion.circle
        cx="80"
        cy="100"
        r="6"
        fill="#ba7b72"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.circle
        cx="320"
        cy="100"
        r="8"
        fill="#95231c"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </svg>
  );
}

// Animation Component 4: Pulsing Connection
function PulsingConnectionAnimation() {
  return (
    <svg
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 200"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Pulsing connection beam */}
      <motion.path
        d="M 80 100 C 180 80, 280 100, 320 100"
        stroke="url(#pulseGradient)"
        strokeWidth="8"
        fill="transparent"
        strokeLinecap="round"
        animate={{
          opacity: [0.3, 1, 0.3]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Gradient definition */}
      <defs>
        <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ba7b72" />
          <stop offset="50%" stopColor="#95231c" />
          <stop offset="100%" stopColor="#ba7b72" />
        </linearGradient>
      </defs>
      
      {/* Energy orbs */}
      <motion.circle
        cx="80"
        cy="100"
        r="0"
        fill="#95231c"
        animate={{
          r: [0, 12, 0],
          opacity: [0, 0.8, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.circle
        cx="320"
        cy="100"
        r="0"
        fill="#ba7b72"
        animate={{
          r: [0, 15, 0],
          opacity: [0, 0.6, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0.5,
          ease: "easeInOut"
        }}
      />
    </svg>
  );
}

// Animation Component 5: Growth Branch
function GrowthBranchAnimation() {
  return (
    <svg
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 200"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Main trunk growing */}
      <motion.path
        d="M 80 100 L 200 100"
        stroke="#95231c"
        strokeWidth="4"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      
      {/* Branches growing */}
      <motion.path
        d="M 200 100 L 280 80"
        stroke="#ba7b72"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
      />
      <motion.path
        d="M 200 100 L 280 120"
        stroke="#ba7b72"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1.7, ease: "easeOut" }}
      />
      <motion.path
        d="M 280 80 L 320 90"
        stroke="#ba7b72"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 2.5, ease: "easeOut" }}
      />
      <motion.path
        d="M 280 120 L 320 110"
        stroke="#ba7b72"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 2.7, ease: "easeOut" }}
      />
      
      {/* Growing leaves/nodes */}
      {[
        { x: 200, y: 100, delay: 1.5 },
        { x: 280, y: 80, delay: 2.5 },
        { x: 280, y: 120, delay: 2.7 },
        { x: 320, y: 90, delay: 3.5 },
        { x: 320, y: 110, delay: 3.7 }
      ].map((node, i) => (
        <motion.circle
          key={i}
          cx={node.x}
          cy={node.y}
          r="0"
          fill="#95231c"
          initial={{ r: 0, opacity: 0 }}
          animate={{ r: 4, opacity: 1 }}
          transition={{ duration: 0.5, delay: node.delay }}
        />
      ))}
    </svg>
  );
}

// Animation Component 6: Data Stream
function DataStreamAnimation() {
  const dataPoints = Array.from({ length: 12 }, (_, i) => i);
  
  return (
    <svg
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 200"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Background connection */}
      <path
        d="M 80 100 C 180 80, 280 100, 320 100"
        stroke="#ba7b72"
        strokeWidth="2"
        fill="transparent"
        opacity="0.2"
      />
      
      {/* Streaming data rectangles */}
      {dataPoints.map((point) => (
        <motion.rect
          key={point}
          width="4"
          height="8"
          fill="#95231c"
          rx="2"
          animate={{
            offsetDistance: ["0%", "100%"],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: point * 0.2,
            ease: "linear"
          }}
          style={{
            offsetPath: "path('M 80 100 C 180 80, 280 100, 320 100')"
          }}
        />
      ))}
      
      {/* Source indicator */}
      <motion.rect
        x="76"
        y="96"
        width="8"
        height="8"
        fill="#ba7b72"
        rx="2"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      
      {/* Destination indicator */}
      <motion.rect
        x="316"
        y="96"
        width="8"
        height="8"
        fill="#95231c"
        rx="2"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </svg>
  );
}

// Animation Component 7: Network Expansion
function NetworkExpansionAnimation() {
  const networkNodes = [
    { x: 80, y: 100, size: 8, delay: 0 },
    { x: 150, y: 90, size: 6, delay: 0.5 },
    { x: 150, y: 110, size: 6, delay: 0.7 },
    { x: 220, y: 85, size: 5, delay: 1.2 },
    { x: 220, y: 100, size: 5, delay: 1.0 },
    { x: 220, y: 115, size: 5, delay: 1.4 },
    { x: 290, y: 95, size: 4, delay: 1.8 },
    { x: 290, y: 105, size: 4, delay: 2.0 },
    { x: 320, y: 100, size: 10, delay: 2.5 }
  ];
  
  const connections = [
    { from: { x: 80, y: 100 }, to: { x: 150, y: 90 }, delay: 0.5 },
    { from: { x: 80, y: 100 }, to: { x: 150, y: 110 }, delay: 0.7 },
    { from: { x: 150, y: 90 }, to: { x: 220, y: 85 }, delay: 1.2 },
    { from: { x: 150, y: 90 }, to: { x: 220, y: 100 }, delay: 1.0 },
    { from: { x: 150, y: 110 }, to: { x: 220, y: 100 }, delay: 1.0 },
    { from: { x: 150, y: 110 }, to: { x: 220, y: 115 }, delay: 1.4 },
    { from: { x: 220, y: 85 }, to: { x: 290, y: 95 }, delay: 1.8 },
    { from: { x: 220, y: 100 }, to: { x: 290, y: 95 }, delay: 1.8 },
    { from: { x: 220, y: 100 }, to: { x: 290, y: 105 }, delay: 2.0 },
    { from: { x: 220, y: 115 }, to: { x: 290, y: 105 }, delay: 2.0 },
    { from: { x: 290, y: 95 }, to: { x: 320, y: 100 }, delay: 2.5 },
    { from: { x: 290, y: 105 }, to: { x: 320, y: 100 }, delay: 2.5 }
  ];
  
  return (
    <svg
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 200"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Network connections */}
      {connections.map((connection, i) => (
        <motion.line
          key={i}
          x1={connection.from.x}
          y1={connection.from.y}
          x2={connection.to.x}
          y2={connection.to.y}
          stroke="#ba7b72"
          strokeWidth="2"
          opacity="0.6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 0.5,
            delay: connection.delay,
            ease: "easeOut"
          }}
        />
      ))}
      
      {/* Network nodes */}
      {networkNodes.map((node, i) => (
        <motion.circle
          key={i}
          cx={node.x}
          cy={node.y}
          r="0"
          fill={i === 0 || i === networkNodes.length - 1 ? "#95231c" : "#ba7b72"}
          initial={{ r: 0, opacity: 0 }}
          animate={{
            r: node.size,
            opacity: 1
          }}
          transition={{
            duration: 0.3,
            delay: node.delay,
            ease: "easeOut"
          }}
        />
      ))}
    </svg>
  );
}

// Animation Component 8: Progress Growth
function ProgressGrowthAnimation() {
  return (
    <svg
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 200"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Background track */}
      <path
        d="M 80 100 C 180 80, 280 100, 320 100"
        stroke="#e5e5e5"
        strokeWidth="8"
        fill="transparent"
        strokeLinecap="round"
      />
      
      {/* Progress fill */}
      <motion.path
        d="M 80 100 C 180 80, 280 100, 320 100"
        stroke="url(#progressGradient)"
        strokeWidth="8"
        fill="transparent"
        strokeLinecap="round"
        strokeDasharray="1000"
        initial={{ strokeDashoffset: 1000 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Gradient definition */}
      <defs>
        <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ba7b72" />
          <stop offset="100%" stopColor="#95231c" />
        </linearGradient>
      </defs>
      
      {/* Progress indicators */}
      {[25, 50, 75, 100].map((percent, i) => (
        <motion.g key={i}>
          <motion.circle
            cx={80 + (240 * percent / 100)}
            cy={100 - (percent === 50 ? 20 : 0)}
            r="4"
            fill="#95231c"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.3,
              delay: (percent / 100) * 4,
              ease: "easeOut"
            }}
          />
          <motion.text
            x={80 + (240 * percent / 100)}
            y={100 - (percent === 50 ? 20 : 0) - 12}
            textAnchor="middle"
            fontSize="10"
            fill="#95231c"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: (percent / 100) * 4 + 0.2
            }}
          >
            {percent}%
          </motion.text>
        </motion.g>
      ))}
    </svg>
  );
}

export function ExpansionAnimations() {
  const [selectedAnimation, setSelectedAnimation] = useState<keyof typeof animationStyles>("dashedArrow");

  const renderAnimation = () => {
    switch (selectedAnimation) {
      case "dashedArrow":
        return <DashedArrowAnimation />;
      case "rippleEffect":
        return <RippleEffectAnimation />;
      case "particleFlow":
        return <ParticleFlowAnimation />;
      case "pulsingConnection":
        return <PulsingConnectionAnimation />;
      case "growthBranch":
        return <GrowthBranchAnimation />;
      case "dataStream":
        return <DataStreamAnimation />;
      case "networkExpansion":
        return <NetworkExpansionAnimation />;
      case "progressGrowth":
        return <ProgressGrowthAnimation />;
      default:
        return <DashedArrowAnimation />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f3f3f3] via-[#e8e8e8] to-[#d8bea5] w-full py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animation Selector */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center mb-6" style={{ color: "#95231c" }}>
            Business Expansion Animation Styles
          </h1>
          <p className="text-center text-gray-700 mb-6 max-w-3xl mx-auto">
            Choose from different animation styles to visualize your business growth from Maharashtra to all of India. 
            Each style tells the story of expansion in a unique way.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {Object.entries(animationStyles).map(([key, name]) => (
              <button
                key={key}
                onClick={() => setSelectedAnimation(key as keyof typeof animationStyles)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedAnimation === key
                    ? "bg-[#95231c] text-white shadow-lg"
                    : "bg-white text-[#95231c] hover:bg-[#ba7b72] hover:text-white border border-[#ba7b72]"
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* Animation Description */}
        <div className="mb-8 p-4 bg-white rounded-lg shadow-sm border-l-4 border-[#ba7b72]">
          <h3 className="font-semibold text-[#95231c] mb-2">
            {animationStyles[selectedAnimation]}
          </h3>
          <p className="text-gray-700 text-sm">
            {getAnimationDescription(selectedAnimation)}
          </p>
        </div>

        {/* Map Display with Selected Animation */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="relative w-full h-[400px] mx-auto max-w-4xl">
            <div className="absolute inset-0 grid grid-cols-2 gap-4">
              {/* Maharashtra Map */}
              <div className="relative rounded-lg overflow-hidden flex items-center justify-center">
                <ImageWithFallback 
                  src={maharashtraMapImage} 
                  alt="Maharashtra Map" 
                  className="w-full h-full object-contain" 
                />
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm">
                  Maharashtra
                </div>
              </div>
              
              {/* India Map */}
              <div className="relative rounded-lg overflow-hidden flex items-center justify-center">
                <ImageWithFallback 
                  src={indiaMapImage} 
                  alt="India Map" 
                  className="w-full h-full object-contain" 
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm">
                  All India
                </div>
              </div>
            </div>

            {/* Selected Animation Overlay */}
            {renderAnimation()}
          </div>
          
          {/* Legend */}
          <div className="mt-6 flex justify-center">
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-[#ba7b72] rounded-full"></div>
                <span>Starting Point (Maharashtra)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-[#95231c] rounded-full"></div>
                <span>Expansion Target (All India)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Code Preview */}
        <div className="mt-8 bg-gray-900 rounded-lg p-4 text-white text-sm overflow-x-auto">
          <h3 className="text-green-400 mb-2">SVG Animation Code Preview:</h3>
          <pre className="text-gray-300">
{`// ${animationStyles[selectedAnimation]} Animation
<svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
  {/* Animation elements for ${selectedAnimation} */}
</svg>`}
          </pre>
        </div>
      </div>
    </div>
  );
}

function getAnimationDescription(animationType: keyof typeof animationStyles): string {
  const descriptions = {
    dashedArrow: "Your current animated dashed arrow with flowing dash pattern and pulsing target point. Simple and effective.",
    rippleEffect: "Expanding ripples emanate from Maharashtra, showing influence spreading outward like waves in water. Great for showing organic growth.",
    particleFlow: "Small particles flow along a curved path from state to country, representing data, resources, or business flowing between locations.",
    pulsingConnection: "A pulsing energy beam connects the two maps with gradient colors, showing strong, active connection and energy transfer.",
    growthBranch: "Like a tree growing, the connection branches out organically, representing natural business expansion and network building.",
    dataStream: "Rectangular data blocks stream between locations, perfect for tech/digital business showing information or service flow.",
    networkExpansion: "Network nodes appear progressively, showing systematic expansion through connected relationships and partnerships.",
    progressGrowth: "A progress bar style animation showing measurable growth with percentage milestones, ideal for showing achievement metrics."
  };
  
  return descriptions[animationType] || "Animation description not available.";
}