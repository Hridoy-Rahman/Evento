import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Generate page numbers with ellipses
  const getPageNumbers = () => {
    const pages = [];
    const PAGE_NUMBERS_TO_SHOW = 5;

    if (totalPages <= PAGE_NUMBERS_TO_SHOW) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1, 2);
      if (currentPage > 3 && totalPages > PAGE_NUMBERS_TO_SHOW) pages.push('...');
      let startPage = Math.max(currentPage - 1, 3);
      let endPage = Math.min(currentPage + 1, totalPages - 2);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2 && totalPages > PAGE_NUMBERS_TO_SHOW) pages.push('...');
      if (totalPages > 2) pages.push(totalPages - 1, totalPages);
    }

    return pages;
  };

  return (
    <div className="flex flex-col items-center mt-6">
      <div className="flex items-center mb-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-2 py-2 text-xl border rounded-md bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 mr-2"
        >
          <IoIosArrowBack />
        </button>

        {/* Page Numbers */}
        <div className="flex space-x-2">
          {getPageNumbers().map((number, index) => (
            <button
              key={index}
              onClick={() => number !== '...' && onPageChange(number)}
              className={`px-3 py-1 border rounded-md text-lg ${
                currentPage === number
                  ? "border-2 border-black text-black font-semibold"
                  : "hover:bg-gray-300"
              }`}
              disabled={number === '...'}
            >
              {number}
            </button>
          ))}
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-2 py-2 border text-xl rounded-md bg-gray-300 hover:bg-gray-300 disabled:bg-gray-100 ml-2"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
