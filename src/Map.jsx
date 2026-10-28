import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  GeoJSON,
} from "react-leaflet";

import data from "./assets/4.5_week.geojson.json";
import plates from "./assets/plate_boundaries.geojson.json";
import Button from "@mui/material/Button";

export const Map = ({ setEarthquake, size }) => {
  const earthquakes = data.features; // Wir benötigen nur den Feature-Array aus den Daten

  return (
    <MapContainer
      center={[20, 0]} // [lat, lon]: leicht nördlich vom Äquator, Nullmeridian
      zoom={2} // 2 zeigt fast die ganze Welt
      style={{ height: "95vh", width: "100%" }}
    >
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri &mdash; Source: US National Park Service"
      />

      <GeoJSON data={plates} style={{ color: "#444", weight: 1.5 }} />

      {earthquakes.map((d, i) => (
        <CircleMarker
          key={i}
          center={[d.geometry.coordinates[1], d.geometry.coordinates[0]]}
          radius={d.properties.mag ** size} // Exponent kommt jetzt vom Slider
          pathOptions={{ color: "#d7301f", fillOpacity: 0.5 }}
        >
          <Popup>
            <div style={{ textAlign: "center" }}>
              {d.properties.title} <br />
              <Button
                variant="contained"
                color="error"
                size="small"
                onClick={() => setEarthquake(d)}
              >
                Details
              </Button>
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
};
