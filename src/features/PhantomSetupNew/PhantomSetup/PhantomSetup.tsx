import React from "react"
import { InfoBox } from "../../../components/new"
import {
  SectionTitle,
  Label,
  InputText,
  InputTextInline,
  InputFieldText,
  InputToggle,
  InputRange,
  InputRadioGroup,
  HelpLink,
  Text,
  PhantomHeader,
  ViewToggle,
  CalloutBox,
} from "."
import { HorizontalOptions } from "./Layout"

export const PhantomSetup = () => {
  return (
    <main className="tw-py-8 tw-px-28 tw-max-w-5xl">
      <PhantomHeader />
      <ViewToggle />

      <SectionTitle>Search Settings</SectionTitle>

      <InputText
        label="Your search"
        helpLink={{ text: "Learn how to run multiple searches" }}
        placeholder="https://www.linkedin.com/search/results/people/?keywords=..."
        className="tw-mb-6"
      />

      <CalloutBox>
        <div className="tw-flex tw-items-center">
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

      <InputText
        label="Personalized message"
        helpLink={{ text: "See how to customize it" }}
        className="tw-mb-6"
        optional={true}
        multiline={true}
        placeholder={`Hey #firstName#, let's connect! \nBest regards`}
      />

      <div className="tw-flex tw-w-full tw-items-end">
        <InputText
          required={true}
          className="tw-w-full"
          label="Connect to your LinkedIn with a cookie"
        />
        <span className="tw-mx-4 tw-mb-2 tw-text-redi-placeholder">or</span>
        <a
          href="#"
          className="tw-block tw-w-full tw-bg-redi-light-bg tw-text tw-rounded-xl tw-text-redi-primary hover:tw-text-redi-primary hover:tw-bg-redi-primary/10 tw-border tw-border-redi-primary tw-text-center tw-text-redi-mm tw-font-semibold tw-pb-1.5 tw-pt-2"
        >
          Auto-connect with our browser extension
        </a>
      </div>

      <HelpLink className="tw-mb-14" text="Where do I find it?" />

      <SectionTitle>Automation Settings</SectionTitle>

      <InfoBox type="notice" className="tw-mb-8 ">
        <span className="tw-uppercase tw-font-bold">Note: </span>
        <span className="tw-italic tw-font-semibold">
          You must stay logged into LinkedIn for this flow to run. (You may
          close your browser, but not log out.)
        </span>
      </InfoBox>

      <Label className="tw-mb-3">Outreach account</Label>
      <HorizontalOptions>
        <Text variant="label-md" className="tw-text-right">
          Use Sales Navigator:
        </Text>
        <InputToggle label="Use my second Sales Navigator Team account" />
      </HorizontalOptions>

      <hr className="tw-border-redi-light-bg tw-my-16" />

      <Label className="tw-mb-3">Outreach limits</Label>
      <Text el="p" className="tw-mb-4">
        Your automated flow should mimic your typical behavior to avoid hitting
        LinkedIn's abuse limits.
      </Text>
      <HorizontalOptions>
        <Text variant="label-md" className="tw-text-right">
          Send invites
        </Text>
        <InputRadioGroup
          forName="send_invites"
          options={["During working hours", "Randomly throughout the week"]}
        />
      </HorizontalOptions>
      <HorizontalOptions>
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
      </HorizontalOptions>

      <hr className="tw-border-redi-light-bg tw-my-16" />

      <Label>Extraction limits</Label>
      <Text el="p" className="tw-mb-4">
        You can limit the number of profiles to extract to the first N results
        for each search type:
      </Text>
      <HorizontalOptions>
        <Text variant="label-md" className="tw-text-right">
          Regular search:
        </Text>
        <InputRange min={1} max={1000} width="md" showLabels={true} />
      </HorizontalOptions>
      <HorizontalOptions>
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
      </HorizontalOptions>
      <HorizontalOptions>
        <Text variant="label-md" className="tw-text-right">
          LinkedIn Group search:
        </Text>
        <InputRange min={1} max={2500} width="md" showLabels={true} />
      </HorizontalOptions>

      <hr className="tw-border-redi-light-bg tw-my-16" />

      <Label>Critical execution limits</Label>
      <Text el="p" className="tw-mb-4">
        Leave the recommended settings unless you know exactly what you're
        doing.
      </Text>
      <HorizontalOptions>
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
      </HorizontalOptions>
      <HorizontalOptions>
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
      </HorizontalOptions>
      <HorizontalOptions>
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
      </HorizontalOptions>
      <hr className="tw-border-redi-light-bg tw-my-16" />

      <Label>Data management</Label>
      <InputRadioGroup
        forName="data_management"
        className="tw-ml-10"
        options={[
          "Mix old and new files (add new data to already-existing dataset)",
          "Delete all previous files at each launch, and restart processing information from the beginning",
          <>
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
          </>,
        ]}
      />

      <SectionTitle>Proxy Settings</SectionTitle>
      <Label>Preferred Proxy</Label>
      <HorizontalOptions>
        <InputRadioGroup
          forName="preferred_proxy"
          className="tw-ml-10"
          options={["None", "Random Proxy", "PhantomBuster", "HTTP"]}
        />

        <div>
          <div className="tw-relative tw-bg-redi-light-bg tw-border-redi-secondary tw-border tw-px-2 tw-py-1 tw-mb-6 tw-rounded-lg">
            <InputTextInline
              label="Address:"
              className="tw-mb-2"
              placeholder="proxy.company.com:8080"
            />
            <InputTextInline label="Username:" className="tw-mb-2" />
            <InputTextInline label="Password:" className="tw-mb-2" />
          </div>

          <div className="tw-relative tw-bg-redi-light-bg tw-border-redi-secondary tw-border tw-px-2 tw-py-1 tw-mb-6 tw-rounded-lg">
            <Label labelSize="md">Address:</Label>
            <InputRadioGroup
              forName="pb_proxy"
              className="tw-ml-10"
              options={[
                "Maintain the same fixed IP as long as possible",
                <>
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
                </>,
              ]}
            />
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
          </div>
        </div>
      </HorizontalOptions>

      <SectionTitle>Notification Settings</SectionTitle>
      <Text el="p" className="tw-mb-4">
        Keep track of your flow by selecting when and how you want to be
        notified of its status.
      </Text>
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
    </main>
  )
}
