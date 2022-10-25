import React from "react"
import { LaunchControls } from "../LaunchControls"

export const Main = ({ phantom }: { phantom: React.ReactNode }) => {
  return (
    <main className="tw-py-8 tw-px-20 xl:tw-px-28 tw-max-w-5xl">
      {phantom}
      <LaunchControls />
    </main>
  )
}
