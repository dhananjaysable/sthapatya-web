import { useState, useEffect } from "react";

function NavbarColorful() {
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 100) {
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
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                isScrolled
                    ? "bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 py-3 shadow-lg"
                    : "bg-gradient-to-r from-purple-500/80 via-pink-500/80 to-blue-500/80 py-5"
            }`}
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                            <span className="text-2xl">🚀</span>
                        </div>
                        <span className="text-2xl text-white drop-shadow-lg tracking-tight">CreativeBrand</span>
                    </div>

                    <div className="hidden lg:flex items-center space-x-2">
                        {["Home", "About", "Journey", "Projects"].map((item, index) => (
                            <a
                                key={item}
                                href={`/${item.toLowerCase()}`}
                                className={`px-5 py-2.5 text-white/90 hover:text-white rounded-full transition-all duration-300 hover:scale-105 ${
                                    index === 0 ? "bg-white/20 backdrop-blur-sm" : "hover:bg-white/20"
                                }`}
                            >
                                {item}
                            </a>
                        ))}

                        <div
                            className="relative"
                            onMouseEnter={() => setOpen(true)}
                            onMouseLeave={() => setOpen(false)}
                        >
                            <button className="px-5 py-2.5 text-white/90 hover:text-white rounded-full transition-all duration-300 hover:scale-105 hover:bg-white/20 flex items-center">
                                Services
                                <span className="ml-2 text-lg">✨</span>
                            </button>

                            {open && (
                                <div className="absolute right-0 mt-3 w-80 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                                    <div className="p-2">
                                        {[
                                            { label: "Overview", href: "/services", icon: "📊", color: "from-blue-400 to-blue-600" },
                                            { label: "Municipal Services", href: "/services/municipal", icon: "🏛️", color: "from-green-400 to-green-600" },
                                            { label: "IT Services", href: "/services/it", icon: "💻", color: "from-purple-400 to-purple-600" },
                                            { label: "GIS Services", href: "/services/gis", icon: "🗺️", color: "from-orange-400 to-orange-600" },
                                        ].map((service) => (
                                            <a
                                                key={service.label}
                                                href={service.href}
                                                className={`block p-4 m-1 text-white rounded-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-r ${service.color}`}
                                            >
                                                <div className="flex items-center space-x-3">
                                                    <span className="text-2xl">{service.icon}</span>
                                                    <span>{service.label}</span>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {["Infrastructure", "Careers", "Contact"].map((item) => (
                            <a
                                key={item}
                                href={`/${item.toLowerCase()}`}
                                className="px-5 py-2.5 text-white/90 hover:text-white rounded-full transition-all duration-300 hover:scale-105 hover:bg-white/20"
                            >
                                {item}
                            </a>
                        ))}

                        <button className="ml-4 px-6 py-2.5 bg-white text-purple-600 rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg">
                            Let's Talk
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavbarColorful;