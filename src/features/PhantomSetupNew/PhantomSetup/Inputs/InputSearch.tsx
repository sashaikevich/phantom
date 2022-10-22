import React, { useState } from "react"
import { InputText } from "./index"
import { CalloutBox } from "../CalloutBox"
import { Text } from "../Text"

import { useSetupContext } from "../../../../context/setupContext"

interface InputSearchProps {
  mappedName: string
}

export const InputSearch = ({ mappedName }: InputSearchProps) => {
  const { data, updateField } = useSetupContext()
  return (
    <>
      <InputText
        label="Your search"
        mappedName={mappedName}
        helpLink={{ text: "Learn how to run multiple searches" }}
        placeholder="https://www.linkedin.com/search/results/people/?keywords=..."
      />

      {(data[mappedName].value === "sheet" ||
        data[mappedName].value === "spreadsheet") && (
        <CalloutBox className="tw-py-1 tw--mt-3 tw-mb-9">
          <div className="tw-flex tw-items-center ">
            <Text>
              Spreadsheet detected; Please confirm the
              <span className="tw-font-bold tw-not-italic tw-ml-1 ">
                data column
              </span>
              :
            </Text>
            <select
              id="column"
              name="dataColumn"
              value={data["dataColumn"].value}
              onChange={e => {
                updateField("dataColumn", e.target.value)
              }}
              className="tw-block tw-w-36 tw-rounded-md tw-py-1 tw-ml-2 tw-border-redi-placeholder"
            >
              <option value="A">Oct. Li Searches</option>
              <option value="B">Assigned to</option>
              <option value="C">Lead Health</option>
            </select>
          </div>
        </CalloutBox>
      )}
    </>
  )
}
