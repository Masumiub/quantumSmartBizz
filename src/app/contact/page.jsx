"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 min-h-screen overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 rotate-12 animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-purple-600/20 to-blue-600/20 -rotate-12 animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 mb-6 animate-pulse mt-15">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your data into insights? Let's discuss how our AI-powered platform can help your business grow
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Info Card */}
            <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MessageCircle className="w-6 h-6 text-blue-400 mr-3" />
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 group/item hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-semibold">hello@smartdatainsights.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group/item hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-semibold">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group/item hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Address</p>
                    <p className="text-white font-semibold">123 Innovation Drive<br />Tech Valley, CA 94025</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group/item hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Business Hours</p>
                    <p className="text-white font-semibold">Mon-Fri: 9AM-6PM PST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response Card */}
            <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:bg-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Quick Response Guarantee</h3>
              <p className="text-gray-400 mb-4">We typically respond to all inquiries within 24 hours during business days.</p>
              <div className="flex items-center space-x-2 text-green-400">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-semibold">Average response time: 4 hours</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h4>
                  <p className="text-gray-400">Thank you for reaching out. We'll get back to you soon.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-gray-300 text-sm font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-400"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-gray-300 text-sm font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-gray-300 text-sm font-semibold mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-400"
                        placeholder="Your company name"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-gray-300 text-sm font-semibold mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-400"
                      >
                        <option value="" className="bg-gray-800">Select a subject</option>
                        <option value="demo" className="bg-gray-800">Request Demo</option>
                        <option value="pricing" className="bg-gray-800">Pricing Inquiry</option>
                        <option value="support" className="bg-gray-800">Technical Support</option>
                        <option value="partnership" className="bg-gray-800">Partnership</option>
                        <option value="other" className="bg-gray-800">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-gray-300 text-sm font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-400 resize-none"
                      placeholder="Tell us about your project, questions, or how we can help you..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      <span className="flex items-center space-x-2">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 group-hover:animate-pulse" />
                            <span>Send Message</span>
                          </>
                        )}
                      </span>
                    </button>
                    
                    <button
                      type="button"
                      className="border-2 border-gray-400 text-gray-300 hover:text-white hover:border-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      <span className="flex items-center space-x-2">
                        <MessageCircle className="w-5 h-5" />
                        <span>Live Chat</span>
                      </span>
                    </button>
                  </div>
                </div>
                
              )}
            </div>
          </div>
        </div>

        {/* Additional Contact Options */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-white/10 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Sales Inquiries</h3>
            <p className="text-gray-400 mb-4">Questions about pricing, features, or custom solutions</p>
            <a href="mailto:sales@smartdatainsights.com" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300">
              sales@smartdatainsights.com
            </a>
          </div>

          <div className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:bg-white/10 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Technical Support</h3>
            <p className="text-gray-400 mb-4">Need help with your existing dashboard or account?</p>
            <a href="mailto:support@smartdatainsights.com" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-300">
              support@smartdatainsights.com
            </a>
          </div>

          <div className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:bg-white/10 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
            <p className="text-gray-400 mb-4">Speak directly with our team for immediate assistance</p>
            <a href="tel:+15551234567" className="text-green-400 hover:text-green-300 font-semibold transition-colors duration-300">
              +1 (555) 123-4567
            </a>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-center mb-12">
            Our Locations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-white/10">
              <h4 className="text-xl font-bold text-white mb-2">San Francisco HQ</h4>
              <p className="text-gray-400 mb-2">123 Innovation Drive</p>
              <p className="text-gray-400 mb-4">Tech Valley, CA 94025</p>
              <div className="flex items-center space-x-2 text-blue-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Main Office</span>
              </div>
            </div>

            <div className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:bg-white/10">
              <h4 className="text-xl font-bold text-white mb-2">New York</h4>
              <p className="text-gray-400 mb-2">456 Data Boulevard</p>
              <p className="text-gray-400 mb-4">New York, NY 10001</p>
              <div className="flex items-center space-x-2 text-purple-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">East Coast Hub</span>
              </div>
            </div>

            <div className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:bg-white/10">
              <h4 className="text-xl font-bold text-white mb-2">London</h4>
              <p className="text-gray-400 mb-2">789 Analytics Street</p>
              <p className="text-gray-400 mb-4">London, UK EC1A 1BB</p>
              <div className="flex items-center space-x-2 text-green-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">European Office</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Central glowing orb effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
    </div>
  );
};

export default ContactPage;