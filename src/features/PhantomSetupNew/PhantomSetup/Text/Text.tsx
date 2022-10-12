import React from "react"
import { classNames } from "../../../../utils"

type Element = "h1" | "h2" | "h3" | "p" | "span"

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "help" | "label-lg" | "label-md" | "label-sm" | "section-title"
  children: React.ReactNode
  el?: Element
}

export const Text = ({
  variant,
  children,
  el,
  className: overrides = "",
}: TextProps) => {
  let classes = "" as string

  switch (variant) {
    case "label-lg": {
      classes = "tw-text-redi-dark tw-text-redi-mm tw-font-semibold"
      break
    }
    case "label-md": {
      classes = "tw-text-redi-dark tw-text-redi-sm tw-font-semibold"
      break
    }
    case "label-sm": {
      classes =
        "tw-text-redi-dark tw-text-redi-sm tw-font-bold tw-text-redi-medium"
      break
    }
    case "section-title": {
      classes =
        "tw-text-redi-primary-dark tw-font-semibold tw-text-redi-heading-mm"
      break
    }
    case "help": {
      classes = " tw-font-semibold tw-text-redi-s"
      break
    }
    default: {
      classes = "tw-italic tw-text-redi-medium"
      break
    }
  }

  const Component = el || "span"
  // uncomment to see what's not styled with <Text /> on the page
  // return <></>
  return (
    <Component className={classNames(classes, overrides)}>{children}</Component>
  )
}
