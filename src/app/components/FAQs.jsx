"use client";
import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Zap, Shield, Database } from 'lucide-react';

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "How does Quantum Smart Bizz handle data security?",
      answer: "We implement enterprise-grade security measures including end-to-end encryption, SOC 2 compliance, regular security audits, and secure cloud infrastructure. Your data is protected with bank-level security protocols and we never share your information with third parties.",
      icon: Shield,
      gradient: "from-green-500 to-blue-500"
    },
    {
      question: "What types of data sources can I connect?",
      answer: "Our platform supports multiple data ingestion methods including CSV/Excel file uploads, REST API connections, database integrations (MySQL, PostgreSQL, MongoDB), and manual data entry. We also provide pre-built connectors for popular business tools.",
      icon: Database,
      gradient: "from-blue-500 to-purple-500"
    },
    {
      question: "Do I need technical expertise to use the platform?",
      answer: "Not at all! Quantum Smart Bizz is designed for users of all technical levels. Our intuitive interface, drag-and-drop functionality, and AI-powered suggestions make it easy for anyone to create meaningful visualizations and extract insights from their data.",
      icon: Zap,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      question: "Can I customize the dashboards and reports?",
      answer: "Absolutely! You can fully customize dashboards with our flexible layout system, choose from dozens of chart types, apply custom color schemes, add your branding, and create interactive reports. Professional and Enterprise plans offer advanced customization options.",
      icon: HelpCircle,
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      question: "How accurate are the AI-powered insights?",
      answer: "Our AI models are trained on vast datasets and continuously improved. The accuracy depends on data quality and quantity, but typically our predictions achieve 85-95% accuracy. We also provide confidence scores and explanations for all AI-generated insights.",
      icon: Zap,
      gradient: "from-orange-500 to-red-500"
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer comprehensive support including detailed documentation, video tutorials, email support for all plans, priority support for Professional users, and 24/7 phone support for Enterprise customers. We also provide onboarding assistance and training sessions.",
      icon: HelpCircle,
      gradient: "from-violet-500 to-purple-500"
    },
    {
      question: "Can I export my data and visualizations?",
      answer: "Yes! You can export your data in multiple formats (CSV, Excel, JSON), save visualizations as images (PNG, SVG), generate PDF reports, and even embed interactive charts in your websites or presentations. All export features are included in Professional and Enterprise plans.",
      icon: Database,
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      question: "Is there a free trial available?",
      answer: "We offer a 14-day free trial with full access to Professional features, no credit card required. You can explore all capabilities, upload your data, and experience the platform's power before making any commitment.",
      icon: Zap,
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section id="faq" className="relative py-24 bg-gradient-to-b from-gray-900 via-black to-purple-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about Quantum Smart Bizz and how it can transform your business analytics
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 rounded-2xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${faq.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <faq.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {faq.question}
                  </h3>
                </div>
                <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
                  {openFAQ === index ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <div className="pl-16">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Our support team is here to help you get the most out of Quantum Smart Bizz
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50">
                Contact Support
              </button>
              <button className="border border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;