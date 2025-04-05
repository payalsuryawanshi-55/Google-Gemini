import React from "react";
import Sidebar from "./components/Sidebar"; 
import MainContent from "./components/MainContent";  

const App = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <MainContent />
    </div>
  );
};

export default App;


