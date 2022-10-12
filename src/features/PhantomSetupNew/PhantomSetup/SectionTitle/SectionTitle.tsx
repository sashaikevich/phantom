import React from "react"
import { Text } from "../Text"

export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className=" tw-border-t tw-border-t-redi-primary-dark  tw-pt-2 tw-mb-5">
      <Text el="h3" variant="section-title">
        {title}
      </Text>
    </div>
  )
}
