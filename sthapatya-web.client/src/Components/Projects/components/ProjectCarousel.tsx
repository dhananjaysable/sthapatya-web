import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, TrendingUp } from 'lucide-react';

interface CarouselProject {
  id: number;
  municipalityName: string;
  image: string;
  impactSummary: string;
  revenueIncrease: number;
  description: string;
}

const carouselProjects: CarouselProject[] = [
  {
    id: 5,
    municipalityName: "Nashik Municipal Corporation",
    image: "https://images.unsplash.com/photo-1712921855566-9631f61f47ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtdW5pY2lwYWwlMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NTc5MjQ2NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    impactSummary: "Digital trade licensing system",
    revenueIncrease: 45,
    description: "Implemented automated trade licensing with online application processing and digital certificate generation."
  },
  {
    id: 6,
    municipalityName: "Aurangabad Municipal Corporation",
    image: "https://images.unsplash.com/photo-1619793108044-c564c87ad0f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjaXR5JTIwaGFsbCUyMGdvdmVybm1lbnR8ZW58MXx8fHwxNzU3OTI0Njc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    impactSummary: "Building permission automation",
    revenueIncrease: 38,
    description: "Streamlined building permission processes with GIS integration and automated approval workflows."
  },
  {
    id: 7,
    municipalityName: "Kolhapur Municipal Corporation",
    image: "https://images.unsplash.com/photo-1688267161773-f1ecfd7ad358?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGluZGlhbiUyMHRvd24lMjBtdW5pY2lwYWwlMjBidWlsZGluZ3xlbnwxfHx8fDE3NTc5MjQ2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    impactSummary: "Water billing digitization",
    revenueIncrease: 52,
    description: "Modernized water billing system with smart meter integration and mobile payment options."
  },
  {
    id: 8,
    municipalityName: "Solapur Municipal Corporation",
    image: "https://images.unsplash.com/photo-1715310306143-787865a1b538?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBkaXN0cmljdCUyMGNvbGxlY3RvcmF0ZSUyMG9mZmljZXxlbnwxfHx8fDE3NTc5MjQ2ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    impactSummary: "Birth & death certificate automation",
    revenueIncrease: 28,
    description: "Digitized vital records management with online application and instant certificate generation."
  },
  {
    id: 9,
    municipalityName: "Ahmednagar Municipal Council",
    image: "https://images.unsplash.com/photo-1712921855566-9631f61f47ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtdW5pY2lwYWwlMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NTc5MjQ2NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    impactSummary: "Street lighting management",
    revenueIncrease: 35,
    description: "Smart street lighting system with energy monitoring and automated maintenance scheduling."
  },
  {
    id: 10,
    municipalityName: "Sangli Municipal Corporation",
    image: "https://images.unsplash.com/photo-1619793108044-c564c87ad0f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjaXR5JTIwaGFsbCUyMGdvdmVybm1lbnR8ZW58MXx8fHwxNzU3OTI0Njc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    impactSummary: "Solid waste management",
    revenueIncrease: 42,
    description: "Integrated waste collection tracking with route optimization and citizen complaint management."
  }
];

export function ProjectCarousel() {
  return (
    <div className="bg-[#f3f3f3] py-16 px-6">
          <div className="max-w-[90rem] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#95231c] mb-4">Additional Projects</h2>
          <p className="text-[#ba7b72] text-lg max-w-2xl mx-auto">
            Explore more of our successful municipal transformation initiatives across Maharashtra and beyond
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {carouselProjects.map((project) => (
              <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <ImageWithFallback
                      src={project.image}
                      alt={`${project.municipalityName} building`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#95231c]" />
                        <span className="text-sm font-medium text-[#95231c] truncate max-w-[180px]">
                          {project.municipalityName}
                        </span>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 bg-[#e1d385] px-3 py-1 rounded-lg">
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3 text-[#95231c]" />
                        <span className="text-sm font-bold text-[#95231c]">+{project.revenueIncrease}%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-bold text-[#95231c] text-lg mb-2 line-clamp-1">
                      {project.municipalityName}
                    </h3>
                    <p className="text-[#ba7b72] font-medium text-sm mb-3">
                      {project.impactSummary}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 uppercase tracking-wide">Revenue Impact</span>
                        <span className="text-lg font-bold text-[#95231c]">+{project.revenueIncrease}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-[#95231c] text-[#95231c] hover:bg-[#95231c] hover:text-white" />
          <CarouselNext className="border-[#95231c] text-[#95231c] hover:bg-[#95231c] hover:text-white" />
        </Carousel>

        <div className="text-center mt-8">
          <p className="text-[#ba7b72] text-sm">
            Each project represents our commitment to improving municipal governance through technology
          </p>
        </div>
      </div>
    </div>
  );
}