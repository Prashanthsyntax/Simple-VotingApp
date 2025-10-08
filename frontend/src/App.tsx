import React from "react";
import Navbar from "./components/Navbar";
import VotingPanel from "./components/VotingPanel";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <VotingPanel />
    </div>
  );
};

export default App;
