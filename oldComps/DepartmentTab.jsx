import React, { useState, useRef } from "react";
import { departments } from "@/constants/departments";

const DepartmentTab = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += scrollOffset;
      setScrollPosition(containerRef.current.scrollLeft);
    }
  };

  return (
    <div className="h-[50vh] py-15 flex flex-col items-center bg-[#071e3f] text-white">
      <h2 className="text-2xl font-semibold mb-6 uppercase">
        Departments
      </h2>
      <div className="static overflow-hidden mx-auto">
        <div
          ref={containerRef}
          className="flex space-x-4 overflow-x-auto scroll-smooth"
          style={{ scrollbarWidth: "auto" }}
        >
          {departments.map((dept, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-[150px] h-[150px] p-4 border rounded-full shadow"
            >
              <img src={dept.icon} alt={dept.name} className="h-16 w-16 mb-2" />
              <span className="text-md font-medium">{dept.name}</span>
            </div>
          ))}
        </div>
        {scrollPosition > 0 && (
          <button
            onClick={() => scroll(-150)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
        )}
        {containerRef.current &&
          scrollPosition <
            containerRef.current.scrollWidth -
              containerRef.current.clientWidth && (
            <button
              onClick={() => scroll(150)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          )}
      </div>
    </div>
  );
};

export default DepartmentTab;
