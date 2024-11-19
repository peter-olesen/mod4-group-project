import { useState } from "react";
import Gods from "./gods.tsx";
import { NavBarComponent } from "./components/hamburgerMenu/hamburger";
function App() {
  const [] = useState(0)
  return (
  <>
    <NavBarComponent></NavBarComponent>
    <Gods name="frigg"></Gods>
  </>
  )
}
export default App;
