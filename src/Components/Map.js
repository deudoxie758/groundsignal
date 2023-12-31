import React, { useState, useEffect, useContext } from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import { MapContext } from '../Context/MapProvider'
import L from 'leaflet'
import iconPin from '../icon-pin.svg'

function MapUpdater() {
  const { selectedLocation, setSelectedLocation, setShowModal } =
    useContext(MapContext)
  const map = useMap()
  const customIcon = new L.Icon({
    iconUrl: iconPin,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  })
  useEffect(() => {
    if (selectedLocation) {
      const newCenter = [
        selectedLocation.location.lat,
        selectedLocation.location.lon,
      ]
      map.flyTo(newCenter, 13)
    }
  }, [selectedLocation, map])
  if (!selectedLocation) {
    return <Marker icon={customIcon} position={map.getCenter()}></Marker>
  }

  return (
    <Marker
      icon={customIcon}
      position={[selectedLocation.location.lat, selectedLocation.location.lon]}
      eventHandlers={{
        click: () => {
          setSelectedLocation(selectedLocation)
          setShowModal(true)
        },
      }}
    ></Marker>
  )
}

function MapComponent() {
  const [mapCenter] = useState([42.397, -80.644])
  return (
    <div className="h-screen z-0">
      <MapContainer
        center={mapCenter}
        zoom={8}
        scrollWheelZoom={true}
        zoomControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MapUpdater />
      </MapContainer>
    </div>
  )
}

export default MapComponent
