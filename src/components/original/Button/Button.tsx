import React from "react"
interface ButtonProps {
  icon?: JSX.Element
  label?: string
  trailingIcon?: boolean
  style?: "primary" | "secondary" | "tertiary"
  size?: "sm" | "base" | "lg"
  onClick?: () => void
}

export const Button = ({
  label,
  icon,
  style = "primary",
  trailingIcon = false,
  size = "base",
  ...props
}: ButtonProps) => {
  let content = "" as JSX.Element | string
  const sizeClasses = [] as string[]
  const typeClasses = [] as string[]
  let iconOnly = false
  let classes = [
    "tw-flex",
    "tw-justify-center",
    "tw-items-center",
    "tw-font-medium",
    "tw-rounded-full",
    "tw-border",
    "tw-border-solid",
    "tw-whitespace-nowrap",
    "tw-space-x-2",
    // "focus:tw-outline",
    // "focus:tw-outline-style-solid",
    // "focus:tw-outline-hover",
    "disabled:opacity-30",
  ]

  if (label && icon) {
    if (trailingIcon) {
      content = (
        <>
          {label}
          <span className="tw-w-0.5"></span>
          {icon}
        </>
      )
    } else {
      content = (
        <>
          {icon}
        <span className="tw-w-0.5"></span>
          {label}
        </>
      )
    }
  } else if (icon) {
    content = icon
    iconOnly = true
  } else if (label) {
    content = label
  } else {
    return null
  }

  if (size === "sm") {
    if (!iconOnly) {
      sizeClasses.push("tw-text-sm tw-px-4 tw-py-2")
    } else {
      sizeClasses.push(
        "tw-text-sm tw-w-[36px] tw-h-[36px] child:tw-w-3.5 child:tw-h-3.5"
      )
    }
  } else if (size === "lg") {
    if (!iconOnly) {
      sizeClasses.push("tw-text-lg tw-px-5 tw-py-2.5")
    } else {
      sizeClasses.push(
        "tw-text-sm tw-w-[48px] tw-h-[48px] child:tw-w-5 child:tw-h-5"
      )
    }
  } else {
    if (!iconOnly) {
      sizeClasses.push("tw-text-base tw-px-6 tw-py-2 ")
    } else {
      sizeClasses.push(
        "tw-text-sm tw-w-[42px] tw-h-[42px] child:tw-w-4 child:tw-h-4"
      )
    }
  }

  if (style === "secondary") {
    if (!iconOnly) {
      typeClasses.push("tw-text-highlight hover:tw-text-hover")
    } else {
      typeClasses.push(
        "child:tw-fill-highlight child:tw-stroke-highlight child:hover:tw-fill-hover child:hover:tw-stroke-hover"
      )
    }
    typeClasses.push("tw-border-highlight hover:tw-border-hover")
  } else if (style === "tertiary") {
    if (!iconOnly) {
      typeClasses.push("tw-text-highlight hover:tw-text-hover")
    } else {
      typeClasses.push(
        "child:tw-fill-highlight child:tw-stroke-highlight child:hover:tw-fill-hover child:hover:tw-stroke-hover"
      )
    }
    typeClasses.push("tw-border-transparent")
  } else {
    if (!iconOnly) {
      typeClasses.push("tw-text-primary tw-bg-highlight hover:tw-bg-hover")
    } else {
      typeClasses.push(
        "child:tw-fill-primary child:tw-stroke-primary tw-bg-highlight hover:tw-bg-hover"
      )
    }
    typeClasses.push("tw-border-highlight")
  }

  classes = classes.concat(typeClasses, sizeClasses)

  return (
    <button {...props} className={classes.join(" ")}>
      {content}
    </button>
  )
}
