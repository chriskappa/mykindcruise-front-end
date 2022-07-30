import React from "react";
import BlogPost from "./BlogPost";
import { FaSafari, FaRegThumbsUp, FaMap } from "react-icons/fa";
function HelpfulBlogsSection({ blogPosts }) {
  return (
    <div className=" mx-7 sm:mx-28">
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
        {blogPosts.map((v) => (
          <BlogPost title={v.title} body={v.body} image={v.image} key={v.id} />
        ))}
      </div>
    </div>
  );
}

export default HelpfulBlogsSection;
