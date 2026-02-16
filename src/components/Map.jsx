import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ center = [48.885, 2.404], zoom = 15 }) => {
    return (
        <div style={{ height: '300px', width: '100%' }}>
            <MapContainer center={center} zoom={zoom} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={center}>
                    <Popup>
                        18, rue du 14 juillet<br />93310 Le Pré-Saint-Gervais
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Map;