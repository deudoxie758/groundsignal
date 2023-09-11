import './App.css'
import MapComponent from './Components/Map'
import SearchBar from './Components/SearchBar'
import { MapProvider } from './Context/MapProvider'

function App() {
  return (
    <MapProvider>
      <SearchBar />
      <MapComponent />
    </MapProvider>
  )
}

export default App
