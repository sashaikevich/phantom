import React from "react"
import { Spirit } from "../../../assets/Spirit"

import { Button } from "../../../components/Button"

interface LaunchButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
  children?: string
}

export const LaunchButton = ({
  disabled = false,
  children,
}: LaunchButtonProps) => {
  return (
    <Button
      variant="primary"
      disabled={disabled}
      className="disabled:tw-bg-redi-placeholder disabled:tw-border-redi-placeholder disabled:tw-drop-shadow-none disabled:tw-cursor-not-allowed"
    >
      {children || "Launch"}
      {/* animate or remove mouth */}
      <Spirit className="tw-h-5 tw-ml-2.5" />
    </Button>
  )
}
