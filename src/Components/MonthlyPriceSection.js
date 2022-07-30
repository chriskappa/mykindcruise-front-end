import React from "react";

function MonthlyPriceSection() {
  return (
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
  );
}

export default MonthlyPriceSection;
