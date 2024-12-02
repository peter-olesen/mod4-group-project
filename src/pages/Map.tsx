import React, { useState } from "react";
import MapofIceland from "../assets/images/iceland_amo_2020226_lrg.jpg";

type Region = {
  id: string;
  name: string;
  description: string;
  color: string;
  geolocation?: string;
  position: string;
};

const Map = () => {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);

  const regions: Region[] = [
    {
      id: "north",
      name: "Northern Iceland",
      description: `The sagas of Northern Iceland are steeped in themes of heroism, supernatural encounters, and dramatic family feuds. This region is renowned for stories like the Saga of Grettor the Strong, which portrays Grettir as an outlaw who battles ghosts and demonstrates immense resilience in the harsh Icelandic landscape. The area's fjords and rugged terrain often serve as evocative backdrops for tales blending human conflict with elements of Norse mythology. These sagas, passed down orally before being written in the 13th century, preserve a vidid tapestry of Iceland's historical and cultural identity.`,
      color: "bg-blue-500",
      position: "top-[20%] left-[40%]",
    },
    {
      id: "south",
      name: "Southern Iceland",
      description:
        "The sagas from Southern Iceland are deeply rooted in the region's dramatic landscapes of glaciers, volcanoes, and fertile lowlands. These stories often focus on the themes of heroism, betrayal, and family feuds, reflecting the social dynamics of medieval Iceland. The are is particularly noted for sagas like Njáls Saga, set in the southern plains, which explores legal disputes, honor, and revence agains the backdrop of Icelands's early legal system. Folklore from this region also features supernatural beings like elves, trolls, and hidden people, blending historical narratives with mythological elements",
      color: "bg-red-500",
      position: "bottom-[10%] right-[40%]",
    },
  ];

  const handleRegionClick = (region: Region) => {
    setSelectedRegion(region);
  };
  return (
    <div>
      <h1 className="font-modernAntiqua text-center m-auto text-2xl w-80 mt-10">
        Historical Map of Iceland
      </h1>
      <div className="relative">
        <img src={MapofIceland} alt="Map of Iceland" className="w-full mt-20" />
        {/* Example of clickable regions */}
        {regions.map((region, index) => {
          return (
            <div
              className={`absolute w-[4%] h-[4%] opacity-80 cursor-pointer ${region.color} ${region.position}`}
              onClick={() => handleRegionClick(region)}
              title={region.name}
              key={index}
            />
          );
        })}
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
