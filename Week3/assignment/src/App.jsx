import { useState } from "react";

import Header from "./components/layout/Header";
import Main from "./components/layout/Main";

function App() {
  const [activeTab, setActiveTab] = useState(null);

  const handleGithub = () => setActiveTab("github");
  const handleGame = () => setActiveTab("game");

  return (
    <>
      <Header
        activeTab={activeTab}
        handleGithub={handleGithub}
        handleGame={handleGame}
      />
      <Main activeTab={activeTab} />
    </>
  );
}

export default App;
