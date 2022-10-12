import React from "react"
import { BiLeftArrowAlt } from "react-icons/bi"
import { MdLabel } from "react-icons/md"
import { Link } from "react-router-dom"
import { CalloutBox } from "../../../components/new"
import {
  SectionTitle,
  Label,
  InputText,
  InputToggle,
  InputRange,
  InputRadioGroup,
  HelpLink,
  Text,
} from "."

export const PhantomSetup = () => {
  return (
    <main className="tw-py-8 tw-px-28 tw-max-w-5xl">
      <div className="tw-flex tw-space-x-7 tw-mb-10">
        <div className="tw-basis-[55%]">
          <div className="tw-relative">
            <h2 className="tw-font-bold tw-text-redi-heading-l tw-text-redi-dark tw-mb-8">
              LinkedIn Search to Lead Connection
            </h2>
            <span className="tw-absolute tw-right-full tw-mr-2 tw--top-[0.1rem]">
              <Link to="#">
                <BiLeftArrowAlt className="tw-fill-redi-primary-50  tw-w-8 tw-h-8 hover:tw-fill-redi-primary" />
              </Link>
            </span>
          </div>
          <Text>
            Extract LinkedIn users from a search or group, auto connect with
            them, and keep track of who accepts your request
          </Text>
        </div>
        <div className="summary tw-p-6 tw-bg-redi-light-bg tw-text-redi-primary-dark tw-rounded-lg tw-self-start tw-basis-[45%] tw-text-xs tw-opacity-50">
          Later state (incomplete | error | paused) can go here, maybe some
          quick statistics (2h30mins or 60 contacts reached, etc.) Possibly
          quick links to duplicate the phantom, launch it/pause it Inputtoggle,
          share settings, etc.
        </div>
      </div>

      <div className="tw-text-right tw-mb-2">
        {/* TODO: put this state into url later for easy sharing, consider wrapping in its own component */}
        <span className="tw-text-redi-placeholder tw-mr-4">Settings view:</span>
        <div className="tw-inline-flex tw-rounded-md tw-border tw-font-medium tw-border-redi-primary">
          <button
            type="button"
            className="tw-rounded-l-md tw-px-3 tw-text-redi-primary tw-bg-redi-light-bg hover:tw-text-redi-primary"
          >
            Quick Start
          </button>
          <button
            type="button"
            className="tw-px-3 tw-border-l-redi-primary tw-border-l tw-border-r tw-border-r-redi-primary  tw-text-redi-primary-50 hover:tw-text-redi-primary"
          >
            All Settings
          </button>
          <button
            type="button"
            className="tw-rounded-r-md tw-px-3 tw-text-redi-primary-50 hover:tw-text-redi-primary"
          >
            JSON
          </button>
        </div>
      </div>

      <SectionTitle title="Search Settings" />

      <InputText
        label="Your search"
        helpLink={{ text: "Learn how to run multiple searches" }}
        className="tw-mb-6"
        placeholder="https://www.linkedin.com/search/results/people/?keywords=..."
      />

      <div className="tw-relative tw-bg-redi-light-bg tw-border-redi-secondary tw-border tw-px-2 tw-py-1 tw-inline-flex tw-items-center tw-mb-6 tw-rounded-lg">
        <span className="tw-italic tw-text-redi-medium">
          Spreadsheet detected; Please confirm the{" "}
          <span className="tw-font-bold tw-not-italic ">data column</span>:
        </span>
        <select
          id="countries"
          className="tw-block tw-w-36 tw-rounded-md tw-py-1 tw-ml-2 tw-border-redi-placeholder"
        >
          <option value="A">Oct. Li Searches</option>
          <option value="B">Assigned to</option>
          <option value="C">Lead Health</option>
        </select>
        <div className="flag tw-absolute tw-right-full tw-mr-4 tw-drop-shadow-floating-blue">
          <MdLabel className="tw-fill-redi-primary tw-w-5 tw-h-5 " />
        </div>
      </div>

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

      <SectionTitle title="Automation Settings" />

      <CalloutBox type="notice" className="tw-mb-8 ">
        <span className="tw-uppercase tw-font-bold">Note: </span>
        <span className="tw-italic tw-font-semibold">
          You must stay logged into LinkedIn for this flow to run. (You may
          close your browser, but not log out.)
        </span>
      </CalloutBox>

      <Label className="tw-mb-3">Outreach account</Label>
      <div className="tw-grid tw-gap-8 tw-grid-cols-options">
        <div className="tw-text-right">
          <Label labelSize="md">Use Sales Navigator:</Label>
        </div>

        <div className="">
          <InputToggle label="Use my second Sales Navigator Team account" />
        </div>
      </div>

      <hr className="tw-border-redi-light-bg tw-my-16" />

      <Label className="tw-mb-3">Outreach limits</Label>
      <Text el="p" className="tw-mb-4">
        Your automated flow should mimic your typical behavior to avoid hitting
        LinkedIn's abuse limits.
      </Text>
      <div className="tw-grid tw-gap-8 tw-grid-cols-options tw-mb-3">
        <div className="tw-text-right">
          <Label labelSize="md">Send invites</Label>
        </div>
        <InputRadioGroup
          forName="send_invites"
          options={["During working hours", "Randomly throughout the week"]}
        />
      </div>
      <div className="tw-grid tw-gap-8 tw-grid-cols-options">
        <div className="tw-text-right">
          <Label labelSize="md">Send frequency:</Label>
        </div>
        <div className="">
          <InputRange
            min={0}
            max={100}
            labelLow="1"
            size="sm"
            labelHigh="MAXIMUM"
            showLabels={true}
          />
        </div>
      </div>

      <hr className="tw-border-redi-light-bg tw-my-16" />

      <Label>Extraction limits</Label>
      <Text el="p" className="tw-mb-4">
        You can limit the number of profiles to extract to the first N results
        for each search type:
      </Text>
      <div className="tw-grid tw-gap-8 tw-grid-cols-options">
        <div className="tw-text-right">
          <Label labelSize="md">Regular search:</Label>
        </div>
        <div className="">
          <InputRange min={1} max={1000} size="md" showLabels={true} />
        </div>
      </div>
      <div className="tw-grid tw-gap-8 tw-grid-cols-options">
        <div className="tw-text-right">
          <Label labelSize="md">Sales Navigator search:</Label>
        </div>
        <div className="">
          <InputRange min={1} max={2500} size="md" showLabels={true} />
        </div>
      </div>
      <div className="tw-grid tw-gap-8 tw-grid-cols-options">
        <div className="tw-text-right">
          <Label labelSize="md">LinkedIn Group search:</Label>
        </div>
        <div className="">
          <InputRange min={1} max={2500} size="md" showLabels={true} />
        </div>
      </div>

      <hr className="tw-border-redi-light-bg tw-my-16" />

      <Label>Critical execution limits</Label>
      <Text el="p" className="tw-mb-4">
        Leave the recommended settings unless you know exactly what you're
        doing.
      </Text>
      <div className="tw-grid tw-gap-8 tw-grid-cols-options">
        <div className="tw-text-right">
          <Label labelSize="md">Maximum execution time:</Label>
        </div>
        <div className="">
          <InputRange warning={true} min={0} max={60} size="sm" showLabels={true} />
        </div>
      </div>
      <div className="tw-grid tw-gap-8 tw-grid-cols-options">
        <div className="tw-text-right">
          <Label labelSize="md">Maximum parallel executions:</Label>
        </div>
        <div className="">
          <InputRange warning={true} min={0} max={10} size="sm" showLabels={true} />
        </div>
      </div>
      <div className="tw-grid tw-gap-8 tw-grid-cols-options">
        <div className="tw-text-right">
          <Label labelSize="md">Maximum retries:</Label>
        </div>
        <div className="">
          <InputRange warning={true} min={0} max={10} size="sm" showLabels={true} />
        </div>
      </div>
      <hr className="tw-border-redi-light-bg tw-my-16" />

      <Label>Data management</Label>
      <InputRadioGroup
        forName="data_management"
        options={[
          "Mix old and new files (add new data to already-existing dataset)",
          "Delete all previous files at each launch, and restart processing information from the beginning.",
          "Create new files at each launch, and restart processing information from the beginning, and keep the last _____ folders",
        ]}
      />

      <SectionTitle title="Proxy Settings" />
      <SectionTitle title="Notification Settings" />
    </main>
  )
}
