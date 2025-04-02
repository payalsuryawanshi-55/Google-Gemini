import React from "react";
import Sidebar from "./components/Sidebar";  // ✅ Import Sidebar correctly
import MainContent from "./components/MainContent";  // ✅ Import MainContent correctly

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
