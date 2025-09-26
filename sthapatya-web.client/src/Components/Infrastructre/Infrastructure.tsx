import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import {
    Users,
    Building2,
    MapPin,
    Monitor,
    Database,
    Server,
    Cpu,
    Cloud,
    Camera,
    Phone,
    Mail
} from "lucide-react";
import "./styles/globals.css"
import "./styles/Infrastructure.css"

export default function Infrastructure() {
    const teamStats = [
        { icon: Building2, label: "Architects", count: "45+", color: "#95231c" },
        { icon: MapPin, label: "Urban Planners", count: "32+", color: "#ba7b72" },
        { icon: Database, label: "GIS Analysts", count: "25+", color: "#e1d385" },
        { icon: Monitor, label: "IT Specialists", count: "12+", color: "#95231c" },
        { icon: Users, label: "Support Staff", count: "18+", color: "#ba7b72" }
    ];

    const itCapabilities = [
        {
            title: "IT Facilities",
            description: "High-performance servers, licensed software including AutoCAD, Revit, ArcGIS, and advanced BIM tools.",
            icon: Server,
            items: ["AutoCAD Suite", "Revit BIM", "ArcGIS Pro", "SketchUp", "Adobe Creative Suite"]
        },
        {
            title: "GIS Capabilities",
            description: "Advanced spatial data analysis, comprehensive mapping systems, and sophisticated geodatabase management.",
            icon: Database,
            items: ["Spatial Analysis", "3D Mapping", "Geodatabase Management", "Remote Sensing", "GPS Integration"]
        },
        {
            title: "Office Setup",
            description: "Dedicated workstations, collaborative meeting spaces, and specialized model-making laboratory facilities.",
            icon: Monitor,
            items: ["Workstations", "Meeting Rooms", "Model Lab", "Printing Center", "Video Conferencing"]
        }
    ];

    return (
        <div className="min-h-screen bg-[#fefefe]">
            {/* Hero Banner */}
            <section className="relative h-[60vh] min-h-[500px] bg-gradient-to-br from-[#95231c] to-[#ba7b72] overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `url(https://images.unsplash.com/photo-1721244653693-1d13e68b66c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwZHJhd2luZyUyMGJsdWVwcmludHxlbnwxfHx8fDE3NTg2NzA1ODh8MA&ixlib=rb-4.1.0&q=80&w=1080)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                ></div>

                <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
                    <div className="max-w-4xl">
                        <h1 className="text-[40px] font-[700] leading-[48px] text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Our Team & Infrastructure
                        </h1>
                        <p className="text-[18px] font-[400] leading-[28px] text-white/90 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
                            An expert team empowered by advanced technology to deliver excellence in planning and design.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Strength Section */}
            <section className="py-20 px-4 bg-[#f3f3f3]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[32px] font-[600] leading-[40px] text-[#95231c] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Our People, Our Power
                        </h2>
                        <div className="text-[48px] font-[700] text-[#95231c] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            120+ Employees
                        </div>
                        <p className="text-[16px] font-[400] leading-[24px] text-[#3a3a3a] max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
                            A diverse team of professionals working together to shape the future of urban planning and architectural design.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
                        {teamStats.map((stat, index) => (
                            <Card key={index} className="p-6 text-center bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                                    style={{ backgroundColor: `${stat.color}20` }}
                                >
                                    <stat.icon className="w-8 h-8" style={{ color: stat.color }} />
                                </div>
                                <div className="text-[24px] font-[600] mb-2" style={{ fontFamily: 'Montserrat, sans-serif', color: stat.color }}>
                                    {stat.count}
                                </div>
                                <p className="text-[14px] font-[500] text-[#3a3a3a]" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    {stat.label}
                                </p>
                            </Card>
                        ))}
                    </div>

                    <div className="relative rounded-2xl overflow-hidden h-64 shadow-xl">
                        <ImageWithFallback
                            src="https://images.unsplash.com/photo-1758518731290-a9eb64660ead?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBhcmNoaXRlY3R1cmFsJTIwdGVhbXxlbnwxfHx8fDE3NTg3MjE4Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                            alt="Our professional team at work"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#95231c]/80 to-transparent flex items-center">
                            <div className="px-8">
                                <h3 className="text-[24px] font-[600] text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                    Collaborative Excellence
                                </h3>
                                <p className="text-white/90 text-[16px] max-w-md" style={{ fontFamily: 'Inter, sans-serif' }}>
                                    Our team brings together decades of experience in architecture, urban planning, and cutting-edge technology.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Infrastructure & IT Capabilities */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[32px] font-[600] leading-[40px] text-[#95231c] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Technology That Drives Us
                        </h2>
                        <p className="text-[16px] font-[400] leading-[24px] text-[#3a3a3a] max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
                            State-of-the-art infrastructure and cutting-edge technology enable us to deliver innovative solutions and exceptional results.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {itCapabilities.map((capability, index) => (
                            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 rounded-lg bg-[#95231c] flex items-center justify-center mr-4">
                                            <capability.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-[24px] font-[600] text-[#95231c]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                            {capability.title}
                                        </h3>
                                    </div>
                                    <p className="text-[16px] font-[400] leading-[24px] text-[#3a3a3a] mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                                        {capability.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {capability.items.map((item, itemIndex) => (
                                            <Badge
                                                key={itemIndex}
                                                variant="secondary"
                                                className="bg-[#d8bea5] text-[#95231c] hover:bg-[#ba7b72] hover:text-white transition-colors"
                                            >
                                                {item}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                                    <div className="relative rounded-2xl overflow-hidden h-80 shadow-xl">
                                        <ImageWithFallback
                                            src={index === 0
                                                ? "https://images.unsplash.com/photo-1680479611243-a072462e4d6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBjb21wdXRlcnN8ZW58MXx8fHwxNzU4NzIxODc5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                                                : index === 1
                                                    ? "https://images.unsplash.com/photo-1628158145409-9e222b56cc0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHSVMlMjBtYXBwaW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTg3MjE4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                                                    : "https://images.unsplash.com/photo-1680479611243-a072462e4d6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBjb21wdXRlcnN8ZW58MXx8fHwxNzU4NzIxODc5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                                            }
                                            alt={`${capability.title} visualization`}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#95231c]/60 to-transparent"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Capacity Showcase */}
            <section className="py-20 px-4 bg-[#d8bea5]/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-[32px] font-[600] leading-[40px] text-[#95231c] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Built for Scale
                        </h2>
                        <p className="text-[16px] font-[400] leading-[24px] text-[#3a3a3a] max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Our infrastructure and expertise enable us to handle projects of any scale, from residential developments to large-scale urban planning initiatives.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="p-8 text-center bg-white border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                            <div className="w-16 h-16 rounded-full bg-[#e1d385]/20 flex items-center justify-center mx-auto mb-6">
                                <Database className="w-8 h-8 text-[#95231c]" />
                            </div>
                            <h3 className="text-[20px] font-[600] text-[#95231c] mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                Data Processing
                            </h3>
                            <p className="text-[14px] font-[400] text-[#3a3a3a] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Process and analyze massive datasets with our high-performance computing infrastructure
                            </p>
                            <div className="text-[24px] font-[600] text-[#e1d385]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                10TB+ Daily
                            </div>
                        </Card>

                        <Card className="p-8 text-center bg-white border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                            <div className="w-16 h-16 rounded-full bg-[#e1d385]/20 flex items-center justify-center mx-auto mb-6">
                                <Cpu className="w-8 h-8 text-[#95231c]" />
                            </div>
                            <h3 className="text-[20px] font-[600] text-[#95231c] mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                Rendering Power
                            </h3>
                            <p className="text-[14px] font-[400] text-[#3a3a3a] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Generate photorealistic visualizations and complex 3D models with our render farm
                            </p>
                            <div className="text-[24px] font-[600] text-[#e1d385]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                24/7 Available
                            </div>
                        </Card>

                        <Card className="p-8 text-center bg-white border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                            <div className="w-16 h-16 rounded-full bg-[#e1d385]/20 flex items-center justify-center mx-auto mb-6">
                                <Cloud className="w-8 h-8 text-[#95231c]" />
                            </div>
                            <h3 className="text-[20px] font-[600] text-[#95231c] mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                Cloud Integration
                            </h3>
                            <p className="text-[14px] font-[400] text-[#3a3a3a] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Seamless collaboration and data sharing through our secure cloud infrastructure
                            </p>
                            <div className="text-[24px] font-[600] text-[#e1d385]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                Global Access
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 px-4 bg-[#95231c]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-[32px] font-[600] leading-[40px] text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Ready to build with expertise and technology?
                    </h2>
                    <p className="text-[18px] font-[400] leading-[28px] text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Let our experienced team and advanced infrastructure bring your vision to life. Contact us to discuss your next project.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-[#e1d385] text-[#95231c] hover:bg-[#d8bea5] transition-colors px-8 py-3 text-[16px] font-[500]"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            <Mail className="w-5 h-5 mr-2" />
                            Contact Us
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-[#95231c] transition-colors px-8 py-3 text-[16px] font-[500]"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            <Phone className="w-5 h-5 mr-2" />
                            Schedule Call
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}