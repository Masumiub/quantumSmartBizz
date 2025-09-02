'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { FaTachometerAlt, FaPlusCircle, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import { MdEditCalendar } from 'react-icons/md';
import { IoArrowBack } from "react-icons/io5";
import Image from 'next/image';
import { PiBagFill } from "react-icons/pi";

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const { data: session, status } = useSession();


  if (status === 'loading') {
    return <div className="flex items-center justify-center h-screen"><span className="loading loading-spinner loading-2xl"></span>.</div>;
  }
  if (!session || session.user.role !== 'user') {
    return (
      <div className="flex items-center justify-center h-screen text-center">
        <h1 className="text-5xl font-bold text-red-600">403 Forbidden</h1>
        <p className="mt-2">You dont have access to this page.</p>
      </div>
    );
  }


  const links = [
    { href: '/userdashboard', label: 'Dashboard', icon: <FaTachometerAlt /> },
    { href: '/userdashboard/sales', label: 'Sales', icon: <PiBagFill />},
    { href: '/userdashboard/addSalesData', label: 'Add Sales Data', icon: <FaPlusCircle /> },
    { href: '/', label: 'Back to Home', icon: <IoArrowBack />},
  ];



  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-base-200">
      {/* Sidebar for md+ */}
      <aside className="hidden md:flex md:flex-col md:w-64 bg-neutral text-neutral-content shadow">

        <div className="p-6 font-bold text-xl ">Admin Panel</div>
        <nav className="flex-1 p-4 space-y-2">
          {links.map(link => (
                <Link
                  href={link.href} key={link.href}
                  className={`flex items-center gap-3 px-2 py-2 rounded hover:bg-gray-800 ${
                    pathname === link.href ? 'bg-gray-800 font-semibold' : ''
                  }`}
                >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile Navbar */}
      <div className="md:hidden w-full">
        <div className="flex items-center justify-between bg-neutral text-neutral-content p-4 shadow">
          <div className="font-bold text-xl">Admin Panel</div>
          <button
            className="p-2 rounded bg-gray-800"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>
        </div>
        {sidebarOpen && (
          <nav className="bg-base-100 p-4 space-y-2 shadow">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-2 rounded hover:bg-base-200 ${pathname === link.href ? 'bg-base-300 font-semibold' : ''
                  }`}
                onClick={() => setSidebarOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>

      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-br from-purple-50 to-indigo-100">{children}</main>
    </div>
  )
}
