import { useEffect, useState } from "react";
import GodsElement from "./godsElement.tsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

  let content_count = 1;

  return (
    /*Tekur bara fyrsta p - þarf fleiri
    og
    þarf að breyta headers og taka þá sérstaklega út til að style-a
    */
    <>
      <div className="flex justify-center mt-16 mb-6">
        <div className="font-bold font-montserrat text-2xl">{name}</div>
      </div>
      <div className="flex h-[418px] mb-10 w-auto justify-center items-center ">
        <img
          className="  max-h-[418px]  rounded-br-[50px] "
          src="src/assets/images/odin.png "
          alt={name}
        />
      </div>

      <div>
        <Accordion type="single" collapsible className =" font-montserrat text-xl mx-5">
          {data.map((element) => {
            {
              element.nodeType === "heading-2" && content_count++;
            }

            return (
              <>
                <AccordionItem  value={" value - " + content_count } >
                  {element.nodeType === "heading-2" ? (
                    <AccordionTrigger >
                      {element.content[0].value}
                      
                    </AccordionTrigger>
                    
                  ) : null}
                  <AccordionContent >
                   
                    <GodsElement name={element.nodeType} >
                      {element.content.map((text) => {

                        if (text.value === "Family Tree") {
                          return <></>;
                        }
                    
                        return (
                          <>
                            {text.value}
                            {text.content?.map((t) => t.value)}
                        
                          </>
                        );
                      })}
                    </GodsElement>{" "}
                  </AccordionContent>
                </AccordionItem>
              </>
            );
          })}{" "}
        </Accordion>
      </div>
    </>
  );
};
export default Gods;
