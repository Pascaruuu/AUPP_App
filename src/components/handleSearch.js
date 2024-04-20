import React, { useState } from 'react';

export const handleSearch = (data, searchTerm) => {
  const [filteredData, setFilteredData] = useState([]);

  // Perform the search here
  const searchResults = data.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Update the state with the search results
  setFilteredData(searchResults);

  console.log('Search results:', searchResults);
};
