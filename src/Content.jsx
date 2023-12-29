import React, { useState } from "react";
import { Map, Marker, Overlay, ZoomControl } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";
import { Modal } from "./Modal";

export function Content() {
  const [hue, setHue] = useState(0);
  const color = `hsl(${hue % 360}deg 99% 70%)`;
  const [anchor, setAnchor] = useState([39.099, -94.578]);
  const style = { background: "black", color: "white" };
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [popoverContent, setPopoverContent] = useState(undefined);

  const slices = [
    { id: 1, lat: 41.7328, lng: -72.735, name: "Elmwood Pizza; West Hartford, CT" },
    { id: 2, lat: 41.48401, lng: -71.3105, name: "Nikolas Pizza; Newport, RI" },
    { id: 3, lat: 47.5216, lng: -95.4027, name: "Daroo's Pizza; Bagley, MN" },
    { id: 4, lat: 45.5197, lng: -123.112, name: "Pizza Schmizza; Forest Grove, OR" },
    { id: 5, lat: 39.485, lng: -80.142, name: "Colasessano's; Fairmont, WV" },
    { id: 6, lat: 44.9778, lng: -93.265, name: "Pizza Luce; Minneapolis, MN" },
  ];

  return (
    <Map height={800} defaultCenter={[39.099, -94.578]} defaultZoom={5}>
      {slices.map((slice) => (
        <Overlay key={slice.id} anchor={[slice.lat, slice.lng]} offset={[43, 79]}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2558/2558100.png"
            width={75}
            height={75}
            alt="slice.name"
            onClick={() => {
              setPopoverVisible(true);
              setPopoverContent(slice.name);
            }}
          />
        </Overlay>
      ))}

      <ZoomControl buttonStyle={style} />
      <Overlay anchor={[47.9107, -97.04438]} offset={[43, 39]} onDragEnd={setAnchor}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/218/218206.png"
          width={75}
          height={75}
          alt=""
          onClick={() => {
            setPopoverVisible(true);
            setPopoverContent("Giovanni's Pizza; Grand Forks, ND");
          }}
        />
      </Overlay>
      <Modal show={popoverVisible} onClose={() => setPopoverVisible(false)}>
        <div>{popoverContent}</div>
      </Modal>
      <Marker width={30} anchor={[53.4307, -2.9607]} color={color} />
    </Map>
  );
}
