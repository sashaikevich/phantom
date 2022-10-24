import React from "react"
import { Link } from "react-router-dom"
import { HiOutlineExternalLink } from "react-icons/hi"
import { Text } from "../Text"
import { classNames } from "../../../utils"

export interface HelpLinkProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
  url?: string | undefined
}
export const HelpLink = ({
  text,
  url,
  className: passedStyles = "",
}: HelpLinkProps) => {
  return (
    <span
      className={classNames(
        "tw-group tw-relative tw-inline-block  tw-text-redi-primary-50 tw-underline hover:tw-no-underline",
        passedStyles
      )}
    >
      <Link target={"_blank"} to={url || "#"}>
        <Text variant="help">{text}</Text>
        <span className="tw-absolute tw-left-[100%] tw-top-0.5 tw-opacity-0  tw--ml-3 group-hover:tw-opacity-100 group-hover:tw-ml-1">
          <HiOutlineExternalLink />
        </span>
      </Link>
    </span>
  )
}
