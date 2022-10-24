import React from "react"
import { useViewContext } from "../../../contexts/viewContext"
import { classNames } from "../../../utils"
import { ViewModeType } from "../d"

export const ViewToggle = ({ viewModes }: { viewModes: ViewModeType[] }) => {
  const { activeView, changeView } = useViewContext()

  return (
    <div className="tw-text-right tw-mb-2 tw-text-redisize-s">
      <span className="tw-text-redi-placeholder tw-mr-4">Settings view:</span>
      <div className="tw-inline-flex tw-rounded-md tw-border tw-font-medium tw-border-redi-primary">
        {viewModes.map(mode => {
          return (
            <button
              key={mode.slug}
              onClick={() => {
                changeView(mode.slug)
              }}
              type="button"
              className={classNames(
                "first-of-type:tw-rounded-l-md  tw-border-r tw-border-r-redi-primary last-of-type:tw-rounded-r-md last-of-type:tw-border-none tw-px-3  hover:tw-text-redi-primary",
                mode.slug === activeView
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
