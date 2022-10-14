import React from "react"

import { InputToggle } from "./InputToggle"
import { Text } from "../Text"

export const NotificationGrid = () => {
  const events = [
    {
      label: "Finished successfully",
      abbr: "succ_finish",
    },
    {
      label: "Finished with error",
      abbr: "err_finish",
    },
    {
      label: "Launch error",
      abbr: "err_launch",
    },
    {
      label: "Time limit reached",
      abbr: "limit_time",
    },
  ]
  const channels = ["Email", "Slack", "Webhook"]

  return (
    <>
      <table className="tw-w-full tw-border-collapse tw-mb-8">
        <tr>
          <td className="tw-w-80"></td>
          {channels.map((channel, idx) => {
            return <th key={channel + idx} className="tw-text-left tw-p-3"><Text variant="label-sm">{channel}</Text></th>
          })}
        </tr>
        {events.map(event => {
          return (
            <tr key={event.abbr} className="even:tw-bg-redi-light-bg">
              <th className="tw-text-right tw-p-3 tw-pr-8"><Text variant="label-md">{event.label}</Text></th>
              {channels.map((channel, idx) => {
                return (
                  <td key={event.abbr + "_" + channel} className="tw-p-3 tw-pb-2">
                    <InputToggle />
                  </td>
                )
              })}
            </tr>
          )
        })}
      </table>
    </>
  )
}
