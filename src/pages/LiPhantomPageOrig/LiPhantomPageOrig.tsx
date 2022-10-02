import React, { useState } from "react"

import { Support } from "../../components/original/Support"
import { PhantomSetup } from "../../components/original/PhantomSetup"

// import mock phantom (step+title) data 
import { LiPhantomOrig } from "../data"

export const LiPhantomPageOrig = () => {
  return (
    <>
      <PhantomSetup phantom={LiPhantomOrig} />

      <Support
        onSupportRequest={(url: string) => {
          console.log(`help from: ${url}`)
        }}
      />
    </>
  )
}
