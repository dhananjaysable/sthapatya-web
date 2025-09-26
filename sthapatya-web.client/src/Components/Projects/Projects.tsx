import { ProjectCard } from './components/ProjectCard';
import { ProjectCarousel } from './components/ProjectCarousel';
import { WorkWriteup } from './components/WorkWriteup';
import { Button } from './components/ui/button';
import { ArrowRight, Building2, Users, TrendingUp } from 'lucide-react';
import "./styles/Projects.css";
import "./styles/globals.css";
const projectsData = [
    {
        id: 1,
        municipalityName: "Amravati Mahanagar Palika",
        image: "https://images.unsplash.com/photo-1688736867121-b8adc15233d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtdW5pY2lwYWxpdHklMjBidWlsZGluZyUyMGdvdmVybm1lbnR8ZW58MXx8fHwxNzU3OTI0MzY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        beforeData: {
            taxCollectionRate: 55,
            revenue: 15,
            processes: "Manual, outdated processes"
        },
        afterData: {
            taxCollectionRate: 85,
            revenue: 28,
            processes: "GIS mapping and automated assessment software"
        },
        impactMetrics: {
            revenueIncrease: 87,
            errorReduction: 70,
            satisfaction: 92
        },
        description: "We implemented a comprehensive GIS-based property tax management system for Amravati Mahanagar Palika, integrating automated assessment software with real-time mapping capabilities. The digital transformation included citizen-facing portals for online payments, transparent assessment viewing, and complaint tracking. Our solution streamlined revenue collection processes while significantly improving citizen satisfaction through enhanced transparency and accessibility.",
        isReversed: false
    },
    {
        id: 2,
        municipalityName: "Nagpur Municipal Corporation",
        image: "https://images.unsplash.com/photo-1644321939012-840bf13ea6d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGNpdHklMjBkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb258ZW58MXx8fHwxNzU3OTI0MzY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        beforeData: {
            taxCollectionRate: 62,
            revenue: 45,
            processes: "Fragmented departmental systems"
        },
        afterData: {
            taxCollectionRate: 78,
            revenue: 68,
            processes: "Integrated smart city management platform"
        },
        impactMetrics: {
            revenueIncrease: 51,
            errorReduction: 65,
            satisfaction: 88
        },
        description: "For Nagpur Municipal Corporation, we developed an integrated smart city management platform that unified previously fragmented departmental systems. The solution includes modules for property management, trade licensing, building permissions, and citizen services. Advanced analytics and reporting capabilities provide real-time insights for better decision-making, while mobile-first design ensures accessibility across all demographic segments.",
        isReversed: true
    },
    {
        id: 3,
        municipalityName: "Pune Municipal Corporation",
        image: "https://images.unsplash.com/photo-1732025407668-2e1c2f67f810?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHBsYW5uaW5nJTIwYWVyaWFsJTIwdmlld3xlbnwxfHx8fDE3NTc5MjQzNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        beforeData: {
            taxCollectionRate: 48,
            revenue: 78,
            processes: "Paper-based assessment system"
        },
        afterData: {
            taxCollectionRate: 82,
            revenue: 142,
            processes: "AI-powered assessment with satellite imagery"
        },
        impactMetrics: {
            revenueIncrease: 82,
            errorReduction: 85,
            satisfaction: 94
        },
        description: "Our AI-powered property assessment system for Pune Municipal Corporation leverages satellite imagery and machine learning algorithms to ensure accurate and fair property valuations. The system automatically detects property modifications, updates assessments in real-time, and provides transparent explanations for all calculations. Integration with banking systems enables seamless payment processing while maintaining complete audit trails.",
        isReversed: false
    },
    {
        id: 4,
        municipalityName: "Indore Municipal Corporation",
        image: "https://images.unsplash.com/photo-1653118554222-23fff03cccc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjaXR5JTIwc2t5bGluZSUyMG1vZGVybnxlbnwxfHx8fDE3NTc5MjQzNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        beforeData: {
            taxCollectionRate: 58,
            revenue: 52,
            processes: "Multiple manual touchpoints"
        },
        afterData: {
            taxCollectionRate: 89,
            revenue: 89,
            processes: "Single-window digital service delivery"
        },
        impactMetrics: {
            revenueIncrease: 71,
            errorReduction: 78,
            satisfaction: 96
        },
        description: "We designed and implemented a comprehensive single-window digital service delivery platform for Indore Municipal Corporation. The system consolidates all municipal services - from property tax to trade licensing - into one user-friendly interface. Features include multi-language support, digital document management, automated workflow routing, and integration with state and central government databases for seamless verification processes.",
        isReversed: true
    }
];

export default function Projects() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <div className="bg-[#fefefe] py-20 px-6">
                <div className="max-w-[90rem] mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#95231c] mb-4">Our Projects</h2>
                    <p className="text-xl text-[#ba7b72] max-w-[90rem] mx-auto">
                        Driving transparency and efficiency in municipal governance through innovative technology solutions
                    </p>

                    {/* Key Stats */}
                    <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-[90rem] mx-auto">
                        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md border-t-4 border-[#95231c]">
                            <Building2 className="w-12 h-12 text-[#95231c] mb-3" />
                            <div className="text-3xl font-bold text-[#95231c]">15+</div>
                            <div className="text-[#ba7b72]">Municipal Corporations</div>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md border-t-4 border-[#e1d385]">
                            <TrendingUp className="w-12 h-12 text-[#95231c] mb-3" />
                            <div className="text-3xl font-bold text-[#95231c]">₹450+ Cr</div>
                            <div className="text-[#ba7b72]">Additional Revenue Generated</div>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md border-t-4 border-[#95231c]">
                            <Users className="w-12 h-12 text-[#95231c] mb-3" />
                            <div className="text-3xl font-bold text-[#95231c]">2M+</div>
                            <div className="text-[#ba7b72]">Citizens Served</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Work Write-up Section */}
            <WorkWriteup />

            {/* Projects Section */}
            <div className="space-y-0">
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            {/* Additional Projects Carousel */}
            <ProjectCarousel />

            {/* Call to Action */}
            <div className="bg-[#95231c] py-20 px-6 relative overflow-hidden">
                <div className="max-w-[90rem] mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#fefefe] mb-6">
                        Transform Your Municipal Governance
                    </h2>
                    <p className="text-xl text-[#fefefe]/90 mb-8 max-w-[90rem] mx-auto">
                        Partnering with Mahanagar Palikas & City Councils to transform urban governance. Let's work together to build smarter, more efficient cities.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            className="bg-[#fefefe] text-[#95231c] hover:bg-[#f3f3f3] px-8 py-6 text-lg font-semibold rounded-xl shadow-lg flex items-center gap-2"
                        >
                            Start a Project With Us
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                        <Button
                            variant="outline"
                            className="border-[#fefefe] text-[#fefefe] hover:bg-[#fefefe] hover:text-[#95231c] px-8 py-6 text-lg font-semibold rounded-xl flex items-center gap-2"
                        >
                            View Case Studies
                        </Button>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-12 pt-8 border-t border-[#fefefe]/20">
                        <p className="text-[#fefefe]/80 mb-2">Ready to discuss your project?</p>
                        <p className="text-[#fefefe] font-semibold">Contact us: info@sthapatyaconsultants.com | +91 98765 43210</p>
                    </div>
                </div>
            </div>
        </div>
    );
}