import React from "react"
import { Label } from "."
import { uid } from "../../../../utils"

interface InputToggleProps extends React.HTMLAttributes<HTMLInputElement> {
  type?: "default" | "danger"
  label?: string
  forName?: string
}

export const InputToggle = ({
  type = "default",
  className: passedStyles,
  label,
  forName = uid(),
  ...props
}: InputToggleProps) => {
  const size = " tw-w-[34px] tw-h-[18px]" // duplicating it to have pointer events and focus work while using real and faux checkbox
  return (
    <>
      <div className={`tw-inline-flex tw-items-start ${passedStyles || ""}`}>
        <div className={`tw-relative tw-inline-flex tw-items-center tw-mt-[3px]`}>
          {/* display the input, but z-index it behind, and style its shape the same way as
           the faux input to hide the native checkmark, but keep the tab focus */}
          <input
            {...props}
            type="checkbox"
            id={forName}
            className={`${size} tw-absolute tw--z-1  tw-rounded-full tw-peer tw-cursor-pointer`}
          />
          <div
            className={`${size} tw-relative tw-pointer-events-none tw-bg-white  tw-rounded-full tw-border tw-border-redi-borders peer-checked:tw-bg-redi-primary peer-checked:tw-border-redi-primary  peer-checked:tw-border-redi-primary-dark/20`}
          ></div>
          <span className="tw-absolute tw-pointer-events-none tw-h-[14px] tw-w-[14px] tw-block tw-bg-redi-borders tw-border-2 tw-border-white tw-rounded-full  tw-left-[2px] tw-shadow-control-grey peer-checked:tw-shadow-control-blue peer-checked:tw-right-[2px] peer-checked:tw-left-auto peer-checked:tw-bg-redi-primary  "></span>
        </div>
        {label && (
          <Label className="tw-ml-4" labelSize="sm" htmlFor={forName}>
            {label}
          </Label>
        )}
      </div>
    </>
  )
}
