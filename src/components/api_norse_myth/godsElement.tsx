import { ReactNode } from "react";


type Props = {
  children: ReactNode;
  name: string;
};




const GodsElement = ({ children, name }: Props) => {

  if (name === "heading-2") {


    return (
     <></>
    );
  } else if (name === "heading-3") {
    return (
      <h3 className="flex flex-col justify-center items-center  m-5 text-xl font-bold text-center">
        {children}
      </h3>
    );
  } else if (name === "blockquote") {
    return (
      <i className="flex flex-col justify-center items-center italic  leading-[20px] mx-5 mb-0 font-montserrat text-center">
        {children}
      </i>
    );
  } else if (name === "embedded-entry-block") {
    return <></>;
  } else if (name === "paragraph") {
    return (
      <p className="flex flex-col justify-center items-center leading-[30px] font-montserrat text-base">
        {children}
      </p>
    );
  } else if (name === "text") {
    return <span>{children}</span>;
  }
  return <>element does not exist</>;
};
export default GodsElement;
