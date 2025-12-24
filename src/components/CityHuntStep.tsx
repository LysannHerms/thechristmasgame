import { useMemo, useState } from "react";
import type { PlayerId } from "../lib/players";
import { PLAYERS } from "../lib/players";


import { MapContainer, TileLayer, Marker, useMapEvents,  ZoomControl } from "react-leaflet";
import L, { LatLng } from "leaflet";

type TargetCity = {
  name: string;
  lat: number;
  lng: number;
  radiusMeters: number; // Hitbox
};

type Props = {
  player: PlayerId;
  title: string;
  prompt: string; // Frage/Hint (kurz!)
  target: TargetCity;
  // map setup
  initialCenter?: [number, number]; // default Berlin
  initialZoom?: number; // default 10/11
  onSolved: () => void; // markDone + nav(...)
  starIconUrl: string; // Stern3.png
};

function ClickCatcher({
  target,
  onHit,
}: {
  target: TargetCity;
  onHit: (hitLatLng: LatLng) => void;
}) {
  useMapEvents({
    click(e) {
      const clickLatLng = e.latlng;
      const targetLatLng = L.latLng(target.lat, target.lng);
      const dist = clickLatLng.distanceTo(targetLatLng); // meters

      if (dist <= target.radiusMeters) {
        onHit(clickLatLng);
      }
    },
  });
  return null;
}

export default function CityHuntStep({
  player,
  title,
  prompt,
  target,
  initialCenter = [52.9943, 11.7520], // Berlin
  initialZoom = 11,
  onSolved,
  starIconUrl,
}: Props) {
  const theme = PLAYERS[player];
  const [hit, setHit] = useState(false);
  const [showInfo, setShowInfo] = useState(true);

  const starIcon = useMemo(
    () =>
      L.icon({
        iconUrl: starIconUrl,
        iconSize: [46, 46],
        iconAnchor: [23, 46],
      }),
    [starIconUrl]
  );

  return (
    <div
  className="screen"
  style={{
    "--bg-from": theme.from,
    "--bg-to": theme.to,
    padding: 0,          // ⬅️ wichtig
  } as React.CSSProperties}
>

       <div
  style={{
    position: "relative",
    width: "100%",
    height: "100vh",     // ⬅️ volle Höhe
    overflow: "hidden",  // ⬅️ wichtig
  }}
>
       <MapContainer
  center={initialCenter}
  zoom={initialZoom}
  style={{
    position: "absolute",
    inset: 0,            // ⬅️ MAGIC: top/right/bottom/left = 0
  }}
  zoomControl={false}
  scrollWheelZoom
  dragging
  doubleClickZoom
>
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/lysann146/cmjihop7p001h01sgdophcs7f/tiles/{z}/{x}/{y}?access_token=${import.meta.env.VITE_MAPBOX_TOKEN}`}
            tileSize={512}
            zoomOffset={-1}
            attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> &copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
          />
        
            <ZoomControl position="bottomright" />
          <ClickCatcher
            target={target}
            onHit={() => {
              setHit(true);
            }}
          />

          {hit && <Marker position={[target.lat, target.lng]} icon={starIcon} />}
        </MapContainer>

        {/* TOP overlay: title + prompt */}
        {/* TOP overlay: title + prompt (togglebar) */}
<div
  style={{
    position: "absolute",
    top: 12,
    left: 12,
    right: 12,
    zIndex: 1000,
    pointerEvents: "auto",
  }}
>
  <div
    style={{
      display: "flex",
      alignItems: "flex-start",
      gap: 10,
      padding: "10px 12px",
      borderRadius: 14,
      background: "rgba(0,0,0,0.35)",
      backdropFilter: "blur(6px)",
      WebkitBackdropFilter: "blur(6px)",
      border: "1px solid rgba(255,255,255,0.14)",
    }}
  >
    <div style={{ flex: 1 }}>
      <div style={{ fontWeight: 800, fontSize: 16 }}>{title}</div>

      {showInfo && (
        <div
          style={{
            marginTop: 4,
            fontSize: 14,
            lineHeight: 1.3,
            opacity: 0.9,
          }}
        >
          {prompt}
        </div>
      )}
    </div>

    {/* Toggle Button */}
    <button
      onClick={() => setShowInfo((v) => !v)}
      aria-label={showInfo ? "Hinweis ausblenden" : "Hinweis einblenden"}
      style={{
        background: "rgba(255,255,255,0.15)",
        border: "none",
        borderRadius: 10,
        padding: "6px 8px",
        color: "white",
        fontSize: 16,
        cursor: "pointer",
        lineHeight: 1,
      }}
    >
      {showInfo ? "˄" : "˅"}
    </button>
  </div>
</div>


        {/* BOTTOM overlay: hint + button */}
       <div
  style={{
    position: "absolute",
    left: 12,
    right: 12,
    bottom: 12,
    zIndex: 1000,
    pointerEvents: "auto",
  }}
>
  <button
    className="primary"
    disabled={!hit}
    onClick={onSolved}
    style={{
      width: "100%",
      padding: "14px 16px",
      opacity: hit ? 1 : 0.55,
    }}
  >
    ✶ Weiter
  </button>
</div>

      </div>
    </div>
  );
}