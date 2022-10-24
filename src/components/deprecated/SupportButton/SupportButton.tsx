import React from "react"
import { Button } from "../Button"
import { BsQuestionCircle } from "react-icons/bs"
interface SupportType {
  onSupportRequest: (urlAttr: string) => void
}

export const SupportButton = ({ onSupportRequest }: SupportType) => {
  return (
    <div className="tw-fixed tw-right-4 tw-bottom-4">
      <Button
      icon={<BsQuestionCircle />}
      label='Support'
      size="lg"
      onClick={() => {
        onSupportRequest("url_current_step_etc")
      }}
    />
    </div>
  )
}
