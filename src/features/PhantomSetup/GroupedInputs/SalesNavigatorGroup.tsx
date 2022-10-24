import React from "react"
import { Text } from "../Text"
import { InputToggle } from "../Inputs"
import { SubSection } from "../SubSection"

export const SalesNavigatorGroup = () => {
  return (
    <SubSection heading="Outreach account">
      <Text variant="label-md" className="tw-text-right">
        Use Sales Navigator:
      </Text>
      <InputToggle
        label="Use my second Sales Navigator Team account"
        mappedName="useSalesNavigator"
      />
    </SubSection>
  )
}
