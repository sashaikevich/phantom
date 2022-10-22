import React, { useEffect, useRef, useState } from "react"
import { classNames } from "../../../../utils"
import { Label } from "./index"
import { useSetupContext } from "../../../../context/setupContext"

interface InputRangeType {
  min: number
  max: number
  mappedName: string
  width?: "sm" | "md" | "lg" | "full"
  warning?: true
  initialVal?: number
  showLabels?: boolean
  numSteps?: number
  labelLow?: string
  labelHigh?: string
  showTooltip?: boolean
  tooltipOverride?: (v: number | null) => React.ReactNode
}

export const InputRange = ({
  width = "sm",
  warning,
  min,
  max,
  initialVal = min,
  showLabels = false,
  numSteps = 10,
  labelLow,
  labelHigh,
  mappedName,
  showTooltip = true,
  tooltipOverride = val => val,
}: InputRangeType) => {
  const { updateField, data } = useSetupContext()

  const rangeVal = data[mappedName].value
  // normalize to bounds (important when another field updates min/max of this range)
  useEffect(() => {
    if (rangeVal < min) {
      updateField(mappedName, min)
    }
    if (rangeVal > max) {
      updateField(mappedName, max)
    }
  }, [rangeVal, min, max])

  const [isActive, setIsActive] = useState(false)
  const rangeRef = useRef<HTMLInputElement>(null)
  const tooltipRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (rangeVal === null) return
    const progress = (rangeVal - min) / (max - min)
    // color the inputed range part of the bar
    if (rangeRef.current) {
      rangeRef.current.style.backgroundSize = `${Math.floor(
        progress * 100
      )}% 100%`
    }

    // calc the placement of the tooltip
    if (rangeRef.current && tooltipRef.current) {
      /*
      the width of the thumb is not equal to the full range, since the thumb stops when it hits
      the bounds of the range. So it starts from 1/2 the thumb's width (16px) from the left edge, and 
      ends 1/2 the thumb's width from the right edge
      */
      const THUMB_WIDTH = 16
      const effectiveTravelRange =
        rangeRef.current.getBoundingClientRect().width - THUMB_WIDTH
      const leftPos = effectiveTravelRange * progress
      tooltipRef.current.style.left = `${leftPos + THUMB_WIDTH / 2}px`
    }
  }, [rangeVal, min, max])

  const rangeWidth = {
    sm: "tw-w-24",
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
            if (rangeRef.current) rangeRef.current.focus()
            updateField(mappedName, min)
          }}
        >
          {labelLow || min}
        </Label>
      )}

      <div
        className={classNames(
          "custom-range",
          warning ? "custom-range-warning" : "custom-range-regular",
          "tw-relative",
          rangeWidth[width]
        )}
      >
        <input
          type="range"
          min={min}
          max={max}
          step={(max - min) / numSteps || undefined}
          ref={rangeRef}
          // value={data[mappedName].value || min}
          value={data[mappedName].value}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          onPointerEnter={() => setIsActive(true)}
          onPointerLeave={() => setIsActive(false)}
          onChange={e => {
            // to get rid of decimal values caused by step devisions (0-100 vs 1-100)
            updateField(mappedName, parseInt(e.target.value))
          }}
          className="no-rding tw-peer"
        />
        {showTooltip && (
          <div
            ref={tooltipRef}
            className={classNames(
              isActive ? "tw-opacity-100" : "tw-opacity-0",
              warning ? "tw-bg-redi-danger-bg" : "tw-bg-redi-light-bg",
              "tw-rounded-md tw-pointer-events-none tw-shadow-xl tw-text-center tw-absolute tw-px-3 tw-py-1 tw-bottom-full tw-mb-1 tw-translate-x-[-50%]"
            )}
          >
            <span
              className={classNames(
                warning ? "tw-bg-redi-danger-bg" : "tw-bg-redi-light-bg",
                "tw-w-2 tw-h-2 tw-block tw-top-full tw-absolute tw-rotate-45 tw--mt-1 tw-left-[50%] tw-translate-x-[-50%]"
              )}
            ></span>
            <span
              className={classNames(
                warning ? "tw-text-redi-danger" : "tw-text-redi-primary",
                "tw-font-semibold"
              )}
            >
              {tooltipOverride(rangeVal)}
            </span>
          </div>
        )}
      </div>

      {showLabels && (
        <Label
          labelSize="sm"
          className="tw-ml-4"
          onClick={() => {
            if (rangeRef.current) rangeRef.current.focus()
            updateField(mappedName, max)
          }}
        >
          {labelHigh || max}
        </Label>
      )}
    </div>
  )
}
