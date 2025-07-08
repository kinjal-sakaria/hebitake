/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { usePathname } from "next/navigation";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Map page paths to image URLs
  const imageMap: Record<string, string> = {
    "/sign-in": "assets/images/signin-screen.jpg",
    "/sign-up": "assets/images/signup-screen.jpg",
    "/forget-password": "assets/images/forgetpass-screen.jpg",
    "/reset-password": "assets/images/resetpassword-screen.jpg",
    "/agency-branding": "assets/images/identity-verification-screen.jpg",
    "/add-team-member": "assets/images/identity-verification-screen.jpg",
    "/property-type": "assets/images/identity-verification-screen.jpg",
    "/identity-verification": "assets/images/identity-verification-screen.jpg",
  };

  const imageUrl = imageMap[pathname] || "assets/signup-screen.jpg";

  return (
    <main className="w-full min-h-screen flex select-none relative">
      {/* Background image for mobile & tablet */}
      <div
        className="absolute inset-0 lg:hidden"
      >
        <img
          src={imageUrl}
          alt="Auth screen background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      <div className="flex flex-col md:flex-row w-full relative z-10">
        {/* Left: Auth form */}
        <div className="w-full lg:w-1/2 md:w-full  flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-12">
          <div className='lg:bg-none lg:shadow-none md:bg-white mobile:bg-white md:rounded-lg md:shadow-lg md:opacity-90  mobile:rounded-lg mobile:shadow-lg mobile:opacity-90 lg:opacity-100 mobile:p-10 md:p-12 lg:p-0  flex flex-col '>
            <div className="w-40 sm:w-48">
              <img
                src="assets/images/hebitake-logo.jpg"
                alt="Hebitake Logo"
                className="w-full h-auto"
              />
            </div>
            {children}
          </div>
        </div>

        {/* Right: Image for desktop */}
        <div className="hidden lg:block lg:w-1/2 h-full">
          <img
            src={imageUrl}
            alt="Auth screen image"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </main>
  );
}
