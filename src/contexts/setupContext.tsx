import React, { createContext, useContext, useRef, useState } from "react"
import {
  flatMenu,
  INITIAL_CONFIG,
} from "../features/PhantomSetup/_MOCK_DATA/MOCK_DATA"

import {
  PhantomSetupType,
  PhantomSetupKeys,
} from "../features/PhantomSetup/d"

import { useImmer } from "use-immer"

interface SetupContextType {
  flatMenu: typeof flatMenu
  data: typeof INITIAL_CONFIG
  updateField: <K extends keyof PhantomSetupType>(
    field: K,
    value: PhantomSetupType[K]
  ) => void
  isValid: boolean
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>
  resetSettings: () => void
}

const SetupContext = createContext<SetupContextType>({} as SetupContextType)

interface SetupContextProviderProps {
  children: React.ReactNode
}

export const SetupProvider = ({ children }: SetupContextProviderProps) => {
  const [isValid, setIsValid] = useState(false)
  const [data, setData] = useImmer<typeof INITIAL_CONFIG>(INITIAL_CONFIG)
  const RESET_DATA = useRef<typeof INITIAL_CONFIG>(INITIAL_CONFIG)

  function updateField<K extends PhantomSetupKeys>(
    field: K,
    value: PhantomSetupType[K]
  ): void {
    setData(draft => {
      draft[field] = value
    })
  }

  function resetSettings() {
    setData(RESET_DATA.current)
  }

  return (
    <SetupContext.Provider
      value={{
        flatMenu,
        data,
        updateField,
        setIsValid,
        isValid,
        resetSettings,
      }}
    >
      {children}
    </SetupContext.Provider>
  )
}

export const useSetupContext = () => {
  return useContext(SetupContext)
}
