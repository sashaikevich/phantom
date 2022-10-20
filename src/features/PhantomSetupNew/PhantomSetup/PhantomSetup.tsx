import React from "react"
import { InfoBox, Button } from "../../../components/new"
import {
  CalloutBox,
  InputFieldNumber,
  InputRadioGroup,
  InputRadioOption,
  CookieConnect,
  InputRange,
  InputSearch,
  InputText,
  InputTextInline,
  InputToggle,
  Label,
  LaunchControls,
  NotificationGrid,
  Section,
  SubSection,
  Text,
  PhantomHeader,
  ViewToggle,
} from "."
import { TwoColumns } from "./Layout"

import { useSetupContext } from "../../../context/setupContext"

export const PhantomSetup = () => {
  const {
    chosenView,
    data,
    viaSlack,
    viaWebhook,
    sendOnWeekend,
    updateField,
    isHTTPProxy,
    isPhantomProxy,
  } = useSetupContext()

  return (
    <main className="tw-py-8 tw-px-28 tw-max-w-5xl">
      <PhantomHeader />
      <ViewToggle />
      {chosenView === "json" ? (
        // bonus: syntax highlighting and nesting json
        <Section heading="JSON">
          <textarea
            className="tw-block tw-w-full tw-h-96 tw-border tw-border-redi-borders tw-rounded-lg tw-text-redi-dark/80 tw-placeholder-redi-placeholder"
            defaultValue={JSON.stringify(data, null, 2)}
          ></textarea>
        </Section>
      ) : (
        <>
          <Section heading="Search Settings">
            <InputSearch mappedName="searchTerm" />
            <InputText
              label="Personalized message"
              helpLink={{ text: "See how to customize it" }}
              optional={true}
              multiline={true}
              mappedName="personalizedMsg"
              placeholder={`Hey #firstName#, let's connect! \nBest regards`}
            />
            <CookieConnect mappedName="linkedInCookie" />
          </Section>

          <Section
            heading={`${chosenView === "all" ? "All " : ""}Automation Settings`}
          >
            <InfoBox type="notice" className="tw-mb-12">
              You must stay logged into LinkedIn for this flow to run. (You may
              close your browser, but not log out.)
            </InfoBox>
            <SubSection heading="Outreach account">
              <Text variant="label-md" className="tw-text-right">
                Use Sales Navigator:
              </Text>
              <InputToggle
                label="Use my second Sales Navigator Team account"
                mappedName="useSalesNavigator"
              />
            </SubSection>
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
                <InputRadioOption value="weekdays">
                  During working hours
                </InputRadioOption>
                <InputRadioOption value="weekend">
                  Randomly throughout the week
                </InputRadioOption>
              </InputRadioGroup>

              <Text variant="label-md" className="tw-text-right">
                Send frequency:
              </Text>
              <InputRange
                min={1}
                max={Math.floor(100 / (sendOnWeekend ? 5 : 7))}
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
            {chosenView === "all" && (
              <>
                {" "}
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
                    initialVal={1}
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
                <SubSection heading="Data management" columnView={false}>
                  <InputRadioGroup
                    mappedName="manageFolders"
                    className="tw-ml-10"
                  >
                    <InputRadioOption value="keep">
                      Mix old and new files (add new data to already-existing
                      dataset)
                    </InputRadioOption>
                    <InputRadioOption warning value="delete">
                      Delete all previous files at each launch, and restart
                      processing information from the beginning
                    </InputRadioOption>
                    <InputRadioOption warning value="create">
                      <Text variant="label-sm">
                        Create new files at each launch, and restart processing
                        information from the beginning, and keep the last
                        <InputFieldNumber
                          inline
                          smaller
                          mappedName={"keepNFolders"}
                          className="tw-text-center tw-mx-2"
                        />
                        folders
                      </Text>
                    </InputRadioOption>
                  </InputRadioGroup>
                </SubSection>
              </>
            )}
          </Section>
          {chosenView === "all" && (
            <Section heading="Proxy Settings">
              <TwoColumns>
                <SubSection heading="Preferred Proxy" columnView={false}>
                  <InputRadioGroup
                    mappedName="preferredProxy"
                    className="tw-ml-10"
                  >
                    <InputRadioOption value="none">None</InputRadioOption>
                    <InputRadioOption value="random">
                      Random Proxy
                    </InputRadioOption>
                    <InputRadioOption value="phantombuster">
                      PhantomBuster
                    </InputRadioOption>
                    <InputRadioOption value="http">HTTP</InputRadioOption>
                  </InputRadioGroup>
                </SubSection>
                {isHTTPProxy && (
                  <CalloutBox showFlag={false} className="tw-w-full">
                    <InputTextInline
                      label="Address:"
                      placeholder="proxy.company.com:8080"
                      mappedName={"proxyAddress"}
                    />
                    <InputTextInline
                      label="Username:"
                      mappedName={"proxyUsername"}
                    />
                    <InputTextInline
                      label="Password:"
                      mappedName={"proxyPassword"}
                    />
                  </CalloutBox>
                )}
                {isPhantomProxy && (
                  <CalloutBox showFlag={false} className="tw-w-full">
                    <Label labelSize="md">Address:</Label>
                    <InputRadioGroup
                      mappedName="IPLifespan"
                      className="tw-ml-10 tw-mb-2"
                    >
                      <InputRadioOption value="static">
                        Maintain the same fixed IP as long as possible
                      </InputRadioOption>
                      <InputRadioOption
                        inputStyleOverride="tw-translate-y-[5px]"
                        value="dynamic"
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
                        value={data["proxyLocation"].value}
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
              </TwoColumns>
            </Section>
          )}
          <Section heading="Notification Settings">
            <Text el="p" className="tw-mb-4">
              Keep track of your flow by selecting when and how you want to be
              notified of its status.
            </Text>

            <NotificationGrid />

            {viaSlack && (
              <CalloutBox className="tw-w-full tw-my-2">
                <Text>
                  Remember to enter your Slack webhook to receive notifications
                  via Slack
                </Text>

                <InputTextInline
                  label="Slack webhook:"
                  mappedName="slackWebhook"
                  placeholder="https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX"
                  helpLink={{ text: "How to connect with Slack" }}
                />
              </CalloutBox>
            )}
            {viaWebhook && (
              <CalloutBox showFlag={true} className="tw-w-full tw-my-2">
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
            )}
          </Section>

          <LaunchControls />
        </>
      )}
    </main>
  )
}
