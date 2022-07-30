import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="mainApp">
      {/* Start of Banner */}
      <div className="banner">
        <div className="banner-text">
          <h1>Test</h1>
          <div className="input w-screen flex justify-center ">
            <form className="w-1/2 ">
              <label class="relative block ">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    class="h-5 w-5 fill-black"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                  >
                    <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                  </svg>
                </span>
                <input
                  class="w-full bg-white    rounded-full py-1 pl-10 pr-4 focus:outline-none"
                  placeholder="Start Your Smart Search Here"
                  type="text"
                />
              </label>
            </form>
          </div>
        </div>
      </div>
      {/* End of Banner */}
      <section>
        <div className="monthlyPriceToogle flex justify-end mr-5 mt-2">
          <div className="toogleGroup flex  gap-3">
            <h3 className="text-sm font-semibold text-gray-700">
              Monthly Prices
            </h3>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
            {/* <h1 className="text-sm font-semibold text-gray-700">Switch</h1> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
