import React, { useState } from "react";
import MapofIceland from "../assets/images/iceland_amo_2020226_lrg.jpg";

const Map = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const regions = [
    {
      id: "north",
      name: "Northern Iceland",
      description: "Details about Northern Iceland's folklore...",
    },
    {
      id: "south",
      name: "Southern Iceland",
      description: "Details about Southern Iceland's folklore...",
    },
  ];

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
  };
  return (
    <div>
      <h1 className="font-modernAntiqua text-center m-auto text-2xl w-80 mt-10">
        Historical Map of Icelandic Folklore
      </h1>
      <div className="relative">
        <img src={MapofIceland} alt="Map of Iceland" className="w-full mt-20" />
        {/* Example of clickable regions */}
        <div
          className="absolute top-20 left-40 w-10 bg-blue-500 opacity-50 cursor-pointer"
          onClick={() => handleRegionClick(regions[0])}
          title="Northern Iceland"
        ></div>
        <div
          className="absolute bottom-20 right-40 w-10 h-10 bg-red-500 opacity-50 cursor-pointer"
          onClick={() => handleRegionClick(regions[1])}
          title="Southern Iceland"
        ></div>
      </div>

      {selectedRegion && (
        <div className="mt-5 p-4 border border-gray-300 rounded">
          <h2 className="font-bold">{selectedRegion.name}</h2>
          <p>{selectedRegion.description}</p>
        </div>
      )}
    </div>
  );
};

export default Map;
