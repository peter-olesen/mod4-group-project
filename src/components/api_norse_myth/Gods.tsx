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
/*import freyjaImg from "../../assets/images/freyja.jpg";*/
import lokiImg from "../../assets/images/loki.jpg";
import baldurImg from "../../assets/images/formated/Baldur.png";
import heimdallImg from "../../assets/images/formated/Heimdall.png";
/*import idunImg from "../../assets/images/idun.jpg";*/
import freyrImg from "../../assets/images/freyr.jpg";
import nerthusImg from "../../assets/images/nerthus.png";
import tyrImg from "../../assets/images/formated/Tyr.png";
/*import njordImg from "../../assets/images/njord.jpg";*/


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
    freya: "https://images.ctfassets.net/m3d2dwoc9jko/66AcmFfbde1dqwxpYdbyUq/b25e281d28fbfc61b287a68bb36e1c7f/freya-norse-goddess-of-fertility.jpg",
    loki: lokiImg,
    baldur: baldurImg,
    heimdall: heimdallImg,
    idun:"https://images.ctfassets.net/m3d2dwoc9jko/5OhytnGmpLEaQPf9zJcCrd/8c52cc6dc3c722d6cc7d1a7b064df620/idun-norse-goddess-of-youth.jpg",
    freyr: freyrImg,
    nerthus: nerthusImg,
    tyr: tyrImg,
    njord: "https://images.ctfassets.net/m3d2dwoc9jko/2D2t9rCCUgAn6UTgv2hXjx/da7c8be697cbffa753498b832c4c0326/njord-norse-god-of-the-sea.jpg"
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
                    <GodsElement name={element.nodeType}>
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

