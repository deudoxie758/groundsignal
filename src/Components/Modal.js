// import React, { useContext } from 'react'
// import { MapContext } from '../Context/MapProvider'
// import iconPin from '../icon-pin.svg'

// function DetailsModal() {
//   const {
//     selectedLocation,
//     showModal,
//     setSelectedLocation,
//     setShowModal,
//     setShowResultsModal,
//   } = useContext(MapContext)

//   if (!selectedLocation || !showModal) return null

//   return (
//     <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white shadow-md rounded z-50">
//       <div className="flex items-center p-2 border-b">
//         <img src={iconPin} alt="Marker Icon" className="w-4 h-4 mr-2" />
//         <div className="flex-grow">
//           <p className="font-bold text-xs">{selectedLocation.name}</p>
//           <p className="text-sm">
//             {selectedLocation.location.lat}, {selectedLocation.location.lon}
//           </p>
//         </div>
//         <button className="bg-blue-500 text-white text-xs py-1 px-2 rounded">
//           Visit Website
//         </button>
//       </div>

//       <div className="p-2">
//         <p className="text-sm mb-2">{selectedLocation.details.description}</p>
//         <div className="flex space-x-2">
//           {selectedLocation.images.map((img, idx) => (
//             <img key={idx} src={img} alt={`${idx}`} className="w-16 h-16" />
//           ))}
//         </div>
//         <button
//           className="self-center bg-red-500 text-white text-xs py-1 px-2 rounded mt-2"
//           onClick={() => {
//             setSelectedLocation(null)
//             setShowModal(false)
//             setShowResultsModal(false)
//           }}
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   )
// }

// export default DetailsModal
import React, { useContext, useRef, useEffect } from 'react'
import { MapContext } from '../Context/MapProvider'
import iconPin from '../icon-pin.svg'

function DetailsModal() {
  const modalRef = useRef(null)
  const {
    selectedLocation,
    showModal,
    setSelectedLocation,
    setShowModal,
    setShowResultsModal,
  } = useContext(MapContext)

  function handleClickOutside(event) {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setSelectedLocation(null)
      setShowModal(false)
      setShowResultsModal(false)
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [setSelectedLocation, setShowModal, setShowResultsModal])

  if (!selectedLocation || !showModal) return null
  const description =
    selectedLocation?.details?.description ||
    "I'm sorry we don't have a description of this location. :("
  return (
    <>
      <div
        className="fixed inset-0 bg-black opacity-50 z-40"
        onClick={handleClickOutside}
      ></div>
      <div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-64 bg-white shadow-md rounded z-50"
        ref={modalRef}
      >
        <div className="flex items-center p-2 border-b">
          <img src={iconPin} alt="Marker Icon" className="w-4 h-4 mr-2" />
          <div className="flex-grow">
            <p className="font-bold text-base">{selectedLocation.name}</p>
            <p className="text-xs">
              {selectedLocation.location.lat}, {selectedLocation.location.lon}
            </p>
          </div>
          <button className="bg-blue-500 text-white text-xs py-1 px-2 h-10 rounded">
            Visit Website
          </button>
        </div>

        <div className="flex flex-col pr-2">
          <p className="text-sm mb-2 pl-2 overflow-y-auto max-h-10">
            {description}
          </p>
          <div className="flex flex-grow justify-between mt-2">
            {selectedLocation?.images?.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${idx}`}
                className="w-32 h-32 p-2 pb-0 "
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailsModal
