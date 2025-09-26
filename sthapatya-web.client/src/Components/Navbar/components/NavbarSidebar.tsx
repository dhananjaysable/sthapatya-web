import { useState, useEffect } from "react";

function NavbarSidebar() {
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                    isScrolled
                        ? "bg-white shadow-lg py-3"
                        : "bg-white/95 backdrop-blur-sm py-4"
                }`}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                            >
                                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                            <div className="text-2xl text-gray-800 tracking-tight">Brand</div>
                        </div>

                        <div className="hidden lg:flex items-center space-x-6">
                            <div
                                className="relative"
                                onMouseEnter={() => setOpen(true)}
                                onMouseLeave={() => setOpen(false)}
                            >
                                <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors">
                                    <span>Services</span>
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>

                                {open && (
                                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                                        {[
                                            { label: "Overview", href: "/services" },
                                            { label: "Municipal Services", href: "/services/municipal" },
                                            { label: "IT Services", href: "/services/it" },
                                            { label: "GIS Services", href: "/services/gis" },
                                        ].map((service) => (
                                            <a
                                                key={service.label}
                                                href={service.href}
                                                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                                            >
                                                {service.label}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-80 bg-gray-900 text-white z-40 transform transition-transform duration-300 ${
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="p-6">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-xl">Navigation</h2>
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <nav className="space-y-2">
                        {[
                            { label: "Home", href: "/", icon: "🏠" },
                            { label: "About", href: "/about", icon: "ℹ️" },
                            { label: "Journey", href: "/journey", icon: "🗺️" },
                            { label: "Projects", href: "/projects", icon: "📁" },
                            { label: "Infrastructure", href: "/infrastructure", icon: "🏗️" },
                            { label: "Careers", href: "/careers", icon: "💼" },
                            { label: "Contact", href: "/contact", icon: "📞" },
                        ].map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors"
                                onClick={() => setSidebarOpen(false)}
                            >
                                <span className="text-xl">{item.icon}</span>
                                <span>{item.label}</span>
                            </a>
                        ))}

                        <div className="pt-4 border-t border-gray-700">
                            <div className="text-sm text-gray-400 mb-3">Services</div>
                            {[
                                { label: "Overview", href: "/services" },
                                { label: "Municipal Services", href: "/services/municipal" },
                                { label: "IT Services", href: "/services/it" },
                                { label: "GIS Services", href: "/services/gis" },
                            ].map((service) => (
                                <a
                                    key={service.label}
                                    href={service.href}
                                    className="block p-3 pl-6 rounded-lg hover:bg-gray-800 transition-colors text-gray-300 hover:text-white"
                                    onClick={() => setSidebarOpen(false)}
                                >
                                    {service.label}
                                </a>
                            ))}
                        </div>
                    </nav>
                </div>
            </div>

            {/* Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </>
    );
}

export default NavbarSidebar;