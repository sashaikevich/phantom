import React from "react"
import { InputRadioOption } from "."
interface InputRadioGroupProps extends React.AllHTMLAttributes<HTMLDivElement> {
  forName: string
  children: React.ReactElement | React.ReactElement[]
}
export const InputRadioGroup = ({
  forName,
  className: passedStyles,
  children,
}: InputRadioGroupProps) => {
  return (
    <div className={` ${passedStyles || ""}`}>
      {React.Children.map(children, (child, index) => {
        return (
          <>
            {React.cloneElement(child, {
              forName: forName,
              id: forName + index,
            })}
          </>
        )
      })}
    </div>
  )
}
