import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Sidebar } from "../../../components/Sidebar"
import { LinkedInFlow } from "../LinkedInFlow"
import { SetupProvider } from "../../../contexts/setupContext"
import { ViewProvider } from "../../../contexts/viewContext"

export const SetupPage = () => {
  return (
    <div className="redesign tw-grid tw-grid-cols-sidebar tw-h-full">
      <BrowserRouter>
        <SetupProvider>
          <ViewProvider>
            <Sidebar />
            <LinkedInFlow />
          </ViewProvider>
        </SetupProvider>
      </BrowserRouter>
    </div>
  )
}
