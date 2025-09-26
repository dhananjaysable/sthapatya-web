import { useState, useEffect } from "react";

function NavbarMinimal() {
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
                    ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 py-3"
                    : "bg-transparent py-6"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <div className="text-xl tracking-tight">
                    <span className={`transition-colors ${isScrolled ? "text-gray-900" : "text-white"}`}>
                        Brand
                    </span>
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    {["Home", "About", "Journey", "Projects"].map((item) => (
                        <a
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            className={`text-sm tracking-wide transition-colors hover:opacity-70 ${
                                isScrolled ? "text-gray-700" : "text-white/90"
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
                        <button
                            className={`text-sm tracking-wide transition-colors hover:opacity-70 ${
                                isScrolled ? "text-gray-700" : "text-white/90"
                            }`}
                        >
                            Services
                        </button>

                        {open && (
                            <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                                {[
                                    { label: "Overview", href: "/services" },
                                    { label: "Municipal Services", href: "/services/municipal" },
                                    { label: "IT Services", href: "/services/it" },
                                    { label: "GIS Services", href: "/services/gis" },
                                ].map((service) => (
                                    <a
                                        key={service.label}
                                        href={service.href}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
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
                            className={`text-sm tracking-wide transition-colors hover:opacity-70 ${
                                isScrolled ? "text-gray-700" : "text-white/90"
                            }`}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default NavbarMinimal;