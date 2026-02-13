"use client";

import {
  MapContainer,
  TileLayer,
  Circle,
  CircleMarker,
  Tooltip,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

const VALLET: [number, number] = [47.1611, -1.2644];
const RADIUS_M = 25_000;

/** Hide zoom control & keep the map non-interactive enough to stay clean */
function MapConfig() {
  const map = useMap();

  useEffect(() => {
    // Disable drag on mobile to avoid accidental scroll-jacking
    map.dragging.disable();
    map.touchZoom.disable();
    map.doubleClickZoom.disable();
    map.boxZoom.disable();
    map.keyboard.disable();

    // Enable on desktop hover so curious users can still explore
    const enableDrag = () => map.dragging.enable();
    const disableDrag = () => map.dragging.disable();

    const el = map.getContainer();
    el.addEventListener("mouseenter", enableDrag);
    el.addEventListener("mouseleave", disableDrag);

    return () => {
      el.removeEventListener("mouseenter", enableDrag);
      el.removeEventListener("mouseleave", disableDrag);
    };
  }, [map]);

  return null;
}

export default function InterventionMap() {
  return (
    <MapContainer
      center={VALLET}
      zoom={10}
      scrollWheelZoom={false}
      zoomControl={false}
      attributionControl={false}
      className="intervention-map h-full w-full"
      style={{ background: "#F7F3ED" }}
    >
      <MapConfig />

      {/* Stadia Alidade Smooth — ultra-clean, muted tones */}
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
      />

      {/* Outer glow — large, very faint circle for depth */}
      <Circle
        center={VALLET}
        radius={RADIUS_M + 1500}
        pathOptions={{
          color: "transparent",
          fillColor: "#8BA87E",
          fillOpacity: 0.06,
        }}
      />

      {/* 25km radius — main circle */}
      <Circle
        center={VALLET}
        radius={RADIUS_M}
        pathOptions={{
          color: "#4A7C59",
          fillColor: "#8BA87E",
          fillOpacity: 0.12,
          weight: 2,
          opacity: 0.7,
          dashArray: "8 6",
        }}
      />

      {/* Inner ring — subtle reinforcement */}
      <Circle
        center={VALLET}
        radius={RADIUS_M}
        pathOptions={{
          color: "#4A7C59",
          fillColor: "transparent",
          fillOpacity: 0,
          weight: 1,
          opacity: 0.25,
          dashArray: "2 4",
          dashOffset: "4",
        }}
      />

      {/* Center marker — branded dot */}
      <CircleMarker
        center={VALLET}
        radius={6}
        pathOptions={{
          color: "#FEFDFB",
          fillColor: "#4A7C59",
          fillOpacity: 1,
          weight: 2.5,
        }}
      >
        <Tooltip permanent direction="top" offset={[0, -10]}>
          Vallet
        </Tooltip>
      </CircleMarker>
    </MapContainer>
  );
}
