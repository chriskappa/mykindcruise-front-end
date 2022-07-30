import React from "react";

// Setting Default Values for Image , title,body in case some of these values are not used as props
function BlogPost({
  image = "https://media.istockphoto.com/photos/the-croupier-holds-a-roulette-ball-in-a-casino-in-his-hand-picture-id1158005632?k=20&m=1158005632&s=612x612&w=0&h=DeeyqQewMX_Y3ZUnUoYEu7HriAXGVkf7WBOjCQjqrSc=",
  title = "Not Found!",
  body = "Not Found",
}) {
  return (
    <div className="flex flex-col hover:cursor-pointer hover:text-red-500">
      <div className="post mt-2 flex flex-row py-10 ">
        <img src={image} className="w-14 h-14 rounded mr-2" alt="" />
        <div className="blogs-text-section flex flex-col">
          <h1 className="font-semibold text-sm">{title}</h1>
          <p className="text-xs text-gray-500 w-5/6">{body}</p>
        </div>
      </div>
      <hr class="border-1 w-full  border-gray-500 hover:border-purple-500 drop-shadow-xl" />
    </div>
  );
}

export default BlogPost;
