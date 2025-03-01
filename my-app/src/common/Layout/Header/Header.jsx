import React, { useEffect } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";

import { useState } from "react";

const Headers = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Close sidebar when clicking outside
  useEffect(() => {
    AOS.init()})

  return (
    <nav className="bg-[#17153B] border-gray-200 ">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4"
      
      >
        <a href="https://flowbite.com" className="flex items-center space-x-3"
        data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="200"
        >
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${isMenuOpen ? "block" : "hidden"} md:flex md:w-auto md:order-1`}>
          <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0 bg-[#17153B]">
            <li
             data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="400"
            >
              <a href="#" className="block py-2 px-3 text-gray-900 dark:text-white hover:text-blue-700">Home</a>
            </li>
            <li
             data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="600"
            >
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 dark:text-white hover:text-blue-700"
              >
                Company
                <svg className="w-2.5 h-2.5 ml-2" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l4 4 4-4" />
                </svg>
              </button>
            </li>
            <li
             data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="800"
            >
              <a href="#" className="block py-2 px-3 text-gray-900 dark:text-white hover:text-blue-700">Marketplace</a>
            </li>
            <li
             data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000"
            >
              <a href="#" className="block py-2 px-3 text-gray-900 dark:text-white hover:text-blue-700">Resources</a>
            </li>
            <li
             data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1200"
            >
              <a href="#" className="block py-2 px-3 text-gray-900 dark:text-white hover:text-blue-700">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      {isDropdownOpen && (
        <div className="mt-1 border-gray-200 shadow-xs  bg-[#17153B]">
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
            {[...Array(2)].map((_, index) => (
              <ul key={index}>
                {[
                  "Online Stores",
                  "Segmentation",
                  "Marketing CRM"
                ].map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                      <div className="font-semibold">{item}</div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};


export default Headers;
