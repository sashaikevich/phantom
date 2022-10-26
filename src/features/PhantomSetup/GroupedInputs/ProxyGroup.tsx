import React, { useEffect } from "react"

import { SubSection } from "../SubSection"
import {
  InputRadioGroup,
  InputRadioOption,
  InputTextInline,
  Label,
  InputFieldNumber,
} from "../Inputs"
import { CalloutBox } from "../CalloutBox"
import { Text } from "../Text"
import { useSetupContext } from "../../../contexts/setupContext"
import { IPLifespanType, PreferredProxyType } from "../d"

export const ProxyGroup = () => {
  const { updateField, data } = useSetupContext()
  const isPhantomProxy =
    data["preferredProxy"] === PreferredProxyType.Phantombuster
  const isHTTPProxy = data["preferredProxy"] === PreferredProxyType.Http

  // update input within a radio option (consider using a hook)
  useEffect(() => {
    // ensure that if that radio option is chosen, that the related foldes field receives a value
    if (data["IPLifespan"] === IPLifespanType.Dynamic) {
      // mini validation implementation
      if (
        !(data["refreshFrequency"] >= 1) ||
        !(data["refreshFrequency"] <= 168)
      ) {
        updateField("refreshFrequency", 6)
      }
    } else {
      updateField("refreshFrequency", 0)
    }
  }, [data["IPLifespan"], data["refreshFrequency"]])

  return (
    <SubSection heading="Preferred Proxy" columnView={true}>
      <InputRadioGroup mappedName="preferredProxy" className="tw-ml-10">
        <InputRadioOption value={PreferredProxyType.None}>
          None
        </InputRadioOption>
        <InputRadioOption value={PreferredProxyType.Random}>
          Random Proxy
        </InputRadioOption>
        <InputRadioOption value={PreferredProxyType.Phantombuster}>
          PhantomBuster
        </InputRadioOption>
        <InputRadioOption value={PreferredProxyType.Http}>
          HTTP
        </InputRadioOption>
      </InputRadioGroup>

      {isHTTPProxy && (
        <CalloutBox
          showFlag={false}
          className="tw-w-full"
        >
          <InputTextInline
            label="Address:"
            placeholder="proxy.company.com:8080"
            mappedName={"proxyAddress"}
          />
          <InputTextInline label="Username:" mappedName={"proxyUsername"} />
          <InputTextInline label="Password:" mappedName={"proxyPassword"} />
        </CalloutBox>
      )}
      {isPhantomProxy && (
        <CalloutBox
          showFlag={false}
          className="tw-w-full tw-pl-6"
        >
          <Label labelSize="md">Address:</Label>
          <InputRadioGroup mappedName="IPLifespan" className="tw-ml-10 tw-mb-3">
            <InputRadioOption value={IPLifespanType.Static}>
              Maintain the same fixed IP as long as possible
            </InputRadioOption>
            <InputRadioOption
              inputStyleOverride="tw-translate-y-[5px]"
              value={IPLifespanType.Dynamic}
            >
              <Text variant="label-sm">
                Obtain the IP address every
                <InputFieldNumber
                  inline
                  smaller
                  mappedName="refreshFrequency"
                  className="tw-text-center tw-mx-2"
                />
                hours
              </Text>
            </InputRadioOption>
          </InputRadioGroup>

          <span className="tw-inline-flex tw-items-center">
            <Label labelSize="md">Proxy location:</Label>
            <select
              id="proxy_location"
              name="proxyLocation"
              value={data["proxyLocation"] as string}
              onChange={e => {
                updateField("proxyLocation", e.target.value)
              }}
              className="tw-block tw-w-36 tw-rounded-md tw-py-1 tw-ml-2 tw-border-redi-placeholder"
            >
              <option value="A">France</option>
              <option value="B">Canada</option>
              <option value="C">United Kingdom</option>
            </select>
          </span>
        </CalloutBox>
      )}
    </SubSection>
  )
}
