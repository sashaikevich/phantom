import React, { createContext, useContext } from "react"
import { useSearchParams } from "react-router-dom"

const INITIAL_DATA = {
  searchSettings: {
    searchTerm: undefined,
    searchType: undefined,
    dataColumn: undefined,
    personalizedMsg: undefined,
    linkedInCookie: undefined,
  },
  automationSettings: {
    useSalesNavigator: false,
    sendOnWeekend: false,
    sendFrequency: 1,
    limitRegularSearch:1,
    limitNavigatorSearch:1,
    limitGroupSearch:1,
    maxExecutionTime:0,
    maxParallelExecutions:0,
    maxRetries:0,
    manageFolders:"delete|create|keep",
    keepNFolders:undefined,
  },
  proxySettings:{
    preferred:"none|phantom|random|http",
    address:undefined,
    username:undefined,
    password:"encript****",
    refreshIP:false,
    refreshFrequency:undefined,
    proxyLocation:undefined,
  },
  notificationSettings:{
    eventSuccFinish:[undefined],
    eventErrFinish:[undefined],
    eventErrLaunch:[undefined],
    eventLimitTime:[undefined],
    slackWebHook:undefined,
    webHook:undefined
  }
  
}

interface SetupContextType {
  chosenView: string
  // data: typeof INITIAL_DATA
  setView: (v:{view:string})=>void
}

export const SetupContext = createContext<SetupContextType>(
  {} as SetupContextType
)

interface SetupContextProviderProps {
  children: React.ReactNode
}

export const SetupProvider = ({ children }: SetupContextProviderProps) => {
  const [view, setView] = useSearchParams()
  const chosenView = view.get("view") || "quick"

  return (
    <SetupContext.Provider value={{ chosenView, setView }}>
      {children}
    </SetupContext.Provider>
  )
}
// search params
export const useSetupContext = () => {
  return useContext(SetupContext)
}
