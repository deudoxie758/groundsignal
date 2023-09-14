import React, { useContext } from 'react'
import { MapContext } from '../Context/MapProvider'

function DetailsModal() {
  const {
    selectedLocation,
    setSelectedLocation,
    showModal,
    setShowModal,
    setShowResultsModal,
  } = useContext(MapContext)

  if (!selectedLocation || !showModal) return null

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-4 shadow-lg rounded-md">
      <h2 className="text-2xl mb-4">{selectedLocation.name}</h2>
      <p className="mb-4">{selectedLocation.details?.description}</p>
      <div className="flex space-x-4 mb-4">
        {selectedLocation.images?.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={selectedLocation.name}
            className="w-36"
          />
        ))}
      </div>
      <button
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        onClick={() => {
          setSelectedLocation(null)
          setShowModal(false)
          setShowResultsModal(false)
        }}
      >
        Close
      </button>
    </div>
  )
}

export default DetailsModal
