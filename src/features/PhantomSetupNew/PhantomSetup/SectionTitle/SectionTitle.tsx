import React, { ReactHTMLElement } from "react"
import { Text } from "../Text"

interface SectionTitleProps {
  children: React.ReactNode
  className?: string | undefined
}

export const SectionTitle = ({
  children,
  className: passedStyles = "",
}: SectionTitleProps) => {
  return (
    <div
      className={`tw-border-t tw-border-t-redi-primary-dark  tw-pt-2 tw-mb-5 ${
        passedStyles || ""
      }`}
    >
      <Text el="h3" variant="section-title">
        {children}
      </Text>
    </div>
  )
}
