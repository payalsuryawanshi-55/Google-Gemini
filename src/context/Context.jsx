import {createContext} from "react"
import run from "../config/gemini"
import { useState } from "react"

export const Context = createContext()

const ContextProvider = (props) => {

  const [input, setInput] = useState ("")
  const [recentPrompt, setRecentPrompt] = useState ("")
  const [prevPrompt, setPrevPrompt] = useState ([])
  const [showResult, setShowResult] = useState (false)
 const [loading, setLoading] = useState (false)
  const [resultData, setResultData] = useState ("")

    const onSent = async(prompt) =>{
        await run(prompt) 
    }
    const contextValue = {
      input,
      setInput,
      recentPrompt,
      setRecentPrompt,
      prevPrompt,
      showResult,
      loading,
      resultData,
      onSent,
    }

    return (
  <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  )
}
export default ContextProvider


