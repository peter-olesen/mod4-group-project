import React, { useState, useEffect } from "react";
import odin from "../../assets/images/formated images/Images/Odin.png";
{
  /* odinData?.pageProps?.topic.image.url */
}

type OdinData = {
  pageProps?: {
    topic: {
      summary: {
        json: {
          content: [
            {
              content: [{ value: string }];
            }
          ];
        };
      };
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
      {/*<div className="relative h-40 sm:h-48"></div>*/}
      <img src={odin} alt="" className="w-full object-cover object-center" />
      <div className="p-4">
        <h2 className="text-xl text-center font-bold text-gray-900 mb-2 sm:text-2xl">
          {odinData?.pageProps?.topic.title}
        </h2>
      </div>
      <p className="text-gray-600 text-sm">
        {odinData?.pageProps?.topic.summary.json.content[0].content[0].value}
      </p>
    </div>
  );
};
