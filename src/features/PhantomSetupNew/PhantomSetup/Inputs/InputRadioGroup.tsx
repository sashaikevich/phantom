import React from "react"
import { InputRadioOption } from "."
interface InputRadioGroupProps extends React.AllHTMLAttributes<HTMLDivElement> {
  forName: string
  options: React.ReactNode[]
}
export const InputRadioGroup = ({
  forName,
  options,
  className: passedStyles,
}: InputRadioGroupProps) => {
  return (
    <div className={` ${passedStyles || ""}`}>
      {options.map((option, index) => {
        return (
          <InputRadioOption key={index} forName={forName} id={forName + index}>
            {option}
          </InputRadioOption>
        )
      })}{" "}
    </div>
  )
}
