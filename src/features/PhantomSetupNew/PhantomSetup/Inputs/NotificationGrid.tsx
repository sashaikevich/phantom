import React from "react"

import { InputToggle } from "./InputToggle"
import { Text } from "../Text"

import { useSetupContext } from "../../../../context/setupContext"
import { channels, triggers } from "../../MOCK_DATA"

export const NotificationGrid = () => {
  const { data, updateField } = useSetupContext()

  return (
    <>
      <table className="tw-w-full tw-border-collapse tw-mb-8">
        <thead>
          <tr>
            <td className="tw-w-80"></td>
            {channels.map(channel => {
              return (
                <th key={channel.mappedSuffix} className="tw-text-left tw-p-3">
                  <Text
                    variant="label-sm"
                    className="tw-cursor-default"
                    onClick={() => {
                      const channelEventKeys = Object.keys(data).filter(key =>
                        key.endsWith(channel.mappedSuffix)
                      )
                      const totalActive = channelEventKeys.filter(
                        key => data[key].value
                      ).length

                      if (totalActive < channels.length) {
                        channelEventKeys.map(key => updateField(key, true))
                      } else {
                        channelEventKeys.map(key => updateField(key, false))
                      }
                    }}
                  >
                    {channel.label}
                  </Text>
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {triggers.map((trigger, rowIdx) => {
            return (
              <tr
                key={trigger.mappedPrefix + rowIdx}
                className="even:tw-bg-redi-light-bg"
              >
                <th className="tw-text-right tw-p-3 tw-pr-8">
                  <Text
                    variant="label-md"
                    className="tw-cursor-default"
                    onClick={() => {
                      const triggerEventKeys = Object.keys(data).filter(key =>
                        key.startsWith(trigger.mappedPrefix)
                      )
                      const totalActive = triggerEventKeys.filter(
                        key => data[key].value
                      ).length

                      if (totalActive < channels.length) {
                        triggerEventKeys.map(key => updateField(key, true))
                      } else {
                        triggerEventKeys.map(key => updateField(key, false))
                      }
                    }}
                  >
                    {trigger.label}
                  </Text>
                </th>
                {channels.map((channel, colIdx) => {
                  return (
                    <td
                      key={trigger.mappedPrefix + "_" + colIdx}
                      className="tw-p-3 tw-pb-2"
                    >
                      <InputToggle
                        mappedName={
                          trigger.mappedPrefix + "_" + channel.mappedSuffix
                        }
                      />
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
