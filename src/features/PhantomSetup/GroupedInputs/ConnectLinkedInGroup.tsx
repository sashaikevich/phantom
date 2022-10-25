import React from "react"
import { InputFieldText, InputText, Label } from "../Inputs"
import { HelpLink } from "../HelpLink"

interface ConnectLinkedInGroupType {
  isWitoutPlugin?: boolean
}
export const ConnectLinkedInGroup = ({
  isWitoutPlugin = true,
}: ConnectLinkedInGroupType) => {
  return (
    <>
        <Label htmlFor="linkedInCookie" className="tw-mb-1.5">Connect to your LinkedIn with a cookie</Label>
      <div className="tw-flex tw-w-full tw-items-end">
        <InputFieldText mappedName="linkedInCookie" id="linkedInCookie" required className="tw-w-full tw-mb-0 xl:tw-flex-shrink"/>
        {isWitoutPlugin && (
          <>
            <span className="tw-mx-4 tw-mb-2 tw-text-redi-placeholder">or</span>
            <a
              href="#"
              onClick={e => e.preventDefault()}
              className="tw-block tw-w-full tw-bg-redi-light-bg tw-rounded-xl tw-text-redi-primary hover:tw-text-redi-primary hover:tw-bg-redi-primary/10 tw-border tw-border-redi-primary tw-text-center tw-text-redisize-m xl:tw-text-redisize-mm tw-font-semibold tw-pb-2 xl:tw-pb-1.5 tw-pt-2 tw-whitespace-nowrap tw-px-5"
            >
              Auto-connect with{" "}
              <span className="tw-hidden xl:tw-inline">our browser </span>
              extension
            </a>
          </>
        )}
      </div>
      <HelpLink text="Where do I find it?" className="tw-mt-0" />
    </>
  )
}
