import React, { createContext, useContext, useState } from "react"
import { useSearchParams } from "react-router-dom"

import { INITIAL_DATA } from "../features/PhantomSetupNew/MOCK_DATA"

interface SetupContextType {
  chosenView: string | null
  data: typeof INITIAL_DATA
  setView: (v: { view: string }) => void
}

export const SetupContext = createContext<SetupContextType>(
  {} as SetupContextType
)

interface SetupContextProviderProps {
  children: React.ReactNode
}

export const SetupProvider = ({ children }: SetupContextProviderProps) => {
  const [view, setView] = useSearchParams({ view: "quick" })
  const [data, setData] = useState(INITIAL_DATA)

  const chosenView = view.get("view")

  // todo figure out why setView({view:"quick"}) is not updating the url on initial load
  // or switch to router b/c mgiht work better wiht the views and sections
  // if (chosenView === null) {
  //   setView({ view: "quick" })
  // }

  return (
    <SetupContext.Provider value={{ chosenView, setView, data }}>
      {children}
    </SetupContext.Provider>
  )
}
// search params
export const useSetupContext = () => {
  return useContext(SetupContext)
}
