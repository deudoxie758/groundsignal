import React, { useState, useContext } from 'react'
import { MapContext } from '../Context/MapProvider'
import searchIcon from '../icon-search.svg'

function SearchBar() {
  const {
    searchResults,
    setSearchResults,
    sampleData,
    selectedLocation,
    setSelectedLocation,
    showModal,
    setShowResultsModal,
  } = useContext(MapContext)
  const [query, setQuery] = useState('')

  const handleSearch = (e) => {
    const inputValue = e.target.value
    setQuery(inputValue)

    if (!inputValue.trim()) {
      // If the input is empty, hide the results modal, clear search results, and return
      setShowResultsModal(false)
      setSearchResults([])
      return
    }

    const results = sampleData.filter((data) =>
      data.name.toLowerCase().includes(e.target.value.toLowerCase())
    )
    setSearchResults(results)

    if (results.length > 0) {
      setShowResultsModal(true)
    } else {
      setShowResultsModal(false)
    }
  }
  const handleInputChange = (event) => {
    setShowResultsModal(false)
  }
  const handleResultClick = (result) => {
    setQuery(result.name)
    setSelectedLocation(result)
    setSearchResults([])
    setShowResultsModal(true)
  }
  const handleInputFocus = () => {
    setQuery('')
    setSearchResults([])
    setShowResultsModal(false)
  }
  return (
    <div className="absolute top-4 left-4 z-50 w-2/4">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <img src={searchIcon} alt="search" className="h-5 w-5 text-gray-400 " />
      </div>
      <input
        type="text"
        value={query}
        placeholder="Search..."
        onChange={(e) => {
          handleSearch(e)
          handleInputChange(e)
        }}
        onFocus={handleInputFocus}
        className="pl-10 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-0 focus:outline-none"
      />
      {query && (
        <div className="absolute w-full mt-2 border rounded-md shadow-sm bg-white z-60">
          {searchResults.length === 0 &&
            query &&
            !selectedLocation &&
            showModal && <p className="px-4 py-2">No results found!</p>}
          {searchResults.map((result) => (
            <div
              key={result.id}
              onClick={() => handleResultClick(result)}
              className="cursor-pointer hover:bg-gray-200 px-4 py-2"
            >
              {result.name}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
export default SearchBar
