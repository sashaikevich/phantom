import React from "react"
import { SubSection } from "../SubSection"
import { Text } from "../Text"
import { InputRadioGroup, InputRadioOption, InputRange } from "../Inputs"
import { useSetupContext } from "../../../contexts/setupContext"
import { SendScheduleType } from "../d"

export const OutreachLimitsGroup = () => {
  const { data } = useSetupContext()
  const sendOnWeekend = data["sendSchedule"] === SendScheduleType.Weekends

  return (
    <SubSection
      columnView={true}
      heading="Outreach limits"
      description="Your automated flow should mimic your typical behavior to avoid hitting
LinkedIn's abuse limits."
    >
      <Text variant="label-md" className="tw-text-right">
        Send invites
      </Text>
      <InputRadioGroup mappedName="sendSchedule">
        <InputRadioOption value={SendScheduleType.Weekdays}>
          During working hours
        </InputRadioOption>
        <InputRadioOption value={SendScheduleType.Weekends}>
          Randomly throughout the week
        </InputRadioOption>
      </InputRadioGroup>

      <Text variant="label-md" className="tw-text-right">
        Send frequency:
      </Text>
      <InputRange
        min={1}
        max={Math.floor(100 / (sendOnWeekend ? 7 : 5))}
        labelLow="1"
        width="sm"
        labelHigh="MAXIMUM"
        mappedName="sendFrequency"
        showLabels={true}
        tooltipOverride={val => {
          if (val === null || val === undefined) return
          return (
            <div className="tw-text-redi-primary-dark tw-whitespace-nowrap">
              <span className="tw-text-redi-primary">{val}</span>/day
            </div>
          )
        }}
      />
    </SubSection>
  )
}
