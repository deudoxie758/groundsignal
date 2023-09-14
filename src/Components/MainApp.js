import React, { useContext } from 'react'
import MapComponent from './Map'
import DetailsModal from './Modal'
import ResultsModal from './ResultsModal'
import SearchBar from './SearchBar'
import { MapContext } from '../Context/MapProvider'

function MainApp() {
  const { showResultsModal } = useContext(MapContext)

  return (
    <div className="relative h-screen">
      <SearchBar />
      {showResultsModal && <ResultsModal />}
      <DetailsModal />
      <MapComponent />
    </div>
  )
}
export default MainApp
