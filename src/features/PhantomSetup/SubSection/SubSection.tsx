import React from "react"

import { Text } from "../Text"
import { TwoColumns } from "../Layout"

interface SubSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  columnView?: boolean
  heading: string
  description?: string
}

export const SubSection = ({
  children,
  heading,
  description,
  columnView = true,
}: SubSectionProps) => {
  return (
    <section className="tw-border-b tw-border-b-redi-primary/10 tw-py-12 last-of-type:tw-border-none last-of-type:tw-pb-0 first-of-type:tw-pt-0">
      <Text el="h4" variant="label-lg" className="tw-mb-4">
        {heading}
      </Text>
      {description && (
        <Text el="p" className="tw-mb-4">
          {description}
        </Text>
      )}
      {columnView ? <TwoColumns>{children}</TwoColumns> : <>{children}</>}
    </section>
  )
}
