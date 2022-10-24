import React, { useState } from "react"
import { InfoBox } from "../../InfoBox"
import { IoInformationCircleOutline } from "react-icons/io5"
import { InputField } from "../../InputField"
import { ExpandableSection } from "../../ExpandableSection"
import { StepStatus } from "../setup"

export const StepProfiles = () => {
  const [showError, setShowError] = useState()

  return (
    <>
      <InfoBox className="tw-mb-8">
        <p>
          Tell the Flow where to extract the LinkedIn profiles you would like it
          to invite.
        </p>
      </InfoBox>

      <div className='form-wrapper'>
        <form>
          <InputField
            label='Input Type'
            type='select'
            options={[
              "Regular LinkedIn Search",
              "Sales Navigator Search",
              "LinkedIn Group",
            ]}
          />
          <InputField
            label='Your inputs'
            type='text'
            placeholder='https://www.linkedin.com/search/results/people/?keywords=...'
            required
            notice={[
              "Give your inputs in one of the following formats:",
              "• The URL of a single LinkedIn search, Sales Navigator search, or LinkedIn group.",
              <>
                • The URL of a"{" "}
                <a href='#' className='tw-underline'>
                  Google Sheet
                </a>{" "}
                containing your search or group URLs.
              </>,
              "• The URL of a CSV file containing your search or group URLs.",
              "Make sure that the CSV and Google Sheets are publicly accessible.",
            ]}
          />

          <ExpandableSection triggerText='Advanced settings'>
            <InputField
              label='Number of results to extract per input'
              type='number'
              range={{ start: 1, end: 2500 }}
              notice={[
                <>
                  LinkedIn only displays the first 1000 results of a regular
                  search, 2500 results of a Sales Navigator search, or 2500
                  members of a LinkedIn group. To get more from a search, alter
                  the search query and{" "}
                  <a href='#' className='tw-underline'>
                    use multiple search URLs
                  </a>
                  .
                </>,
                "If left empty, the Phantom will scrape all available profiles by default.",
              ]}
            />

            <InputField
              type='number'
              label='Number of invites to send per day'
              range={{ start: 1, end: 200 }}
              notice={[
                <>
                  <span className='tw-flex tw-items-center'>
                    <IoInformationCircleOutline className='tw-w-[14px] tw-h-[14px] tw-mr-1' />{" "}
                    LinkedIn recently implemented a limit of 100 invitations per
                    week. To keep within this, the Flow will send 20 invitations
                    per working day by default.
                  </span>
                </>,
                "This Flow will process a maximum of 100 profiles per day.",
              ]}
            />

            <InputField
              type='select'
              label='Times at which to send invites'
              options={[
                "Weekdays during working hours",
                "Randomly throughout the day and week",
              ]}
            />

            <InputField
              type='text'
              label='Name of column containing inputs'
              notice={[
                "If you are using a spreadsheet, by default the Phantom will use the first column (column A) as input. If the Phantom should use a different column, provide the column's name below.",
                <>
                  <a href='#' className='tw-underline'>
                    Column names
                  </a>{" "}
                  are not A or B, but rather the titles found in row 1 of the
                  column.
                </>,
              ]}
              placeholder='Column header title'
            />
            <div className='tw-flex tw-items-center'>
              <label>
                <input
                  type='checkbox'
                  className='
                tw-cursor-pointer tw-rounded-[5px]  tw-border-highlight checked:tw-bg-highlight checked:focus:tw-bg-highlight checked:hover:tw-bg-highlight '
                />
                <span className='tw-font-bold tw-text-body-m tw-mx-2'>
                  Use your second Sales Navigator team instead of the first
                </span>
              </label>
              <span className='tw-text-body-tertiary tw-font-medium tw-text-body-s'>
                Optional
              </span>

            </div>
            <span className="tw-text-body-s tw-font-medium tw-text-body-secondary tw-w-full tw-my-1">Only applicable if you're using Sales Navigator and are part of multiple teams.</span>
          </ExpandableSection>
        </form>
      </div>
    </>
  )
}

export function validateStepProfiles(): StepStatus {
  return "invalid"
}
