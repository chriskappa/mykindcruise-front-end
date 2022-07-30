import React, { useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import logo from "./logo.svg";
import "./App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import WithScrollbar from "./Components/WithScrollbar";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const data = [
    {
      id: 1,
      imageLink:
        "https://www.lwcholidays.com/app/uploads/2019/05/Luxury-Greece-Holiday-Banner.jpg",
      title: "No Fly No Stress",
    },
    {
      id: 2,
      imageLink:
        "https://www.lwcholidays.com/app/uploads/2019/05/Luxury-Greece-Holiday-Banner.jpg",
      title: "No Fly No Stress",
    },
    {
      id: 3,
      imageLink:
        "https://www.lwcholidays.com/app/uploads/2019/05/Luxury-Greece-Holiday-Banner.jpg",
      title: "No Fly No Stress",
    },
    {
      id: 4,
      imageLink:
        "https://www.lwcholidays.com/app/uploads/2019/05/Luxury-Greece-Holiday-Banner.jpg",
      title: "No Fly No Stress",
    },
    {
      id: 5,
      imageLink:
        "https://www.lwcholidays.com/app/uploads/2019/05/Luxury-Greece-Holiday-Banner.jpg",
      title: "No Fly No Stress",
    },
    {
      id: 6,
      imageLink:
        "https://www.lwcholidays.com/app/uploads/2019/05/Luxury-Greece-Holiday-Banner.jpg",
      title: "No Fly No Stress",
    },
    {
      id: 7,
      imageLink:
        "https://www.lwcholidays.com/app/uploads/2019/05/Luxury-Greece-Holiday-Banner.jpg",
      title: "No Fly No Stress",
    },
    {
      id: 8,
      imageLink:
        "https://www.lwcholidays.com/app/uploads/2019/05/Luxury-Greece-Holiday-Banner.jpg",
      title: "No Fly No Stress",
    },
    {
      id: 9,
      imageLink:
        "https://www.lwcholidays.com/app/uploads/2019/05/Luxury-Greece-Holiday-Banner.jpg",
      title: "No Fly No Stress",
    },
    {
      id: 10,
      imageLink:
        "https://www.lwcholidays.com/app/uploads/2019/05/Luxury-Greece-Holiday-Banner.jpg",
      title: "No Fly No Stress",
    },
    {
      id: 11,
      imageLink:
        "https://www.lwcholidays.com/app/uploads/2019/05/Luxury-Greece-Holiday-Banner.jpg",
      title: "No Fly No Stress",
    },
    {
      id: 12,
      imageLink:
        "https://www.lwcholidays.com/app/uploads/2019/05/Luxury-Greece-Holiday-Banner.jpg",
      title: "No Fly No Stress",
    },
    {
      id: 13,
      imageLink:
        "https://www.lwcholidays.com/app/uploads/2019/05/Luxury-Greece-Holiday-Banner.jpg",
      title: "No Fly No Stress",
    },
    {
      id: 14,
      imageLink:
        "https://www.lwcholidays.com/app/uploads/2019/05/Luxury-Greece-Holiday-Banner.jpg",
      title: "No Fly No Stress",
    },
  ];

  return (
    <div className="mainApp">
      {/* Start of Banner */}
      <div className="banner">
        <div className="banner-text">
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
                  class="w-full bg-white    rounded-full py-1 pl-10 pr-4 focus:outline-none text-center text-xs"
                  placeholder="Start Your Smart Search Here"
                  type="text"
                />
              </label>
            </form>
          </div>
        </div>
      </div>
      {/* End of Banner */}
      {/* Monthly Prices Section */}
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
      {/* END Monthly Prices Section */}
      <div className="myadventurestohavesection sm:mx-20 mt-2">
        {/* Start Category List   */}
        <div className="categoryList flex items-center gap-2 mx-7 mb-2">
          <h1 className="text-sm">IMG</h1>
          <h1 className="text-sm font-semibold text-gray-700">
            My Adventures to have
          </h1>
        </div>
        {/* End Category List */}
        <div className="myadventureList">
          <WithScrollbar />
        </div>
      </div>

      {/* Start Of Helpful Blogs & FAQs */}
      <section className=" mx-7 sm:mx-28">
        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            <h1 className="text-xs">IMG</h1>
            <h1 className="text-xs font-bold text-gray-700">
              Helpful Blogs & FAQs
            </h1>
          </div>
          <h1 className="text-gray-700 text-xs  hover:cursor-pointer">
            Find More Here{" "}
          </h1>
        </div>
        <div className="post mt-2 flex ">
          <img
            src="https://media.istockphoto.com/photos/the-croupier-holds-a-roulette-ball-in-a-casino-in-his-hand-picture-id1158005632?k=20&m=1158005632&s=612x612&w=0&h=DeeyqQewMX_Y3ZUnUoYEu7HriAXGVkf7WBOjCQjqrSc="
            className="w-14 h-14 rounded mr-2"
            alt=""
          />
          <div className="blogs-text-section flex flex-col">
            <h1 className="font-semibold text-sm">
              Choose Fun! Choose Carnival!
            </h1>
            <p className="text-xs text-gray-500">
              New to Cruising or a Seasoned Funseeker?Carnival is fun By Matt
              Roberts from My Kind of Cruise
            </p>
          </div>
        </div>
      </section>
      {/* END Of Helpful Blogs & FAQs */}
    </div>
  );
}

export default App;
