import React, { useEffect, useState } from 'react'
import MapContext from './MapContext'
import sampleData from '../Sample-data'

export const MapProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([])
  const [selectLocation, setselectedLocation] = useState(null)
  const [locations, setLocations] = useState([])

  return (
    <MapContext.Provider
      value={{
        searchResults,
        setSearchResults,
        selectLocation,
        setselectedLocation,
        sampleData: sampleData,
      }}
    >
      {children}
    </MapContext.Provider>
  )
}
