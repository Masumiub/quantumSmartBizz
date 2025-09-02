"use client";

import { Upload, Database, BarChart, Brain, Zap, Shield, Users, TrendingUp } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Upload,
      title: "Multi-Source Data Ingestion",
      description: "Upload CSV files, connect APIs, or input data manually. Support for various data formats with intelligent parsing and validation.",
      gradient: "from-blue-500 to-cyan-500",
      delay: "0"
    },
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms automatically detect patterns, anomalies, and trends in your business data.",
      gradient: "from-purple-500 to-pink-500",
      delay: "200"
    },
    {
      icon: BarChart,
      title: "Interactive Visualizations",
      description: "Dynamic charts, graphs, and dashboards that update in real-time with beautiful, customizable visual representations.",
      gradient: "from-blue-500 to-purple-500",
      delay: "400"
    },
    {
      icon: TrendingUp,
      title: "Predictive Insights",
      description: "Forecast future trends and outcomes using sophisticated statistical models and machine learning predictions.",
      gradient: "from-green-500 to-blue-500",
      delay: "600"
    },
    {
      icon: Database,
      title: "Secure Data Storage",
      description: "Enterprise-grade security with encrypted storage, backup systems, and compliance with industry standards.",
      gradient: "from-gray-600 to-blue-600",
      delay: "800"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share insights, create collaborative reports, and work together on data analysis projects with your team.",
      gradient: "from-orange-500 to-red-500",
      delay: "1000"
    }
  ];

  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to transform your business data into actionable insights
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105"
              style={{ animationDelay: `${feature.delay}ms` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse">
                  <Zap className="w-4 h-4 text-white m-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/50">
            <span className="flex items-center space-x-2">
              <Brain className="w-5 h-5 group-hover:animate-spin" />
              <span>Explore All Features</span>
            </span>
          </button>
        </div>
      </div>

      {/* Custom CSS for glow effects */}
      <style jsx>{`
        .hover\\:glow:hover {
          text-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Features;