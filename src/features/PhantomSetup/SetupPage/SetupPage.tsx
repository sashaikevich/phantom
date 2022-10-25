import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Sidebar } from "../../../components/Sidebar"
import { LinkedInFlow } from "../LinkedInFlow"
import { SetupProvider } from "../../../contexts/setupContext"
import { ViewProvider } from "../../../contexts/viewContext"
import { Main } from "../Main"

export const SetupPage = () => {
  return (
    <div className="redesign tw-grid tw-grid-cols-sidebar xl:tw-grid-cols-sidebar-xl tw-h-full">
      <BrowserRouter>
        <SetupProvider>
          <ViewProvider>
            <Sidebar />
            <Main phantom={<LinkedInFlow/>} />
          </ViewProvider>
        </SetupProvider>
      </BrowserRouter>
    </div>
  )
}
