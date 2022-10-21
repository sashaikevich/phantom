import React, { createContext, useContext, useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useImmer } from "use-immer"
import { VisibleSlug } from "../features/PhantomSetupNew/d"
import {
  INITIAL_CONFIG,
  viewModes,
  flowMenuItems
} from "../features/PhantomSetupNew/MOCK_DATA"
import { flattenMenu, FlatMenuItemType } from "../utils"

// todo typing is a bit too loose now
export type updateFieldType = (field: string, value: unknown) => void

interface SetupContextType {
  chosenView: VisibleSlug
  data: typeof INITIAL_CONFIG
  setView: (v: { view: string }) => void
  updateField: (field: string, value: unknown) => void
  viewModes: typeof viewModes
  isValid: boolean
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>
  flatMenu: FlatMenuItemType[]
  viaWebhook?: boolean
  viaSlack?: boolean
  sendOnWeekend?: boolean
  isHTTPProxy?: boolean
  isPhantomProxy?: boolean
}

const SetupContext = createContext<SetupContextType>({} as SetupContextType)

interface SetupContextProviderProps {
  children: React.ReactNode
}

export const SetupProvider = ({ children }: SetupContextProviderProps) => {
  const [view, setView] = useSearchParams({ view: "quick" })
  const [isValid, setIsValid] = useState(false)
  const [data, setData] = useImmer<typeof INITIAL_CONFIG>(INITIAL_CONFIG)
  const sendOnWeekend = data["sendSchedule"].value === "weekdays"
  const viaWebhook = isChannelSelected("via_webhook")
  const viaSlack = isChannelSelected("via_slack")
  const isPhantomProxy = data["preferredProxy"].value === "phantombuster"
  const isHTTPProxy = data["preferredProxy"].value === "http"
  const chosenView = view.get("view") as VisibleSlug

  // update input within a radio option (consider using a hook)
  useEffect(() => {
    // ensure that if that radio option is chosen, that the related foldes field receives a value
    if (data["manageFolders"].value === "create") {
      // mini validation implementation
      if (
        !(data["keepNFolders"].value >= 1) ||
        !(data["keepNFolders"].value <= 500)
        ) {
          updateField("keepNFolders", 20)
        }
      }
    }, [data["manageFolders"].value])
    
    useEffect(() => {
    // ensure that if that radio option is chosen, that the related IP lifespan receives a value
    if (data["IPLifespan"].value === "dynamic") {
      // mini validation implementation
      if (
        !(data["refreshFrequency"].value >= 1) ||
        !(data["refreshFrequency"].value <= 168)
      ) {
        updateField("refreshFrequency", 6)
      }
    }
  }, [data["IPLifespan"].value])

  function updateField(
    field: keyof typeof INITIAL_CONFIG,
    value: unknown
  ): void {
    setData(draft => {
      draft[field].value = value
    })
  }

  function isChannelSelected(mappedSuffix: string): boolean {
    const channelEventKeys = Object.keys(data).filter(key =>
      key.endsWith(mappedSuffix)
    )
    const totalActive = channelEventKeys.filter(key => data[key].value).length
    return totalActive > 0
  }

  const flatMenu = flattenMenu(flowMenuItems)

  return (
    <SetupContext.Provider
      value={{
        chosenView,
        setView,
        data,
        viewModes,
        updateField,
        viaWebhook,
        viaSlack,
        flatMenu,
        setIsValid,
        isValid,
        sendOnWeekend,
        isHTTPProxy,
        isPhantomProxy,
      }}
    >
      {children}
    </SetupContext.Provider>
  )
}

export const useSetupContext = () => {
  return useContext(SetupContext)
}
