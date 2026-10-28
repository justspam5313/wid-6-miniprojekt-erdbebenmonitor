import Typography from "@mui/material/Typography";

export const Header = () => (
  <div className="header">
    <header>
      {/* variant steuert die Grösse (wie h1–h6), sx = Inline-Stile */}
      <Typography variant="h4" sx={{ color: "#d7301f" }}>
        IGEO Erdbebenmonitor
      </Typography>
    </header>
  </div>
);
