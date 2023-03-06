import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../node_modules/leaflet/dist/leaflet.css';
import { BiSearchAlt2 } from "react-icons/bi";
import { useState } from 'react';
import { icon, Icon } from 'leaflet'

/*
  Coordenadas de Pederneiras:
  Lat: -22.3521;
  Lgn: -48.7752;

  Coordenadas de Jaú:
  Lat:-22.2963;
  Lgn:-48.5587;
*/

function App() {

  const [position, setPosition] = useState([-22.3521, -48.7752]);

  function getPos(){
    var lati = document.getElementById("latitude");
    var long = document.getElementById("longitude");

    setPosition([parseFloat(lati.value), parseFloat(long.value)]);

    MapContainer.setView(position);
  }
  
  const customIcon = new Icon({
    iconUrl: require("./icon/marker-icon.png"),
    iconSize: [32, 32]
  })

  return (
    <div>
      <div className="entrada">
        <input type="text" placeholder='Digite a latitude' className='local' id="latitude" />
        <input type="text" placeholder='Digite a longitude' className='local' id="longitude" />
        <button className='pesq' onClick={getPos} ><BiSearchAlt2 size={26} /></button>
      </div>
      <MapContainer center={position} zoom={13}>
        <TileLayer 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={position} icon={customIcon}>
          <Popup>Latitude: {position[0]}<br/>Longitude: {position[1]} </Popup>
        </Marker>
      </MapContainer>
    </div>
  );

}

export default App;
