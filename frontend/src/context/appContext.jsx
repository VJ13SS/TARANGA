import { createContext, useState } from "react";

export const AppContext = createContext()

export const AppContextProvider = (props) => {
    const [eventType,setEventType] = useState("")
    const [currentSection,setCurrentSection] = useState("home")
    const value = {
        eventType,setEventType,
        currentSection,setCurrentSection,
    }

    return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
}