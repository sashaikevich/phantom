import React from "react"
import { SubSection } from "../SubSection"
import { Text } from "../Text"
import { InputRange } from "../Inputs"

export const ExtractionLimitsGroup = () => {
  return (
    <SubSection
      heading="Extraction limits"
      description=" You can limit the number of profiles to extract to the first
N results for each search type:"
    >
      <Text variant="label-md" className="tw-text-right">
        Regular search:
      </Text>
      <InputRange
        min={1}
        max={1000}
        width="md"
        showLabels={true}
        mappedName="limitRegularSearch"
      />
      <Text variant="label-md" className="tw-text-right">
        Sales Navigator search:
      </Text>
      <InputRange
        min={1}
        max={2500}
        width="md"
        showLabels={true}
        mappedName="limitNavigatorSearch"
      />
      <Text variant="label-md" className="tw-text-right">
        LinkedIn Group search:
      </Text>
      <InputRange
        min={1}
        max={2500}
        width="md"
        showLabels={true}
        mappedName="limitGroupSearch"
      />
    </SubSection>
  )
}
