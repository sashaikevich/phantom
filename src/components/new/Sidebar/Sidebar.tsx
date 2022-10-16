import React from "react"
import { BiLeftArrowAlt } from "react-icons/bi"
import { IoDocument } from "react-icons/io5"
import { FaPlayCircle } from "react-icons/fa"
import { BiCodeCurly } from "react-icons/bi"
import { Link } from "react-router-dom"
import { SidebarLink } from "./SidebarLink"

const flowMenu = [
  "Search",
  ["Cookie"],
  "Automation",
  [
    "Automation",
    "Outreach account",
    "Outreach limits",
    "Extraction limits",
    "Critical execution limits",
    "Data management",
  ],
  "Proxies",
  "Notifications",
]

export const Sidebar = () => {
  return (
    <aside className="tw-relative tw-bg-redi-light-bg tw-bsis tw-flex tw-border-r tw-border-r-solid tw-border-r-redi-primary-dark/30 ">
      <div className="tw-mr-0 tw-ml-auto tw-px-4 tw-py-8 tw-w-full tw-max-w-[250px] tw-sticky tw-top-0 ">
      {/* tw-right-[75%] */}
        <span className="tw-flex tw-items-center tw-relative tw-text-redi-primary-50 tw-mb-8">
          <BiLeftArrowAlt className="tw-fill-redi-primary-50 tw-absolute tw-right-full tw-w-5 tw-h-5 hover:tw-fill-redi-primary" />
          back
        </span>
        <h6 className="tw-font-bold tw-text-redi-primary-dark">
          New Flow Setup
        </h6>
        {flowMenu.map(item => {
          if (typeof item === "string") {
            return (
              <SidebarLink key={item} variant="section">
                {item}
              </SidebarLink>
            )
          } else {
            return item.map(item => {
              return (
                <SidebarLink variant="subsection" key={item}>
                  {item}
                </SidebarLink>
              )
            })
          }
        })}
        <h6 className="tw-font-bold tw-text-redi-primary-dark tw-mt-16 tw-mb-5">
          Help With Flow
        </h6>
        <SidebarLink variant="resource">
          <IoDocument className="tw-mr-3" />
          Flow overview page
        </SidebarLink>
        <SidebarLink variant="resource">
          <FaPlayCircle className="tw-mr-3" />
          Setup tutorial
        </SidebarLink>
        <SidebarLink variant="resource">
          <BiCodeCurly className="tw-mr-3" />
          API dics
        </SidebarLink>
      </div>
    </aside>
  )
}
