import React from "react"

export const TwoColumns = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return <div className="tw-grid tw-gap-x-8 tw-gap-y-2 tw-grid-cols-options">{children}</div>
}
