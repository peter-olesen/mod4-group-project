import { useState } from "react";
import NorseGodCards from "../components/api_norse_myth/GodList";
import ContentButton from "../components/ui/content_button";
import CreatureList from "../components/api_norse_myth/CreatureList";

export const GodCardsPage = () => {
  /* ===============================
    Either display Gods or Creatures
  =============================== */
  const [activeComponent, setActiveComponent] = useState<"gods" | "creatures">(
    "gods"
  );
  
  return (
    <>
      {/* ============================
        Display Norse Gods or Creature
      ============================ */}
      <h1 className="flex flex-col justify-center items-center mt-16 font-newRocker font-semibold  text-3xl">
        {activeComponent  === "gods" ? (
          "Norse Gods"
        ) : (
          <>
            <span>Creatures</span>
            <span className="text-lg font-semibold mt-2 font-newRocker ">
              Power of Wisdom, War and Nature{" "}
            </span>
          </>
        )}
      </h1>

        {/* ======================================
          Buttons to choose which page should load
        ====================================== */}
      <div className="flex my-24">
        <ContentButton
          content="Gods"
          onClick={() => setActiveComponent("gods")}
        />
        <ContentButton
          content="Creatures"
          onClick={() => setActiveComponent("creatures")}
        />
      </div>

      <div>
        {/* =================================================
          Which page should come when clicked on which button
        ================================================= */}
        {activeComponent === "gods" ? (
          <NorseGodCards  />
        ) : (
          <CreatureList />
        )}

      </div>
    </>
  );
};