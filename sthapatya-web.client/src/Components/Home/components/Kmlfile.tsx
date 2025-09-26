import { useEffect, useState } from "react";

interface KmlfileProps {
    kmlFile: string;
}

interface DistrictInfo {
    points: string;
    name: string;
    isVisible: boolean;
    isEnabled: boolean;
}

const Kmlfile: React.FC<KmlfileProps> = ({ kmlFile }) => {
    const [paths, setPaths] = useState<DistrictInfo[]>([]);
    const [viewBox, setViewBox] = useState("0 0 100 100");
    const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
    const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null);

    useEffect(() => {
        fetch(kmlFile)
            .then((res) => res.text())
            .then((text) => {
                const parser = new DOMParser();
                const xml = parser.parseFromString(text, "application/xml");

                const placemarks = Array.from(xml.getElementsByTagName("Placemark"));
                const newPaths: DistrictInfo[] = [];
                let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

                placemarks.forEach((placemark) => {
                    const name = placemark.getElementsByTagName("name")[0]?.textContent || "Unknown";
                    const coordTag = placemark.getElementsByTagName("coordinates")[0];
                    if (!coordTag) return;

                    const coordText = coordTag.textContent?.trim() || "";
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

                    // Close the polygon if it's not closed
                    if (points && points.split(" ")[0] !== points.split(" ").slice(-1)[0]) {
                        points += " " + points.split(" ")[0];
                    }

                    if (points) {
                        // Determine if the district should be visible and enabled
                        // You can modify this logic based on your requirements
                        const isVisible = true; // Set to false for hidden districts
                        const isEnabled = name !== "Disabled City"; // Example condition

                        newPaths.push({
                            points,
                            name,
                            isVisible,
                            isEnabled
                        });
                    }
                });

                if (newPaths.length > 0) {
                    setPaths(newPaths);
                    setViewBox(`${minX} ${-maxY} ${maxX - minX} ${maxY - minY}`);
                }
            })
            .catch((err) => console.error("Error loading KML:", err));
    }, [kmlFile]);

    const handleDistrictClick = (district: DistrictInfo) => {
        if (district.isEnabled) {
            setSelectedDistrict(district.name);
        }
    };

    const handleDistrictHover = (district: DistrictInfo) => {
        if (district.isEnabled) {
            setHoveredDistrict(district.name);
        }
    };

    return (
        <div className="relative w-full h-full">
            {/* Map SVG */}
            <svg viewBox={viewBox} className="w-full h-full drop-shadow-lg">
                {paths.map((p, i) => {
                    if (!p.isVisible) return null;

                    return (
                        <polygon
                            key={i}
                            points={p.points}
                            fill={p.isEnabled ? "#f3f3f3" : "#e0e0e0"}
                            stroke={p.isEnabled ? "#555555" : "#999999"}
                            strokeWidth={p.isEnabled ? "0.02" : "0.01"}
                            onClick={() => handleDistrictClick(p)}
                            onMouseEnter={() => handleDistrictHover(p)}
                            onMouseLeave={() => setHoveredDistrict(null)}
                            className={`transition-all duration-200 ${p.isEnabled
                                    ? "cursor-pointer hover:fill-yellow-200"
                                    : "cursor-not-allowed opacity-70"
                                }`}
                        />
                    );
                })}
            </svg>

            {/* Hover tooltip for district name */}
            {hoveredDistrict && (
                <div
                    className="absolute bg-black text-white text-sm px-2 py-1 rounded pointer-events-none z-40"
                    style={{
                        top: '10px',
                        left: '10px',
                    }}
                >
                    {hoveredDistrict}
                </div>
            )}

            {/* Modal for detailed district information */}
            {selectedDistrict && (
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl z-50 min-w-64"
                    onClick={() => setSelectedDistrict(null)}
                >
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-semibold">{selectedDistrict}</h3>
                        <button
                            className="text-gray-500 hover:text-gray-700 text-xl"
                            onClick={() => setSelectedDistrict(null)}
                        >
                            ×
                        </button>
                    </div>
                    <div className="text-gray-600">
                        <p>More information about {selectedDistrict} will appear here.</p>
                        {/* Add your detailed district information here */}
                    </div>
                    <div className="mt-4 flex justify-end">
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            onClick={() => setSelectedDistrict(null)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Overlay to close modal when clicking outside */}
            {selectedDistrict && (
                <div
                    className="absolute inset-0 bg-black bg-opacity-30 z-40"
                    onClick={() => setSelectedDistrict(null)}
                />
            )}
        </div>
    );
};

export default Kmlfile;