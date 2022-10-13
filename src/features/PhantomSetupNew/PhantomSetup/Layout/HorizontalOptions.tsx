import React from "react"

export const HorizontalOptions = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return <div className="tw-grid tw-gap-8 tw-grid-cols-options">{children}</div>
}
