'use client';
import React from 'react';

export default function AIComparisonSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Image comparison */}
      <div className="relative flex overflow-hidden rounded-lg shadow-lg h-[540px]">
        <div className="w-1/2">
          <img 
              src="assets/images/signin-screen.jpg"
            alt="Original property" 
            className="w-full h-full object-cover"
          />
           <div 
            className="absolute inset-0"
            style={{ background: 'linear-gradient(270deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 50.08%)' }}
          ></div>
          <div className="absolute bottom-2 left-2 bg-black/50 text-white text-sm px-2 py-1 rounded">
            Original
          </div>
        </div>
        <div className="w-1/2">
          <img 
               src="assets/images/signin-screen.jpg"
            alt="AI-enhanced property" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-2 right-2 bg-black/50 text-white text-sm px-2 py-1 rounded">
            AI-Enhanced
          </div>
        </div>

        {/* Divider */}
        <div className="absolute inset-y-0 left-1/2 w-1 bg-white"></div>
        <div className="absolute inset-y-0 left-1/2 flex items-center justify-center">
          <div className="w-5 h-5 bg-white rounded-full border border-gray-400"></div>
        </div>
      </div>

      {/* Features below */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        <div className="flex flex-col items-center gap-2">
          <div className="bg-green-500 p-3 rounded">
            <img src="/icon-image.png" alt="icon" className="w-6 h-6" />
          </div>
          <p className="text-sm">Lorem ipsum dolor sit</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="bg-green-500 p-3 rounded">
            <img src="/icon-ai.png" alt="icon" className="w-6 h-6" />
          </div>
          <p className="text-sm">Lorem ipsum dolor sit</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="bg-green-500 p-3 rounded">
            <img src="/icon-image.png" alt="icon" className="w-6 h-6" />
          </div>
          <p className="text-sm">Lorem ipsum dolor sit</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="bg-green-500 p-3 rounded">
            <img src="/icon-ai.png" alt="icon" className="w-6 h-6" />
          </div>
          <p className="text-sm">Lorem ipsum dolor sit</p>
        </div>
      </div>
    </section>
  );
}
