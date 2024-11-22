import { useState } from "react";
import Gods from "./gods.tsx";
import { NavBarComponent } from "./components/hamburgerMenu/hamburger";
import { CardComponent } from "./components/cardComponent/cardComponent";

function App() {
  const [] = useState(0)
  return (
  <>
    <NavBarComponent></NavBarComponent>
    <Gods name="Odin"></Gods>
    <CardComponent />
  </>
  )
}
export default App;

