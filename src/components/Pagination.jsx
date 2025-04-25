import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div className="flex justify-center mt-6">
            {pageNumbers.map((number) => (
                <button
                    key={number}
                    onClick={() => onPageChange(number)}
                    className={`px-4 py-2 mx-1 rounded-md ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                >
                    {number}
                </button>
            ))}
        </div>
    );
}

export default Pagination;
