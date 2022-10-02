import React from 'react'
import { Header, PhantomConfig } from "./"
import { BrowserRouter } from "react-router-dom"

import { PhantomTypeOrig } from "../../../pages/data"


interface PhantomSetupProps {
  children?: React.ReactNode
  phantom: PhantomTypeOrig
}

export const PhantomSetup = ({ phantom }: PhantomSetupProps) => {
  return (
    <div className='tw-container tw-mt-4 md:tw-mt-8 tw-mb-13'>
      <Header title={phantom.title} icon={phantom.icon} />
      <div className='setup-page'>
        <BrowserRouter>
          <PhantomConfig steps={phantom.steps} />
        </BrowserRouter>
      </div>
    </div>
  )
}
