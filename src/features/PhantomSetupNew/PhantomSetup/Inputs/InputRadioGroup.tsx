import React from "react"
import { InputRadioOption } from "./index"
interface InputRadioGroupProps extends React.AllHTMLAttributes<HTMLDivElement> {
  mappedName: string
  children: React.ReactElement | React.ReactElement[]
}
export const InputRadioGroup = ({
  mappedName,
  className: passedStyles,
  children,
}: InputRadioGroupProps) => {
  return (
    <div
      className={` ${passedStyles || ""}`}
    >
      {React.Children.map(children, (child, index) => {
        return (
          <>
            {React.cloneElement(child, {
              forName: mappedName,
              id: mappedName + index,
            })}
          </>
        )
      })}
    </div>
  )
}
