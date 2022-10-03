import React from "react"
import { Header, Settings } from "."
import { BrowserRouter } from "react-router-dom"

import { PhantomTypeOrig } from "../../../pages/LiPhantomSetupOrig/data"

export const PhantomSetup = ({ phantom }: { phantom: PhantomTypeOrig }) => {
  return (
    <div>
      <Header title={phantom.title} icon={phantom.icon} />
      <div className='setup-page'>
        <BrowserRouter>
          <Settings steps={phantom.steps} />
        </BrowserRouter>
      </div>
    </div>
  )
}
