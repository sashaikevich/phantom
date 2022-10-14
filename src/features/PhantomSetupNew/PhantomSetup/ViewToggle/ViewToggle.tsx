import React from "react"

export const ViewToggle = () => {
  return (
    <div className="tw-text-right tw-mb-2">
      {/* TODO: put this state into url later for easy sharing, consider wrapping in its own component */}
      <span className="tw-text-redi-placeholder tw-mr-4">Settings view:</span>
      <div className="tw-inline-flex tw-rounded-md tw-border tw-font-medium tw-border-redi-primary">
        <button
          type="button"
          className="tw-rounded-l-md tw-px-3 tw-text-redi-primary tw-bg-redi-light-bg hover:tw-text-redi-primary"
        >
          Quick Start
        </button>
        <button
          type="button"
          className="tw-px-3 tw-border-l-redi-primary tw-border-l tw-border-r tw-border-r-redi-primary  tw-text-redi-primary-50 hover:tw-text-redi-primary"
        >
          All Settings
        </button>
        <button
          type="button"
          className="tw-rounded-r-md tw-px-3 tw-text-redi-primary-50 hover:tw-text-redi-primary"
        >
          JSON
        </button>
      </div>
    </div>
  )
}
