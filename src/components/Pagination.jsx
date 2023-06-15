import React from "react";

const Pagination = ({
  currentPage,
  pages,
  handleNext,
  handlePrev,
  currentIndex,
}) => {
  return (
    <div className="p-5 flex flex-row justify-center items-center">
      <button
        onClick={currentIndex !== 0 ? handlePrev : null}
        className={`border p-2 rounded ${currentIndex === 0 && "hidden"} mr-2`}
      >
        <p className={`text-sm`}>Previous</p>
      </button>
      <button
        className={`${pages === currentPage && "hidden"} border p-2 rounded`}
        onClick={handleNext}
      >
        <p className="text-sm">Next</p>
      </button>
    </div>
  );
};

export default Pagination;
