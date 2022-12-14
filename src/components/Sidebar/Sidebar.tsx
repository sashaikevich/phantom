import React from "react"
import { SidebarLink } from "./SidebarLink"
import { BiLeftArrowAlt, BiSupport } from "react-icons/bi"
import { IoDocument } from "react-icons/io5"
import { GoCode } from "react-icons/go"
import { BsFillPlayCircleFill } from "react-icons/bs"
import { useSetupContext } from "../../contexts/setupContext"
import { useViewContext } from "../../contexts/viewContext"

import { Link } from "react-router-dom"

export const Sidebar = () => {
  const { flatMenu } = useSetupContext()
  const { activeView } = useViewContext()

  return (
    <aside className="tw-relative tw-bg-redi-light-bg tw-bsis tw-flex tw-border-r tw-border-r-solid tw-border-r-redi-primary-dark/30 ">
      <nav className="tw-mr-0 tw-ml-auto tw-px-4 tw-py-8 tw-w-full tw-max-w-[210px] xl:tw-max-w-[250px] tw-sticky tw-top-0 tw-self-start ">
        <Link
          to="#"
          onClick={e => e.preventDefault()}
          className="no-ring tw-flex tw-items-center tw-relative tw-text-redi-primary-50 tw-mb-8 tw-group hover:hover:tw-text-redi-primary"
        >
          <BiLeftArrowAlt className="tw-fill-redi-primary-50 tw-absolute tw-right-full tw-w-5 tw-h-5 group-hover:tw-fill-redi-primary" />
          back
        </Link>

        <h6 className="tw-font-bold tw-text-redi-primary-dark">
          Flow Settings
        </h6>
        <ul>
          {flatMenu.map(item => {
            return (
              <SidebarLink
                isDisabled={!item.visibleIn.includes(activeView)}
                variant={item.level > 0 ? "subsection" : "section"}
                key={item.label}
              >
                {item.label}
              </SidebarLink>
            )
          })}
        </ul>

        <h6 className="tw-font-bold tw-text-redi-primary-dark tw-mt-16 tw-mb-5">
          Help With Flow
        </h6>
        <SidebarLink variant="resource">
          <IoDocument className="tw-mr-3" />
          Flow overview page
        </SidebarLink>
        <SidebarLink variant="resource">
          <BsFillPlayCircleFill className="tw-mr-3" />
          Setup tutorial
        </SidebarLink>
        <SidebarLink variant="resource">
          <GoCode className="tw-mr-3" />
          API dics
        </SidebarLink>
        <SidebarLink variant="resource">
          <BiSupport className="tw-mr-3" />
          Contact Support
        </SidebarLink>
      </nav>
    </aside>
  )
}
