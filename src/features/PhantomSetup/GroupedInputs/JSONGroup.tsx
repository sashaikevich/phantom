import React from "react"

import { useSetupContext } from "../../../contexts/setupContext"

export const JSONGroup = () => {
  const { data } = useSetupContext()
  return (
    <textarea
      className="tw-block tw-w-full tw-h-96 tw-border tw-border-redi-borders tw-rounded-lg tw-text-redi-dark/80 tw-placeholder-redi-placeholder"
      spellCheck={false}
      defaultValue={JSON.stringify(data, null, 2)}
    ></textarea>
  )
}
