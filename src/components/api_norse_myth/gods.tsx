import { useEffect, useState } from "react"
import GodsElement from "./godsElement.tsx"

type Element = {
  nodeType: string,
  content: {
    value: string
    content: {
      value: string
    }[]
  }[]

  
}
type Props ={
  name: string
}
const Gods = ({name}: Props)=>{
  const [data, setData] = useState<Element[]>([])
  useEffect(()=>{
    const getData = async () =>{
      const godUrl = 'https://mod4-backend.onrender.com/' + name
      const r = await fetch(godUrl)
      const json = await r.json()
      setData(json.pageProps.topicContent.content.json.content)
    }
    getData()
  },[])

  return(
    /*Tekur bara fyrsta p - þarf fleiri
    og
    þarf að breyta headers og taka þá sérstaklega út til að style-a
    */ 
    <>
      <div className="flex justify-center mt-32 mb-6">
      <div className="font-bold text-2xl">{name}</div>
      </div>
      <div className="flex h-[418px] w-auto justify-center items-center ">
        <img className="h-96 w-72 rounded-br-[50px] " src="src/assets/images/odin.png "alt={name} />
      </div>



      <div className="text">
        {data.map(element =>{
          
          return(
            <GodsElement  name = {element.nodeType}>
              {element.content.map(text =>{
                if(text.value === "Family Tree"){
                  return(<></>)
                }
                return(
                  <>
                    {text.value}
                    {text.content?.map(t=>t.value)}
                  </>
                )
              })}
            </GodsElement>
          )
        })}
      </div>
    </>  
  )
}
export default Gods