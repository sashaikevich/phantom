import React, { createContext, useContext, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useImmer } from "use-immer"
import { INITIAL_CONFIG } from "../features/PhantomSetupNew/MOCK_DATA"

// todo typing is a bit too loose now
export type ChangeHandlerType = (field: string, value: unknown) => void

interface SetupContextType {
  chosenView: string | null
  data: typeof INITIAL_CONFIG
  setView: (v: { view: string }) => void
  changeHandler: (field: string, value: unknown) => void
}

const SetupContext = createContext<SetupContextType>({} as SetupContextType)

interface SetupContextProviderProps {
  children: React.ReactNode
}

export const SetupProvider = ({ children }: SetupContextProviderProps) => {
  const [view, setView] = useSearchParams({ view: "quick" })
  const [data, setData] = useImmer<typeof INITIAL_CONFIG>(INITIAL_CONFIG)

  const changeHandler = (field: string, value: unknown): void => {
    setData(draft => {
      // draft[field] = value
      draft[field] = value
    })
    console.log(data)
  }
  const chosenView = view.get("view")

  // todo figure out why setView({view:"quick"}) is not updating the url on initial load
  // or switch to router b/c mgiht work better wiht the views and sections
  // if (chosenView === null) {
  //   setView({ view: "quick" })
  // }

  return (
    <SetupContext.Provider value={{ chosenView, setView, data, changeHandler }}>
      {children}
    </SetupContext.Provider>
  )
}
// search params
export const useSetupContext = () => {
  return useContext(SetupContext)
}
