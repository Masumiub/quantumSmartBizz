"use client";

import { Check, Star, Zap, Crown, Rocket, Shield, Users } from 'lucide-react';

const Subscription = () => {
  const plans = [
    {
      name: "Starter",
      price: "29",
      period: "month",
      description: "Perfect for small businesses getting started with data analytics",
      icon: Zap,
      popular: false,
      features: [
        "Up to 1,000 data points",
        "5 dashboard templates",
        "Basic visualizations",
        "Email support",
        "1 user account",
        "CSV upload support"
      ],
      gradient: "from-gray-600 to-gray-800",
      borderGradient: "from-gray-500 to-gray-700"
    },
    {
      name: "Professional",
      price: "79",
      period: "month",
      description: "Advanced features for growing businesses with complex data needs",
      icon: Star,
      popular: true,
      features: [
        "Up to 10,000 data points",
        "20 dashboard templates",
        "Advanced AI insights",
        "Priority support",
        "5 user accounts",
        "API integrations",
        "Custom visualizations",
        "Export capabilities"
      ],
      gradient: "from-blue-600 to-purple-600",
      borderGradient: "from-blue-500 to-purple-500"
    },
    {
      name: "Enterprise",
      price: "199",
      period: "month",
      description: "Complete solution for large organizations with unlimited possibilities",
      icon: Crown,
      popular: false,
      features: [
        "Unlimited data points",
        "Unlimited dashboards",
        "Custom AI models",
        "24/7 phone support",
        "Unlimited users",
        "White-label options",
        "Advanced security",
        "Dedicated account manager"
      ],
      gradient: "from-purple-600 to-pink-600",
      borderGradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="pricing" className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-purple-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-26">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Flexible pricing options to match your business needs and scale with your growth
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group ${plan.popular ? 'lg:scale-110 lg:-mt-8' : ''}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg z-20">
                  <span className="flex items-center space-x-1">
                    <Rocket className="w-4 h-4" />
                    <span>Most Popular</span>
                  </span>
                </div>
              )}

              {/* Card */}
              <div className={`relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-2 ${plan.popular ? 'border-blue-500/50' : 'border-white/10'} hover:border-opacity-100 transition-all duration-500 group-hover:transform group-hover:scale-105`}>
                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${plan.borderGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Plan name */}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    </div>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center mt-0.5 flex-shrink-0`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-300 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl hover:shadow-blue-500/50 hover:from-blue-700 hover:to-purple-700' 
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/40'
                  }`}>
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Looking for enterprise features, custom integrations, or have specific requirements? 
              Let's discuss a tailored solution for your organization.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50">
              Contact Sales
            </button>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-400">
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-green-400" />
            <span>SOC 2 Compliant</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="w-5 h-5 text-green-400" />
            <span>99.9% Uptime SLA</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-blue-400" />
            <span>10,000+ Happy Customers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;