import React from "react";

function BlogPost() {
  return (
    <div className="post mt-2 flex flex-row py-10 ">
      <img
        src="https://media.istockphoto.com/photos/the-croupier-holds-a-roulette-ball-in-a-casino-in-his-hand-picture-id1158005632?k=20&m=1158005632&s=612x612&w=0&h=DeeyqQewMX_Y3ZUnUoYEu7HriAXGVkf7WBOjCQjqrSc="
        className="w-14 h-14 rounded mr-2"
        alt=""
      />
      <div className="blogs-text-section flex flex-col">
        <h1 className="font-semibold text-sm">Choose Fun! Choose Carnival!</h1>
        <p className="text-xs text-gray-500">
          New to Cruising or a Seasoned Funseeker?Carnival is fun By Matt
          Roberts from My Kind of Cruise
        </p>
      </div>
    </div>
  );
}

export default BlogPost;
