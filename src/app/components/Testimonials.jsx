"use client";
import { Star, Quote, TrendingUp, Users, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Data Analytics Manager",
      company: "TechFlow Industries",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Quantum Smart Bizz transformed how we analyze our business data. The AI insights helped us identify revenue opportunities we never knew existed. Our quarterly reports are now 10x more impactful.",
      metric: "40% Revenue Increase",
      icon: TrendingUp
    },
    {
      name: "Michael Rodriguez",
      role: "CEO",
      company: "GrowthLab Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The platform's ability to connect multiple data sources and provide real-time insights is phenomenal. We've reduced our analysis time from weeks to hours while improving accuracy significantly.",
      metric: "75% Time Saved",
      icon: Award
    },
    {
      name: "Emily Thompson",
      role: "Operations Director",
      company: "DataDrive Corp",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The collaborative features and intuitive interface make it easy for our entire team to work with data. Even non-technical team members can create meaningful visualizations and extract insights.",
      metric: "100% Team Adoption",
      icon: Users
    }
  ];

  const stats = [
    { value: "10,000+", label: "Active Users", icon: Users },
    { value: "50M+", label: "Data Points Analyzed", icon: TrendingUp },
    { value: "99.9%", label: "Uptime Guarantee", icon: Award },
    { value: "24/7", label: "Support Available", icon: Star }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="relative py-24 bg-gradient-to-b from-purple-900 via-black to-gray-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join thousands of businesses already transforming their data into actionable insights
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10 mx-4">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                      {/* Quote Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                          <Quote className="w-10 h-10 text-white" />
                        </div>
                      </div>

                      <div className="flex-1 text-center lg:text-left">
                        {/* Rating */}
                        <div className="flex justify-center lg:justify-start space-x-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>

                        {/* Testimonial text */}
                        <blockquote className="text-lg lg:text-xl text-gray-300 mb-6 leading-relaxed">
                          "{testimonial.text}"
                        </blockquote>

                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                          {/* Author info */}
                          <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/50"
                            />
                            <div>
                              <div className="font-semibold text-white">{testimonial.name}</div>
                              <div className="text-gray-400">{testimonial.role}</div>
                              <div className="text-blue-400 text-sm">{testimonial.company}</div>
                            </div>
                          </div>

                          {/* Metric badge */}
                          <div className="flex items-center space-x-2 bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/30 rounded-full px-4 py-2">
                            <testimonial.icon className="w-5 h-5 text-green-400" />
                            <span className="text-green-400 font-semibold">{testimonial.metric}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeSlide 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Data?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses using Quantum Smart Bizz to make data-driven decisions
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-blue-500/50">
              Start Your Free Trial Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;