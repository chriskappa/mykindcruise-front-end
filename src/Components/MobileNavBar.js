import React from "react";

function MobileNavBar() {
  return (
    <nav className="bg-blue-800 sm:hidden mt-5 p-2">
      <ul className="flex gap-5 justify-center">
        <li className="text-sm text-white">Guide</li>
        <li className="text-sm text-white">Search</li>
        <li className="text-sm text-white">Explore</li>
        <li className="text-sm text-white">Favourites</li>
        <li className="text-sm text-white">Profile</li>
      </ul>
    </nav>
  );
}

export default MobileNavBar;
