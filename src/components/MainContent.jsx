import React, { useContext } from "react"
import {
  FaCode,
  FaCompass,
  FaLightbulb,
  FaMicrophone,
  FaUserCircle,
} from "react-icons/fa"
import { FaMessage } from "react-icons/fa6"
import { MdAddPhotoAlternate } from "react-icons/md"
import { IoMdSend } from "react-icons/io"
import { Context } from "../context/Context"
import geminiLogo from "../assets/geminiLogo.png"

const MainContent = () => {
  const {
    input,
      setInput,
      recentPrompt,
      setRecentPrompt,
      prevPrompt,
      showResult,
      loading,
      resultData,
      onSent,
  } = useContext(Context)

  return (
    <div className="flex-1 min-h-screen pb-[15vh] w-full relative">
      {/* Header */}
      <div className="flex items-center justify-between text-xl p-5 text-slate-700">
        <p className="font-bold">Gemini</p>
        <FaUserCircle />
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto w-full px-5">
          <>
        <div className="my-12 text-[48px] md:text-[56px] text-slate-500 font-semibold">
          <p>
            <span className="bg-gradient-to-r from-[#4c49f5] to-[#ff5546] bg-clip-text text-transparent">
              Hello, Payal.
            </span>
          </p>
          <p className="text-gray-500">How can I help you today?</p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="h-[200px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
            <p className="text-slate-700 text-lg">
              Suggest top 10 webseries.
            </p>
            <FaCompass className="text-4xl p-1 absolute bottom-2 right-2" />
          </div>

          <div className="h-[200px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
            <p className="text-slate-700 text-lg">
              What is loop in JavaScript?
              </p>
            <FaLightbulb className="text-4xl p-1 absolute bottom-2 right-2" />
          </div>

          <div className="h-[200px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
            <p className="text-slate-700 text-lg">
              Who is known as the "Mother of Dragons"?
              </p>
            <FaMessage className="text-4xl p-1 absolute bottom-2 right-2" />
          </div>

          <div className="h-[200px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
            <p className="text-slate-700 text-lg">
              Who sits on the Iron Throne at the end of the series?
              </p>
            <FaCode className="text-4xl p-1 absolute bottom-2 right-2" />
          </div>
        </div>
</>

        {/* Bottom Input Bar */}
        <div className="fixed bottom-5 left-0 w-full flex flex-col items-center px-5">
          <div className="flex items-center justify-between bg-gray-200 py-3 px-5 rounded-full shadow-lg w-full max-w-[900px]">
            <input
              type="text"
              placeholder="Enter a prompt here..."
              className="flex-1 bg-transparent border-none outline-none p-2 text-lg"
              value={input}
              onChange={(e)=> setInput(e.target.value)}
           />

            <div className="flex space-x-3">
              <MdAddPhotoAlternate className="text-2xl cursor-pointer" />
              <FaMicrophone className='text-2xl cursor-pointer' />
              <IoMdSend onClick ={()=>onSent(input)} 
              className='text-2xl cursor-pointer' />
            </div>
          </div>

          {/* Disclaimer below input bar */}
          <p className='text-sm mt-3 text-center font-[500] text-slate-600 max-w-[900px]'>
            Gemini may display inaccurate info, including about people, so double-check 
            its responses.
          </p>
          </div>
      </div>
      </div>
  )
}

export default MainContent





