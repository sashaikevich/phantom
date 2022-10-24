import React from "react"

import { PhantomSetup } from "../../../features/deprecated/PhantomSetup"
import { SupportButton } from "../SupportButton"

// import mock phantom (step+title) data
import { LiPhantomOrig } from "./setup"

export const LiPhantomOriginal = () => {
  return (
    <div className='tw-bg-primary tw-min-h-screen tw-flex tw-justify-center'>
      <div className='tw-container tw-mt-8 md:tw-mt-16 tw-mb-28'>
        <PhantomSetup phantom={LiPhantomOrig} />

        <SupportButton
          onSupportRequest={(url: string) => {
            console.log(`help from: ${url}`)
          }}
        />
      </div>
    </div>
  )
}
