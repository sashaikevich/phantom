import React from "react"
import { InfoBox } from "../../../components/original/InfoBox"
import { ExpandableSection } from "../../../components/original/ExpandableSection"

export const StepProfiles = () => {
  return (
    <>
      <InfoBox>
        <p>
          Tell the Flow where to extract the LinkedIn profiles you would like it
          to invite.
        </p>
      </InfoBox>
      <div className='form-wrapper'>
        <form>
          <label htmlFor='inputType'>Input Type</label>
          <select name='inputType' placeholder='Paste your session cookie here'>
            <option value='Regular LinkedIn Search'>
              Regular LinkedIn Search
            </option>
            <option value='Sales Navigator Search'>
              Sales Navigator Search
            </option>
            <option value='LinkedIn Group'>LinkedIn Group</option>
          </select>
          <label htmlFor='queries'>Your inputs</label>
          <input
            required
            type='text'
            name='queries'
            placeholder='https://www.linkedin.com/search/results/people/?keywords=...'
          />
          <p className='tw-mt-2 tw-invisible tw-peer-invalid:visible tw-text-sm '>
            Please provide a valid email address.
          </p>
          <ul className="tw-text-emerald-200">
            <li>
              Give your inputs in one of the following formats:
              <ul>
                <li>
                  • The URL of a single LinkedIn search, Sales Navigator search,
                  or LinkedIn group.
                </li>
                <li>
                  • The URL of a Google Sheet containing your search or group
                  URLs.
                </li>
                <li>
                  • The URL of a CSV file containing your search or group URLs.
                </li>
              </ul>
            </li>
            <li>
              Make sure that the CSV and Google Sheets are publicly accessible.
            </li>
          </ul>

          <ExpandableSection triggerText='Advanced settings'>
            <label htmlFor='numResults'>
              Number of results to extract per input
            </label>
            <input type='number' />
          </ExpandableSection>
        </form>
      </div>
      <p>
        If you have PhantomBuster's extension installed, just click on the
        "Connect to LinkedIn" button.
      </p>
      <p>
        Otherwise, you can find your cookie manually (the LinkedIn cookie's name
        is "li_at").
      </p>
    </>
  )
}
