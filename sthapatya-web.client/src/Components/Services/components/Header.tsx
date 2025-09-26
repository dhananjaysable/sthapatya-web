import { useState, useEffect, useRef } from 'react';

// Simple icons as SVGs to avoid import issues
const ChevronDownIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const Building2Icon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const ServerIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" strokeWidth={2}/>
    <line x1="8" y1="21" x2="16" y2="21" strokeWidth={2}/>
    <line x1="12" y1="17" x2="12" y2="21" strokeWidth={2}/>
  </svg>
);

const MapIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polygon points="1,6 1,22 8,18 16,22 23,18 23,2 16,6 8,2" strokeWidth={2}/>
  </svg>
);

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="3" y1="6" x2="21" y2="6" strokeWidth={2}/>
    <line x1="3" y1="12" x2="21" y2="12" strokeWidth={2}/>
    <line x1="3" y1="18" x2="21" y2="18" strokeWidth={2}/>
  </svg>
);

const XIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="18" y1="6" x2="6" y2="18" strokeWidth={2}/>
    <line x1="6" y1="6" x2="18" y2="18" strokeWidth={2}/>
  </svg>
);

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Header({ currentPage, onPageChange }: HeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const services = [
    { id: 'municipal', label: 'Municipal Services', icon: Building2Icon },
    { id: 'it', label: 'IT Services', icon: ServerIcon },
    { id: 'gis', label: 'GIS Services', icon: MapIcon },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 hover:opacity-90 transition-opacity duration-200">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center shadow-md">
              <Building2Icon />
            </div>
            <h1 className="text-xl font-medium">Municipal Portal</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              className="hover:text-accent transition-colors duration-200 hover:-translate-y-0.5 transition-transform"
            >
              Home
            </a>
            
            {/* Services Overview */}
            <button
              onClick={() => onPageChange('services')}
              className={`hover:text-accent transition-all duration-200 hover:-translate-y-0.5 ${
                currentPage === 'services' ? 'text-accent font-medium' : ''
              }`}
            >
              Services Overview
            </button>
            
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-1 hover:text-accent transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Detailed Services</span>
                <div
                  className={`transition-transform duration-300 ${
                    isDropdownOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  <ChevronDownIcon />
                </div>
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-card rounded-xl shadow-xl border border-border z-50 overflow-hidden animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200">
                  <div className="py-2">
                    {services.map((service) => {
                      const Icon = service.icon;
                      return (
                        <button
                          key={service.id}
                          onClick={() => {
                            onPageChange(service.id);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-accent/10 transition-all duration-200 hover:translate-x-1 ${
                            currentPage === service.id ? 'bg-accent/20 text-accent font-medium' : 'text-card-foreground'
                          }`}
                        >
                          <Icon />
                          <span>{service.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <a 
              href="#" 
              className="hover:text-accent transition-all duration-200 hover:-translate-y-0.5"
            >
              About
            </a>
            <a 
              href="#" 
              className="hover:text-accent transition-all duration-200 hover:-translate-y-0.5"
            >
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:text-accent transition-colors duration-200 hover:scale-110 transition-transform"
          >
            {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-primary-foreground/20 animate-in slide-in-from-top-2 duration-300">
            <div className="py-4 space-y-2">
              <a 
                href="#" 
                className="block px-4 py-2 hover:bg-primary-foreground/10 transition-all duration-200 rounded-lg mx-2 hover:translate-x-1"
              >
                Home
              </a>
              
              <button
                onClick={() => {
                  onPageChange('services');
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 hover:bg-primary-foreground/10 transition-all duration-200 rounded-lg mx-2 hover:translate-x-1 ${
                  currentPage === 'services' ? 'text-accent font-medium' : ''
                }`}
              >
                Services Overview
              </button>

              <div className="px-4 py-2 mx-2">
                <div className="text-sm font-medium mb-2 text-primary-foreground/80">Detailed Services</div>
                <div className="space-y-1 ml-2">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <button
                        key={service.id}
                        onClick={() => {
                          onPageChange(service.id);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-primary-foreground/10 transition-all duration-200 rounded-lg hover:translate-x-1 ${
                          currentPage === service.id ? 'bg-accent/20 text-accent font-medium' : ''
                        }`}
                      >
                        <Icon />
                        <span className="text-sm">{service.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <a 
                href="#" 
                className="block px-4 py-2 hover:bg-primary-foreground/10 transition-all duration-200 rounded-lg mx-2 hover:translate-x-1"
              >
                About
              </a>
              <a 
                href="#" 
                className="block px-4 py-2 hover:bg-primary-foreground/10 transition-all duration-200 rounded-lg mx-2 hover:translate-x-1"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}