import React from 'react'

function SearchBar({ searchTerm, setSearchTerm, onSearch }) {
    return (
        <div className='flex items-center gap-2 mb-4'>
            <input
                type='text'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder='Search movies...'
                className='border-2 border-gray-300 rounded-md px-4 py-2 w-full'
            />
            <button
                onClick={onSearch}
                className='bg-blue-500 text-white px-4 py-2 rounded-md'
            >
                Search
            </button>
        </div>
    )
}

export default SearchBar