import React, { useState, useContext } from 'react'
import MapContext from '../Context/MapContext'

function SearchBar() {
  const { searchResults, setSearchResults, sampleData } = useContext(MapContext)
  const [query, setQuery] = useState('')

  const handleSearch = (e) => {
    setQuery(e.target.value)

    const results = sampleData.filter((data) =>
      data.name.toLowerCase().includes(e.target.value.toLowerCase())
    )
    setSearchResults(results)
  }
  return (
    <div>
      <input
        type="text"
        value={query}
        placeholder="Search..."
        onChange={handleSearch}
      />
      <div>
        {searchResults.length === 0 && query && <p>No results found!</p>}
        {searchResults.map((result) => (
          <div key={result.id}>{result.name}</div>
        ))}
      </div>
    </div>
  )
}
