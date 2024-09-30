import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";
import ConfigureCounter from "./components/Counter/ConfigureCounter.jsx";

function App() {
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount) {
    const stateReturn = setChosenCount(prevCount => {
      console.log("Previous count inside: ", prevCount)
      console.log("New count inside: ", newCount);
      return newCount;
    });
    console.log("The chosen count is:",chosenCount);
    console.log("State Return",stateReturn);
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount} />
        <Counter key={chosenCount} initialCount={chosenCount} />
        {/* <Counter initialCount={0} /> */}
      </main>
    </>
  );
}

export default App;
