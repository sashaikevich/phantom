import React from "react"
import { Label } from "./Label"
import { classNames } from "../../../../utils"
import { useSetupContext } from "../../../../context/setupContext"

interface InputRadioOptionProps
  extends React.AllHTMLAttributes<HTMLInputElement> {
  value: string | number
  forName?: string
  id?: string
  inputStyleOverride?: string
  warning?: true
}

export const InputRadioOption = ({
  forName,
  children,
  id,
  warning,
  value,
  inputStyleOverride = "",
}: InputRadioOptionProps) => {
  const { data, updateField } = useSetupContext()

  const isString = typeof children === "string"
  const size = " tw-w-[14px] tw-h-[14px]" // duplicating it to have pointer events and focus work while using real and faux radiobutton
  return (
    <div className="tw-mb-2 last-of-type:tw-mb-0">
      <div className="tw-inline-flex tw-items-start ">
        <div
          className={classNames(
            "tw-relative tw-inline-flex tw-items-center tw-mt-[5px]",
            inputStyleOverride
          )}
        >
          <input
            className={classNames(
              size,
              "tw-peer tw-relative",
              warning
                ? "hover:tw-border-redi-danger"
                : "hover:tw-border-redi-primary",
              " tw-cursor-pointer tw-appearance-none tw--z-1"
            )}
            type="radio"
            name={forName}
            value={value}
            onChange={e => {
              updateField(forName!, e.target.value)
            }}
            id={id}
            checked={data[forName!].value === value}
          />
          <span
            className={`${size} tw-opacity-0 tw-absolute tw-rounded-full tw-pointer-events-none peer-checked:tw-bg-white peer-checked:tw-border ${
              warning
                ? "peer-checked:tw-border-redi-danger"
                : "peer-checked:tw-border-redi-primary"
            } peer-checked:tw-opacity-100`}
          >
            <span
              className={`tw-rounded-full ${
                warning
                  ? "tw-bg-redi-danger tw-shadow-control-light-red"
                  : "tw-bg-redi-primary tw-shadow-control-light-blue"
              }  tw-absolute tw-inset-[2px] `}
            ></span>
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
