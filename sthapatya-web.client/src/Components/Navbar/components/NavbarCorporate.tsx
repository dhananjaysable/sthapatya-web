// import { useState, useEffect } from "react";

// function NavbarCorporate() {
//     const [open, setOpen] = useState(false);
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//     useEffect(() => {
//         const onScroll = () => {
//             if (window.scrollY > 50) {
//                 setIsScrolled(true);
//             } else {
//                 setIsScrolled(false);
//             }
//         };

//         window.addEventListener("scroll", onScroll);
//         return () => window.removeEventListener("scroll", onScroll);
//     }, []);

//     // Close mobile menu when clicking outside
//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth >= 1024) {
//                 setMobileMenuOpen(false);
//             }
//         };
//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     return (
//         <nav
//             className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
//                 isScrolled
//                     ? "bg-slate-900 shadow-xl py-3"
//                     : "bg-slate-800/95 py-4"
//             }`}
//         >
//             <div className="w-full px-4 sm:px-6 lg:px-8">
//                 <div className="flex items-center justify-between">
//                     {/* Logo Section */}
//                     <div className="flex items-center flex-shrink-0">
//                         <a href="/" className="flex items-center space-x-2 sm:space-x-3">
//                             <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
//                                 <span className="text-white text-xl">
//                                     <img src="./logo.png" alt="Logo" className="w-full h-full object-contain" />
//                                 </span>
//                             </div>
//                             <div className="flex flex-col">
//                                 <span className="text-white text-lg sm:text-xl lg:text-2xl tracking-wide font-light">
//                                     STHAPATYA
//                                 </span>
//                                 <span className="text-blue-400 text-xs sm:text-sm tracking-widest uppercase -mt-1">
//                                     Consultants
//                                 </span>
//                             </div>
//                         </a>
//                     </div>

//                     {/* Desktop Navigation Menu */}
//                     <div className="hidden lg:flex items-center space-x-0">
//                         {["Home", "About", "Journey", "Projects"].map((item) => (
//                             <a
//                                 key={item}
//                                 href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
//                                 className="px-4 xl:px-6 py-3 text-gray-300 hover:text-white hover:bg-slate-700 transition-all duration-200 border-b-2 border-transparent hover:border-blue-500 text-sm xl:text-base"
//                             >
//                                 {item}
//                             </a>
//                         ))}

//                         {/* Desktop Services Dropdown */}
//                         <div
//                             className="relative"
//                             onMouseEnter={() => setOpen(true)}
//                             onMouseLeave={() => setOpen(false)}
//                         >
//                             <button className="px-4 xl:px-6 py-3 text-gray-300 hover:text-white hover:bg-slate-700 transition-all duration-200 border-b-2 border-transparent hover:border-blue-500 flex items-center text-sm xl:text-base">
//                                 Services
//                                 <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                                     <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                                 </svg>
//                             </button>

//                             {open && (
//                                 <div className="absolute right-0 mt-0 w-72 bg-slate-800 shadow-2xl border border-slate-600 overflow-hidden z-[10000]">
//                                     {[
//                                         { label: "Overview", href: "/services", desc: "Complete service overview" },
//                                         { label: "Municipal Services", href: "/services/municipal", desc: "Government solutions" },
//                                         { label: "IT Services", href: "/services/it", desc: "Technology consulting" },
//                                         { label: "GIS Services", href: "/services/gis", desc: "Geographic information systems" },
//                                     ].map((service) => (
//                                         <a
//                                             key={service.label}
//                                             href={service.href}
//                                             className="block px-6 py-4 text-gray-300 hover:text-white hover:bg-slate-700 transition-all duration-200 border-l-4 border-transparent hover:border-blue-500"
//                                         >
//                                             <div className="font-medium">{service.label}</div>
//                                             <div className="text-sm text-gray-400">{service.desc}</div>
//                                         </a>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>

//                         {["Infrastructure", "Careers", "Contact"].map((item) => (
//                             <a
//                                 key={item}
//                                 href={`/${item.toLowerCase()}`}
//                                 className="px-4 xl:px-6 py-3 text-gray-300 hover:text-white hover:bg-slate-700 transition-all duration-200 border-b-2 border-transparent hover:border-blue-500 text-sm xl:text-base"
//                             >
//                                 {item}
//                             </a>
//                         ))}
//                     </div>

//                     {/* Mobile Menu Button (Hamburger) */}
//                     <button
//                         onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                         className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-200"
//                         aria-expanded={mobileMenuOpen}
//                         aria-label="Toggle navigation menu"
//                     >
//                         <svg
//                             className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                         </svg>
//                         <svg
//                             className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                         </svg>
//                     </button>
//                 </div>

//                 {/* Mobile Menu */}
//                 <div
//                     className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
//                         mobileMenuOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
//                     }`}
//                 >
//                     <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/50 rounded-lg">
//                         {["Home", "About", "Journey", "Projects"].map((item) => (
//                             <a
//                                 key={item}
//                                 href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
//                                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700 transition-all duration-200"
//                                 onClick={() => setMobileMenuOpen(false)}
//                             >
//                                 {item}
//                             </a>
//                         ))}

//                         {/* Mobile Services Accordion */}
//                         <div className="space-y-1">
//                             <button
//                                 onClick={() => setOpen(!open)}
//                                 className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700 transition-all duration-200"
//                             >
//                                 <span>Services</span>
//                                 <svg
//                                     className={`ml-2 w-4 h-4 transition-transform duration-200 ${
//                                         open ? 'rotate-180' : ''
//                                     }`}
//                                     fill="currentColor"
//                                     viewBox="0 0 20 20"
//                                 >
//                                     <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                                 </svg>
//                             </button>

//                             {/* Mobile Services Submenu */}
//                             <div
//                                 className={`transition-all duration-300 ease-in-out overflow-hidden ${
//                                     open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//                                 }`}
//                             >
//                                 <div className="pl-4 space-y-1">
//                                     {[
//                                         { label: "Overview", href: "/services", desc: "Complete service overview" },
//                                         { label: "Municipal Services", href: "/services/municipal", desc: "Government solutions" },
//                                         { label: "IT Services", href: "/services/it", desc: "Technology consulting" },
//                                         { label: "GIS Services", href: "/services/gis", desc: "Geographic information systems" },
//                                     ].map((service) => (
//                                         <a
//                                             key={service.label}
//                                             href={service.href}
//                                             className="block px-3 py-2 rounded-md text-sm text-gray-400 hover:text-white hover:bg-slate-700 transition-all duration-200 border-l-2 border-transparent hover:border-blue-500"
//                                             onClick={() => {
//                                                 setMobileMenuOpen(false);
//                                                 setOpen(false);
//                                             }}
//                                         >
//                                             <div className="font-medium">{service.label}</div>
//                                             <div className="text-xs text-gray-500 mt-0.5">{service.desc}</div>
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>

//                         {["Infrastructure", "Careers", "Contact"].map((item) => (
//                             <a
//                                 key={item}
//                                 href={`/${item.toLowerCase()}`}
//                                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700 transition-all duration-200"
//                                 onClick={() => setMobileMenuOpen(false)}
//                             >
//                                 {item}
//                             </a>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default NavbarCorporate;

import { motion, useInView, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";

// Responsive Navbar Component
function NavbarCorporate() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        mobileMenuOpen &&
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".hamburger-btn")
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-sm shadow-xl py-2 md:py-3"
            : "bg-slate-800/90 backdrop-blur-sm py-3 md:py-4"
        }`}
      >
        <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Section - Responsive */}
            <div className="flex items-center flex-shrink-0">
              <a href="/" className="flex items-center space-x-2 sm:space-x-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg shadow-lg sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-blue-600">
                  <span className="text-sm text-white sm:text-lg md:text-xl">
                    <img src="./logo.png" alt="Logo" />
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-light tracking-wide text-white sm:text-lg md:text-xl lg:text-2xl">
                    STHAPATYA
                  </span>
                  <span className="-mt-1 text-xs tracking-widest text-blue-400 uppercase sm:text-xs md:text-sm">
                    CONSULTANTS
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation Menu - Hidden on mobile/tablet */}
            <div className="items-center hidden space-x-0 xl:flex">
              {["Home", "About", "Journey", "Projects"].map((item) => (
                <a
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="px-4 py-3 text-sm text-gray-300 transition-all duration-200 border-b-2 border-transparent lg:px-6 hover:text-white hover:bg-slate-700/50 hover:border-blue-500 lg:text-base"
                >
                  {item}
                </a>
              ))}

              <div
                className="relative"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <button className="flex items-center px-4 py-3 text-sm text-gray-300 transition-all duration-200 border-b-2 border-transparent lg:px-6 hover:text-white hover:bg-slate-700/50 hover:border-blue-500 lg:text-base">
                  Services
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {open && (
                  <div className="absolute right-0 mt-0 overflow-hidden border rounded-lg shadow-2xl w-72 bg-slate-800/95 backdrop-blur-sm border-slate-600">
                    {[
                      {
                        label: "Overview",
                        href: "/services",
                        desc: "Complete service overview",
                      },
                      {
                        label: "Municipal Services",
                        href: "/services/municipal",
                        desc: "Government solutions",
                      },
                      {
                        label: "IT Services",
                        href: "/services/it",
                        desc: "Technology consulting",
                      },
                      {
                        label: "GIS Services",
                        href: "/services/gis",
                        desc: "Geographic information systems",
                      },
                    ].map((service) => (
                      <a
                        key={service.label}
                        href={service.href}
                        className="block px-6 py-4 text-gray-300 transition-all duration-200 border-l-4 border-transparent hover:text-white hover:bg-slate-700/50 hover:border-blue-500"
                      >
                        <div className="text-sm font-medium lg:text-base">
                          {service.label}
                        </div>
                        <div className="text-xs text-gray-400 lg:text-sm">
                          {service.desc}
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {["Infrastructure", "Careers", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="px-4 py-3 text-sm text-gray-300 transition-all duration-200 border-b-2 border-transparent lg:px-6 hover:text-white hover:bg-slate-700/50 hover:border-blue-500 lg:text-base"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button - Shows on mobile and tablet */}
            <button
              onClick={toggleMobileMenu}
              className="flex flex-col items-center justify-center w-8 h-8 space-y-1 hamburger-btn xl:hidden sm:w-10 sm:h-10 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <div
                className={`w-5 sm:w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></div>
              <div
                className={`w-5 sm:w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-5 sm:w-6 h-0.5 bg-gray-300 transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 xl:hidden"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu - Responsive width */}
      <div
        className={`mobile-menu fixed top-0 right-0 h-full w-full sm:w-96 md:w-80 max-w-full bg-slate-900/95 backdrop-blur-sm shadow-2xl z-50 transform transition-transform duration-300 xl:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b sm:p-6 border-slate-700">
            <span className="text-lg font-light text-white sm:text-xl">
              Menu
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center w-8 h-8 text-gray-400 hover:text-white"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex-1 py-2 overflow-y-auto sm:py-4">
            <div className="space-y-1">
              {["Home", "About", "Journey", "Projects"].map((item) => (
                <a
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="block px-4 py-3 text-base text-gray-300 transition-colors duration-200 border-l-4 border-transparent sm:px-6 sm:py-4 hover:text-white hover:bg-slate-800/50 hover:border-blue-500 sm:text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}

              {/* Mobile Services Submenu */}
              <div className="pt-2 mt-2 border-t border-slate-700">
                <div className="px-4 py-2 text-sm font-medium tracking-wider text-blue-400 uppercase sm:px-6 sm:py-3">
                  Services
                </div>
                {[
                  {
                    label: "Overview",
                    href: "/services",
                    desc: "Complete service overview",
                  },
                  {
                    label: "Municipal Services",
                    href: "/services/municipal",
                    desc: "Government solutions",
                  },
                  {
                    label: "IT Services",
                    href: "/services/it",
                    desc: "Technology consulting",
                  },
                  {
                    label: "GIS Services",
                    href: "/services/gis",
                    desc: "Geographic information systems",
                  },
                ].map((service) => (
                  <a
                    key={service.label}
                    href={service.href}
                    className="block px-6 py-2 text-gray-300 transition-colors duration-200 border-l-4 border-transparent sm:px-8 sm:py-3 hover:text-white hover:bg-slate-800/50 hover:border-blue-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="text-sm font-medium sm:text-base">
                      {service.label}
                    </div>
                    <div className="mt-1 text-xs text-gray-400 sm:text-sm">
                      {service.desc}
                    </div>
                  </a>
                ))}
              </div>

              <div className="pt-2 mt-2 border-t border-slate-700">
                {["Infrastructure", "Careers", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="block px-4 py-3 text-base text-gray-300 transition-colors duration-200 border-l-4 border-transparent sm:px-6 sm:py-4 hover:text-white hover:bg-slate-800/50 hover:border-blue-500 sm:text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default NavbarCorporate;

