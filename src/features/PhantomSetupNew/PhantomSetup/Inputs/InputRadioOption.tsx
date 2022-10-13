import React from "react"
import { Label } from "./Label"

interface InputRadioOptionProps
  extends React.AllHTMLAttributes<HTMLInputElement> {
  forName: string
  id: string
}

export const InputRadioOption = ({
  forName,
  children,
  id,
}: InputRadioOptionProps) => {
  const isString = typeof children === "string"
  const size = " tw-w-[14px] tw-h-[14px]" // duplicating it to have pointer events and focus work while using real and faux radiobutton
  return (
    <div className="tw-mb-2 last-of-type:tw-mb-0">
      <div className="tw-inline-flex tw-items-start ">
        <div className="tw-relative tw-inline-flex tw-items-center tw-mt-[5px]">
          <input
            className={`${size} tw-peer tw-relative  hover:tw-border-redi-primary tw-cursor-pointer tw-appearance-none tw--z-1 `}
            type="radio"
            name={forName}
            id={id}
          />
          <span
            className={`${size} tw-opacity-0 tw-absolute tw-rounded-full tw-pointer-events-none peer-checked:tw-bg-white peer-checked:tw-border peer-checked:tw-border-redi-primary peer-checked:tw-opacity-100`}
          >
            <span className="tw-rounded-full tw-bg-redi-primary tw-absolute tw-inset-[2px] tw-shadow-control-light-blue"></span>
          </span>
        </div>
        {isString ? (
          <Label labelSize="sm" htmlFor={id} className="tw-ml-4">
            {children}
          </Label>
        ) : (
          <label htmlFor={id} className="tw-ml-4">
            {children}
          </label>
        )}
      </div>
    </div>
  )
}
