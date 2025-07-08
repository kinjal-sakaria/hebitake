'use client';
import React, { useState } from 'react';

export default function HeroSection() {
    const [activeTab, setActiveTab] = useState<'buy' | 'rent'>('buy');

    return (
        <section className="relative text-white">
            {/* Background image */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('assets/images/hero-section-img.png')" }}></div>
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 max-w-7xl px-[120px] py-32 text-start">
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight flex flex-col sm:flex-row justify-start gap-2 flex-wrap">
                    <span>Transform your</span>

                    {/* Avatar group */}
                    <span className="flex -space-x-2">
                        <img src="assets/images/avatar.jpg" alt="avatar1" className="w-8 h-8 rounded-full border-2 border-white" />
                        <img src="assets/images/avatar.jpg" alt="avatar2" className="w-8 h-8 rounded-full border-2 border-white" />
                        <img src="assets/images/avatar.jpg" alt="avatar3" className="w-8 h-8 rounded-full border-2 border-white" />
                    </span>

                </h1>
                <h1 className="text-4xl sm:text-5xl font-bold leading-extra-tight mt-2">

                    Property with <i>AI Visualization</i>
                </h1>
                <p className='text-[26px]'>
                    See how your property could look with AI-powered transformations before you buy or sell!

                </p>

                {/* Tabs */}
                <div className="mt-8 flex justify-start gap-4">
                    <button
                        onClick={() => setActiveTab('buy')}
                        className={`px-4 py-2 rounded-full ${activeTab === 'buy' ? 'bg-white/20' : 'bg-white/10'} hover:bg-white/30 transition`}
                    >
                        Buy Property
                    </button>
                    <button
                        onClick={() => setActiveTab('rent')}
                        className={`px-4 py-2 rounded-full ${activeTab === 'rent' ? 'bg-white/20' : 'bg-white/10'} hover:bg-white/30 transition`}
                    >
                        Rent Property
                    </button>
                </div>

                {/* Search bar */}
                <div className=" bg-white/10 rounded-lg p-4 flex flex-col sm:flex-row items-center gap-4 max-w-3xl backdrop-blur-md">
                {/*  mx-auto */}
                    <input
                        type="text"
                        placeholder="Location"
                        className="flex-1 bg-transparent border-b border-white/30 placeholder-white/70 focus:outline-none py-2"
                    />
                    <select className="bg-transparent border-b border-white/30 text-white focus:outline-none py-2">
                        <option>Purpose</option>
                        <option>Buy</option>
                        <option>Rent</option>
                    </select>
                    <select className="bg-transparent border-b border-white/30 text-white focus:outline-none py-2">
                        <option>Type</option>
                        <option>Residential</option>
                        <option>Commercial</option>
                    </select>
                    <button className="bg-green-600 hover:bg-green-700 rounded-full p-3 transition">
                        🔍
                    </button>
                </div>
            </div>
        </section>
    );
}
