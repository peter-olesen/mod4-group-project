
import { useEffect, useState } from "react";

type Element = {
  nodeType: string;
  content: {
    value: string;
    content: {
      value: string;
    }[];
  }[];
};

const Odin = () => {
  const [data, setData] = useState<Element[]>([]);
  useEffect(() => {
    const getData = async () => {
      const godUrl = "https://mod4-backend.onrender.com/odin";
      const r = await fetch(godUrl);
      const json = await r.json();
      setData(json.pageProps.topicContent.content.json.content);
    };
    getData();
  }, []);

  console.log(data);

  return (
    <>
      {data.map((element) => {

        if (element.nodeType==="heading-2") {

            return (<h2>{element.content[0].value}</h2> )
        }
        // if (element.nodeType==="paragraph"  ) {
        //     return (element.content[0].value)
        // }
        // if(element.nodeType === "text")
        //     return (element.content[0].value)
        
        
        
        if (element.nodeType==="heading-3") {
            
            // if (element.content[0].value === "Family Tree") return (<> </>)
            return (<h2>{element.content[0].value}</h2>)
        }
        
        // return (
            
        //   <>
          
        //     {element.content.map((text) => {
                
        //       return <>{text.value}</>;
        //     })}
        //   </>
        // );
      })}
    </>
  );
};

export default Odin;
