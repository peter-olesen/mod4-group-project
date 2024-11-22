import { useEffect, useState } from "react";
import GodsElement from "./godsElement.tsx";
type Element = {
  nodeType: string;
  content: {
    value: string;
    content: {
      value: string;
    }[];
  }[];
};
type Props = {
  name: string;
};
const Gods = ({ name }: Props) => {
  const [data, setData] = useState<Element[]>([]);

  useEffect(() => {
    const getData = async () => {
      const godUrl = "https://mod4-backend.onrender.com/" + name;
      const r = await fetch(godUrl);
      const json = await r.json();
      setData(json.pageProps.topicContent.content.json.content);
    };
    getData();
  }, []);

  return (
    /*Tekur bara fyrsta p - þarf fleiri
    og
    þarf að breyta headers og taka þá sérstaklega út til að style-a
    */
    <>
      <div className="flex flex-col justify-center items-center mx-5 pt-16">
        <h1 className="pb-5 font-montserrat text-2xl first-letter:uppercase">
          {name}
        </h1>

        <img
          className="max-w-full max-h-full  object-cover  rounded-br-custom  "
          src="/src/assets/images/odin.png"
          alt=""
        />
      </div>
      <div className="text">
        {data.map((element) => {
          return (
            <GodsElement name={element.nodeType}>
              {element.content.map((text) => {
                if (text.value === "Family Tree") {
                  return <></>;
                }
                if (text.value === "Attributes") {
                  return (
                    <>
                      {text.value}
                      {text.content?.map((t) => t.value)}
                    </>
                  );
                }
                return (
                  <>
                    {text.value}
                    {text.content?.map((t) => t.value)}
                  </>
                );
              })}
            </GodsElement>
          );
        })}
      </div>
    </>
  );
};
export default Gods;
