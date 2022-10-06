import React from "react"
import { InfoBox } from "../../../components/original/InfoBox"
import { IoInformationCircleOutline } from "react-icons/io5"
import { StepStatus } from "../data"

export const StepConnect = () => {
  return (
    <>
      <InfoBox className="tw-mb-8">
        <p>
          To automate actions on your behalf, PhantomBuster connects to your
          LinkedIn account using your session cookie.
        </p>
        <p>
          Every time you log into LinkedIn on your browser, a new cookie is
          created for that "session". If you log out or are disconnected, the
          cookie expires.
        </p>
      </InfoBox>
      <div className='form-wrapper'>
        <form>
          <div className='tw-flex tw-items-center tw-mb-2'>
            <label className='tw-tex-body-primary tw-text-body-l tw-font-bold'>
              Your LinkedIn session cookie
            </label>
            <a href='#'>
              <IoInformationCircleOutline className='tw-w-4 tw-h-4 tw-opacity-50 tw-ml-1.5' />
            </a>
          </div>
          <div className='tw-relative tw-flex tw-items-center'>
            <input
              required
              className='tw-form-input tw-w-full tw-py-3
                hover:tw-border-highlight 
                hover:tw-ring hover:tw-ring-highlight/20 
                focus:tw-border-highlight focus:tw-ring-highlight/20 tw-border-info-light'
              type='text'
              name='sessionCookie'
              placeholder='Paste your session cookie here'
            />
            <button
              type='button'
              className='tw-absolute tw-bg-highlight tw-text-primary
                tw-whitespace-nowrap tw-right-1 tw-font-medium 
                tw-rounded-[10px] tw-py-2 tw-px-4'
            >
              Connect to LinkedIn
            </button>
          </div>
          <span className='tw-text-body-s tw-font-medium tw-text-error'>
            This field is required
          </span>
        </form>
      </div>
      <div className='tw-text-body-s tw-text-medium tw-text-body-secondary'>
        <p className='tw-my-1.5'>
          If you have PhantomBuster's extension installed, just click on the
          "Connect to LinkedIn" button.
        </p>
        <p>
          Otherwise, you can find your cookie manually (the LinkedIn cookie's
          name is "li_at").
        </p>
      </div>
    </>
  )
}

export function validateStepConnect(): StepStatus {
  return "valid"
}
