import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { TrendingUp, MapPin, Users, FileText } from 'lucide-react';

interface ProjectData {
  id: number;
  municipalityName: string;
  image: string;
  beforeData: {
    taxCollectionRate: number;
    revenue: number;
    processes: string;
  };
  afterData: {
    taxCollectionRate: number;
    revenue: number;
    processes: string;
  };
  impactMetrics: {
    revenueIncrease: number;
    errorReduction: number;
    satisfaction: number;
  };
  description: string;
  isReversed: boolean;
}

interface ProjectCardProps {
  project: ProjectData;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const chartData = [
    {
      name: 'Before',
      taxCollection: project.beforeData.taxCollectionRate,
      revenue: project.beforeData.revenue,
    },
    {
      name: 'After',
      taxCollection: project.afterData.taxCollectionRate,
      revenue: project.afterData.revenue,
    },
  ];

  return (
    <div 
      className={`w-full py-16 px-6 ${project.id % 2 === 0 ? 'bg-[#f3f3f3]' : 'bg-[#fefefe]'}`}
    >
          <div className="max-w-[90rem] mx-auto">
        <div className={`flex flex-col ${project.isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
          {/* Image Section */}
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src={project.image}
                alt={`${project.municipalityName} cityscape`}
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#95231c]" />
                  <span className="font-medium text-[#95231c]">{project.municipalityName}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 space-y-8">
            {/* Municipality Header */}
            <div>
              <h3 className="text-3xl font-bold text-[#95231c] mb-2">{project.municipalityName}</h3>
              <p className="text-[#ba7b72] text-lg">Municipal Governance Transformation</p>
            </div>

            {/* Before/After Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Before Card */}
              <div className="bg-[#dddcdb] p-6 rounded-xl shadow-md">
                <h4 className="font-bold text-[#95231c] mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Before Our Work
                </h4>
                <div className="space-y-2 text-sm">
                  <p>Property tax collection: <span className="font-semibold">{project.beforeData.taxCollectionRate}%</span></p>
                  <p>Revenue: <span className="font-semibold">₹{project.beforeData.revenue} Cr annually</span></p>
                  <p className="text-gray-600">{project.beforeData.processes}</p>
                </div>
              </div>

              {/* After Card */}
              <div className="bg-[#e1d385] p-6 rounded-xl shadow-md">
                <h4 className="font-bold text-[#95231c] mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  After Our Work
                </h4>
                <div className="space-y-2 text-sm">
                  <p>Property tax collection: <span className="font-semibold">{project.afterData.taxCollectionRate}%</span></p>
                  <p>Revenue: <span className="font-semibold">₹{project.afterData.revenue} Cr annually</span></p>
                  <p className="text-gray-600">{project.afterData.processes}</p>
                </div>
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#95231c]">
              <h4 className="font-bold text-[#95231c] mb-4">Impact Metrics</h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#95231c]">{project.impactMetrics.revenueIncrease}%</div>
                  <div className="text-sm text-gray-600">Revenue Increase</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#95231c]">{project.impactMetrics.errorReduction}%</div>
                  <div className="text-sm text-gray-600">Error Reduction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#95231c]">{project.impactMetrics.satisfaction}%</div>
                  <div className="text-sm text-gray-600">Citizen Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Charts */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-bold text-[#95231c] mb-4">Performance Comparison</h4>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="taxCollection" fill="#95231c" name="Tax Collection %" />
                    <Bar dataKey="revenue" fill="#e1d385" name="Revenue (Cr)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-bold text-[#95231c] mb-3">Project Overview</h4>
              <p className="text-gray-700 leading-relaxed">{project.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}