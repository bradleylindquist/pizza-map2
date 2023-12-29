import React, { useState } from "react";
import { Map, Marker, Draggable, ZoomControl } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";

export function Content() {
  const [hue, setHue] = useState(0);
  const color = `hsl(${hue % 360}deg 99% 70%)`;
  const [anchor, setAnchor] = useState([39.099, -94.578]);
  const style = { background: "black", color: "white" };

  const slices = [
    { id: 1, lat: 41.7328, lng: -72.735 },
    { id: 2, lat: 41.48401, lng: -71.3105 },
    { id: 3, lat: 47.5216, lng: -95.4027 },
    { id: 4, lat: 45.5197, lng: -123.112 },
    { id: 5, lat: 39.485, lng: -80.142 },
    { id: 6, lat: 44.9778, lng: -93.265 },
  ];
  return (
    <Map height={800} defaultCenter={[39.099, -94.578]} defaultZoom={5}>
      {slices.map((slice) => (
        <Draggable key={slice.id} anchor={[slice.lat, slice.lng]} offset={[43, 79]}>
          <img src="https://cdn-icons-png.flaticon.com/512/2558/2558100.png" width={75} height={75} alt="" />
        </Draggable>
      ))}

      <ZoomControl buttonStyle={style} />
      <Draggable anchor={[47.91, -97.045]} offset={[43, 39]} onDragEnd={setAnchor}>
        <img src="https://cdn-icons-png.flaticon.com/512/218/218206.png" width={75} height={75} alt="" />
      </Draggable>
      <Marker width={30} anchor={[53.4307, -2.9607]} color={color} />
    </Map>
  );
}
