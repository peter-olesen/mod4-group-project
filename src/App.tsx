import { useState } from "react";
import NorseGodCards from "./components/api_norse_myth/cards.tsx";


const App: React.FC = () => {
  const [] = useState(0);
  return (
    <>
      
      <NorseGodCards name="odin"></NorseGodCards>
    </>
  );
};
export default App;
