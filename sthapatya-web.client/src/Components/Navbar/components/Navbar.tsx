import { useState, useEffect } from "react";

function Navbar() {
    const [open, setOpen] = useState(false);
    
    const [isScrolled, setIsScrolled] = useState(false);
    // Close dropdown if clicking outside

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 700) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    
    return (
        <div
            className={`fixed top-0 left-0 w-full flex justify-end gap-4 z-50 transition-all duration-400 px-8 ${isScrolled
                ? "bg-[#b7b39f] py-0 text-black shadow-md"
                : "bg-black/30 py-5 text-white"
                }`}
        >
            <a href="/" className="nav-btn">Home</a>
            <a href="/about" className="nav-btn">About</a>
            <a href="/journey" className="nav-btn">Journey</a>
            <a href="/projects" className="nav-btn">Projects</a>

            <div
                className="relative"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
            >
                <button className="nav-btn flex items-center">
                    Services <span className="ml-1">▼</span>
                </button>

                {open && (
                    <div
                        className="dropdown absolute right-0 rounded-lg shadow-lg whitespace-nowrap
                 bg-white dark:bg-gray-800
                 border border-gray-200 dark:border-gray-700
                 transition-all duration-200"
                    >
                        <a
                            href="/services"
                            className="block px-4 py-2 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            Overview
                        </a>
                        <a
                            href="/services/municipal"
                            className="block px-4 py-2 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            Municipal Services
                        </a>
                        <a
                            href="/services/it"
                            className="block px-4 py-2 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            IT Services
                        </a>
                        <a
                            href="/services/gis"
                            className="block px-4 py-2 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            GIS Services
                        </a>
                    </div>
                )}
            </div>

            <a href="/infrastructure" className="nav-btn">Infrastructure</a>
            <a href="/careers" className="nav-btn">Careers</a>
            <a href="/contact" className="nav-btn">Contact</a>
            
        </div>

    );
}

export default Navbar;