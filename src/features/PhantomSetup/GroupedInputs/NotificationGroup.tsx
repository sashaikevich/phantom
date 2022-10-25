import React from "react"
import { Text } from "../Text"
import { CalloutBox } from "../CalloutBox"
import { InputToggle, InputTextInline } from "../Inputs"

// import { channels, triggers } from "../_MOCK_DATA/MOCK_DATA"
import { PhantomSetupKeys, channels, triggers, ChannelsSuffixType } from "../d"
import { useSetupContext } from "../../../contexts/setupContext"

export const NotificationGroup = () => {
  const { data, updateField } = useSetupContext()
  const viaSlack = isChannelSelected("via_slack")
  const viaWebhook = isChannelSelected("via_webhook")

  function isChannelSelected(mappedSuffix: ChannelsSuffixType): boolean {
    const channelEventKeys = Object.keys(data).filter(key =>
      key.endsWith(mappedSuffix)
    )
    const totalActive = channelEventKeys.filter(
      key => data[key as PhantomSetupKeys]
    ).length
    return totalActive > 0
  }

  return (
    <>
      <Text el="p" className="tw-mb-4">
        Keep track of your flow by selecting when and how you want to be
        notified of its status.
      </Text>
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
                        key => data[key as PhantomSetupKeys]
                      ).length

                      if (totalActive < channels.length) {
                        channelEventKeys.map(key =>
                          updateField(key as PhantomSetupKeys, true)
                        )
                      } else {
                        channelEventKeys.map(key =>
                          updateField(key as PhantomSetupKeys, false)
                        )
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
                        key => data[key as PhantomSetupKeys]
                      ).length

                      if (totalActive < channels.length) {
                        triggerEventKeys.map(key =>
                          updateField(key as PhantomSetupKeys, true)
                        )
                      } else {
                        triggerEventKeys.map(key =>
                          updateField(key as PhantomSetupKeys, false)
                        )
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
                          (trigger.mappedPrefix +
                            "_" +
                            channel.mappedSuffix) as PhantomSetupKeys
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

      <CalloutBox isVisible={viaSlack} className="tw-w-full tw-my-2">
        <Text>
          Remember to enter your Slack webhook to receive notifications via
          Slack
        </Text>

        <InputTextInline
          label="Slack webhook:"
          mappedName="slackWebhook"
          placeholder="https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX"
          helpLink={{ text: "How to connect with Slack" }}
        />
      </CalloutBox>
      
        <CalloutBox isVisible={viaWebhook} showFlag={true} className="tw-w-full tw-my-2">
          <Text>
            Remember to enter your custom webhook to have it receive
            notifications
          </Text>

          <InputTextInline
            label="Custom webhook:"
            mappedName="webhook"
            helpLink={{ text: "How to use custom webhooks" }}
          />
        </CalloutBox>
    </>
  )
}
