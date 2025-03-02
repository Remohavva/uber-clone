import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-start overflow-y-auto">
      {/* Hero Section */}
      <div className="relative overflow-hidden mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-black sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">Welcome to</span>
                  <span className="block text-white">RideConnect</span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Your journey begins here. Join thousands of riders and drivers on the platform that's transforming transportation.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/login"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-200 md:py-4 md:text-lg md:px-10"
                    >
                      Sign In
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/register"
                      className="w-full flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-gray-900 md:py-4 md:text-lg md:px-10"
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="RideConnect transportation"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Safety Feature */}
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-black mx-auto">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="mt-2 text-xl font-semibold text-white">Safety First</h3>
              <p className="mt-2 text-gray-300">
                Your safety is our top priority with verified drivers and tracked rides.
              </p>
            </div>

            {/* Reliability Feature */}
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-black mx-auto">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-2 text-xl font-semibold text-white">Always Available</h3>
              <p className="mt-2 text-gray-300">
                Get a ride whenever you need, wherever you are.
              </p>
            </div>
            

            {/* Affordability Feature */}
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-black mx-auto">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-2 text-xl font-semibold text-white">Best Rates</h3>
              <p className="mt-2 text-gray-300">
                Competitive pricing for every journey you take.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              About RideConnect
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
              We're revolutionizing the way people move. Our mission is to create reliable, affordable, and safe transportation accessible to everyone.
            </p>
          </div>
          
          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-300">
                  To transform transportation by connecting people with reliable rides and creating opportunities for drivers to grow their businesses.
                </p>
              </div>
              
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                <p className="text-gray-300">
                  We believe in transparency, safety, and community. Every decision we make is guided by our commitment to creating positive experiences for both riders and drivers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
