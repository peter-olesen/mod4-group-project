import footerlogo from "../../assets/images/Logo.png";
export const Footer = () => {
  return (
    <>
      <footer className="bg-white py-8">
        <div className="container mx-auto flex flex-col items-center">
          {/*Logo*/}
          <div className="mb-6">
            <img src={footerlogo} className="h-20 w-20"></img>
          </div>
          {/*Divider Line*/}
          <div className="w-full max-w-60 h-px bg-gray-300 mb-6"></div>
          {/*Copyright*/}
          <div className="mb-6 text-gray-700">
            <p>© 2024 Norse Mythology. All Rights Reserved.</p>
          </div>
          {/*Social Media Icons*/}
          <div className="flex space-x-6">
            {/*Facebook*/}
            <span className="icon-[icon-park-outline--facebook-one] text-3xl"></span>
            {/*Instagram*/}
            <span className="icon-[gg--instagram] text-3xl"></span>
            {/*Pinterest*/}
            <span className="icon-[teenyicons--pinterest-outline] text-3xl"></span>
            {/*X*/}
            <span className="icon-[devicon--twitter] text-3xl"></span>
            {/*Youtube*/}
            <span className="icon-[teenyicons--youtube-outline] text-3xl"></span>
          </div>
        </div>
      </footer>
    </>
  );
};
