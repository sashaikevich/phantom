import React from "react"
import { classNames } from "../../../utils"
import { HiOutlineExternalLink } from "react-icons/hi"

interface SidebarLinkProps {
  children: React.ReactNode
  variant: "section" | "subsection" | "resource"
}

export const SidebarLink = ({
  children,
  variant,
}: SidebarLinkProps) => {
  const sharedClasses =
    "tw-inline-flex tw-relative tw-text-redi-medium tw-my-3 tw-cursor-pointer hover:tw-underline"
  const sectionClasses = "tw-font-bold"
  const subsectionClasses = "tw-pl-3 tw-font-semibold tw-text-sm"
  const resourceClasses = "tw-items-center tw-space-x-4 tw-pl-0"
  return (
    <div>
      <span
        className={classNames(
          "tw-group",
          sharedClasses,
          variant === "section" && sectionClasses,
          (variant === "subsection" || variant === "resource") && subsectionClasses,
          variant === "resource" && resourceClasses
        )}
      >
        {children}
        {variant === "resource" && (
          <span className="tw-absolute tw-left-[100%] tw-top-0.5 tw-opacity-0  tw--ml-3 group-hover:tw-opacity-100 group-hover:tw-ml-1">
            <HiOutlineExternalLink className="" />
          </span>
        )}
      </span>
    </div>
  )
}
