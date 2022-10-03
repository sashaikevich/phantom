import React from "react"
import { HiDotsHorizontal, HiOutlineX } from "react-icons/hi"
import { Button } from "../../Button"

interface HeaderProps {
  title: string
  icon: JSX.Element
}

export const Header = ({ title, icon }: HeaderProps) => {
  return (
    <header className='tw-flex md:tw-items-center tw-flex-col md:tw-flex-row md:tw-justify-between'>
      <div className='tw-flex '>
        <div className='tw-flex tw-items-center tw-justify-center tw-h-12 tw-w-12 tw-rounded-full tw-border tw-border-solid tw-border-white tw-bg-gradient-to-tl tw-from-[#f5f1ef] tw-to-white child:tw-w-6 child:tw-h-6'>
          {icon}
        </div>
        <div className='tw-ml-6'>
          <p className='tw-text-body-m'>Setup</p>
          <h2 className='tw-text-heading-m tw-font-bold'>{title}</h2>
        </div>
      </div>
      <div className='controls tw-flex tw-space-x-4 tw-items-center'>
        <button className='tw-px-1'>
          {
            <HiDotsHorizontal className='tw-fill-highlight tw-stroke-highlight' />
          }
        </button>
        <Button size='base' style='secondary' label='Save &amp; close' />
        <Button size='base' style='secondary' icon={<HiOutlineX />} />
      </div>
    </header>
  )
}
