import { ReactNode } from "react"


type Props = {
  children: ReactNode,
  name: string
}
const GodsElement = ({children, name}: Props) =>{
  if(name === "heading-2"){
    return(
      <h2 className="flex flex-col justify-center items-center mt-5 mx-5 mb-0 leading-[30px] font-semibold">
        {children}
      </h2>
    )
  }
  else if(name === "heading-3"){
    return(
      <h3 className="flex flex-col justify-center items-center mt-5 mx-5 mb-0 leading-[30px] font-medium">
        {children}
      </h3>
    )
  }
  else if(name === "blockquote"){
    return(
      <i className="flex flex-col justify-center items-center mt-5 mx-16 mb-0 leading-[30px] font-extralight">
        {children}
      </i>
    )
  }
  else if(name === "embedded-entry-block"){
    return(
      <></>
    )
  }
  else if(name === "paragraph"){
    return(
      <p className="flex flex-col justify-center items-center mt-5 mx-16 mb-0 leading-[28px]">
        {children}
      </p>
    )
  }
  else if(name === "text"){
    return(
      <span>
        {children}
      </span>
    )
  }
  return(
    <>
      element does not exist
    </>
  )
}
export default GodsElement