import React from "react"

interface InputFieldT extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  notice?: React.ReactNode[]
  placeholder?: string
  required?: boolean
  errorMsg?: string
}

interface TypeInputT extends InputFieldT {
  type: "text"
}
interface SelectInputT extends InputFieldT {
  type: "select"
  options: string[]
}
interface NumberInputT extends InputFieldT {
  type: "number"
  range?: { start: number; end: number }
}
interface TextareaInputT extends InputFieldT {
  type: "textarea"
}

export const InputField = ({
  label,
  type,
  notice,
  placeholder,
  required,
  errorMsg,
  ...props
}: TypeInputT | SelectInputT | NumberInputT | TextareaInputT) => {
  const coreStyle =
    "tw-form-input tw-w-full tw-py-3 hover:tw-border-highlight hover:tw-ring hover:tw-ring-highlight/20 focus:tw-border-highlight focus:tw-ring-highlight/20 tw-border-brdr tw-rounded-xl"

  let inputEl: JSX.Element

  if (type === "text") {
    inputEl = (
      <input
        required={required}
        type='text'
        placeholder={placeholder}
        className={coreStyle}
      />
    )
  } else if (type === "select" && "options" in props) {
    inputEl = (
      <select required={required} className={coreStyle}>
        {props.options.map(option => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          )
        })}
      </select>
    )
  } else if (type === "number") {
    inputEl = (
      <input
        type='number'
        required={required}
        className={coreStyle}
        placeholder={placeholder}
      />
    )
  } else if (type === "textarea") {
    inputEl = (
      <textarea
        className={coreStyle}
        placeholder={placeholder}
        rows={6}
      ></textarea>
    )
  } else {
    // delete this
    inputEl = <input></input>
  }

  return (
    <div className={`sibling:tw-mt-8 ${props.className || ""}`}>
      <span className='tw-flex tw-justify-between tw-items-baseline'>
        <label className='tw-tex-body-primary tw-text-body-l tw-font-bold tw-mb-2 tw-inline-block'>
          {label}
        </label>
        {!required && (
          <span className='tw-text-body-tertiary tw-font-medium tw-text-body-s'>
            Optional
          </span>
        )}
      </span>

      {inputEl}

      {errorMsg && <p className='tw-text-body-s tw-mt-2'>{errorMsg}</p>}
      <div className='tw-text-body-s tw-font-medium tw-text-body-secondary'>
        {notice?.map((note, i) => (
          <span className='tw-w-full tw-inline-block tw-my-1' key={i}>
            {note}
          </span>
        ))}
      </div>
    </div>
  )
}
