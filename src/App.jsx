import { useState } from "react";
import { Background } from "./component/Background/Background.jsx"; //
import { Navbar } from "./component/Navbar/Navbar.jsx"; //
import { Hero } from "./component/Hero/Hero.jsx";

export const App = () => {
  let heroData = [
    { text1: " Dive into ", text2: "what you love" },
    { text1: "Indulge", text2: "your passion " },
    { text1: "Live into", text2: "your passion " },
  ];
  const [herocount, setHerocount] = useState(2);
  const [playstatus, setPlaystatus] = useState(true);

  return (
    <div>
      <Background playStatus={playstatus} heroCount={herocount} />
      <Navbar />
      <Hero
        setPlaystatus={setPlaystatus}
        heroData={heroData[herocount]}
        heroCount={herocount}
        setHerocount={setHerocount}
        playStatus={playstatus}
      />
    </div>
  );
};
export default App;
