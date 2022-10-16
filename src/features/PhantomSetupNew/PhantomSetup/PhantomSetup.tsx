import React from "react"
import { InfoBox, Button } from "../../../components/new"
import {
  CalloutBox,
  HelpLink,
  InputFieldText,
  InputRadioGroup,
  InputRadioOption,
  InputRange,
  InputCookie,
  InputText,
  InputTextInline,
  InputToggle,
  Label,
  NotificationGrid,
  Section,
  SubSection,
  Text,
  PhantomHeader,
  ViewToggle,
} from "."
import { TwoColumns } from "./Layout"

export const PhantomSetup = () => {
  return (
    <main className="tw-py-8 tw-px-28 tw-max-w-5xl">
      <PhantomHeader />
      <ViewToggle />
      <Section heading="Search Settings">
        <InputText
          label="Your search"
          helpLink={{ text: "Learn how to run multiple searches" }}
          placeholder="https://www.linkedin.com/search/results/people/?keywords=..."
        />
        <CalloutBox className="tw-py-1 tw--mt-3 tw-mb-9">
          <div className="tw-flex tw-items-center ">
            <Text>
              Spreadsheet detected; Please confirm the
              <span className="tw-font-bold tw-not-italic tw-ml-1 ">
                data column
              </span>
              :
            </Text>
            <select
              id="column"
              className="tw-block tw-w-36 tw-rounded-md tw-py-1 tw-ml-2 tw-border-redi-placeholder"
            >
              <option value="A">Oct. Li Searches</option>
              <option value="B">Assigned to</option>
              <option value="C">Lead Health</option>
            </select>
          </div>
        </CalloutBox>
        <InputCookie />
      </Section>
      <Section heading="Automation Settings">
        <SubSection heading="Outreach account">
          <Text variant="label-md" className="tw-text-right">
            Use Sales Navigator:
          </Text>
          <InputToggle label="Use my second Sales Navigator Team account" />
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
          <InputRadioGroup forName="send_invites">
            <InputRadioOption>During working hours</InputRadioOption>
            <InputRadioOption>Randomly throughout the week</InputRadioOption>
          </InputRadioGroup>

          <Text variant="label-md" className="tw-text-right">
            Send frequency:
          </Text>
          <InputRange
            min={1}
            max={100}
            labelLow="1"
            width="sm"
            labelHigh="MAXIMUM"
            showLabels={true}
            tooltipOverride={val => {
              if (val === null || val === undefined) return
              // const daily = val / 7
              return (
                <div className="tw-text-redi-primary-dark tw-whitespace-nowrap">
                  {val}/day
                </div>
              )
            }}
          />
        </SubSection>
        <SubSection
          heading="Extraction limits"
          description=" You can limit the number of profiles to extract to the first
      N results for each search type:"
        >
          <Text variant="label-md" className="tw-text-right">
            Regular search:
          </Text>
          <InputRange min={1} max={1000} width="md" showLabels={true} />
          <Text variant="label-md" className="tw-text-right">
            Sales Navigator search:
          </Text>
          <InputRange
            min={1}
            max={2500}
            initialVal={1}
            width="md"
            showLabels={true}
          />
          <Text variant="label-md" className="tw-text-right">
            LinkedIn Group search:
          </Text>
          <InputRange min={1} max={2500} width="md" showLabels={true} />
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
          />
        </SubSection>

        <SubSection heading="Data management" columnView={false}>
          <InputRadioGroup forName="data_management" className="tw-ml-10">
            <InputRadioOption>
              Mix old and new files (add new data to already-existing dataset)
            </InputRadioOption>
            <InputRadioOption warning>
              Delete all previous files at each launch, and restart processing
              information from the beginning
            </InputRadioOption>
            <InputRadioOption warning>
              <Text variant="label-sm">
                Create new files at each launch, and restart processing
                information from the beginning, and keep the last
                <InputFieldText
                  inline
                  smaller
                  width="sm"
                  className="tw-text-center tw-mx-2"
                />
                folders
              </Text>
            </InputRadioOption>
          </InputRadioGroup>
        </SubSection>
        <InfoBox type="notice">
          You must stay logged into LinkedIn for this flow to run. (You may
          close your browser, but not log out.)
        </InfoBox>
      </Section>
      <Section heading="Proxy Settings">
        <TwoColumns>
          <SubSection heading="Preferred Proxy" columnView={false}>
            <InputRadioGroup forName="preferred_proxy" className="tw-ml-10">
              <InputRadioOption>None</InputRadioOption>
              <InputRadioOption>Random Proxy</InputRadioOption>
              <InputRadioOption>PhantomBuster</InputRadioOption>
              <InputRadioOption>HTTP</InputRadioOption>
            </InputRadioGroup>
          </SubSection>
          <div>
            <CalloutBox showFlag={false} className="tw-w-full">
              <InputTextInline
                label="Address:"
                placeholder="proxy.company.com:8080"
              />
              <InputTextInline label="Username:" />
              <InputTextInline label="Password:" />
            </CalloutBox>

            <CalloutBox showFlag={false} className="tw-w-full">
              <Label labelSize="md">Address:</Label>
              <InputRadioGroup forName="pb_proxy" className="tw-ml-10 tw-mb-2">
                <InputRadioOption>
                  Maintain the same fixed IP as long as possible
                </InputRadioOption>
                <InputRadioOption inputClasses="tw-translate-y-[5px]">
                  <Text variant="label-sm">
                    Obtain the IP address every
                    <InputFieldText
                      inline
                      smaller
                      width="sm"
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
                  className="tw-block tw-w-36 tw-rounded-md tw-py-1 tw-ml-2 tw-border-redi-placeholder"
                >
                  <option value="A">Oct. Li Searches</option>
                  <option value="B">Assigned to</option>
                  <option value="C">Lead Health</option>
                </select>
              </span>
            </CalloutBox>
          </div>
        </TwoColumns>
      </Section>
      <Section heading="Notification Settings">
        <Text el="p" className="tw-mb-4">
          Keep track of your flow by selecting when and how you want to be
          notified of its status.
        </Text>

        <NotificationGrid />

        <CalloutBox className="tw-w-full">
          <Text>
            Remember to enter your Slack webhook to receive notifications via
            Slack
          </Text>

          <InputTextInline
            label="Your Slack hook:"
            placeholder="https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX"
            helpLink={{ text: "Here's how to connect with Slack" }}
          />
        </CalloutBox>
      </Section>

      <Button>Test Before Launch</Button>
      <Button variant="branded">Launch</Button>
    </main>
  )
}
