import React, { useContext } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import MapContext from '../Context/MapContext'

function MapComponent() {
  const { searchResults, selectedLocation, setSelectedLocation } =
    useContext(MapContext)

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {searchResults.map((result) => (
        <Marker
          key={result.id}
          position={[result.location.lat, result.location.lon]}
          onClick={() => setSelectedLocation(result)}
        >
          <Popup>{result.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default MapComponent
