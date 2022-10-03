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
    "tw-whitespace-norap",
    //  hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80"
  ]

  if (label && icon) {
    if (trailingIcon) {
      content = [label, icon].join("")
    } else {
      content = [icon, label].join("")
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
      sizeClasses.push("tw-text-base tw-px-5 tw-py-2")
    } else {
      sizeClasses.push(
        "tw-text-sm tw-w-[42px] tw-h-[42px] child:tw-w-4 child:tw-h-4"
      )
    }
  }

  if (style === "secondary") {
    if (!iconOnly) {
      typeClasses.push("tw-text-highlight")
    } else {
      typeClasses.push("child:tw-fill-highlight child:tw-stroke-highlight")
    }
    typeClasses.push("tw-border-highlight")
  } else if (style === "tertiary") {
    if (!iconOnly) {
      typeClasses.push("tw-text-highlight")
    } else {
      typeClasses.push("child:tw-fill-highlight child:tw-stroke-highlight")
    }
    typeClasses.push("tw-border-transparent")
  } else {
    if (!iconOnly) {
      typeClasses.push("tw-text-primary tw-bg-highlight")
    } else {
      typeClasses.push("child:tw-fill-primary child:tw-stroke-primary tw-bg-highlight")
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
