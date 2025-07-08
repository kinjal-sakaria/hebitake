'use client';
import React, { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="text-white text-lg font-semibold">
          HEBITAKE
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✖' : '☰'}
        </button>

        {/* Navigation */}
        <nav className={`md:flex gap-6 items-center text-sm ${isOpen ? 'block absolute top-full left-0 w-full bg-black/80 p-6' : 'hidden md:flex'}`}>
          <a href="/" className="block md:inline text-white rounded-full px-4 py-2 bg-white/20 hover:bg-white/30 transition mb-2 md:mb-0">
            Home
          </a>
          <a href="/features" className="block md:inline text-white hover:text-gray-300 transition mb-2 md:mb-0">
            Features
          </a>
          <a href="/our-work" className="block md:inline text-white hover:text-gray-300 transition mb-2 md:mb-0">
            Our work
          </a>
          <a href="/listings" className="block md:hidden text-white rounded-full border border-white/30 px-4 py-2 hover:bg-white/20 transition mb-2">
            Explore Listings
          </a>
          <a href="/login" className="block md:hidden text-white rounded-full px-4 py-2 bg-purple-700 hover:bg-purple-800 transition">
            Login
          </a>
        </nav>

        {/* Buttons desktop */}
        <div className="hidden md:flex gap-3">
          <a
            href="/listings"
            className="text-white rounded-full border border-white/30 px-4 py-1.5 hover:bg-white/20 transition"
          >
            Explore Listings
          </a>
          <a
            href="/login"
            className="text-white rounded-full px-4 py-1.5 bg-purple-700 hover:bg-purple-800 transition"
          >
            Login
          </a>
        </div>
      </div>
    </header>
  );
}
