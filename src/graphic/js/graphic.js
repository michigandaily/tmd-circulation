// JS for your graphic
import pym from "pym.js";
import * as d3 from "d3";
import * as L from "leaflet";
import loc from "../data/data.csv";

const draw = async () => {
  // step 1: access data
  // step 2: create chart dimensions
  // step 3: draw canvas
  // step 4: create scales
  // step 5: draw data
  // step 6: draw peripherals
  // paste JavaScript below this line
  const locations = await d3.csv(loc)

  const map = L.map("map");
  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: "abcd",
      minZoom: 8,
    }
  ).addTo(map); // create the map with the tilesets
  console.log(locations)
  locations.forEach((v) => L.marker([v.Latitude, v.Longitude]).bindPopup(v.address).addTo(map))

  // zoom and center in Ann Arbor
  map.setView([42.277, -83.739], 16);
};

window.onresize = () => {};

window.onload = () => {
  const pymChild = new pym.Child({ polling: 500 });
  pymChild.sendHeight();
  draw()
};
