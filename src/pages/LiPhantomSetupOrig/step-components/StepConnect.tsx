import React from "react"
import { InfoBox } from "../../../components/original/InfoBox"
import { StepStatus } from "../data"
export const StepConnect = () => {
  return (
    <>
      <InfoBox>
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
          <input
            required
            className='tw-form-input mt-1 block tw-rounded-md'
            type='text'
            name='sessionCookie'
            placeholder='Paste your session cookie here'
          />
          <span>This field is required</span>
          <button>Connect to LinkedIn</button>
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

export function validateStepConnect():StepStatus {
  return "valid"
}