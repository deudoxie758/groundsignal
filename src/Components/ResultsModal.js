import React, { useContext } from 'react'
import { MapContext } from '../Context/MapProvider'
import iconPin from '../icon-pin.svg'

function ResultsModal() {
  const { selectedLocation, showResultsModal, searchResults } =
    useContext(MapContext)

  if (!selectedLocation || !showResultsModal) return null
  const resultsCount = searchResults.length
  return (
    <div className="ml-4 mt-2 absolute top-16 left-0 bg-white shadow-md rounded z-50 w-2/4">
      <div className="border-b p-2 pl-4 mb-2 bg-blue-500">
        <span>
          Found {resultsCount} {resultsCount === 1 ? 'result' : 'results'}
        </span>
      </div>
      <div className="flex items-center p-2">
        <img src={iconPin} alt="Marker Icon" className="w-4 h-4 mr-2" />
        <div>
          <p className="font-bold text-xs">{selectedLocation.name}</p>
          <p className="text-sm">
            {selectedLocation.location.lat}, {selectedLocation.location.lon}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ResultsModal
