import React from 'react';

function FilterDropdown({ filterType, setFilterType }) {
    return (
        <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="border-2 border-gray-300 bg-gray-800 rounded-md px-4 py-2 mb-4"
        >
            <option value="">All</option>
            <option value="movie">Movies</option>
            <option value="series">Series</option>
            <option value="episode">Episodes</option>
        </select>
    );
}

export default FilterDropdown;
