import React from "react"
import { Label } from "./index"
import { uid, classNames } from "../../../utils"
import { PhantomSetupKeys } from "../d"
import { useSetupContext } from "../../../contexts/setupContext"

interface InputToggleProps extends React.HTMLAttributes<HTMLInputElement> {
  mappedName: PhantomSetupKeys
  // type?: "default" | "danger"
  label?: string
  forName?: string
}

export const InputToggle = ({
  // type = "default",
  className: passedStyles = "",
  label,
  forName = uid(),
  mappedName,
  ...props
}: InputToggleProps) => {
  const { updateField, data } = useSetupContext()
  const size = " tw-w-[34px] tw-h-[18px]" // duplicating it to have pointer events and focus work while using real and faux checkbox
  return (
    <>
      <div
        className={classNames("tw-inline-flex tw-items-start", passedStyles)}
      >
        <div
          className={`tw-relative tw-inline-flex tw-items-center tw-mt-[3px]`}
        >
          {/* display the input, but z-index it behind, and style its shape the same way as
           the faux input to hide the native checkmark, but keep the tab focus */}
          <input
            {...props}
            type="checkbox"
            id={forName}
            value={data[mappedName] as string}
            checked={data[mappedName] as boolean}
            onChange={e => {
              updateField(mappedName, e.target.checked)
            }}
            className={classNames(
              size,
              "tw-absolute tw--z-1  tw-rounded-full tw-peer tw-cursor-pointer"
            )}
          />
          <div
            className={classNames(
              size,
              "tw-relative tw-pointer-events-none tw-bg-white  tw-rounded-full tw-border tw-border-redi-borders peer-checked:tw-bg-redi-primary peer-checked:tw-border-redi-primary  peer-checked:tw-border-redi-primary-dark/20 tw-transition tw-ease-in-out"
            )}
          ></div>
          <span className="tw-absolute tw-pointer-events-none tw-h-[14px] tw-w-[14px] tw-block tw-bg-redi-borders tw-border-2 tw-border-white tw-rounded-full  tw-left-[2px] tw-shadow-control-grey peer-checked:tw-shadow-control-blue peer-checked:tw-right-[2px] peer-checked:tw-left-auto peer-checked:tw-bg-redi-primary tw-transition-all tw-ease-in-out "></span>
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
