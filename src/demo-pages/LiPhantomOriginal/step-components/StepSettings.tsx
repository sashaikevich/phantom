import React from "react"
import { IoInformationCircleOutline } from "react-icons/io5"
import { HiOutlineExclamationCircle } from "react-icons/hi"
import { ExpandableSection } from "../../../components/original/ExpandableSection"
import { InfoBox } from "../../../components/original/InfoBox"
import { InputField } from "../../../components/original/InputField"
import { StepStatus } from "../setup"

interface SettingsOptionT {
  label: string
  active?: boolean
}
const SettingsOption = ({ label, active }: SettingsOptionT) => {
  return (
    <div className='tw-flex tw-justify-between'>
      <div className='tw-flex tw-relative tw-justify-center'>
        <button
          className={`tw-rounded-xl tw-min-w-[140px] tw-px-9 tw-py-4 tw-font-medium ${
            active
              ? "tw-bg-highlight tw-text-primary"
              : "tw-bg-primary hover:tw-bg-highlight-muted"
          }`}
        >
          {label}
        </button>
        {active && (
          <span
            className='tw-w-5 tw-h-5 tw-bg-highlight-muted
      tw-absolute tw-top-full tw-mt-3 tw-rotate-45'
          ></span>
        )}
      </div>
    </div>
  )
}

const FauxCheck = () => {
  return (
    <div className='tw-w-full tw-flex tw-justify-center tw-items-center'>
      <input
        type='checkbox'
        className='tw-cursor-pointer tw-rounded-[5px]  tw-border-highlight checked:tw-bg-highlight checked:focus:tw-bg-highlight checked:hover:tw-bg-highlight '
      />
    </div>
  )
}
export const StepSettings = () => {
  return (
    <>
      <h5 className='tw-text-heading-primary tw-font-bold tw-text-heading-s tw-mt-4 tw-mb-5'>
        Notifications
      </h5>
      <div className='tw-flex  tw-space-x-4 tw-mb-5'>
        <SettingsOption label='None' />
        <SettingsOption label='In case of error' />
        <SettingsOption label='In case of success' />
        <SettingsOption active label='Advanced' />
      </div>
      <div className='tw-rounded-xl tw-bg-highlight-muted tw-p-4 tw-mb-8'>
        <div className='tw-bg-white tw-pt-3 tw-pb-6 tw-px-6 tw-rounded-xl tw-mb-4'>
          <h6 className='tw-text-heading-primary tw-font-bold tw-text-heading-s tw-mt-4 tw-mb-5'>
            Email
          </h6>
          <table className='tw-mt-4 tw-text-body-m  tw-w-full'>
            <thead className='tw-bg-primary'>
              <tr className='child:tw-px-4 child:tw-py-3'>
                <td className='tw-font-bold'>Event</td>
                <td className='tw-font-bold tw-text-center'>Manual launches</td>
                <td className='tw-font-bold tw-text-center'>
                  Automatic launches
                </td>
              </tr>
            </thead>
            <tbody>
              <tr className='child:tw-px-4 child:tw-py-3'>
                <td>Finished successfully</td>
                <td>
                  <FauxCheck />
                </td>
                <td>
                  <FauxCheck />
                </td>
              </tr>
              <tr className='child:tw-px-4 child:tw-py-3'>
                <td>Finished with error</td>
                <td>
                  <FauxCheck />
                </td>
                <td>
                  <FauxCheck />
                </td>
              </tr>
              <tr className='child:tw-px-4 child:tw-py-3'>
                <td>Launch error</td>
                <td>
                  <FauxCheck />
                </td>
                <td>
                  <FauxCheck />
                </td>
              </tr>
              <tr className='child:tw-px-4 child:tw-py-3'>
                <td>Time limit reached</td>
                <td>
                  <FauxCheck />
                </td>
                <td>
                  <FauxCheck />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='tw-bg-white tw-pt-3 tw-pb-6 tw-px-6 tw-rounded-xl tw-mb-4'>
          <h6 className='tw-text-heading-primary tw-font-bold tw-text-heading-s tw-mt-4 tw-mb-5'>
            Slack
          </h6>
          <InputField
            type='text'
            label='Webhook'
            placeholder='https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX'
          />
        </div>
        <div className='tw-bg-white tw-pt-3 tw-pb-6 tw-px-6 tw-rounded-xl'>
          <h6 className='tw-text-heading-primary tw-font-bold tw-text-heading-s tw-mt-4 tw-mb-5'>
            Custom webhook
          </h6>
          <InputField
            type='text'
            label='URL'
            className='tw--mb-4'
            placeholder='https://my-api.com/phantombuster-hook'
          />
          <InfoBox className=''>
            <p>
              For more details on how to use webhooks, check out our{" "}
              <a href='#' className='tw-unerline'>
                documentation
              </a>
              .
            </p>
          </InfoBox>
        </div>
      </div>
      <ExpandableSection triggerText='Advanced settings'>
        <h5 className='tw-text-heading-primary tw-font-bold tw-text-heading-s tw-mt-4 tw-mb-5'>
          Notifications
        </h5>
        <div className='tw-flex  tw-space-x-4 tw-mb-5'>
          <SettingsOption label='None' />
          <SettingsOption label='PhantomBuster proxy' />
          <SettingsOption active label='HTTP' />
          <SettingsOption label='Random proxy from pool' />
        </div>
        <div className='tw-rounded-xl tw-bg-highlight-muted tw-p-4 tw-mb-8'>
          <InputField
            type='text'
            label='Address'
            placeholder='proxy.company.com:8080'
          />
          <InputField type='text' label='Username' />
          <InputField type='text' label='Password' />
        </div>
        <h5 className='tw-text-heading-primary tw-font-bold tw-text-heading-s tw-mt-4 tw-mb-5'>
          Critical advanced settigns
        </h5>
        <h6 className='tw-text-heading-primary tw-font-bold tw-text-heading-s tw-mt-4 tw-mb-5'>
          <IoInformationCircleOutline className='tw-stroke-error/40 tw-fill-error/40 tw-inline-block tw--mt-1 tw-mr-2 tw-w-5 tw-h-5' />
          Limits
        </h6>
        <InputField
          type='number'
          label='Maximum execution time per launch (minutes)'
        />
        <InputField
          type='number'
          label='Maximum number of parallel executions'
        />
        <InputField type='number' label='Maximum number of retries' />
        <h6 className='tw-text-heading-primary tw-font-bold tw-text-heading-s tw-mt-4 tw-mb-5'>
          <IoInformationCircleOutline className='tw-stroke-error/40 tw-fill-error/40 tw-inline-block tw--mt-1 tw-mr-2 tw-w-5 tw-h-5' />
          Folder Management
        </h6>
        <div className='tw-flex  tw-space-x-4 tw-mb-5'>
          <SettingsOption
            active
            label='Delete all previous files at each launch *'
          />
          <SettingsOption label='Mix old and new files (add new data to already-existing dataset)' />
          <SettingsOption label='Create new files at each launch *' />
        </div>
        <div className='tw-rounded-xl tw-bg-highlight-muted tw-p-4 tw-mb-8 '>
          <div className=' tw-py-3 tw-px-6 tw-rounded-xl tw-flex tw-justify-between tw-text-warning tw-bg-warning-light'>
            <HiOutlineExclamationCircle className='tw-w-5 tw-h-5 tw-flex-none tw-mr-3 tw-mt-0.5' />
            <div className='tw-flex-1 tw-font-medium tw-text-body-l  child:tw-mb-6 last:child:tw-mb-0'>
              <p>
                *WARNING! Choosing this setting will make the Phantom{" "}
                <span className='tw-font-bold'>
                  start processing information from the beginning again each
                  time it launches.
                </span>
              </p>
            </div>
          </div>
        </div>
      </ExpandableSection>
    </>
  )
}

export function validateStepSettings(): StepStatus {
  return "valid"
}
