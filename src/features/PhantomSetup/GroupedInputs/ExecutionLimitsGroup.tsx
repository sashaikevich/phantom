import React from "react"
import { SubSection } from "../SubSection"
import { Text } from "../Text"
import { InputRange } from "../Inputs"

export const ExecutionLimitsGroup = () => {
  return (
    <SubSection
      heading="Critical execution limits"
      description="Leave the recommended settings unless you know exactly what you're
        doing."
    >
      <Text variant="label-md" className="tw-text-right">
        Maximum execution time:
      </Text>
      <InputRange
        warning={true}
        min={0}
        max={60}
        width="sm"
        showLabels={true}
        mappedName="maxExecutionTime"
      />
      <Text variant="label-md" className="tw-text-right">
        Maximum parallel executions:
      </Text>
      <InputRange
        warning={true}
        min={0}
        max={10}
        width="sm"
        showLabels={true}
        mappedName="maxParallelExecutions"
      />
      <Text variant="label-md" className="tw-text-right">
        Maximum retries:
      </Text>
      <InputRange
        warning={true}
        min={0}
        max={10}
        width="sm"
        showLabels={true}
        mappedName="maxRetries"
      />
    </SubSection>
  )
}
