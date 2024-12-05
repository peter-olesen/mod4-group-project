import { useEffect, useState } from "react";
import GodsElement from "./GodsElement";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useParams } from "react-router-dom";

import odinImg from "../../assets/images/formated/Odin.png";
import friggImg from "../../assets/images/formated/Frigg.png";
import thorImg from "../../assets/images/Thor.jpg";
import freyjaImg from "../../assets/images/formated/Freyja.png";
import lokiImg from "../../assets/images/loki.jpg";
import baldurImg from "../../assets/images/formated/Baldur.png";
import heimdallImg from "../../assets/images/formated/Heimdall.png";
import idunImg from "../../assets/images/idun.png";
import freyrImg from "../../assets/images/freyr.jpg";
import nerthusImg from "../../assets/images/nerthus.png";
import tyrImg from "../../assets/images/formated/Tyr.png";
import njordImg from "../../assets/images/njord.png";


/* ==================================
  All the things we take from the API
================================== */
type Element = {
  nodeType: string;
  content: {
    value: string;
    content: {
      value: string;
    }[];
  }[];
};


/* ==========
  Get the API
========== */
export const Gods = () => {
  const [data, setData] = useState<Element[]>([]);
  const { name } = useParams();
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

  /* ========================
    Get our images here below
  ======================== */

  const customImages: Record<string, string> = {
    odin: odinImg,
    frigg: friggImg,
    thor: thorImg,
    freya: freyjaImg,
    loki: lokiImg,
    baldur: baldurImg,
    heimdall: heimdallImg,
    idun:idunImg,
    freyr: freyrImg,
    nerthus: nerthusImg,
    tyr: tyrImg,
    njord: njordImg
  }


  return (
    /* ===========================================
      Set up the page and call things from the API
    =========================================== */
    <>
      <div className="flex justify-center mt-16 mb-6">
        <div className="font-newRocker text-fire text-4xl">{name}</div>
      </div>
      <div className="flex h-[418px] mb-10 w-auto justify-center items-center ">
        <img
          className="  max-h-[418px]  rounded-br-[50px] "
          src={customImages[name?.toLowerCase() || "odin"]}
          alt={name} width="400" 

        />
      </div>

      {/* ===================
        Accordion from Shadcn
      ===================== */}
      <div>
        <Accordion
          type="single"
          collapsible
          className=" font-montserrat text-xl mx-5"
        >
          {data.map((element) => {
            {
              element.nodeType === "heading-2" && content_count++;
            }

            return (
              <>
                <AccordionItem value={" value - " + content_count}>
                  {element.nodeType === "heading-2" ? (
                    <AccordionTrigger className="font-newRocker text-fire text-2xl">
                      {element.content[0].value}
                    </AccordionTrigger>
                  ) : null}
                  <AccordionContent>
                    <GodsElement name={element.nodeType} >
                      {element.content.map((text) => {
                        if (text.value === "Family Tree") return <></>;
                        

                        return (
                          <>
                            {text.value}
                            {text.content?.map((t) => t.value)}
                          </>
                        );
                      })}
                    </GodsElement>
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

