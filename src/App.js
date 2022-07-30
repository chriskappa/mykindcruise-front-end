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
import axios from "axios";
import HelpfulBlogsSection from "./Components/HelpfulBlogsSection";
import BannerSection from "./Components/BannerSection";
import MonthlyPriceSection from "./Components/MonthlyPriceSection";
import AdventuresList from "./Components/AdventuresList";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [blogPosts, setBlogPosts] = useState([]);
  const [adventures, setAdventures] = useState([]);
  const [cruise, setCruise] = useState([]);

  const inputRef = useRef(); //Ref In Order To Use DOM For AutoFocus
  document.body.addEventListener(
    "touchmove",
    function (event) {
      event.preventDefault();
      event.stopPropagation();
    },
    false
  );
  /* 
  * FetchData:
  * FetchData is reponsibile to fetch all the endpoints of the homeScreen
  * FetchData Uses Axios and runs in parallel with the help of Promise.all
  * Finally the state are batched with react 18 thus it will rerender once after running all three set states
  * Parameters:none
  * Return void

  */
  const fetchData = async () => {
    // Using Promise.All in order to run all the requests in Paralel
    // Adding Array of promises to the
    const res = await Promise.all([
      await axios.get("http://localhost:4000/blog/blogposts"),
      await axios.get("http://localhost:4000/blog/adventures"),
      await axios.get("http://localhost:4000/blog/cruises"),
    ]);

    setBlogPosts(res[0].data.data);
    setAdventures(res[1].data);
    setCruise(res[2].data);
    // Setting Loading False In order To Close Loading Screen
    setLoading(false);
  };

  /* 
  * HandleSubmit:
  * handleSubmit is responsible to handle the sumption from the form (input)
  * FetchData in real case scenario would make requests to the backend to update the home page
  * Finally input uses ref instead of state in order to speedup and reduce the rerenders
  * Parameters:event
  * Return void

  */
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = inputRef.current.value;
    if (text.length <= 0) {
      alert("Please Enter Something First");
    } else {
      alert(`Searching Query :${inputRef.current.value}`);
    }
  };
  useEffect(() => {
    // inputRef.current.focus(); //AutoFocus On Input On Page Load
    fetchData();
  }, []);

  // If Data is loading show loading spinner
  if (loading) {
    return (
      <div className="w-screen h-screen ">
        <div className="div flex h-screen justify-center items-center">
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }
  return (
    <div className="mainApp">
      {/* Start of Banner */}
      <BannerSection handleSubmit={handleSubmit} inputRef={inputRef} />
      {/* End of Banner */}
      {/* Monthly Prices Section */}
      <MonthlyPriceSection />
      {/* End Monthly Prices Section */}
      {/* Start Adventures List */}
      <AdventuresList adventures={adventures} icon={<FaSafari size="30" />} />
      {/* End Adventures List */}
      {/* Start Cruise List */}
      <AdventuresList adventures={cruise} icon={<FaRegThumbsUp size="30" />} />
      {/* End Cruise List */}
      {/* Start Of Helpful Blogs & FAQs */}
      <HelpfulBlogsSection blogPosts={blogPosts} />

      {/* End Of Helpful Blogs & FAQs */}

      {/* Start Of  Footer */}
      <Footer />

      {/* End Of  Footer */}
    </div>
  );
}

export default App;
