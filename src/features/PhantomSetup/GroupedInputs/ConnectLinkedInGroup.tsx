import React from "react"
import { InputText } from "../Inputs"
import { HelpLink } from "../HelpLink"

interface ConnectLinkedInGroup {
  isWitoutPlugin?: boolean
}
export const ConnectLinkedInGroup = ({
  isWitoutPlugin = true,
}: ConnectLinkedInGroup) => {
  return (
    <>
      <div className="tw-flex tw-w-full tw-items-end">
        <InputText
          required={true}
          mappedName="linkedInCookie"
          className="tw-w-full tw-mb-0"
          label="Connect to your LinkedIn with a cookie"
        />
        {isWitoutPlugin && (
          <>
            <span className="tw-mx-4 tw-mb-2 tw-text-redi-placeholder">or</span>
            <a
              href="#"
              onClick={e => e.preventDefault()}
              className="tw-block tw-w-full tw-bg-redi-light-bg tw-text tw-rounded-xl tw-text-redi-primary hover:tw-text-redi-primary hover:tw-bg-redi-primary/10 tw-border tw-border-redi-primary tw-text-center tw-text-redisize-mm tw-font-semibold tw-pb-1.5 tw-pt-2"
            >
              Auto-connect with our browser extension
            </a>
          </>
        )}
      </div>
      <HelpLink text="Where do I find it?" className="tw-mt-0" />
    </>
  )
}
