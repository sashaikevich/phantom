import React from "react"
import { Sidebar } from "../../components/new/Sidebar"
import { PhantomSetup } from "../../features/PhantomSetupNew/PhantomSetup"
import { BrowserRouter } from "react-router-dom"
export const LiPhantomRedesign = () => {
  return (
    <div className="redesign tw-grid tw-grid-cols-sidebar tw-h-full">
      <BrowserRouter>
        <Sidebar />
        <PhantomSetup />
      </BrowserRouter>
    </div>
  )
}
