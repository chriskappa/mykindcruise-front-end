import React, { useState, useRef, useEffect } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import logo from "./logo.svg";
import "./App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import WithScrollbar from "./Components/WithScrollbar";
import BlogPost from "./Components/BlogPost";
import MobileNavBar from "./Components/MobileNavBar";
import NavBar from "./Components/Footer";
import Footer from "./Components/Footer";
import { FaSafari, FaRegThumbsUp, FaMap } from "react-icons/fa";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const inputRef = useRef(); //Ref In Order To Use DOM For AutoFocus
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

  useEffect(() => {
    inputRef.current.focus(); //AutoFocus On Input On Page Load
  }, []);
  return (
    <div className="mainApp">
      {/* Start of Banner */}
      <div className="banner">
        <div className="banner-text">
          <div className="input w-screen flex justify-center ">
            <form className="w-1/2 ">
              <label class="relative block ">
                <span
                  class="absolute inset-y-0 left-0 flex items-center pl-3 hover:cursor-pointer"
                  onClick={() => alert("Searching")}
                >
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
                  ref={inputRef}
                  class="w-full bg-white text-black    rounded-full py-1 pl-10 pr-4 focus:outline-none text-center text-xs"
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
          <h1 className="text-sm">
            <FaSafari size={30} />
          </h1>
          <h1 className="text-sm font-semibold text-gray-700">
            My Adventures to have
          </h1>
        </div>
        {/* End Category List */}
        <div className="myadventureList">
          <WithScrollbar />
        </div>
      </div>
      <div className="myadventurestohavesection sm:mx-20 mt-2">
        {/* Start Category List   */}
        <div className="categoryList flex items-center gap-2 mx-7 mb-2">
          <h1 className="text-sm">
            <FaRegThumbsUp size={30} />
          </h1>
          <h1 className="text-sm font-semibold text-gray-700">
            Popular Cruises
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
            <h1 className="text-xs">
              <FaMap size={30} />
            </h1>
            <h1 className="text-xs font-bold text-gray-700">
              Helpful Blogs & FAQs
            </h1>
          </div>
          <h1 className="text-gray-700 text-xs  hover:cursor-pointer">
            Find More Here{" "}
          </h1>
        </div>
        <div className="blogPostList flex flex-col justify-between sm:flex-row sm:gap-5 sm:flex-wrap">
          <BlogPost
            title="UK Holidays Guide"
            body="New to Cruising or a Seasoned Funseeker?Carnival is fun By Matt
          Roberts from My Kind of Cruise"
            image="https://www.expatica.com/app/uploads/sites/10/2014/05/bank-holidays.jpg"
          />
          <BlogPost
            title="Greece Holidays Guide"
            body="New to Cruising or a Seasoned Funseeker?Carnival is fun By Matt Roberts from My Kind of Cruise"
            image="https://www.remax.eu/uploads/agent-1/Greece%20(Optimized)-5e580fa45d9f1.jpg"
          />
          <BlogPost
            title="Do I have to tip or pay gratuties onboard?"
            body="New to Cruising or a Seasoned Funseeker?Carnival is fun By Matt
            Roberts from My Kind of Cruise."
            image="https://e3.365dm.com/21/12/768x432/skynews-facebook-meta-logo_5608613.jpg?20211208165724"
          />
          <BlogPost
            title="Travel you can really trust"
            body="New to Cruising or a Seasoned Funseeker?Carnival is fun By Matt
            Roberts from My Kind of Cruise"
            image="https://www.cnet.com/a/img/resize/8e8da3c2f68e10a3913f4ab43aa0306c026dca5c/hub/2020/04/22/9c0515dc-bb9f-4386-9052-79885ef81ca8/iphone-se-2020-21.jpg?auto=webp&width=768"
          />
          <BlogPost
            title="What's a Cabin Category?"
            body="New to Cruising or a Seasoned Funseeker?Carnival is fun By Matt
            Roberts from My Kind of Cruise"
            image="https://images.unsplash.com/photo-1622151834677-70f982c9adef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwd2l0aCUyMGxhcHRvcHxlbnwwfHwwfHw%3D&w=1000&q=80"
          />
          <BlogPost
            title="How do I know which cruise terminal i am saili..."
            body="New to Cruising or a Seasoned Funseeker?Carnival is fun By Matt
            Roberts from My Kind of Cruise."
            image="https://cdn.cnn.com/cnnnext/dam/assets/200421145514-costa-deliziosa-2-1-full-169.jpg"
          />
          <BlogPost
            title="UK Holidays Guide"
            body="New to Cruising or a Seasoned Funseeker?Carnival is fun By Matt
          Roberts from My Kind of Cruise"
            image="https://www.expatica.com/app/uploads/sites/10/2014/05/bank-holidays.jpg"
          />
          <BlogPost
            title="Greece Holidays Guide"
            body="New to Cruising or a Seasoned Funseeker?Carnival is fun By Matt Roberts from My Kind of Cruise"
            image="https://www.remax.eu/uploads/agent-1/Greece%20(Optimized)-5e580fa45d9f1.jpg"
          />
        </div>
      </section>
      {/* END Of Helpful Blogs & FAQs */}

      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
