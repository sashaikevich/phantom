import React from "react"
import { Label } from "./Label"
import { classNames } from "../../../utils"
import { PhantomSetupKeys } from "../d"
import { useSetupContext } from "../../../contexts/setupContext"

interface InputRadioOptionProps
  extends React.AllHTMLAttributes<HTMLInputElement> {
  value: string | number
  forName?: PhantomSetupKeys
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

  // forName and ID are always added when Group clones it. Asserted as existing below
  if (forName === undefined || id === undefined) {
    throw "missing forName or id"
  }

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
            // forName and ID are always added when InputRadioGroup clones them
            checked={data[forName!] === value}
            onChange={e => {
              updateField(forName!, e.target.value)
            }}
            id={id}
          />
          <span
            className={`${size} tw-opacity-0 tw-absolute tw-rounded-full tw-pointer-events-none peer-checked:tw-bg-white peer-checked:tw-border ${
              warning
                ? "peer-checked:tw-border-redi-danger"
                : "peer-checked:tw-border-redi-primary"
            } peer-checked:tw-opacity-100 tw-transition-all tw-ease-in-out`}
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
