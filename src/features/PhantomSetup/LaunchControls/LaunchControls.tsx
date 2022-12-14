import React from "react"
import { Button } from "../../../components"
import { LaunchButton } from "./LaunchButton"
import { useSetupContext } from "../../../contexts/setupContext"

export const LaunchControls = () => {
  const { isValid, setIsValid, setIsLaunched, resetSettings } =
    useSetupContext()

  return (
    <div className="tw-flex tw-justify-between tw-space-x-2 tw-mt-5 tw-mb-12">
      <Button
        type="button"
        variant="warning"
        className="tw-mr-auto"
        onClick={() => {
          setIsLaunched(false)
          setIsValid(false)
          resetSettings()
        }}
      >
        reset all
      </Button>
      <Button
        type="button"
        onClick={() => {
          setTimeout(() => {
            setIsValid(prev => !prev)
          }, 400)
        }}
        defaultChecked={true}
      >
        Test Before Launch
      </Button>

      <LaunchButton type="button" disabled={!isValid} />
    </div>
  )
}
