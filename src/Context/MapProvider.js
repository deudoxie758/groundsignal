import React, { useState } from 'react'
import MapContext from './MapContext'

export const MapProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([])
  const [selectLocation, setselectedLocation] = useState(null)

  return (
    <MapContext.Provider
      value={{
        searchResults,
        setSearchResults,
        selectLocation,
        setselectedLocation,
      }}
    >
      {children}
    </MapContext.Provider>
  )
}
