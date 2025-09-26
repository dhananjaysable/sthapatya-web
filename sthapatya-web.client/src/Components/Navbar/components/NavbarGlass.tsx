import { useState, useEffect } from "react";

function NavbarGlass() {
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
                    ? "bg-white/10 backdrop-blur-md border-b border-white/20 py-4"
                    : "bg-black/20 backdrop-blur-sm py-6"
            }`}
        >
            <div className="max-w-6xl mx-auto px-8">
                <div className="flex items-center justify-between">
                    <div className="text-2xl tracking-tight text-white drop-shadow-lg">
                        ✦ Brand
                    </div>

                    <div className="hidden lg:flex items-center space-x-1">
                        {["Home", "About", "Journey", "Projects"].map((item) => (
                            <a
                                key={item}
                                href={`/${item.toLowerCase()}`}
                                className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 backdrop-blur-sm"
                            >
                                {item}
                            </a>
                        ))}

                        <div
                            className="relative"
                            onMouseEnter={() => setOpen(true)}
                            onMouseLeave={() => setOpen(false)}
                        >
                            <button className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 backdrop-blur-sm flex items-center">
                                Services
                                <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>

                            {open && (
                                <div className="absolute right-0 mt-2 w-64 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
                                    {[
                                        { label: "Overview", href: "/services" },
                                        { label: "Municipal Services", href: "/services/municipal" },
                                        { label: "IT Services", href: "/services/it" },
                                        { label: "GIS Services", href: "/services/gis" },
                                    ].map((service) => (
                                        <a
                                            key={service.label}
                                            href={service.href}
                                            className="block px-6 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
                                        >
                                            {service.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>

                        {["Infrastructure", "Careers", "Contact"].map((item) => (
                            <a
                                key={item}
                                href={`/${item.toLowerCase()}`}
                                className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 backdrop-blur-sm"
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

export default NavbarGlass;