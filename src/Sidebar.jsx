// MUI-Komponenten importieren
import Card from "@mui/material/Card"; // Rahmen der Karte
import CardContent from "@mui/material/CardContent"; // Innenbereich mit Abstand
import Typography from "@mui/material/Typography"; // Text (ersetzt h1–h6, p)
import Box from "@mui/material/Box"; // Container für Grösse/Abstand
import Slider from "@mui/material/Slider";

// Empfängt das fokussierte Erdbeben als Prop von App.jsx
export const Sidebar = ({ earthquake, size, setSize }) => (
  <div className="aside">
    <aside>
      {/* Card mit Aussenabstand (m: 1 = 8px) */}
      <Card sx={{ m: 1 }}>
        <CardContent>
          {/* Kleine graue Überschrift, gutterBottom = Abstand nach unten */}
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            Erdbeben-Details
          </Typography>

          {/* Magnitude als Hauptwert, "–" solange nichts ausgewählt */}
          <Typography variant="h5">
            M {earthquake.properties?.mag ?? "–"}
          </Typography>

          {/* Ort, mb: 1.5 = Abstand nach unten */}
          <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
            {earthquake.properties?.place ?? "Kein Beben ausgewählt"}
          </Typography>

          {/* Koordinaten (USGS: [lon, lat]) und Zeitpunkt in kleiner Schrift */}
          <Typography variant="body2">
            Lat: {earthquake.geometry?.coordinates?.[1] ?? ""}
            <br />
            Lon: {earthquake.geometry?.coordinates?.[0] ?? ""}
            <br />
            {/* Zeitstempel (ms) → lesbares Datum, falls vorhanden */}
            Zeitpunkt:{" "}
            {earthquake.properties?.time
              ? new Date(earthquake.properties.time).toLocaleString()
              : ""}
          </Typography>
        </CardContent>
      </Card>
      {/* Slider steuert den Radius-Faktor der Kreise */}
      <Box sx={{ width: 200, p: 2 }}>
        <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
          Kreisgrösse
        </Typography>
        <Slider
          aria-label="Kreisgrösse"
          value={size} // aktueller Wert aus State
          onChange={(event, newValue) => setSize(newValue)} // State aktualisieren
          valueLabelDisplay="auto" // Wert beim Ziehen anzeigen
          marks // Markierungen bei jedem Schritt
          step={0.5}
          min={1}
          max={3}
        />
      </Box>
    </aside>
  </div>
);
