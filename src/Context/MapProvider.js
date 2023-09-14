import React, { createContext, useState } from 'react'
import sampleData from '../Sample-data'

export const MapContext = createContext()

export function MapProvider({ children }) {
  const [searchResults, setSearchResults] = useState([])
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [showResultsModal, setShowResultsModal] = useState(false)

  return (
    <MapContext.Provider
      value={{
        searchResults,
        setSearchResults,
        selectedLocation,
        setSelectedLocation,
        showModal,
        setShowModal,
        showResultsModal,
        setShowResultsModal,
        sampleData: sampleData,
      }}
    >
      {children}
    </MapContext.Provider>
  )
}
