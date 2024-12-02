import ContentButton from "../ui/content_button.tsx";
import norsehomepage from "../assets/images/Homepage_background.png";
import norsegods from "../assets/images/Norse gods.jpg";

export const NorseHomepage = () => {
  return (
    <>
      <div className="px-5 pt-8">
        <div className=" flex flex-col justify-center items-center ">
          <img className="" src={norsehomepage} alt="" />
        </div>
        <div className="flex justify-center flex-col items-center">
          <h2 className="text-xl p-10 text-center font-modernAntiqua">
            Norse mythology introduction
          </h2>
          <p className="font-montserrat text-base leading-7">
            Norse mythology is a collection of ancient Scandinavian stories
            about the origins of the world, nature, and the fate of the cosmos.
            It tells of gods, giants, and other mythical beings living in realms
            like Asgard, Midgard (Earth), and Helheim. These tales explore
            themes of fate, honor, and the balance between order and chaos,
            leading up to Ragnarok, the end of the world. They’re filled with
            epic battles, sacrifices, and the shared adventures of gods and
            mortals.
          </p>
        </div>
        <div className="py-10">
          <div className="pb-3">
            <h2 className="text-xl text-left font-modernAntiqua">Norse Gods</h2>
          </div>
          <div className="flex justify-center items-center ">
            <img
              className="object-center w-[413px] h-full rounded-br-[50px]"
              src={norsegods}
              alt=""
            />
          </div>
          <div className="pt-3">
            <ContentButton content="View collection"></ContentButton>
          </div>
        </div>
      </div>
    </>
  );
};
