import React, { useEffect, useRef, useState } from "react"
import { classNames } from "../../../../utils"
import { Label } from "."

interface InputRangeType {
  size?: "sm" | "md" | "lg" | "full"
  warning?: true
  min: number
  max: number
  numSteps?: number
  showLabels?: boolean
  showValue?: boolean
  labelLow?: string
  labelHigh?: string
}

export const InputRange = ({
  size = "sm",
  warning,
  min,
  max,
  showLabels = false,
  showValue = true,
  labelLow,
  labelHigh,
  numSteps = 10,
}: InputRangeType) => {
  const [rangeVal, setRangeVal] = useState(2)
  const rangeRef = useRef<HTMLInputElement>(null)
  const tooltipRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const progress = ((rangeVal - min) / (max - min)) * 100
    if (rangeRef.current) {
      rangeRef.current.style.backgroundSize = `${progress}% 100%`
    }
  }, [rangeVal])

  const rangeWidth = {
    sm: "tw-w-28",
    md: "tw-w-64",
    lg: "tw-w-96",
    full: "tw-w-full",
  }

  return (
    <div className="tw-flex tw-items-center">
      {showLabels && (
        <Label
          labelSize="sm"
          className="tw-mr-4"
          onClick={() => {
            setRangeVal(min)
          }}
        >
          {labelLow || min}
        </Label>
      )}
      <div
        className={`custom-range ${
          warning ? "custom-range-warning" : "custom-range-regular"
        } tw-relative ${rangeWidth[size]}`}
      >
        <input
          type="range"
          min={min}
          max={max}
          step={(max - min) / numSteps || undefined}
          ref={rangeRef}
          onChange={e => {
            setRangeVal(parseInt(e.target.value))
          }}
          value={rangeVal}
          className="no-rding tw-peer"
        />
        <div
        ref={tooltipRef}
          className={`${
            warning ? "tw-bg-redi-danger-bg" : "tw-bg-redi-light-bg"
          } tw-rounded-md  tw-shadow-xl tw-text-center tw-absolute tw-px-3 tw-py-1 tw-bottom-full tw-mb-1`}
        >
          <span
            className={`${
              warning ? "tw-bg-redi-danger-bg" : "tw-bg-redi-light-bg"
            } tw-w-2 tw-h-2 tw-block tw-top-full tw-absolute tw-rotate-45 tw--mt-1 tw-left-[50%] tw-translate-x-[-50%]`}
          ></span>
          {rangeVal}
        </div>
      </div>
      {showLabels && (
        <Label
          labelSize="sm"
          className="tw-ml-4"
          onClick={() => {
            setRangeVal(max)
          }}
        >
          {labelHigh || max}
        </Label>
      )}
    </div>
  )
}
