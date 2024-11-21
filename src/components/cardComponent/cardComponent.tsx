import React, { useState, useEffect } from "react";
import odin from "../../assets/images/odin.jpg";
{
  /* odinData?.pageProps?.topic.image.url */
}

type OdinData = {
  pageProps?: {
    topic: {
      title: string;
      image: {
        url: string;
      };
    };
  };
};
export const CardComponent: React.FC<{}> = () => {
  const [odinData, setOdinData] = useState<OdinData>({});

  useEffect(() => {
    const fetchOdinData = async () => {
      try {
        const response = await fetch("https://mod4-backend.onrender.com/odin");
        const data = await response.json();
        setOdinData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching Odin data:", error);
      }
    };
    fetchOdinData();
  }, []);
  if (!odinData) {
    return <div>Loading...</div>;
  }
  return (
    <div className=" rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-40 sm:h-48"></div>
      <img src={odin} alt="" className="w-full object-cover object-center" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-900 mb-2 sm:text-2xl">
          {odinData?.pageProps?.topic.title}
        </h2>
      </div>
      <p className="text-gray-600 text-sm">
        Known as the All-Father, Odin is the chief of the Aesir gods and ruler
        of Asgard. He is associated with wisdom, war, death, and magic. Odin
        sacrificed one of his eyes for knowledge and is often depicted with his
        ravens, Huginn and Muninn.{" "}
      </p>
    </div>
  );
};
