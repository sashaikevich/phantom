import React, { useContext, createContext} from "react"
import { useSearchParams } from "react-router-dom"
import { VisibleSlugType } from "../features/PhantomSetup/d"
import { viewModes } from "../features/PhantomSetup/_MOCK_DATA/MOCK_DATA"

interface ViewContextType {
  activeView: VisibleSlugType
  changeView: (view: VisibleSlugType) => void
  viewModes: typeof viewModes
}

const ViewContext = createContext<ViewContextType>({} as ViewContextType)

export const ViewProvider = ({ children }: { children: React.ReactNode }) => {
  const [view, setView] = useSearchParams({ view: "quick" })
  const activeView = view.get("view") as VisibleSlugType
  function changeView(view: VisibleSlugType) {
    setView({ view: view })
  }

  return (
    <ViewContext.Provider value={{ activeView, changeView, viewModes }}>
      {children}
    </ViewContext.Provider>
  )
}

export const useViewContext = () => {
  return useContext(ViewContext)
}
