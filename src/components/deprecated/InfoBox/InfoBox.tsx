import { IoInformationCircleOutline } from "react-icons/io5"
import React from "react"
export const InfoBox = ({
  children,
  className: passedStyles,
}: React.PropsWithChildren & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`tw-rounded-xl tw-p-4 tw-flex tw-justify-between tw-text-info tw-bg-info-light ${
        passedStyles || ""
      }`}
    >
      <IoInformationCircleOutline className='tw-w-5 tw-h-5 tw-flex-none tw-mr-3 tw-mt-0.5' />
      <div className='tw-flex-1 tw-font-medium tw-text-body-l child:tw-mb-6 last:child:tw-mb-0'>
        {children}
      </div>
    </div>
  )
}
