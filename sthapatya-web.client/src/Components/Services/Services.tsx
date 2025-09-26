import { Routes, Route } from "react-router-dom";
import { MunicipalServices } from "./components/MunicipalServices";
import { ITServices } from "./components/ITServices";
import { GISServices } from "./components/GISServices";
import { ServicesOverview } from "./components/ServicesOverview";
import "./styles/globals.css";
import "./styles/Services.css";

// Ambient Background Component
function AmbientBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Floating geometric elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-accent/10 to-chart-2/5 rounded-full blur-xl animate-float"></div>
            <div className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-br from-chart-3/10 to-chart-4/5 rounded-xl blur-lg animate-drift"></div>
            <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-gradient-to-br from-warning/10 to-chart-5/5 rotate-45 blur-md animate-bob"></div>
            <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-gradient-to-br from-success/10 to-accent/5 rounded-full blur-sm animate-wave"></div>

            {/* Subtle grid overlay */}
            <div className="absolute inset-0 opacity-[0.02]">
                <svg className="w-full h-full">
                    <defs>
                        <pattern
                            id="background-grid"
                            width="40"
                            height="40"
                            patternUnits="userSpaceOnUse"
                        >
                            <path
                                d="M 40 0 L 0 0 0 40"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="0.5"
                            />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#background-grid)" />
                </svg>
            </div>

            {/* Animated gradient orbs */}
            <div className="absolute top-1/4 left-1/2 w-40 h-40 bg-gradient-radial from-chart-1/5 to-transparent rounded-full animate-pulse-glow"></div>
            <div className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-gradient-radial from-chart-2/5 to-transparent rounded-full animate-pulse-glow"></div>
        </div>
    );
}

export default function Services() {
    return (
        <div className="min-h-screen bg-background relative overflow-x-hidden">
            {/* Ambient Background */}
            <AmbientBackground />

            {/* Page Content handled by React Router */}
            <div className="relative z-10">
                <Routes>
                    <Route path="/" element={<ServicesOverview />} />
                    <Route path="municipal" element={<MunicipalServices />} />
                    <Route path="it" element={<ITServices />} />
                    <Route path="gis" element={<GISServices />} />
                </Routes>
            </div>
        </div>
    );
}
