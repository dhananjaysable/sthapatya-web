import { useState, useEffect } from "react";

function NavbarCorporate() {
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

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
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-slate-900 shadow-xl py-3"
                    : "bg-slate-800/95 py-4"
            }`}
        >
            <div className="w-full px-6">
                <div className="flex items-center justify-between">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <a href="/" className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                                <span className="text-white text-xl">🏗️</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white text-2xl tracking-wide font-light">STHAPATYA</span>
                                <span className="text-blue-400 text-sm tracking-widest uppercase -mt-1">Consultant</span>
                            </div>
                        </a>
                    </div>

                    {/* Navigation Menu */}
                    <div className="hidden lg:flex items-center space-x-0">
                        {["Home", "About", "Journey", "Projects"].map((item) => (
                            <a
                                key={item}
                                href={`/${item.toLowerCase()}`}
                                className="px-6 py-3 text-gray-300 hover:text-white hover:bg-slate-700 transition-all duration-200 border-b-2 border-transparent hover:border-blue-500"
                            >
                                {item}
                            </a>
                        ))}

                        <div
                            className="relative"
                            onMouseEnter={() => setOpen(true)}
                            onMouseLeave={() => setOpen(false)}
                        >
                            <button className="px-6 py-3 text-gray-300 hover:text-white hover:bg-slate-700 transition-all duration-200 border-b-2 border-transparent hover:border-blue-500 flex items-center">
                                Services
                                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>

                            {open && (
                                <div className="absolute right-0 mt-0 w-72 bg-slate-800 shadow-2xl border border-slate-600 overflow-hidden">
                                    {[
                                        { label: "Overview", href: "/services", desc: "Complete service overview" },
                                        { label: "Municipal Services", href: "/services/municipal", desc: "Government solutions" },
                                        { label: "IT Services", href: "/services/it", desc: "Technology consulting" },
                                        { label: "GIS Services", href: "/services/gis", desc: "Geographic information systems" },
                                    ].map((service) => (
                                        <a
                                            key={service.label}
                                            href={service.href}
                                            className="block px-6 py-4 text-gray-300 hover:text-white hover:bg-slate-700 transition-all duration-200 border-l-4 border-transparent hover:border-blue-500"
                                        >
                                            <div className="font-medium">{service.label}</div>
                                            <div className="text-sm text-gray-400">{service.desc}</div>
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>

                        {["Infrastructure", "Careers", "Contact"].map((item) => (
                            <a
                                key={item}
                                href={`/${item.toLowerCase()}`}
                                className="px-6 py-3 text-gray-300 hover:text-white hover:bg-slate-700 transition-all duration-200 border-b-2 border-transparent hover:border-blue-500"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavbarCorporate;