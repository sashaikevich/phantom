import React from "react"

import { Support } from "../../components/original/Support"
import { PhantomSetup } from "../../components/original/PhantomSetup"

// import mock phantom (step+title) data
import { LiPhantomOrig } from "./data"

export const LiPhantomSetupOrig = () => {
  return (
    <div className='tw-bg-primary tw-min-h-screen tw-flex tw-justify-center'>
      <div className='tw-container tw-mt-8 md:tw-mt-16 tw-mb-28'>
        <PhantomSetup phantom={LiPhantomOrig} />

        <Support
          onSupportRequest={(url: string) => {
            console.log(`help from: ${url}`)
          }}
        />
      </div>
    </div>
  )
}
