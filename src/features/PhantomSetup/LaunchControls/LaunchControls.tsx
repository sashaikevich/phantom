import React from "react"
import { Button } from "../../../components"
import { LaunchButton } from "."
import { useSetupContext } from "../../../contexts/setupContext"

export const LaunchControls = () => {
  const { isValid, setIsValid, resetSettings } = useSetupContext()

  return (
    <div className="tw-flex tw-justify-between tw-space-x-2 tw-mt-5 tw-mb-12">
      <Button
        type="button"
        variant="warning"
        className="tw-mr-auto"
        onClick={resetSettings}
      >
        reset all
      </Button>
      <Button
        type="button"
        onClick={() => {
          setTimeout(() => {
            setIsValid(true)
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
