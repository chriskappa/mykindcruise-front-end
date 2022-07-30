import React from "react";
import { FaSafari, FaRegThumbsUp, FaMap } from "react-icons/fa";
import WithScrollbar from "./WithScrollbar";
function AdventuresList({ adventures, icon }) {
  return (
    <div className="myadventurestohavesection sm:mx-20 mt-2 overflow-hidden sm:overflow-visible">
      {/* Start Category List   */}
      <div className="categoryList flex items-center gap-2 mx-7 mb-2">
        {icon}

        <h1 className="text-sm font-semibold text-gray-700">
          My Adventures to have
        </h1>
      </div>
      {/* End Category List */}
      <div className="myadventureList">
        <WithScrollbar data={adventures.data} />
      </div>
    </div>
  );
}

export default AdventuresList;
