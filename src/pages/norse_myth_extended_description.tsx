import { NavBarComponent } from "../components/hamburgerMenu/hamburger.tsx";

const NorseFull = () => {
  return (
    <>
      <NavBarComponent></NavBarComponent>
      <div className="mx-5 pt-5 flex justify-center flex-col ">
        <h1 className="font-modernAntiqua text-center text-3xl py-5 xs:text-base">
          {" "}
          Norse Mythology
        </h1>
        <img
          className="pt-5 max-h-[600px] w-full object-contain rounded-br-[50px]"
          src="src/assets/images/Norse_myth_main.jpg"
          alt=""
        />

        <div>
        <p className="font-montserrat pt-5 leading-7">
          Norse mythology, rooted in the ancient beliefs of the Norse people
          from Scandinavia, is a deeply symbolic and vivid tapestry of gods,
          creatures, and cosmic mysteries. It encapsulates their understanding
          of the world, humanity’s place within it, and the eternal struggle
          between order and chaos. It is both grand and intimate, weaving tales
          of divine heroics alongside the raw, personal emotions of its gods and
          beings.
        </p>
        </div>
      </div>
    </>
  );
};

export default NorseFull;
