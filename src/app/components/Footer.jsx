

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Brain } from 'lucide-react';
import postImg from '../../../public/assets/post.png'


export default function Footer() {
    return (
        <div className='bg-black relative overflow-hidden '>

            <div className='max-w-7xl mx-auto px-8 py-15 border-b-1'>
                <div className="flex gap-10 flex-col md:flex-row items-center space-y-4">
                    <div className='w-full md:w-1/2'>
                        <h3 className="text-white text-2xl font-bold leading-tight">
                            Reach Your Requirement Goals Right on Schedule
                        </h3>
                    </div>


                    <div className='w-full md:w-1/2'>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Sign up, complete your profile, and start browsing projects. Submit proposals and communicate with clients to get hired.
                        </p>
                        <Link href='/Login'>
                        <button className="btn btn-md border-0 shadow-none bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-3 mt-6 transition-colors !rounded-full ">
                            Get Started
                        </button>
                        </Link>
                    </div>

                </div>
            </div>


            {/* purple glow background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-purple-500/10 to-purple-900/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-1 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>


            <div className='max-w-7xl mx-auto relative z-10'>

                <footer className="py-10 pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Logo and CTA Section */}
                        <div className="space-y-6 pl-8">
                            <div className="flex items-center space-x-2">
                                                    <Link href='/'>
                        <div className="flex items-center">
                            <div className="ml-2">
                                <div className="bg-purple-600 p-2 rounded-lg text-white">
                                    <Brain className="" />
                                </div>

                            </div>
                            <p className="px-3 text-xl font-bold text-white">Quantum Smart Bizz</p>
                        </div>
                    </Link>
                            </div>


                        </div>

                        {/* About Section */}
                        <nav className="space-y-2 px-10 pb-15">
                            <h6 className="text-white font-semibold text-lg">About</h6>
                            <div className="space-y-3">
                                <Link href="/" className="block text-gray-400 hover:text-white transition-colors text-sm">
                                    About Us
                                </Link>
                                <Link href="/Register" className="block text-gray-400 hover:text-white transition-colors text-sm">
                                    Become Seller
                                </Link>
                                <Link href="/jobs" className="block text-gray-400 hover:text-white transition-colors text-sm">
                                    ProJobs
                                </Link>
                            </div>
                        </nav>

                        {/* Categories Section */}
                        <nav className="space-y-2 border-b-1 border-l-1 border-gray-800 px-10 pb-15">
                            <h6 className="text-white font-semibold text-lg">Categories</h6>
                            <div className="space-y-3">
                                <Link href="/jobs" className="block text-gray-400 hover:text-white transition-colors text-sm">
                                    Design & Creative
                                </Link>
                                <Link href="/jobs" className="block text-gray-400 hover:text-white transition-colors text-sm">
                                    Development & IT
                                </Link>
                                <Link href="/jobs" className="block text-gray-400 hover:text-white transition-colors text-sm">
                                    Music & Audio
                                </Link>
                                <Link href="/jobs" className="block text-gray-400 hover:text-white transition-colors text-sm">
                                    Programming & Tech
                                </Link>
                            </div>
                        </nav>

                        {/* Support Section */}
                        <nav className="space-y-2 border-b-1 border-l-1 border-gray-800 px-10 pb-10">
                            <h6 className="text-white font-semibold text-lg">Support</h6>
                            <div className="space-y-3">
                                <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors text-sm">
                                    Help & Support
                                </Link>
                                <Link href="/" className="block text-gray-400 hover:text-white transition-colors text-sm">
                                    FAQ
                                </Link>
                                <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors text-sm">
                                    Contact Us
                                </Link>
                                <Link href="/" className="block text-gray-400 hover:text-white transition-colors text-sm">
                                    Terms & Services
                                </Link>
                            </div>
                        </nav>
                    </div>

                    <div className='flex flex-col md:flex-row items-center justify-between'>

                        <div className='w-full md:w-1/2'>
                            {/* Social Media Icons */}
                            <div className="flex space-x-4 pl-8">
                                <Link href="https://www.linkedin.com/in/musfique-77-masum/" className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </Link>

                                <Link href="https://github.com/Masumiub" className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.349-1.052-2.349-2.35 0-1.297 1.052-2.349 2.349-2.349 1.297 0 2.349 1.052 2.349 2.349 0 1.298-1.052 2.35-2.349 2.35zm7.598 0c-1.297 0-2.349-1.052-2.349-2.35 0-1.297 1.052-2.349 2.349-2.349 1.297 0 2.35 1.052 2.35 2.349 0 1.298-1.053 2.35-2.35 2.35z" />
                                    </svg>
                                </Link>

                                <Link href="https://twitter.com" className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <div className='w-full md:w-1/2 px-6'>
                            {/* Popular Posts Section */}
                            <div className="mt-16 space-y-6">
                                <h3 className="text-white font-semibold text-lg">Our Popular Post</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex space-x-4">
                                        <div className="w-28 h-16 rounded-lg object-cover">
                                          <Image src={postImg} alt='post' className='object-cover w-28 h-16 rounded-2xl'></Image>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-gray-400 text-xs">November 7, 2024</p>
                                            <h4 className="text-white text-sm font-medium leading-tight">
                                                Unveils the Best Canadian Cities for Biking
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="flex space-x-4">
                                        <div className="w-28 h-16 rounded-lg object-cover">
                                          <Image src={postImg} alt='post' className='object-cover w-28 h-16 rounded-2xl'></Image>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-gray-400 text-xs">November 7, 2024</p>
                                            <h4 className="text-white text-sm font-medium leading-tight">
                                                Unveils the Best Canadian Cities for Biking
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Social Media and Copyright */}
                    <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">


                        {/* Copyright */}
                        <div className='text-center'>
                            <p className="text-gray-400 text-sm text-center">
                                © QuantumEdge Software INC. 2025. All rights reserved.
                            </p>
                        </div>


                    </div>
                </footer>
            </div>
        </div>
    );
}
