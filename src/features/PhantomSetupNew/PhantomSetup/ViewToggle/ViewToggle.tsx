import React from "react"
import { useSetupContext } from "../../../../context/setupContext"
import { Link, useSearchParams } from "react-router-dom"
import { classNames } from "../../../../utils"
import { viewModes } from "../../MOCK_DATA"

export const ViewToggle = () => {
  const { chosenView, setView } = useSetupContext()

  return (
    <div className="tw-text-right tw-mb-2 tw-text-redisize-ss">
      <span className="tw-text-redi-placeholder tw-mr-4">Settings view:</span>
      <div className="tw-inline-flex tw-rounded-md tw-border tw-font-medium tw-border-redi-primary">
        {viewModes.map(mode => {
          return (
            <button
              key={mode.slug}
              onClick={() => {
                setView({ view: mode.slug })
              }}
              type="button"
              className={classNames(
                "first-of-type:tw-rounded-l-md  tw-border-r tw-border-r-redi-primary last-of-type:tw-rounded-r-md last-of-type:tw-border-none tw-px-3  hover:tw-text-redi-primary",
                mode.slug === chosenView
                  ? "tw-text-redi-primary tw-bg-redi-light-bg"
                  : "tw-text-redi-primary-50"
              )}
            >
              {mode.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
