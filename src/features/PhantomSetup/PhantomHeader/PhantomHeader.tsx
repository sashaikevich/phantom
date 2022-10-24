import React from "react"
import { Link } from "react-router-dom"
import { Text } from "../Text"
import { BiLeftArrowAlt } from "react-icons/bi"

export const PhantomHeader = () => {
  return (
    <div className="tw-flex tw-space-x-7 tw-mb-10">
      <div className="tw-basis-[54%] tw-pr-1.5">
        <div className="tw-relative">
          <h2 className="tw-font-bold tw-text-redisize-heading-l tw-text-redi-dark tw-mb-8">
            LinkedIn Search to Lead Connection
          </h2>
          <span className="tw-absolute tw-right-full tw-mr-2 tw--top-[0.1rem]">
            <Link to="#" className="no-ring">
              <BiLeftArrowAlt className="tw-fill-redi-primary-50  tw-w-8 tw-h-8 hover:tw-fill-redi-primary" />
            </Link>
          </span>
        </div>
        <Text el="p">
          Extract LinkedIn users from a search or group, auto connect with them,
          and keep track of who accepts your request
        </Text>
      </div>
      <div className="summary tw-p-6 tw-bg-redi-light-bg tw-text-redi-primary-dark tw-rounded-lg tw-self-start tw-basis-[45%] tw-text-xs tw-opacity-50">
        Later state (incomplete | error | paused) can go here, maybe some quick
        statistics (2h30mins or 60 contacts reached, etc.) Possibly quick links
        to duplicate the phantom, launch it/pause it Inputtoggle, share
        settings, etc.
      </div>
    </div>
  )
}
