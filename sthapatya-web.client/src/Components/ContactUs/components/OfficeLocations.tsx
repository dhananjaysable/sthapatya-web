import { MapPin, Phone, Mail, Navigation, Clock, Users } from 'lucide-react';

export function OfficeLocations() {
  const offices = [
    {
      name: "Head Office – Amravati",
      address: "123 Main Street, Amravati, Maharashtra 444601",
      phone: "+91 98765 43210",
      email: "amravati@sthapatya.com",
      manager: "Rajesh Kumar",
      established: "1995",
      teamSize: "45+ Engineers",
      specialization: "Structural & Civil Engineering",
      coordinates: { lat: 20.9374, lng: 77.7796 },
      isHeadOffice: true
    },
    {
      name: "Pune Office",
      address: "456 Tech Park, Hinjewadi, Pune, Maharashtra 411001",
      phone: "+91 98765 43211",
      email: "pune@sthapatya.com",
      manager: "Priya Sharma",
      established: "2005",
      teamSize: "30+ Engineers",
      specialization: "MEP & Fire Safety",
      coordinates: { lat: 18.5204, lng: 73.8567 }
    },
    {
      name: "Panvel Office",
      address: "789 Business Center, Sector 5, Panvel, Maharashtra 410206",
      phone: "+91 98765 43212",
      email: "panvel@sthapatya.com",
      manager: "Anil Patil",
      established: "2012",
      teamSize: "25+ Engineers",
      specialization: "Infrastructure & Urban Planning",
      coordinates: { lat: 19.0176, lng: 73.1104 }
    },
    {
      name: "Thane Office",
      address: "321 Corporate Hub, Wagle Estate, Thane, Maharashtra 400601",
      phone: "+91 98765 43213",
      email: "thane@sthapatya.com",
      manager: "Sunita Joshi",
      established: "2018",
      teamSize: "20+ Engineers",
      specialization: "Green Building & Sustainability",
      coordinates: { lat: 19.2183, lng: 72.9781 }
    }
  ];

  return (
    <section id="office-locations" className="py-20" style={{ backgroundColor: '#fefefe' }}>
          <div className="max-w-[90rem] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ color: '#95231c' }}>Our Office Locations</h2>
          <p className="max-w-2xl mx-auto" style={{ color: '#ba7b72' }}>
            Strategically located across Maharashtra to serve you better. Each office specializes 
            in different aspects of architectural and engineering consultancy.
          </p>
          <div className="w-24 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: '#e1d385' }}></div>
        </div>

        {/* Offices Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {offices.map((office, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 ${office.isHeadOffice ? 'ring-2' : ''}`}
              style={{ 
                backgroundColor: '#f3f3f3',
                ringColor: office.isHeadOffice ? '#e1d385' : 'transparent'
              }}
            >
              {office.isHeadOffice && (
                <div 
                  className="absolute -top-3 left-8 px-4 py-1 rounded-full text-xs font-medium"
                  style={{ backgroundColor: '#e1d385', color: '#95231c' }}
                >
                  Head Office
                </div>
              )}
              
              {/* Office Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="mb-2" style={{ color: '#95231c' }}>{office.name}</h3>
                  <p className="text-sm font-medium" style={{ color: '#ba7b72' }}>{office.specialization}</p>
                </div>
                <div className="p-3 rounded-full" style={{ backgroundColor: '#e1d385' }}>
                  <MapPin className="w-6 h-6" style={{ color: '#95231c' }} />
                </div>
              </div>

              {/* Office Details */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: '#95231c' }} />
                  <p className="text-sm font-medium leading-relaxed" style={{ color: '#333333' }}>{office.address}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 flex-shrink-0" style={{ color: '#95231c' }} />
                  <a href={`tel:${office.phone}`} className="text-sm font-medium hover:underline transition-colors duration-200" style={{ color: '#333333' }}
                     onMouseEnter={(e) => e.target.style.color = '#95231c'}
                     onMouseLeave={(e) => e.target.style.color = '#333333'}>
                    {office.phone}
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 flex-shrink-0" style={{ color: '#95231c' }} />
                  <a href={`mailto:${office.email}`} className="text-sm font-medium hover:underline transition-colors duration-200" style={{ color: '#333333' }}
                     onMouseEnter={(e) => e.target.style.color = '#95231c'}
                     onMouseLeave={(e) => e.target.style.color = '#333333'}>
                    {office.email}
                  </a>
                </div>
              </div>

              {/* Office Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t" style={{ borderColor: '#e1d385' }}>
                <div className="text-center">
                  <Clock className="w-5 h-5 mx-auto mb-1" style={{ color: '#95231c' }} />
                  <p className="text-xs font-medium" style={{ color: '#555555' }}>Since {office.established}</p>
                </div>
                <div className="text-center">
                  <Users className="w-5 h-5 mx-auto mb-1" style={{ color: '#95231c' }} />
                  <p className="text-xs font-medium" style={{ color: '#555555' }}>{office.teamSize}</p>
                </div>
                <div className="text-center">
                  <Navigation className="w-5 h-5 mx-auto mb-1" style={{ color: '#95231c' }} />
                  <button 
                    className="text-xs font-medium hover:underline transition-colors duration-200" 
                    style={{ color: '#ba7b72' }}
                    onMouseEnter={(e) => e.target.style.color = '#95231c'}
                    onMouseLeave={(e) => e.target.style.color = '#ba7b72'}
                    onClick={() => window.open(`https://maps.google.com/?q=${office.coordinates.lat},${office.coordinates.lng}`, '_blank')}
                  >
                    Get Directions
                  </button>
                </div>
              </div>

              {/* Interactive Map Placeholder */}
              <div className="mt-6 h-40 rounded-lg overflow-hidden relative" style={{ backgroundColor: '#dddcdb' }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div 
                      className="w-8 h-8 mx-auto mb-2 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: '#e1d385' }}
                    >
                      <MapPin className="w-4 h-4" style={{ color: '#95231c' }} />
                    </div>
                    <p className="text-xs font-medium" style={{ color: '#95231c' }}>
                      {office.name}
                    </p>
                    <p className="text-xs mt-1 font-medium" style={{ color: '#ba7b72' }}>
                      Lat: {office.coordinates.lat}, Lng: {office.coordinates.lng}
                    </p>
                  </div>
                </div>
                
                {/* Simulated Map Grid */}
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-8 grid-rows-6 h-full">
                    {Array.from({ length: 48 }).map((_, i) => (
                      <div key={i} className="border border-gray-300"></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Office Manager */}
              <div className="mt-4 text-center">
                <p className="text-xs font-medium" style={{ color: '#555555' }}>
                  Office Manager: <span style={{ color: '#95231c' }}>{office.manager}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}