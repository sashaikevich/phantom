import React, { ReactHTMLElement } from "react"
import { Text } from "../Text"
import { classNames } from "../../../../utils"

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string
  description?: string
}

export const Section = ({
  children,
  heading,
  description,
  className: passedStyles = "",
}: SectionProps) => {
  return (
    <section
      className={classNames(
        "tw-border-t tw-border-t-redi-primary-dark tw-mb-16 last-of-type:tw-mb-20 tw-pt-2.5",
        passedStyles
      )}
    >
      <Text el="h3" variant="section-title" className="tw-mb-8">
        {heading}
      </Text>
      {description && (
        <Text el="p" className="tw-mb-4">
          {description}
        </Text>
      )}
      {children}
    </section>
  )
}
