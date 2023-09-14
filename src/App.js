import './App.css'
import { MapProvider } from './Context/MapProvider'
import MainApp from './Components/MainApp'

function App() {
  return (
    <MapProvider>
      <MainApp />
    </MapProvider>
  )
}

export default App
