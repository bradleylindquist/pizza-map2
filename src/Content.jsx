import React, { useState } from "react";
import { Map, Marker, Draggable, ZoomControl } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";

export function Content() {
  const [hue, setHue] = useState(0);
  const color = `hsl(${hue % 360}deg 99% 70%)`;
  const [anchor, setAnchor] = useState([39.099, -94.578]);
  const style = { background: "black", color: "white" };
  return (
    <Map height={800} defaultCenter={[39.099, -94.578]} defaultZoom={5}>
      <ZoomControl buttonStyle={style} />
      <Marker width={30} anchor={[53.4307, -2.9607]} color={color} />
      <Draggable anchor={anchor} offset={[43, 79]}>
        <img src="https://cdn-icons-png.flaticon.com/512/2558/2558100.png" width={75} height={75} alt="" />
      </Draggable>
    </Map>
  );
}

// 41.7328, -72.735
