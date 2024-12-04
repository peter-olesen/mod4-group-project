import React, { useState, useEffect } from "react";
import Droplaugarsona from "../assets/images/formated/Dropplaugarsona saga.png";
import DroplaugsPlot from "../assets/images/formated/Dropplaugs Plot summary.png";
import DroplaugsTheme from "../assets/images/formated/Dropplaugs Themes.png";

export const IcelandicFolkHome = () => {
  return (
    <div>
      <h1 className="font-modernAntiqua text-center m-auto text-2xl w-80 mt-5 mb-9 animate__animated animate__animated animate__flipInX">
        Droplaugarsona Saga
      </h1>
      <img src={Droplaugarsona} className="m-auto w-60" />
      <p className="font-montserrat mt-11 mx-5 animate__animated animate__fadeInLeft ">
        <b>Droplaugarsona saga</b> is an Icelandic saga, part of the family
        sagas that chronicle the history and deeds of specific families in early
        medieval Iceland. It is considered a relatively short and lesser-known
        saga compared to some of the more famous works, such as Njáls Saga or
        Egils Saga. However, it still offers insight into the lives and moral
        codes of early Icelandic settlers.
      </p>
      <p className="font-montserrat font-bold mt-11 mx-5 animate__animated animate__flipInX">
        Overview of Droplaugarsona Saga
      </p>
      <p className="font-montserrat mt-8 mx-5 animate__animated animate__fadeInLeft">
        <b>The saga</b> is named after Droplaug, a central character, and
        focuses on the lives of her descendants, particularly her son Björn and
        his family. The saga is often categorized as a heroic saga with elements
        of family drama and vengeance, and it features typical saga themes like
        honor, fate, and conflict.
      </p>
      <p className="font-montserrat font-bold mt-9 mx-5 animate__animated animate__flipInX">
        Main Characters
      </p>
      <p className="font-montserrat mt-8 mx-5 animate__animated animate__fadeInLeft">
        <b>Droplaug:</b> <b>The eponymous character</b>, a woman known for her
        beauty and strength. She plays a significant role as the matriarch, and
        her influence is seen through the deeds of her sons and descendants.
      </p>
      <p className="font-montserrat mt-8 mx-5 animate__animated animate__fadeInLeft">
        <b>Björns (Bjørn):</b> Droplaug's son and one of the main protagonists
        of the saga. His life is marked by conflict, battles, and the pursuit of
        justice. He plays a central role in carrying on his family's legacy.
      </p>
      <p className="font-montserrat mt-8 mx-5 animate__animated animate__fadeInLeft">
        <b>Kjartan:</b> The son of Droplaug's daughter, a key figure in the
        saga. His story is one of bravery and moral choices, but also one of
        tragic fate.
      </p>
      <p className="font-montserrat mt-8 mx-5 mb-9 animate__animated animate__fadeInLeft">
        <b>Other Characters:</b> There are various other minor characters, such
        as those involved in the family’s feuds or relationships, as the saga
        describes the shifting dynamics within the Droplaugsons’ family.
      </p>

      <img src={DroplaugsPlot} className="m-auto mb-9 mt-20 " />
      <p className="font-montserrat font-bold mt-9 mx-5 mb animate__animated animate__flipInX">
        Plot Summary
      </p>
      <p className="font-montserrat mt-8 mx-5 animate__animated animate__fadeInLeft">
        The saga begins with Droplaug’s marriage to a man of high status, and
        their life together. Droplaug is depicted as a powerful woman who holds
        a key position in her family’s fate. The saga moves into the lives of
        her sons and grandsons, whose lives are deeply affected by family
        conflicts, rivalries, and revenge
      </p>
      <p className="font-montserrat mt-8 mx-5 animate__animated animate__fadeInLeft">
        <b>The Family’s Struggles:</b> The saga is filled with familial tension,
        with various characters seeking vengeance or justice for wrongs done to
        them or their kin. The conflicts are often related to land disputes,
        honor, and pride.
      </p>
      <p className="font-montserrat mt-8 mx-5 animate__animated animate__fadeInLeft">
        <b>Björns’ Adventures:</b> One of the saga's main arcs follows Björn as
        he attempts to navigate the dangerous world of early Icelandic society,
        where feuds and violent confrontations were common. Björn often finds
        himself in situations that require him to make difficult moral choices.
      </p>
      <p className="font-montserrat mt-8 mx-5 animate__animated animate__fadeInLeft">
        <b>Moral Lessons:</b> Like many sagas, Droplaugarsona Saga imparts
        lessons on the importance of family, loyalty, and honor. The characters
        face many hardships and are forced to balance personal desires with the
        larger good of their families.
      </p>
      <p className="font-montserrat mt-8 mx-5 animate__animated animate__fadeInLeft">
        <b>Vengeance and Justice:</b> A central theme in the saga is vengeance,
        with characters pursuing justice for perceived wrongs, often leading to
        cycles of violence. This reflects the Icelandic code of honor, where
        personal justice was often sought through physical confrontation or
        strategic alliances.
      </p>
      <img src={DroplaugsTheme} className="m-auto w-60 mt-9 " />
      <p className="font-montserrat font-bold mt-9 mx-5 mb animate__animated animate__flipInX">
        Themes
      </p>
      <p className="font-montserrat mt-8 mx-5 animate__animated animate__fadeInLeft">
        <b>Family Loyalty:</b> Much like other family sagas, loyalty to one's
        kin is a central theme in Droplaugarsona Saga. The actions of Droplaug’s
        descendants reflect their dedication to the family and the lengths they
        are willing to go to protect its honor.
      </p>
      <p className="font-montserrat mt-8 mx-5 animate__animated animate__fadeInLeft">
        <b>Honor and Revenge:</b> As in many sagas, the concepts of honor and
        vengeance are deeply ingrained in the characters’ actions. Droplaug's
        descendants frequently find themselves embroiled in conflict due to
        perceived slights or insults, and their sense of personal justice is
        tested.{" "}
      </p>
      <p className="font-montserrat mt-8 mx-5 animate__animated animate__fadeInLeft">
        <b>Tragic Fate:</b> The saga features several tragic elements, where
        characters, driven by their desires for revenge or justice, end up
        causing their own undoing. The cyclical nature of vengeance leads to a
        tragic resolution for some of the saga's characters.
      </p>
      <p className="font-montserrat mt-8 mx-5 animate__animated animate__fadeInLeft">
        <b>Heroism and Courage:</b> The saga also highlights the heroism and
        bravery of its central characters, particularly Björn, who faces many
        trials throughout the story. This heroism, however, is tempered by the
        recognition that the saga's protagonists are not invincible and face
        their own human flaws.
      </p>
      <p className="font-montserrat font-bold mt-9 mx-5 mb animate__animated animate__flipInX">
        Cultural and Historical Context
      </p>
      <p className="font-montserrat mt-8 mx-5 animate__animated animate__fadeInLeft">
        <b>Droplaugarsona Saga</b> is set during the Viking Age in Iceland, a
        period marked by the settlement of Iceland and the establishment of the
        Icelandic Commonwealth (circa 9th-13th centuries). The sagas of this era
        were written in the 13th century, during the period of Icelandic
        medieval literature when oral traditions of storytelling began to be
        committed to writing.
      </p>
    </div>
  );
};
