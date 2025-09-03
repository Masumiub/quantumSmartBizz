"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, X } from "lucide-react";
import ImgPic from "../../../public/assets/Data Trends-amico.svg";
import Image from "next/image";
import Swal from "sweetalert2";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result.error) {
        setError("Invalid email or password");
      } else {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successful",
          showConfirmButton: false,
          timer: 1500
        });
        router.push("/userdashboard");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      setError("");
      await signIn("google", { callbackUrl: "/userdashboard" });
    } catch (error) {
      setError("Failed to sign in with Google");
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 flex items-center justify-center p-4 pb-20">
      {/* Login Modal */}
      <div className="bg-black rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 relative border border-cyan-400/50 px-15 py-10 mt-15">
        {/* Background gradients - moved behind content */}
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-purple-500/20 to-transparent -z-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl -z-10"></div>
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-6 right-6 z-20 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Left Side - Login Form */}
        <div className="p-8 lg:p-12 space-y-8 relative z-10">

          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold text-white">Login your account</h1>
            <p className="text-gray-400">
              Dont have an account?{" "}
              <Link 
                href="/Register" 
                className="text-purple-400 hover:text-purple-300 transition-colors relative z-20"
              >
                Sign Up
              </Link>
            </p>
          </div>

          {error && (
            <div className="bg-red-900/20 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                <input
                  type="email"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full bg-black/30 border border-purple-500/30 rounded-full pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors relative z-10"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full bg-black/30 border border-purple-500/30 rounded-full pl-12 pr-12 py-4 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors relative z-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors z-20"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-3 cursor-pointer relative z-10">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 border-2 rounded ${rememberMe ? 'bg-purple-500 border-purple-500' : 'border-gray-500'} transition-colors`}>
                    {rememberMe && (
                      <svg className="w-3 h-3 text-black absolute top-0.5 left-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-gray-400 text-sm">Remember Me</span>
              </label>
              <p

                className="text-gray-400 hover:text-white text-sm transition-colors relative z-20"
              >
                Forgot Password?
              </p>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full  bg-purple-500 hover:bg-purple-600 text-black font-semibold py-4 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed relative z-10"
            >
              {isLoading ? "Logging in..." : "Login Now"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center space-x-4 relative z-10">
            <div className="flex-1 h-px bg-gray-700"></div>
            <span className="text-gray-400 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="flex space-x-4 relative z-10">
            <button
              onClick={handleGoogleSignIn}
              disabled={isLoading}
              className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-full flex items-center justify-center space-x-2 transition-colors disabled:opacity-50"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>

            </button>
            
            <button
              disabled={isLoading}
              className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-full flex items-center justify-center space-x-2 transition-colors disabled:opacity-50"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>

            </button>
            
            <button 
              disabled={isLoading}
              className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-full flex items-center justify-center space-x-2 transition-colors disabled:opacity-50"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden lg:block relative">
          <div className="absolute inset-0 "></div>
          <Image
            src={ImgPic}
            alt="Team collaboration"
            className="w-full h-full rounded-2xl"
            priority
          />


        </div>
      </div>
    </div>
  );
}


