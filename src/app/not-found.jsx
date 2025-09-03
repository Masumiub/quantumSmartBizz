import Link from "next/link";
import { 
  Search, 
  Home, 
  Briefcase,
  AlertCircle,
  Compass
} from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* purple Glow Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Animated Particles/Orbs */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-purple-400 rounded-full opacity-60 animate-bounce"></div>
      <div className="absolute top-40 right-40 w-2 h-2 bg-purple-300 rounded-full opacity-40 animate-bounce delay-300"></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-emerald-400 rounded-full opacity-50 animate-bounce delay-700"></div>

      <div className="relative z-10 container mx-auto px-4 py-20 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-2xl">
          {/* Animated 404 Number */}
          <div className="relative mb-8">
            <div className="text-[180px] md:text-[240px] font-bold text-gray-800 opacity-50">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-purple-400 to-emerald-600 bg-clip-text text-transparent animate-gradient">
                404
              </div>
            </div>
          </div>

          {/* Error Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center">
                <AlertCircle className="w-12 h-12 text-red-400" />
              </div>
              <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
            Oops! The page you're looking for seems to have wandered off into the digital wilderness.
          </p>

          {/* Search Suggestions */}
          <div className="bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center justify-center gap-2">
              <Compass className="w-5 h-5 text-purple-400" />
              Maybe you were looking for:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link 
                href="/contact"
                className="flex items-center gap-3 p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg hover:bg-purple-500/20 transition-all group"
              >
                <Briefcase className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
                <span className="text-gray-300 group-hover:text-white">Contact</span>
              </Link>
              <Link 
                href="/"
                className="flex items-center gap-3 p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg hover:bg-purple-500/20 transition-all group"
              >
                <Home className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
                <span className="text-gray-300 group-hover:text-white">Home Page</span>
              </Link>
            </div>
          </div>

          {/* Search Bar */}
          <div className="bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-white mb-4">Search our site</h3>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="w-full bg-transparent border border-purple-500/30 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                />
              </div>
              <button className="bg-purple-500 hover:bg-purple-600 text-black font-semibold px-6 py-3 rounded-lg transition-colors">
                Search
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="bg-gradient-to-r from-purple-500 to-emerald-600 text-black font-semibold px-8 py-4 rounded-lg hover:from-purple-600 hover:to-emerald-700 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>
            
            <Link 
              href="/contact"
              className="border border-purple-500/30 text-purple-400 font-semibold px-8 py-4 rounded-lg hover:bg-purple-500/10 hover:text-purple-300 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Briefcase className="w-5 h-5" />
              Contact
            </Link>
          </div>

          {/* Support Contact */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-400 mb-2">Need help?</p>
            <p className="text-purple-400 font-medium">
              Contact support: <span className="text-white">musfiquemasum@gmail.com</span>
            </p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 w-2 h-2 bg-purple-400 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-10 right-10 w-3 h-3 bg-emerald-400 rounded-full opacity-20 animate-ping"></div>
      <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-purple-300 rounded-full opacity-40"></div>
    </div>
  );
}