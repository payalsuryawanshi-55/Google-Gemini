import React, { useState, useContext } from "react";
import { IoMenu } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { MdOutlineQuestionMark,MdHistory } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { Context } from "../context/Context"; 
import { FaMessage } from "react-icons/fa6";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div
      className={`min-h-screen flex flex-col justify-between bg-gray-100 py-6 px-4
        ${extended ? "w-64" : "w-20"} transition-all duration-300 text-gray-900 border-r border-gray-300`}
    >
      {/* Sidebar Toggle */}
      <IoMenu
        onClick={() => setExtended(!extended)}
        className="text-2xl block cursor-pointer mb-5 ml-0"
      />

      {/* New Chat Button */}
      <div
        className="flex items-center gap-3 py-3 px-4 text-lg text-gray-700 cursor-pointer bg-gray-300 rounded-full hover:bg-gray-400 mx-auto"
        onClick={newChat}
      >
        <FaPlus className="text-2xl" />
        {extended && <p>New Chat</p>}
      </div>

      {/* Message History */}


      <div className="flex flex-col mt-4 space-y-2 overflow-y-auto max-h-80">
        {prevPrompt && prevPrompt.length > 0 ? (
          prevPrompt.map((prompt, index) => (
            <div
              key={index}
              onClick={() => loadPrompt(prompt)}
              className="flex items-center gap-2 px-4 py-2 text-gray-700
               bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300">
          <FaMessage className="text-2xl" />
              {extended && <p className="truncate">{prompt}...</p>}
            </div>
          ))
        ) : (
          extended && <p className="text-gray-500 text-sm font-bold">Recent</p>
        )}
      </div>

      {/* Sidebar Footer */}
      <div className="space-y-3 mt-auto">
        <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-gray-300 text-gray-700 cursor-pointer hover:bg-gray-400">
          <MdOutlineQuestionMark className="text-2xl" />
          {extended && <p>Help</p>}
        </div>

        <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-gray-300 text-gray-700 cursor-pointer hover:bg-gray-400">
          <MdHistory className="text-2xl" />
          {extended && <p>Activity</p>}
        </div>

        <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-gray-300 text-gray-700 cursor-pointer hover:bg-gray-400">
          <IoMdSettings className="text-2xl" />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
