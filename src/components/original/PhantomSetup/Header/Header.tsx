import React from 'react'
import { HiDotsHorizontal, HiOutlineX } from "react-icons/hi"

interface HeaderProps {
  title: string
  icon: JSX.Element
}

export const Header = ({ title, icon }: HeaderProps) => {
  return (
    <header className='tw-flex'>
      {icon}
      <div>
        <p>setup</p>
        <h2>{title}</h2>
      </div>
      <div className='controls'>
        <HiDotsHorizontal className='json-toggle' />
        <div className='save-close'>Save &amp; Close</div>
        <HiOutlineX className='close' />
      </div>
    </header>
  )
}
