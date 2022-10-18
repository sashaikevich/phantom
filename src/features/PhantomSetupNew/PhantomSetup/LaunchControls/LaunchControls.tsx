import React from "react"
import { Button } from "../../../../components/new"
import { useSetupContext } from "../../../../context/setupContext"

export const LaunchControls = () => {
  const { isValid, setIsValid } = useSetupContext()
  return (
    <div className="tw-flex tw-justify-between tw-space-x-2 tw-mt-5 tw-mb-12">
      <Button variant="primary" className="tw-mr-auto">reset</Button>
      <Button
        onClick={() => {
          setTimeout(() => {
            setIsValid(true)
          }, 400)
        }}
        defaultChecked={true}
      >
        Test Before Launch
      </Button>
      <Button variant="branded" disabled={!isValid}>
        Launch
      </Button>
    </div>
  )
}
