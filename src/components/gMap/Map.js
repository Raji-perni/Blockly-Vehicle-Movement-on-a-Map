import React from 'react';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ paths }) => {
  // Ensure paths has at least one point to prevent errors
  const centerLat = paths.length > 0 ? paths[0].lat : 51.505;
  const centerLng = paths.length > 0 ? paths[0].lng : -0.09;

  return (
    <MapContainer center={[centerLat, centerLng]} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {paths.length > 0 && (
        <>
          <Polyline positions={paths.map(p => [p.lat, p.lng])} color="blue" weight={3} />
          <Marker position={[paths[paths.length - 1]?.lat, paths[paths.length - 1]?.lng]} />
        </>
      )}
    </MapContainer>
  );
};

export default Map;
